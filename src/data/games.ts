/**
 * 游戏展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/gamesConfig.ts 控制。
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
		tags: ["RPG", "Turn-Based", "Sci-Fi"],
		description:
			"目前仍會保留並遊玩的遊戲，日常負擔較低，也是在忙於學測準備時比較容易維持的遊戲之一。",
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
		tags: ["Action RPG", "Urban Fantasy", "Anime"],
		description:
			"目前保留的另一款主要遊戲，和星穹鐵道一起作為平時偶爾遊玩的作品。",
		link: "https://zenless.hoyoverse.com/",
		featured: true,
	},
];

export function getGamesList(): GameItem[] {
	return gamesData;
}
