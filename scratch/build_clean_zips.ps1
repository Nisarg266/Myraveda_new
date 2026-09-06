$src = "c:\Users\panch\Downloads\theme_export__myravedaluxury-com-updated-copy-of-horizon__06SEP2026-0506am"
$zip1 = "c:\Users\panch\Downloads\myraveda-horizon-luxury-theme.zip"
$zip2 = "c:\Users\panch\Downloads\theme_export__myravedaluxury-com-updated-copy-of-horizon__06SEP2026-0506am.zip"

$folders = @("assets", "blocks", "config", "layout", "locales", "sections", "snippets", "templates")
$items = @()
foreach ($f in $folders) {
    $p = Join-Path $src $f
    if (Test-Path $p) {
        $items += $p
    }
}

if (Test-Path $zip1) { Remove-Item $zip1 -Force }
if (Test-Path $zip2) { Remove-Item $zip2 -Force }

Compress-Archive -Path $items -DestinationPath $zip1 -CompressionLevel Optimal
Copy-Item $zip1 $zip2 -Force

Write-Host "ZIP 1 size: $((Get-Item $zip1).Length) bytes"
Write-Host "ZIP 2 size: $((Get-Item $zip2).Length) bytes"
Write-Host "Clean ZIP packages built successfully!"
