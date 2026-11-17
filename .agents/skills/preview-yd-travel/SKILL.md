---
name: preview-yd-travel
description: Use when the user asks to run, start, preview, or test the yd.travel website locally in this repository.
---

# Local Dev & Preview Workflow for yd.travel

Panduan standar untuk menjalankan dan memvalidasi website **yd.travel** secara lokal di repository ini.

## 1. Persiapan & File Target

Website ini adalah website statis murni yang terdiri dari:
- `index.html`: File entry point utama.
- `yd.travel.html`: File sumber asli tampilan Solace/yd.travel.

## 2. Cara Menjalankan Server Lokal

Gunakan Python HTTP server di port `8000`:

```powershell
# Jalankan server lokal di background
python -m http.server 8000
```

Jika port `8000` sedang terpakai, gunakan port alternatif seperti `8080` atau `3000`:
```powershell
python -m http.server 8080
```

## 3. Membuka di Browser

Buka halaman utama di browser default:
```powershell
Start-Process "http://localhost:8000"
```

Atau buka langsung file secara lokal tanpa server:
```powershell
Start-Process "index.html"
```

## 4. Verifikasi Status Server

Pastikan server memberikan respon HTTP 200:
```powershell
(Invoke-WebRequest -Uri "http://localhost:8000" -UseBasicParsing).StatusCode
```

## 5. Troubleshooting

- **Port in use**: Jika muncul pesan port sudah terpakai, cari proses yang memakai port tersebut:
  ```powershell
  Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
  ```
- **Sync/Cache issue**: Jika perubahan tampilan belum terlihat di browser, lakukan hard refresh dengan menekan `Ctrl + F5` atau `Ctrl + Shift + R`.
