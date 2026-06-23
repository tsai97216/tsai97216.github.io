---
title: BiliBiliToolPro + Docker + Cloudflared 完整部署教學（VPS）
published: 2026-06-23
description: 在 Ubuntu VPS 上部署 BiliBiliToolPro（Docker），並整合 Cloudflare Tunnel + Access，與既有服務（如 Twitch Miner）共存。
image: ""
tags: [VPS, Ubuntu, Docker, Bilibili, Cloudflare, Tunnel]
category: 技術
draft: false
---
# BiliBiliToolPro 完整部署教學
本篇為完整 VPS 實戰版本，採用：
- Docker 部署 BiliBiliToolPro
- 127.0.0.1 本地綁定（不對外開放 port）
- Cloudflare Tunnel 對外存取
---
# 架構總覽

Cloudflare Access
↓
Cloudflare Tunnel
↓
127.0.0.1:22330
↓
BiliBiliToolPro (Docker)

---
# 部署原則
- 不使用 0.0.0.0 暴露 port
- 不重建既有 tunnel
- 不影響 Twitch Miner
- 只新增 ingress
- 所有服務統一 127.0.0.1
- Docker 與 Tunnel 解耦
---
# 1. 建立專案目錄
```bash
mkdir -p ~/docker/bili_tool_web
cd ~/docker/bili_tool_web
mkdir -p Logs config

⸻

2. 安裝與確認 Docker

docker -v
docker compose version

若未安裝：

curl -fsSL https://get.docker.com | sh
sudo systemctl enable docker
sudo systemctl start docker

⸻

3. 拉取映像

docker pull ghcr.io/raywangqvq/bili_tool_web

⸻

4. 啟動容器

docker run -d \
  --name bili_tool_web \
  --restart unless-stopped \
  --network bridge \
  -p 127.0.0.1:22330:8080 \
  -e TZ=Asia/Taipei \
  -v ~/docker/bili_tool_web/Logs:/app/Logs \
  -v ~/docker/bili_tool_web/config:/app/config \
  ghcr.io/raywangqvq/bili_tool_web

⸻

5. 檢查容器狀態

docker ps
docker logs -f bili_tool_web

檢查 port：

ss -tlnp | grep 22330

應輸出：

127.0.0.1:22330

⸻

6. Cloudflared Tunnel 設定

編輯設定檔

sudo nano /etc/cloudflared/config.yml

⸻

完整 config.yml

tunnel: twitch-miner
credentials-file: /root/.cloudflared/xxxx.json
ingress:
  - hostname: twitch.tsai97216.dpdns.org
    service: http://127.0.0.1:5800
  - hostname: bili.tsai97216.dpdns.org
    service: http://127.0.0.1:22330
  - service: http_status:404

⸻

7. 重啟 Cloudflared

sudo systemctl restart cloudflared
sudo systemctl status cloudflared

⸻

8. DNS 綁定

cloudflared tunnel route dns twitch-miner bili.tsai97216.dpdns.org

⸻

9. Cloudflare Access 設定

在 Cloudflare Dashboard：

Application：

* Type：Self-hosted
* Domain：bili.tsai97216.dpdns.org

Policy：

* Action：Allow
* Email：tsai97216@gmail.com

⸻

10. 登入系統

https://bili.tsai97216.dpdns.org

預設帳號：

* admin
* BiliTool@2233

首次登入後請立即修改密碼

⸻

11. Docker 管理指令

docker start bili_tool_web
docker stop bili_tool_web
docker restart bili_tool_web
docker rm bili_tool_web
docker logs -f bili_tool_web

⸻

常見問題

502 Bad Gateway

docker logs -f bili_tool_web

⸻

Cloudflared 404

* 檢查 ingress
* 重啟 cloudflared

⸻

無法連線

ss -tlnp | grep 22330

確認是否為：

* 正確：127.0.0.1:22330
* 錯誤：0.0.0.0:22330

⸻

架構重點

* Docker 提供本地服務
* Cloudflare Tunnel 為唯一入口
* Access 負責身份驗證
* VPS 可同時運行多服務

⸻

與 Twitch Miner 共存方式

* 不共享 port
* 不共享 container
* 同一 tunnel 多 ingress
* 完全隔離運行

