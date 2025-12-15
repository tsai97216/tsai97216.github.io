import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Chi's blog",
	subtitle: "技術宅拯救世界",
	lang: "zh_TW", // 設定為繁體中文
	themeColor: {
		hue: 250, // 主題色調 (250 是紫色系，你可以改成 0-360 之間的數字試試看)
		fixed: false, // 允許訪客自己換顏色
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // 如果之後要加 Banner，把圖放在 src/assets/images/ 裡
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true, // 顯示文章目錄
		depth: 2,
	},
	favicon: [
		// 如果你有網站 icon，可以放在這裡設定
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/tsai97216", // 已改成你的 GitHub 首頁
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // 注意：請將你的大頭貼檔名改為 avatar.png 並放入 src/assets/images/
	name: "Chi Tsai",
	bio: "熱愛折騰 iOS/Android 系統、研究各種開源專案。這裡記錄我的技術筆記與生活。",
	links: [
		// 這裡可以放你的社群連結，不需要的可以整段刪掉
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/tsai97216",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
