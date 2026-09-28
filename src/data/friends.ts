/**
 * 友情链接資料。
 *
 * 目前還沒有整理完成、適合公開列出的個人友鏈，
 * 因此保留資料結構與頁面功能，不放入主題預設的示範站點。
 */
export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

export const friendsData: FriendItem[] = [];

export function getFriendsList(): FriendItem[] {
	return friendsData;
}

export function getShuffledFriendsList(): FriendItem[] {
	return [...friendsData];
}
