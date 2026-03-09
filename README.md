# 🛡️ Dil Mahmud Khan — Portfolio (React)

A clean, modular React portfolio. **All content lives in one file.**

---

## 🚀 Quick Start

```bash
npm install
npm start        # local dev at http://localhost:3000
npm run build    # production build → /build folder
```

---

## ✏️ How to Update Your Portfolio

**99% of the time, you only edit ONE file:**

```
src/data.js
```

That file is organised into clear sections with comments:

| Section | What to edit |
|---|---|
| `personal` | Name, email, phone, bio text, hero stats |
| `skillGroups` | Add/remove skills, set `highlight: true` for key skills |
| `experiences` | Add new jobs, update bullets |
| `projects` | Add/remove projects, update tags |
| `education` | Add new degrees |
| `certifications` | Add certs, update status (`active` / `progress` / `award`) |
| `activities` | Add clubs / leadership roles |

### Adding a new skill group (example):
```js
// In src/data.js → skillGroups array:
{
  title: "// Cloud & DevOps",
  skills: [
    { name: "AWS", highlight: true },
    { name: "Terraform" },
    { name: "Kubernetes" },
  ],
},
```

### Changing cert status:
```js
// status options: "active" | "progress" | "award" | "certificate"
{ icon: "🔐", name: "CompTIA Security+", org: "CompTIA", status: "active" },
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html          ← HTML shell (rarely touch)
├── src/
│   ├── data.js             ← ⭐ YOUR CONTENT FILE (edit this!)
│   ├── App.jsx             ← Wires all sections together
│   ├── index.js            ← Entry point
│   ├── index.css           ← Global CSS variables
│   └── components/
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Education.jsx
│       ├── Certifications.jsx
│       ├── Activities.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── Divider.jsx
│       └── SectionHeader.jsx
├── vercel.json             ← Vercel routing config
└── package.json
```

---

## 🌐 Deploying to Vercel

### Option A — Connect GitHub (recommended)
1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo → Deploy
4. Every time you `git push`, Vercel auto-deploys ✅

### Option B — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## ➕ Adding a New Section

1. Create `src/components/YourSection.jsx`
2. Add your data in `src/data.js`
3. Import and add `<YourSection />` in `src/App.jsx`
4. Add a nav link in `src/components/Nav.jsx`

---

## 🎨 Changing Colors / Fonts

Edit `src/index.css` — all colours are CSS variables at the top:
```css
:root {
  --cyan:   #38d9f5;   /* main accent */
  --green:  #2eedb3;   /* secondary accent */
  --orange: #ff8c42;   /* section numbers */
  /* ... */
}
```
