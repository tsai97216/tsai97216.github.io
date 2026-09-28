/**
 * 番劇收藏資料（本地資料源）。
 * 
 * 目前還沒有整理完成的個人番劇清單，因此保留功能本身，
 * 不放入主題原本的示範收藏，避免把範例內容誤認成個人紀錄。
 */

import type { AnimeIdentity } from "../types/animeConfig.ts";

/** 收藏狀態（Bangumi 領域通行五態） */
export type AnimeStatus =
	| "watching"
	| "completed"
	| "planned"
	| "onHold"
	| "dropped";

export interface AnimeItem {
	title: string;
	cover?: string;
	link?: string;
	status: AnimeStatus;
	rating: number;
	progress?: { watched: number; total: number };
	description?: string;
	year: string;
	studio?: string;
	genres: string[];
	period?: { start: string; end: string };
	identity?: AnimeIdentity;
}

export const animeData: AnimeItem[] = [];
