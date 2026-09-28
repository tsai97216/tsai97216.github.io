# TODO

這是 Chi 個人網站的開發清單。

> 原則：先確認，再修改。保留原有功能，不因目前沒有內容而刪除功能。

## 目前進度

- [x] 建立 `TODO.md` / `RULES.md`
- [x] 盤點專案架構、頁面、config、data、content、assets
- [x] 確認上游專案為 `LyraVoid/Shirone`
- [x] 建立可追蹤上游更新的維護規則
- [x] 完成網站基本身份個人化
- [x] 完成 Devices 個人資料
- [x] 完成 Projects 個人資料
- [x] 完成 Games 個人資料
- [x] 完成 Skills 個人資料
- [x] 修正個人資料造成的 CI 測試依賴問題
- [x] 精簡 CI，保留必要的 diagnostics、tests、production build
- [x] 建立 Astro → GitHub Pages 部署流程
- [x] CI 通過
- [x] GitHub Pages 部署成功

目前 HEAD：`cab0c463b642bcd0afb6de098c72e0ab2d31a0b4`

## 1. 專案盤點
- [x] 盤點目前主要頁面
- [x] 盤點目前主要功能
- [x] 盤點 config / data / content / assets
- [x] 確認 GitHub Pages / GitHub Actions 部署流程
- [x] 確認 `chi.qzz.io` 網站 URL
- [ ] 完整檢查手機版與桌面版實際畫面

## 2. 個人化基礎設定
- [x] 網站名稱：Chi
- [x] 個人名稱：齊
- [x] 網站描述與首頁文案
- [x] 主色與主題設定
- [x] 語言與時區
- [ ] favicon / logo
- [ ] SEO / Open Graph
- [ ] 確認公開畫面不顯示 `tsai97216` 作為個人名稱

## 3. 首頁
- [x] 保留首頁原有功能
- [x] 設定首頁 Banner 基本文案
- [ ] 實際檢查首頁呈現
- [ ] 規劃首頁個人資訊區塊
- [ ] 規劃無文章時的首頁狀態
- [ ] 保留並測試文章系統

## 4. 個人內容
- [ ] About
- [x] Projects
- [x] Devices
- [x] Games
- [ ] Friends
- [ ] Anime
- [ ] Music
- [ ] Moments
- [ ] Timeline
- [x] Skills
- [ ] Albums
- [ ] Compass
- [ ] 其他原有頁面

> 未完成的資料頁不代表功能應刪除，先保留原有頁面與功能。

## 5. 視覺與資產
- [x] Banner 基礎設定
- [ ] Avatar
- [ ] Logo / favicon
- [x] 保留 Material 3 Expressive 視覺系統
- [x] 保留動畫 / Texture / Wallpaper 功能
- [ ] 手機版調整
- [ ] 桌面版調整

## 6. 測試與部署
- [x] CI diagnostics
- [x] Unit tests
- [x] Production build
- [x] GitHub Pages workflow
- [x] GitHub Pages deployment
- [ ] 檢查主要頁面
- [ ] 檢查手機版
- [ ] 檢查桌面版
- [ ] 實際確認 `https://chi.qzz.io/` 完整呈現
- [ ] 檢查主要內頁與導覽連結

## 7. 上游更新
- [x] 建立上游更新規則
- [ ] 記錄目前上游基準版本
- [ ] 測試一次上游更新
- [ ] 確認上游更新不會覆蓋個人內容
- [ ] 更新後重新執行 build / 檢查 / 部署

## 8. 未來
- [ ] 依實際需求新增內容
- [ ] 依實際需求調整首頁
- [ ] 依實際需求補完個人資料頁
- [ ] 依實際需求新增功能
- [ ] 不預先刪除目前暫時沒有使用的功能
