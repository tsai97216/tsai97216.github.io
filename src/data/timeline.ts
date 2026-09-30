/**
 * 時間線頁資料源（純內容）。
 * 頁面展示與篩選規則由 src/config/timelineConfig.ts 控制。
 *
 * 只放適合公開在個人網站上的節點。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "開始整理自己的網路專案",
		date: "2026",
		category: "project",
		subtitle: "Personal Projects",
		description:
			"陸續整理個人網站與其他網路專案，開始把零散的嘗試整理成可以長期維護的東西。",
		tags: ["GitHub", "Projects"],
		icon: "material-symbols:code-rounded",
		featured: true,
	},
];

/** 取得所有時間線資料列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
