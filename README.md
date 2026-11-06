# Website Zyanara Fashion Boutique

Website statis (HTML + CSS + JS, tanpa build). Upload isi folder ini ke hosting.

## Isi folder

| File | Fungsi |
|---|---|
| `index.html` | Halaman utama |
| `img/` | Foto |
| `favicon.svg` | Ikon tab browser |
| `404.html` | Halaman jika alamat tidak ditemukan |
| `robots.txt` | Izin mesin pencari |
| `.nojekyll` | Khusus GitHub Pages, biarkan saja |

## Cara upload

## GitHub Pages (gratis)
1. Buat repository baru di github.com, misalnya `profil-perusahaan`.
2. Klik **Add file → Upload files**, seret **seluruh isi** folder `Deploy` (bukan foldernya), lalu klik **Commit**.
3. Buka **Settings → Pages**, pilih **Branch: main** dan folder **/ (root)**, lalu klik **Save**.
4. Tunggu 1–2 menit. Situs tampil di `https://<username>.github.io/profil-perusahaan/`.

## Hostinger / IDwebhost / hosting cPanel lain
1. Masuk ke **File Manager** (hPanel di Hostinger, cPanel di IDwebhost).
2. Buka folder `public_html`. Hapus `default.php` atau `index.php` bawaan jika ada.
3. Upload `Deploy.zip`, lalu klik **Extract**.
4. Pastikan `index.html` berada langsung di `public_html`, bukan di `public_html/Deploy/`.
5. Aktifkan SSL (HTTPS) gratis dari panel hosting. Tombol "Salin" hanya berfungsi lewat HTTPS.

## Netlify / Vercel / Cloudflare Pages
Seret folder `Deploy` ke halaman deploy (misalnya app.netlify.com/drop).

## Sebelum tayang, ganti data contoh
Cari dan ganti di `index.html` (Ctrl+F): nomor telepon, email, alamat, website, angka statistik, data elemen interaktif (`const CITIES` atau sejenisnya), badge legalitas, dan catatan "contoh fiktif" di footer.
