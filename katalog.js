/* =====================================================================
   KATALOG ZYANARA
   ---------------------------------------------------------------------
   Cara menambah barang:
   1. Upload foto ke folder  img/katalog/  di hosting
      (nama file tanpa spasi, contoh: gamis-sage.jpg).
   2. Salin satu baris { ... }, tempel di dalam daftar di bawah,
      lalu ganti isinya. Jangan lupa tanda koma di akhir baris.
   3. Simpan. Website langsung menampilkan barang baru.

   Isian:
   - foto     : lokasi foto, contoh "img/katalog/gamis-sage.jpg".
                Kosongkan ("") kalau foto belum ada.
   - nama     : nama barang.
   - kategori : pilih SALAH SATU persis seperti ini:
                "Pakaian anak", "Pakaian remaja", "Dewasa wanita",
                "Dewasa pria", "Mukena", "Kerudung", "Sprei", "Handuk"
   - harga    : contoh "Rp185.000". Kosongkan ("") untuk "Tanya harga".
   - ket      : keterangan singkat (ukuran, bahan, warna). Boleh kosong.
   - label    : tanda kecil di pojok foto, contoh "Baru", "Terlaris",
                "Stok terbatas". Boleh kosong.
   - contoh   : true = barang contoh (tampil tanda "Contoh").
                Hapus baris-baris contoh setelah barang asli diisi.

   Urutan di website mengikuti urutan di daftar ini.
   ===================================================================== */

window.KATALOG = [
  { foto: "", nama: "Gamis harian", kategori: "Dewasa wanita", harga: "", ket: "Ukuran M–XL, beberapa pilihan warna", label: "Baru", contoh: true },
  { foto: "", nama: "Mukena katun dewasa", kategori: "Mukena", harga: "", ket: "Bahan katun adem, dengan tas", label: "", contoh: true },
  { foto: "", nama: "Pashmina", kategori: "Kerudung", harga: "", ket: "Aneka warna pastel", label: "Terlaris", contoh: true },
  { foto: "", nama: "Baju koko", kategori: "Dewasa pria", harga: "", ket: "Ukuran M–XXL", label: "", contoh: true },
  { foto: "", nama: "Setelan anak", kategori: "Pakaian anak", harga: "", ket: "Usia 2–10 tahun", label: "", contoh: true },
  { foto: "", nama: "Hoodie oversize", kategori: "Pakaian remaja", harga: "", ket: "Bahan fleece tebal", label: "", contoh: true },
  { foto: "", nama: "Sprei microtex", kategori: "Sprei", harga: "", ket: "Ukuran 160 dan 180", label: "", contoh: true },
  { foto: "", nama: "Set handuk hadiah", kategori: "Handuk", harga: "", ket: "Cocok untuk hantaran", label: "Paket hadiah", contoh: true }
];
