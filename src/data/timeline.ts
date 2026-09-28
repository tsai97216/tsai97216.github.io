/**
 * 時間線頁資料源（純內容）。
 * 頁面展示與篩選規則由 src/config/timelineConfig.ts 控制。
 *
 * 只放已經發生、而且適合公開在個人網站上的節點。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "開始準備下一次學測",
		date: "2026.09",
		category: "education",
		subtitle: "Study",
		description:
			"把目前的重心放回學測準備，重新整理讀書節奏，也開始更認真記錄每天正在做的事。",
		tags: ["學測", "學習", "生活"],
		icon: "material-symbols:school-rounded",
		featured: true,
	},
	{
		title: "開始第二階段的學測準備",
		date: "2026.07",
		category: "education",
		subtitle: "再戰學測",
		description:
			"開始新的學測準備階段，逐漸建立固定的課程、通勤與複習節奏。",
		tags: ["學測", "準備"],
		icon: "material-symbols:menu-book-rounded",
	},
	{
		title: "高中畢業",
		date: "2026.06",
		category: "education",
		subtitle: "High School",
		description:
			"完成高中階段，正式進入下一段人生。",
		tags: ["畢業", "高中"],
		icon: "material-symbols:school-rounded",
	},
	{
		title: "開始整理自己的網路專案",
		date: "2026",
		category: "project",
		subtitle: "Personal Projects",
		description:
			"陸續維護個人網站、AltStore Sources、Chi Merch 與 Free Games Claimer 等專案，開始把零散的嘗試整理成可以長期維護的東西。",
		tags: ["GitHub", "Astro", "Cloudflare", "Projects"],
		icon: "material-symbols:code-rounded",
	},
];

/** 取得所有時間線資料列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
