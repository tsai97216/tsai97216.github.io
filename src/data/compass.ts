/**
 * 站點羅盤資料（本地資料源）。
 * 用途：src/pages/compass.astro → organisms/CompassSection → molecules/CompassTile。
 *
 * 這裡放的是自己實際會用到、且適合公開分享的網站。
 */

/** 單條站點記錄 */
export interface CompassEntry {
	label: string;
	href: string;
	note?: string;
	icon?: string;
	image?: string;
}

/** 分組 */
export interface CompassShelf {
	key: string;
	name: string;
	icon?: string;
	blurb?: string;
	entries: CompassEntry[];
}

export const compassData: CompassShelf[] = [
	{
		key: "dev",
		name: "Development",
		icon: "material-symbols:code-rounded",
		blurb: "平常寫網站與維護專案會用到的地方",
		entries: [
			{
				label: "GitHub",
				href: "https://github.com",
				note: "程式碼與專案管理",
				icon: "fa6-brands:github",
			},
			{
				label: "Astro",
				href: "https://astro.build",
				note: "目前網站使用的框架",
			},
			{
				label: "Cloudflare",
				href: "https://www.cloudflare.com",
				note: "網域、DNS 與網站基礎服務",
			},
			{
				label: "MDN",
				href: "https://developer.mozilla.org",
				note: "Web 技術文件",
				icon: "material-symbols:menu-book-rounded",
			},
		],
	},
	{
		key: "tools",
		name: "Tools",
		icon: "material-symbols:build-outline-rounded",
		blurb: "偶爾會派上用場的小工具",
		entries: [
			{
				label: "Iconify",
				href: "https://icon-sets.iconify.design",
				note: "找圖示",
			},
			{
				label: "Squoosh",
				href: "https://squoosh.app",
				note: "圖片壓縮與轉換",
			},
			{
				label: "Excalidraw",
				href: "https://excalidraw.com",
				note: "快速畫圖與整理想法",
			},
		],
	},
];
