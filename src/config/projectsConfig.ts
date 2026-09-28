import type { ProjectsConfig } from "@/types/projectsConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const projectsConfig: ProjectsConfig = withUserConfig("projects", {
	enable: true,
	title: "$t:projects",
	description: "$t:projectsBanner",
	categories: [
		{
			key: "web",
			label: "Web",
			icon: "material-symbols:web-rounded",
		},
		{
			key: "infrastructure",
			label: "Infrastructure",
			icon: "material-symbols:cloud-rounded",
		},
	],
});
