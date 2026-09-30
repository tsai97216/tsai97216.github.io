/**
 * 設備展示頁資料。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "iphone-13-pro",
		name: "iPhone 13 Pro",
		brand: "Apple",
		category: "mobile",
		status: "active",
		specs: "256GB",
		description: "日常主要使用的手機。",
		icon: "material-symbols:phone-iphone",
		featured: true,
	},
	{
		id: "ipad-air-5",
		name: "iPad Air 5",
		brand: "Apple",
		category: "mobile",
		status: "active",
		specs: "64GB / 10.9 吋",
		description: "主要用於閱讀與學習。",
		icon: "material-symbols:tablet-mac-rounded",
		featured: true,
	},
	{
		id: "acer-swift-5-sf514-54-58vk",
		name: "Swift 5 SF514-54-58VK",
		brand: "Acer",
		category: "desk",
		status: "active",
		specs: "SF514-54-58VK",
		description: "主要的 Windows 筆電。",
		icon: "material-symbols:laptop-mac-rounded",
		featured: true,
	},
];

export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
