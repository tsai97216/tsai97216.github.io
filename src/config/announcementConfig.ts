import type { AnnouncementConfig } from "@/types/announcementConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 公告欄配置
 * 元件顯示由 sidebarConfig 統一控制
 */
export const announcementConfig: AnnouncementConfig = withUserConfig(
	"announcement",
	{
		title: "", // 公告標題，填空使用 i18n 字串 Key.announcement
		content: "不知道要寫什麼", // 公告內容
		closable: true, // 允許使用者關閉公告
		link: {
			enable: true, // 啟用連結
			text: "我的 GitHub", // 連結文字
			url: "https://github.com/tsai97216", // 連結 URL
			external: true, // 外部連結
		},
	},
);
