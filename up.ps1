# 自動化上傳腳本
cd C:\Users\Chi\Desktop\tsai97216.github.io
git add .
$msg = Read-Host "請輸入更新訊息 (直接按 Enter 則使用 'update')"
if ($msg -eq "") { $msg = "update" }
git commit -m $msg

write-host "正在嘗試推送到 GitHub..." -ForegroundColor Cyan
git push

if ($LASTEXITCODE -ne 0) {
    write-host "推送失敗！請檢查網路後再試。" -ForegroundColor Red
} else {
    write-host "上傳成功！🎉" -ForegroundColor Green
}
pause