import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "chi-personal-site",
		title: "Chi 個人網站",
		summary: "個人網站。",
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
		summary: "自己的 AltStore Source。",
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
		summary: "收藏與周邊整理網站。",
		category: "web",
		phase: "building",
		technologies: ["GitHub Pages", "Cloudflare", "R2"],
		icon: "material-symbols:shopping-bag-outline-rounded",
		website: "https://merch.chi.qzz.io/",
		repository: "https://github.com/tsai97216/merch",
		year: "2026",
	},
	{
		key: "nav",
		title: "Nav",
		summary: "自己的網站導航。",
		category: "web",
		phase: "building",
		technologies: ["Web", "Cloudflare"],
		icon: "material-symbols:explore-rounded",
		website: "https://nav.chi.qzz.io/",
		year: "2026",
	},
];

export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
