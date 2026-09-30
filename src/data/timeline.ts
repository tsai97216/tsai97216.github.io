/** 時間線頁資料。 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "開始整理自己的網路專案",
		date: "2026",
		category: "project",
		subtitle: "Personal Projects",
		description: "整理個人網站與其他網路專案。",
		tags: ["GitHub", "Projects"],
		icon: "material-symbols:code-rounded",
		featured: true,
	},
];

export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
