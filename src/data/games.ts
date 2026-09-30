/**
 * 遊戲展示頁資料。
 */
import type { GameItem } from "@/types/gamesConfig";

export const gamesData: GameItem[] = [
	{
		id: "honkai-star-rail",
		name: "崩壞：星穹鐵道",
		developer: "HoYoverse",
		category: "rpg",
		status: "playing",
		icon: "material-symbols:auto-awesome-rounded",
		description: "目前會保留並遊玩的遊戲。",
		link: "https://hsr.hoyoverse.com/",
		featured: true,
	},
	{
		id: "zenless-zone-zero",
		name: "絕區零",
		developer: "HoYoverse",
		category: "action-rpg",
		status: "playing",
		icon: "material-symbols:bolt-rounded",
		description: "目前保留的另一款主要遊戲。",
		link: "https://zenless.hoyoverse.com/",
		featured: true,
	},
	{
		id: "genshin-impact",
		name: "原神",
		developer: "HoYoverse",
		category: "rpg",
		status: "completed",
		icon: "material-symbols:landscape-rounded",
		description: "曾經遊玩過的遊戲。",
		link: "https://genshin.hoyoverse.com/",
	},
	{
		id: "wuthering-waves",
		name: "鳴潮",
		developer: "KURO GAMES",
		category: "action-rpg",
		status: "completed",
		icon: "material-symbols:graphic-eq-rounded",
		description: "曾經遊玩過的遊戲。",
		link: "https://wutheringwaves.kurogames.com/",
	},
	{
		id: "ananta",
		name: "異環",
		developer: "NetEase Games",
		category: "action-rpg",
		status: "completed",
		icon: "material-symbols:all-inclusive-rounded",
		description: "曾經遊玩過的遊戲。",
	},
	{
		id: "endfield",
		name: "明日方舟：終末地",
		developer: "Hypergryph",
		category: "rpg",
		status: "completed",
		icon: "material-symbols:precision-manufacturing-rounded",
		description: "曾經遊玩過的遊戲。",
	},
];

export function getGamesList(): GameItem[] {
	return gamesData;
}
