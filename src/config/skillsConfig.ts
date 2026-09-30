import type { SkillsConfig } from "@/types/skillsConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 技能頁行為與展示配置。
 */
export const skillsConfig: SkillsConfig = withUserConfig("skills", {
	enable: false,
	title: "$t:skills",
	description: "$t:skillsBanner",
	categories: [
		{
			key: "frontend",
			label: "Frontend",
			icon: "material-symbols:web-rounded",
		},
		{
			key: "backend",
			label: "Backend",
			icon: "material-symbols:dns-rounded",
		},
		{
			key: "tooling",
			label: "Tooling",
			icon: "material-symbols:construction-rounded",
		},
	],
});
