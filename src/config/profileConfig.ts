import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主資料：頭像 / 名稱 / 簡介 / 社交連結（側欄 Profile 卡片、頁尾、RSS 作者等使用）。
 * 類型見 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/demo-avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "齊",
	bio: "不知道要寫什麼",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/tsai97216",
		},
	],
});
