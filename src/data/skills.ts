/**
 * 技能頁資料來源（純內容）。
 * 頁面展示與篩選規則由 src/config/skillsConfig.ts 控制。
 */
import type { SkillItem } from "@/types/skillsConfig";

export const skillsData: SkillItem[] = [
	{
		name: "Astro",
		description: "用於個人網站與內容型網站的建置與維護。",
		icon: "simple-icons:astro",
		category: "frontend",
		level: "advanced",
	},
	{
		name: "Svelte",
		description: "用於網站中的互動元件與介面功能。",
		icon: "simple-icons:svelte",
		category: "frontend",
		level: "advanced",
	},
	{
		name: "TypeScript",
		description: "用於網站程式碼、設定與資料結構。",
		icon: "simple-icons:typescript",
		category: "frontend",
		level: "advanced",
	},
	{
		name: "Tailwind CSS",
		description: "用於網站介面與樣式系統。",
		icon: "simple-icons:tailwindcss",
		category: "frontend",
		level: "intermediate",
	},
	{
		name: "GitHub",
		description: "用於原始碼管理、網站部署與個人專案維護。",
		icon: "simple-icons:github",
		category: "tooling",
		level: "advanced",
	},
	{
		name: "Docker",
		description: "用於 VPS 上的服務部署與容器管理。",
		icon: "simple-icons:docker",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Docker Compose",
		description: "用於管理多容器服務與部署設定。",
		icon: "simple-icons:docker",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Ubuntu",
		description: "用於 VPS 環境、服務部署與伺服器管理。",
		icon: "simple-icons:ubuntu",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Cloudflare",
		description: "用於網域、DNS、Pages、R2 與 Tunnel 等網站基礎服務。",
		icon: "simple-icons:cloudflare",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "Python",
		description: "用於腳本、工具與自動化相關工作。",
		icon: "simple-icons:python",
		category: "backend",
		level: "intermediate",
	},
];

export function getSkillsList(): SkillItem[] {
	return skillsData;
}
