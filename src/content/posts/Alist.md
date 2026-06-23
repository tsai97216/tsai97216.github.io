---
title: AList + Cloudflare Tunnel 完整部署教學（Ubuntu VPS）
published: 2026-06-23
description: 從全新 Ubuntu VPS 安裝 AList，並透過 systemd 與 Cloudflare Tunnel 對外穩定公開。
image: ""
tags: [VPS, Ubuntu, AList, Cloudflare, systemd]
category: 技術
draft: false
---
# AList + Cloudflare Tunnel 完整部署教學
使用 Ubuntu VPS ，部署 AList 並使用 systemd 管理，最後透過 Cloudflare Tunnel 對外提供穩定存取。
---
1. 系統更新與基礎工具
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl wget tar unzip
```
⸻

2. 建立 AList 目錄
```
sudo mkdir -p /opt/alist
sudo mkdir -p /opt/alist/data
cd /opt/alist
```
固定規則：

/opt/alist/data 為唯一資料目錄

⸻

3. 下載 AList
```
cd /opt/alist
curl -L https://github.com/AlistGo/alist/releases/latest/download/alist-linux-amd64.tar.gz -o alist.tar.gz
tar -zxvf alist.tar.gz
chmod +x alist
```
⸻

4. 初始化 AList
```
./alist server --data /opt/alist/data
```
確認產生：
```
* config.json
* data.db
```
完成後 Ctrl + C 停止

⸻

5. 建立 systemd 服務
```
sudo tee /etc/systemd/system/alist.service > /dev/null <<EOF
[Unit]
Description=AList Service
After=network.target
[Service]
Type=simple
WorkingDirectory=/opt/alist
ExecStart=/opt/alist/alist server --data /opt/alist/data
Restart=always
RestartSec=5
[Install]
WantedBy=multi-user.target
EOF
```
⸻

6. 啟動 AList
```
sudo systemctl daemon-reload
sudo systemctl enable alist
sudo systemctl start alist
```
⸻

7. 測試本機
```
curl http://127.0.0.1:5244
```
成功會回傳 HTML

⸻

8. 取得管理員帳號
```
/opt/alist/alist admin
```
會顯示：
```
admin + 初始密碼（只出現一次）
```
⸻

9. 安裝 Cloudflared
```
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb
```
⸻

10. 登入 Cloudflare
```
cloudflared tunnel login
```
⸻

11. 建立 Tunnel
```
cloudflared tunnel create alist-tunnel
```
⸻

12. 設定 Tunnel
```
sudo mkdir -p /etc/cloudflared
sudo nano /etc/cloudflared/config.yml
```
內容如下（請修改 domain 與 json 路徑）：
```
tunnel: alist-tunnel
credentials-file: /root/.cloudflared/XXXX.json
ingress:
  - hostname: alist.example.com
    service: http://127.0.0.1:5244
  - service: http_status:404
```
⸻

13. 綁定 DNS
```
cloudflared tunnel route dns alist-tunnel alist.example.com
```
⸻

14. 啟動 Tunnel
```
sudo systemctl enable cloudflared
sudo systemctl restart cloudflared
```
⸻

15. 最終測試
```
curl http://127.0.0.1:5244
https://alist.example.com
```
⸻

16. 常見問題

port 被佔用
```
bind: address already in use
```
表示有 Docker 或舊 AList 在跑


⸻

