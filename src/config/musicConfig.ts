import { musicTracks } from "../data/music.ts";
import type {
	MusicConfig,
	MusicProvider,
	PlaybackMode,
	TrackDescriptor,
} from "../types/musicConfig.ts";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 側欄音樂配置。
 *
 * 目前使用本地曲目，不依賴遠端音樂平台或第三方歌單 API。
 */
export const musicConfig: MusicConfig = withUserConfig("music", {
	enable: true,
	provider: "local",
	defaultVolume: 0.7,
	defaultMode: "sequence",
});

export interface ResolvedMusicOptions {
	readonly provider: MusicProvider;
	readonly playlist: readonly TrackDescriptor[];
	readonly meting?: MusicConfig["meting"];
	readonly defaultVolume: number;
	readonly defaultMode: PlaybackMode;
}

const ABSOLUTE_MEDIA_SOURCE = /^(?:https?:)?\/\//i;
const UNSAFE_SCHEME = /^[a-z][a-z\d+.-]*:/i;

function normalizeMediaSource(value: string): string | null {
	const source = value.trim();
	if (!source) return null;
	if (ABSOLUTE_MEDIA_SOURCE.test(source) || source.startsWith("/")) {
		return source;
	}
	if (UNSAFE_SCHEME.test(source)) return null;
	return `/${source.replace(/^\.\//, "")}`;
}

function normalizeTrack(
	track: TrackDescriptor,
	usedIds: Set<string>,
): TrackDescriptor | null {
	const id = track.id.trim();
	const title = track.title.trim();
	const source = normalizeMediaSource(track.source);
	if (!id || !title || !source || usedIds.has(id)) return null;

	usedIds.add(id);
	const artist = track.artist?.trim() || undefined;
	const cover = track.cover
		? (normalizeMediaSource(track.cover) ?? undefined)
		: undefined;
	const duration =
		typeof track.duration === "number" &&
		Number.isFinite(track.duration) &&
		track.duration > 0
			? track.duration
			: undefined;

	return Object.freeze({ id, title, source, artist, cover, duration });
}

export function clampMusicVolume(value: number, fallback = 0.7): number {
	if (!Number.isFinite(value)) return fallback;
	return Math.min(1, Math.max(0, value));
}

export function resolveMusicOptions(
	config: MusicConfig,
): ResolvedMusicOptions | null {
	if (!config.enable) return null;

	const provider: MusicProvider = config.provider ?? "local";

	if (provider === "meting") {
		const id = config.meting?.id?.trim();
		if (!id) return null;
		return Object.freeze({
			provider: "meting",
			playlist: Object.freeze([]),
			meting: config.meting,
			defaultVolume: clampMusicVolume(config.defaultVolume),
			defaultMode: config.defaultMode,
		});
	}

	let rawTracks: readonly TrackDescriptor[] = [];
	if (provider === "local" || provider === "mixed") {
		rawTracks = config.tracks ?? musicTracks;
	} else if (provider === "custom") {
		rawTracks = config.tracks ?? [];
	}

	const usedIds = new Set<string>();
	const playlist = rawTracks
		.map((track) => normalizeTrack(track, usedIds))
		.filter((track): track is TrackDescriptor => track !== null);

	if (provider === "mixed") {
		const metingId = config.meting?.id?.trim();
		if (playlist.length === 0 && !metingId) return null;
		return Object.freeze({
			provider: "mixed",
			playlist: Object.freeze(playlist),
			meting: config.meting,
			defaultVolume: clampMusicVolume(config.defaultVolume),
			defaultMode: config.defaultMode,
		});
	}

	if (playlist.length === 0) return null;

	return Object.freeze({
		provider,
		playlist: Object.freeze(playlist),
		defaultVolume: clampMusicVolume(config.defaultVolume),
		defaultMode: config.defaultMode,
	});
}
