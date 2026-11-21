# 🕌 Ayet Studio — 4K MP4 Video Üretici

JSON yükle → önizle → 9:16 / 16:9 MP4 üret.

## Kurulum (GitHub Pages)

1. Repoyu oluştur → tüm dosyaları yükle
2. Settings → Pages → Deploy from branch → main / root
3. 1-2 dk sonra: https://KULLANICI.github.io/ayet-studio/

## mp4-muxer (Opsiyonel)

Kod önce `mp4-muxer.js` dosyasını arar, yoksa CDN'den çeker.
Offline PWA için:
1. https://cdn.jsdelivr.net/npm/mp4-muxer@5/+esm adresini aç
2. Ctrl+S → mp4-muxer.js olarak kaydet
3. index.html'in yanına koy

## Bölümler Nerede?

`index.html` içinde Ctrl+F ile ara:
- `BÖLÜM C1` ... `BÖLÜM C3` → CSS
- `BÖLÜM H1` → HTML
- `BÖLÜM J1` ... `BÖLÜM J10` → JS

| Değiştirmek istediğin | Ara |
|---|---|
| Renk / font | BÖLÜM C1 |
| Layout | BÖLÜM C2 |
| Butonlar | BÖLÜM C3 |
| Süslemeler | BÖLÜM J6 |
| Video düzeni | BÖLÜM J7 |
| Animasyon zamanları | BÖLÜM J7 → ZAMAN |
| 4K kodlama | BÖLÜM J8 |
| Ayet takip | BÖLÜM J3 |
| Sure listesi | BÖLÜM J2 |