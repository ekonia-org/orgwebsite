# Ekonia landing page

Statikus, egyetlen `index.html` fájlból álló bemutatóoldal (Tailwind CSS a CDN-ről töltve be, build lépés nélkül). A `docs/ekonia-copywriting.md` a szövegezés és a design-rendszer dokumentációja.

## Helyi megtekintés

Nincs szükség build lépésre. Nyisd meg az `index.html`-t közvetlenül böngészőben, vagy indíts egy egyszerű lokális szervert:

```bash
npx serve .
```

## Pusholás GitHubra

```bash
git init
git add .
git commit -m "Ekonia landing page"
git branch -M main
git remote add origin https://github.com/<felhasznalonev>/<repo-nev>.git
git push -u origin main
```

## Deploy Vercelre

**Vercel dashboard-on keresztül (ajánlott):**
1. Jelentkezz be a [vercel.com](https://vercel.com) oldalon, majd "Add New… → Project".
2. Importáld a fenti GitHub repót.
3. Framework Preset: **Other** (nincs build lépés, a Vercel statikus fájlként szolgálja ki az `index.html`-t).
4. Kattints a "Deploy" gombra.

**Vercel CLI-vel:**
```bash
npm i -g vercel
vercel
```
A parancs végigvezet a projekt összekapcsolásán, és ad egy élő URL-t. Éles verzióhoz:
```bash
vercel --prod
```

Mivel a projekt egyetlen statikus `index.html`, nincs szükség `package.json`-re, build parancsra vagy egyéb konfigurációra: sem a GitHub push, sem a Vercel deploy nem igényel extra lépést.
