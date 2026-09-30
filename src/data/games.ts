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
		platform: "PC / Mobile",
		year: "2023",
		tags: ["RPG", "Turn-Based"],
		description: "目前主要遊玩的遊戲之一。",
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
		platform: "PC / Mobile",
		year: "2024",
		tags: ["Action RPG", "Urban Fantasy"],
		description: "目前主要遊玩的另一款遊戲。",
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
		platform: "PC / Mobile",
		year: "2020",
		tags: ["RPG", "Open World"],
		description: "曾經長期遊玩的開放世界 RPG。",
		link: "https://genshin.hoyoverse.com/",
	},
	{
		id: "wuthering-waves",
		name: "鳴潮",
		developer: "KURO GAMES",
		category: "action-rpg",
		status: "completed",
		icon: "material-symbols:graphic-eq-rounded",
		platform: "PC / Mobile",
		year: "2024",
		tags: ["Action RPG", "Open World"],
		description: "曾經遊玩的動作 RPG。",
		link: "https://wutheringwaves.kurogames.com/",
	},
	{
		id: "ananta",
		name: "異環",
		developer: "NetEase Games",
		category: "action-rpg",
		status: "completed",
		icon: "material-symbols:all-inclusive-rounded",
		platform: "PC / Mobile",
		year: "2026",
		tags: ["Action RPG"],
		description: "曾經接觸過的動作 RPG。",
	},
	{
		id: "endfield",
		name: "明日方舟：終末地",
		developer: "Hypergryph",
		category: "rpg",
		status: "completed",
		icon: "material-symbols:precision-manufacturing-rounded",
		platform: "PC / Mobile",
		year: "2026",
		tags: ["RPG", "Strategy"],
		description: "曾經接觸過的 RPG。",
	},
];

export function getGamesList(): GameItem[] {
	return gamesData;
}
