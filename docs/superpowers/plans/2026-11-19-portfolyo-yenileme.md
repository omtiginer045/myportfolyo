# Portfolyo Yenileme — Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** CRA tabanlı eski portfolyoyu, CV ile tutarlı Vite + React tek sayfalık siteyle değiştirmek ve mevcut Vercel projesinden yayımlamak.

**Architecture:** İçerik `src/data/*.js` modüllerinde düz JS nesneleri; her bölüm kendi bileşeni ve CSS dosyasıyla bu verileri gösterir. `App.jsx` bölümleri sırayla dizer. Test: Vitest + Testing Library (jsdom).

**Tech Stack:** Vite 6, React 19, Vitest, @testing-library/react, jsdom. Ek UI kütüphanesi yok (ikonlar satır içi SVG).

**Spec:** `docs/superpowers/specs/2026-11-19-portfolyo-yenileme-design.md`

## Global Constraints
- Dil: Türkçe; `<html lang="tr">`.
- Sitede telefon numarası yok (`537` / telefon numarası hiçbir yerde görünmez — CV PDF hariç).
- Dış linkler: `target="_blank" rel="noopener noreferrer"`.
- E-posta: `ocoskun684@gmail.com`; LinkedIn: `https://www.linkedin.com/in/omercoskun45`; GitHub: `https://github.com/omtiginer045`.
- CV dosyası: `public/Omer-Coskun-CV.pdf`, link `/Omer-Coskun-CV.pdf` + `download`.
- `vercel.json`: `{"framework":"vite","buildCommand":"npm run build","outputDirectory":"dist"}`.
- Her görev sonunda `npm test` ve `npm run build` geçer; commit + `redesign` dalına push.

## Review Focus
1. Mobil menü: bir linke tıklanınca menü kapanmalı (Task 2 testi).
2. Repo linki olmayan proje kartında kırık/boş link olmamalı (Task 4 testi).
3. 360px genişlikte uzun proje adları/etiketler taşmamalı (Task 6 görsel kontrol).
4. `ben.jpg` ve CV PDF'i Vercel build'inde doğru yoldan yüklenmeli (Task 6 önizleme kontrolü).
5. Vercel CRA preset'i Vite build'ini bozmamalı (Task 1 `vercel.json`, Task 6 önizleme deploy'u).

---

### Task 1: Vite iskeleti

**Files:**
- Delete: `src/*` (CRA dosyaları), `src/components/*`, `src/assets/{notDefteri,turkiyebolge,roket,soruBankasi}.jpg`, `public/{logo192.png,logo512.png,manifest.json}`, `package-lock.json`
- Keep: `src/assets/ben.jpg`, `public/favicon.ico`, `public/robots.txt`
- Create: `package.json`, `vite.config.js`, `vercel.json`, `index.html` (kökte), `src/main.jsx`, `src/App.jsx`, `src/styles/global.css`, `src/test/setup.js`, `src/App.test.jsx`, `public/Omer-Coskun-CV.pdf`
- Modify: `.gitignore` (`dist`, `node_modules`)

**Interfaces:** Produces `App` (default export), `global.css` CSS değişkenleri: `--bg`, `--surface`, `--text`, `--muted`, `--accent`, `--border`, `--radius`, `--max-w`.

- [ ] Step 1: `App.test.jsx` → `renders without crashing`: `render(<App/>)`; `screen.getByRole('main')` var.
- [ ] Step 2: `npm test` → FAIL (App yok).
- [ ] Step 3: İskeleti kur; `App` şimdilik `<main />` döndürür. vitest config `vite.config.js` içinde (`environment: 'jsdom'`, `setupFiles`).
- [ ] Step 4: `npm test` PASS, `npm run build` → `dist/` oluşur.
- [ ] Step 5: Commit `chore: CRA'dan Vite + React'e geçiş` + push.

### Task 2: Tema, Navbar, Hero, Footer

**Files:** Create `src/data/profile.js`, `src/components/{Navbar,Hero,Footer,Icons}.jsx` + `.css`, `src/components/Hero.test.jsx`, `src/components/Navbar.test.jsx`; Modify `src/App.jsx`.

**Interfaces:** Produces `profile = { name, title, tagline, location, email, cvUrl, links: [{ label, href, icon }] }`; `Icons.jsx` exports `GithubIcon, LinkedinIcon, MailIcon, ExternalIcon, MenuIcon`. Navbar `sections = [{ id, label }]` (about, skills, projects, experience, contact).

- [ ] Step 1: Testler:
  - Hero: `heading level 1` = "Ömer Coşkun"; GitHub/LinkedIn linklerinin `href`'i global sabitlerle eşit ve `rel` "noopener noreferrer"; e-posta linki `mailto:ocoskun684@gmail.com`; "CV'yi İndir" linki `href="/Omer-Coskun-CV.pdf"` ve `download` özniteliği var.
  - Navbar: menü butonu `aria-expanded="false"` → tıkla → `"true"`; bir bölüm linkine tıkla → tekrar `"false"`.
- [ ] Step 2: FAIL.
- [ ] Step 3: Uygula. Hero unvanı: "Bilgisayar Mühendisliği 4. Sınıf Öğrencisi · Yazılım Geliştirici".
- [ ] Step 4: PASS + build.
- [ ] Step 5: Commit `feat: navbar, giriş ve footer` + push.

### Task 3: Hakkımda ve Yetenekler

**Files:** Create `src/data/skills.js`, `src/components/{About,Skills}.jsx` + `.css`, `src/components/Skills.test.jsx`.

**Interfaces:** `skills = [{ category, items: string[] }]` — CV'deki 6 kategori ve öğeleri birebir.

- [ ] Step 1: Test: 6 kategori başlığı görünür; "Docker", "React", "RAG" etiketleri görünür; bölüm metninde `%` yok.
- [ ] Step 2: FAIL. Step 3: Uygula (About: `ben.jpg` + CV'den derlenmiş 2 paragraf). Step 4: PASS + build. Step 5: Commit `feat: hakkımda ve yetenekler` + push.

### Task 4: Projeler

**Files:** Create `src/data/projects.js`, `src/components/{Projects,ProjectCard}.jsx` + `.css`, `src/components/Projects.test.jsx`.

**Interfaces:** `projects = [{ title, context, description, tags: string[], status?: 'Devam ediyor', highlight?: string, repo?: string }]` — sıra: Bitirme (AI IDS), TUSAŞ LIFT UP, Otomatik Altyazı (`auto-subtitle-generator`), AppJam, GNGJam (highlight "2.lik"), GameJam, Teknofest Roket (`Roket_algoritma`), Bütçe Optimizasyonu.

- [ ] Step 1: Testler: 8 kart (`role="article"`); "Devam ediyor" rozeti tam 2 kez; `repo` olmayan kartta link yok, `repo` olan kartta `https://github.com/omtiginer045/<repo>` linki var.
- [ ] Step 2: FAIL. Step 3: Uygula. Step 4: PASS + build. Step 5: Commit `feat: projeler bölümü` + push.

### Task 5: Deneyim & Eğitim, Sertifikalar/Topluluk/Diller, İletişim

**Files:** Create `src/data/experience.js`, `src/data/extras.js`, `src/components/{Experience,Extras,Contact}.jsx` + `.css`, `src/App.test.jsx` (genişlet).

**Interfaces:** `experience = [{ type: 'İş'|'Eğitim', title, org, period, location?, bullets?: string[] }]`; `extras = { certificates: [{ name, issuer }], communities: [{ name, role }], languages: [{ name, level }] }`.

- [ ] Step 1: Testler (tam `App` üzerinde): "Balıkesir Üniversitesi Bilgi İşlem Daire Başkanlığı" görünür; "Temmuz 2026 – Eylül 2026" görünür; `document.body.textContent` içinde `537` yok; `form` elementi yok; tüm `a[target="_blank"]` için `rel="noopener noreferrer"`.
- [ ] Step 2: FAIL. Step 3: Uygula. Step 4: PASS + build. Step 5: Commit `feat: deneyim, sertifikalar ve iletişim` + push.

### Task 6: Mobil uyum, SEO, son kontrol

**Files:** Modify `index.html` (title "Ömer Coşkun · Yazılım Geliştirici", meta description, Open Graph), CSS dosyaları (≤ 768px ve 360px kırılımları).

- [ ] Step 1: `npm test` + `npm run build` PASS.
- [ ] Step 2: Vercel önizleme linkini masaüstü ve 360px genişlikte aç: taşma yok, fotoğraf ve CV indirilebilir.
- [ ] Step 3: Commit `feat: mobil uyum ve SEO` + push.
- [ ] Step 4: Ömer onaylayınca `redesign` → `main` birleştir ve push; canlı URL'yi kontrol et.
