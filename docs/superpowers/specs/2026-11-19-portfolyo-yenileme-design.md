# Portfolyo Yenileme — Tasarım

## Amaç ve neden
CV'de link olarak duran kişisel site (şu an `myportfolyo-w5za.vercel.app`) güncel değil: eski CRA altyapısı, eski projeler, yüzdelik yetenek çubukları, çalışmayan form, açık telefon numarası. Hedef: CV ile tutarlı, **genel bir yazılımcı portfolyosu**; siteyi açan işveren/İK Ömer'in kim olduğunu, ne yaptığını ve nasıl ulaşacağını 1 dakikada görsün.

## Hedefler
- CV'deki içerikle birebir tutarlı tek sayfalık site (Türkçe).
- Mevcut Vercel projesini güncellemek (aynı repo, aynı URL).
- Her aşama ayrı push; canlı site yarım halleri göstermez.

## Hedef dışı
- Çoklu dil (İngilizce sonra eklenebilir; içerik ayrı dosyada tutulur).
- Blog, CMS, backend, iletişim formu.

## Anti-hedefler
- Telefon numarasının sitede açıkça görünmesi.
- Yarım sürümün canlıya çıkması.
- Yetenekleri yüzdeyle puanlamak.

## Kısıtlar
- Repo: `omtiginer045/myportfolyo`, Vercel `main` dalını yayımlıyor.
- Vercel proje ayarı CRA olabilir → `vercel.json` ile Vite / `dist` zorlanır.

## Yaklaşımlar
1. **Vite + React ile baştan (seçilen)** — güncel, hafif, Ömer React biliyor.
2. Next.js — SEO avantajı küçük, tek sayfa için fazla karmaşık.
3. CRA'yı güncellemek — en hızlı ama CRA bakımsız, eski bağımlılıklar kalır.

Ömer 1. seçeneği seçti.

## Ömer'in kararları
- Genel yazılımcı portfolyosu (siber güvenlik/AI'ya özel değil).
- Mevcut Vercel sitesi güncellenecek.
- Vite + React.
- Bölümler ve eski projelerin çıkarılması onaylandı; CV PDF'i sitede indirilebilir olacak.
- İki staj da Balıkesir Üniversitesi Bilgi İşlem Daire Başkanlığı'nda.

## Benim kararlarım (düzeltilebilir)
- İş `redesign` dalında; her aşama Vercel önizleme linkiyle kontrol edilir, en sonda `main`'e birleştirilir.
- Bölümler: Navbar · Giriş · Hakkımda · Yetenekler · Projeler · Deneyim & Eğitim · Sertifikalar/Topluluk/Diller · İletişim · Footer.
- Tüm içerik `src/data/*.js` dosyalarında; bileşenler sadece gösterir.
- Koyu, sade tema; düz CSS (bileşen başına CSS dosyası + global değişkenler); styled-components yok.
- Projeler CV'deki liste: Bitirme (AI tabanlı IDS), TUSAŞ LIFT UP, Otomatik Altyazı, AppJam, GNGJam, GameJam, Teknofest Roket, Bütçe Optimizasyonu. CV'de olmayan repolar (ai_agent_orcheastration, personal-ai-api, bmm4111-ml-cardekho) şimdilik dışarıda.
- TÜBİTAK 2209-A adı CV'de geçmediği için sitede de geçmiyor.
- İletişim: e-posta (mailto), LinkedIn (`linkedin.com/in/omercoskun45`), GitHub. X ve Facebook kaldırılıyor. Konum: Balıkesir (CV ile aynı).
- Eski proje görselleri silinir; `ben.jpg` kalır.

## Builder'a kalanlar
Renk tonları, tipografi, animasyon detayları, kart düzeni — sade ve okunur olduğu sürece.
