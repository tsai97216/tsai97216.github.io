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
		tags: ["RPG"],
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
		platform: "PC / Mobile",
		year: "2024",
		tags: ["Action RPG"],
		description: "目前保留的另一款主要遊戲。",
		link: "https://zenless.hoyoverse.com/",
		featured: true,
	},
];

export function getGamesList(): GameItem[] {
	return gamesData;
}
