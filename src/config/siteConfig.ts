import type { SiteConfig } from "@/types/config";
import type {
	ResolvedTextureOptions,
	TextureConfig,
} from "@/types/textureConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 站点核心配置：标题 / 语言 / 主题色（HCT 动态配色）/ 横幅 / 目录 / 进度条 / favicon。
 * 类型见 src/types/config.ts。
 */
export const siteConfig: SiteConfig = withUserConfig("site", {
	site: "https://chi.qzz.io/",
	base: "/",
	title: "Chi",
	subtitle: "不知道要寫什麼",
	ogImage: "/logo/OG.webp",
	// 电脑端顶栏标题与导航内容区域："left" 左对齐，"center" 居中。
	topAppBar: {
		contentAlign: "center",
	},
	// 显示设置面板控制：配置各项前端切换项的可见性（默认全部开启）。
	displaySettings: {
		colorStyle: true, // 是否展示配色风格 9 宫格
		colorSpec: true, // 是否展示 Color Spec 调色规范切换
		wallpaperMode: true, // 是否展示页面背景（纯色/横幅）切换
		layoutMode: true, // 是否展示文章列表布局（列表/网格）切换
		reduceMotion: true, // 是否展示减少动效切换
		texture: true, // 是否展示背景纹理选择
	},
	lang: "zh_TW", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	timeZone: "Asia/Taipei",
	themeColor: {
		hue: 250,
		fixed: false,
		style: "tonalSpot",
		spec: "2025",
	},
	wallpaperMode: {
		defaultMode: "banner",
	},
	texture: {
		enable: true,
		defaultPreset: "starlight",
		defaultOpacity: 0.12,
		allowMotion: true,
	},
	banner: {
		src: {
			desktop: ["assets/images/banner/desktop/1.webp"],
			mobile: ["assets/images/banner/mobile/1.webp"],
		},
		position: "center",
		dim: {
			enable: true,
			opacity: 0.24,
		},
		homeText: {
			enable: true,
			title: "Chi",
			subtitle: ["不知道要寫什麼"],
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
				loop: true,
			},
		},
		carousel: {
			enable: true,
			interval: 6000,
			fadeDuration: 1200,
			animation: "ken-burns",
		},
		waves: {
			enable: true,
		},
	},
	imageOptimization: {
		noReferrerDomains: ["*.hdslb.com"],
	},
	toc: {
		enable: true,
		depth: 2,
	},
	progressIndicator: {
		style: "dual",
	},
	favicon: [
		{ src: "/logo/icon.webp" },
	],
});

export function resolveTextureOptions(
	config: boolean | TextureConfig | undefined = siteConfig.texture,
	displaySettingsTexture: boolean = siteConfig.displaySettings?.texture ?? true,
): ResolvedTextureOptions {
	if (config === false || config === undefined) {
		return {
			enable: false,
			defaultPreset: "none",
			defaultOpacity: 0.12,
			allowMotion: false,
		};
	}

	if (config === true) {
		return {
			enable: true,
			defaultPreset: "starlight",
			defaultOpacity: 0.12,
			allowMotion: true,
		};
	}

	const enable = config.enable ?? true;
	const defaultPreset = config.defaultPreset ?? "none";
	const defaultOpacity = config.defaultOpacity ?? 0.12;
	const allowMotion = config.allowMotion ?? true;

	const effectiveEnable =
		enable && (defaultPreset !== "none" || displaySettingsTexture);

	return {
		enable: effectiveEnable,
		defaultPreset,
		defaultOpacity,
		allowMotion,
	};
}

export function getDefaultStyle(): string {
	return siteConfig.themeColor.style;
}

export function getDefaultSpec(): string {
	return siteConfig.themeColor.spec;
}

export function resolveDisplaySettings(): {
	colorStyle: boolean;
	colorSpec: boolean;
	wallpaperMode: boolean;
	layoutMode: boolean;
	reduceMotion: boolean;
	texture: boolean;
} {
	const cfg = siteConfig.displaySettings;
	const textureOpts = resolveTextureOptions(
		siteConfig.texture,
		cfg?.texture ?? true,
	);
	return {
		colorStyle: cfg?.colorStyle ?? true,
		colorSpec: cfg?.colorSpec ?? true,
		wallpaperMode: cfg?.wallpaperMode ?? true,
		layoutMode: cfg?.layoutMode ?? true,
		reduceMotion: cfg?.reduceMotion ?? true,
		texture: textureOpts.enable && (cfg?.texture ?? true),
	};
}
