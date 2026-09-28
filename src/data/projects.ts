import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "chi-personal-site",
		title: "Chi 個人網站",
		summary:
			"正在打造的個人網站，整理自己的作品、設備、遊戲、時間軸與日常紀錄。",
		category: "web",
		phase: "building",
		technologies: ["Astro", "Svelte", "TypeScript", "Tailwind CSS"],
		icon: "material-symbols:web-rounded",
		featured: true,
		website: "https://chi.qzz.io/",
		repository: "https://github.com/tsai97216/tsai97216.github.io",
		year: "2026",
	},
	{
		key: "altstore-sources",
		title: "AltStore Sources",
		summary:
			"自己維護的 AltStore Source，整理與提供個人使用的 App 資源資訊。",
		category: "web",
		phase: "building",
		technologies: ["JSON", "Cloudflare Workers", "GitHub"],
		icon: "material-symbols:apps-rounded",
		website: "https://altstore.chi.qzz.io/",
		repository: "https://github.com/tsai97216/Altstore-Sources",
		year: "2026",
	},
	{
		key: "chi-merch",
		title: "Chi Merch",
		summary:
			"整理個人收藏與周邊資訊的網站，包含圖片、商品資料與相關資訊。",
		category: "web",
		phase: "building",
		technologies: ["GitHub Pages", "Cloudflare", "R2"],
		icon: "material-symbols:shopping-bag-outline-rounded",
		website: "https://merch.chi.qzz.io/",
		repository: "https://github.com/tsai97216/merch",
		year: "2026",
	},
	{
		key: "free-games-claimer",
		title: "Free Games Claimer",
		summary:
			"部署在 VPS 上的免費遊戲領取自動化服務，集中管理與執行遊戲平台任務。",
		category: "infrastructure",
		phase: "building",
		technologies: ["Docker", "Docker Compose", "Ubuntu", "Cloudflare Tunnel"],
		icon: "material-symbols:cloud-sync-rounded",
		featured: true,
		year: "2026",
	},
];

export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
