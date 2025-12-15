import type {
  ExpressiveCodeConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "Chi's blog",
  subtitle: "技術宅拯救世界",
  lang: "zh_TW", // 設定為繁體中文
  themeColor: {
    hue: 250, // 主題色調
    fixed: false, // 允許訪客自己換顏色
  },
  banner: {
    enable: true,
    src: "assets/images/banner.png", // 確保這張圖有在 src/assets/images/ 裡面
    position: "center",
    credit: {
      enable: false,
      text: "",
      url: "",
    },
  },
  toc: {
    enable: true, // 顯示文章目錄
    depth: 2,
  },
  favicon: [
    {
      src: '/favicon.png',    // 確保這張圖有在 public/ 裡面
    }
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: "工具箱",
      url: "https://tsai97216.github.io/tools/", 
      external: true,
    },
    {
      name: "GitHub",
      url: "https://github.com/tsai97216",
      external: true,
    },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.png", 
  name: "Chi Tsai",
  bio: "熱愛折騰 iOS/Android 系統、研究各種開源專案。這裡記錄我的技術筆記與生活。",
  links: [
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/tsai97216",
    },
    {
      name: "Email",
      icon: "fa6-solid:envelope",
      url: "mailto:tsai97216@gmail.com",
    },
    {
      name: "Discord",
      icon: "fa6-brands:discord",
      url: "https://discord.com/users/850162975604080670",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  theme: "github-dark",
};