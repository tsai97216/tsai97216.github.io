/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "iphone-13-pro",
		name: "iPhone 13 Pro",
		brand: "Apple",
		category: "mobile",
		status: "active",
		specs: "256GB / ProMotion",
		description:
			"主要使用的手机，日常通讯、学习与各种移动工作都以它为中心。",
		icon: "material-symbols:phone-iphone",
		featured: true,
	},
	{
		id: "ipad-air-5",
		name: "iPad Air 5",
		brand: "Apple",
		category: "mobile",
		status: "active",
		specs: "64GB / 10.9-inch",
		description:
			"平板设备，主要用于阅读、学习，以及需要较大屏幕的移动使用场景。",
		icon: "material-symbols:tablet-mac-rounded",
		featured: true,
	},
	{
		id: "acer-swift-5-sf514-54-58vk",
		name: "Swift 5 SF514-54-58VK",
		brand: "Acer",
		category: "desk",
		status: "active",
		specs: "SF514-54-58VK / 无独立显卡",
		description:
			"主要的 Windows 笔记本，用于电脑端工作、网站开发与服务器管理。",
		icon: "material-symbols:laptop-mac-rounded",
		featured: true,
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
