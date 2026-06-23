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
本篇適用「全新 Ubuntu VPS」，從零開始部署 AList，並使用 systemd 管理服務，最後透過 Cloudflare Tunnel 對外公開。
---
# ⚠️ 部署前檢查（非常重要）
如果不是全新 VPS，請先確認沒有舊服務：
```bash
docker ps
systemctl status alist
ss -tulnp | grep 5244

若有舊 AList，請先移除，避免衝突。

⸻

1. 系統更新與基礎工具

sudo apt update && sudo apt upgrade -y
sudo apt install -y curl wget tar unzip

⸻

2. 建立 AList 目錄

sudo mkdir -p /opt/alist
sudo mkdir -p /opt/alist/data
cd /opt/alist

固定資料規則：

* /opt/alist/data = 唯一資料目錄（不可改）

⸻

3. 下載 AList

cd /opt/alist
curl -L https://github.com/AlistGo/alist/releases/latest/download/alist-linux-amd64.tar.gz -o alist.tar.gz
tar -zxvf alist.tar.gz
chmod +x alist

⸻

4. 初始化 AList（第一次啟動）

./alist server --data /opt/alist/data

看到以下檔案生成才算成功：

* config.json
* data.db

完成後按 Ctrl + C 停止

⸻

5. 建立 systemd 服務

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

⸻

6. 啟動 AList

sudo systemctl daemon-reload
sudo systemctl enable alist
sudo systemctl start alist

⸻

7. 測試服務是否正常

curl http://127.0.0.1:5244

看到 HTML 回應 = 成功

⸻

8. 取得管理員帳號

/opt/alist/alist admin

⚠️ 密碼只會顯示一次，務必保存

⸻

9. 安裝 Cloudflared

wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb

⸻

10. 登入 Cloudflare

cloudflared tunnel login

⸻

11. 建立 Tunnel

cloudflared tunnel create alist-tunnel

⸻

12. 設定 Tunnel

sudo mkdir -p /etc/cloudflared
sudo nano /etc/cloudflared/config.yml

內容：

tunnel: alist-tunnel
credentials-file: /root/.cloudflared/XXXX.json
ingress:
  - hostname: alist.example.com
    service: http://127.0.0.1:5244
  - service: http_status:404

⚠️ 注意：

* credentials-file 路徑要以你實際 tunnel 產生為準

⸻

13. 綁定 DNS

cloudflared tunnel route dns alist-tunnel alist.example.com

⸻

14. 啟動 Cloudflared

sudo systemctl enable cloudflared
sudo systemctl restart cloudflared

⸻

15. 最終測試

curl http://127.0.0.1:5244

然後開瀏覽器：

https://alist.example.com

⸻

16. 常見問題

❌ port 被佔用

bind: address already in use

代表：

* Docker 還在跑 AList
* 或舊 systemd AList 未關閉

解法：

docker stop alist
docker rm alist

或：

sudo systemctl stop alist

⸻

❌ systemd 起不來

檢查：

ls -lah /opt/alist

確認這個檔案存在：

/opt/alist/alist

⸻

❌ 登入失敗 / 密碼錯誤

原因通常是：

* data.db 被換掉
* 使用不同 data 目錄

固定原則：

只認 /opt/alist/data

⸻

結論

只要遵守三條規則就不會炸：

1. 不混 Docker
2. data 永遠固定 /opt/alist/data
3. systemd 唯一管理 AList

