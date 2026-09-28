import type { GamesConfig } from "@/types/gamesConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 遊戲展示頁行為與展示配置。
 */
export const gamesConfig: GamesConfig = withUserConfig("games", {
	enable: true,
	title: "$t:games",
	description: "$t:gamesBanner",
	categories: [
		{
			key: "rpg",
			label: "RPG",
			icon: "material-symbols:shield-outline-rounded",
			description: "角色扮演與劇情向遊戲",
		},
		{
			key: "action-rpg",
			label: "Action RPG",
			icon: "material-symbols:swords-outline-rounded",
			description: "動作與角色扮演",
		},
	],
	// disabledIds: [],
});
