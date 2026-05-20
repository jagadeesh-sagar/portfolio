# jaggu-dev

Personal portfolio and blog for **Jagadeesh** (jaggu) — built with Next.js 14 App Router, Tailwind CSS, and MDX.

**Live:** `https://jaggu.dev` ← replace with your Vercel URL after deploying

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router, React Server Components) |
| Styling | Tailwind CSS v3 + `@tailwindcss/typography` |
| Blog posts | MDX via `next-mdx-remote` |
| Frontmatter | `gray-matter` |
| Deployment | Vercel |

---

## Running locally

**Requirements:** Node.js 18 or higher

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/jaggu-dev.git
cd jaggu-dev

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

| Script | What it does |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run clean` | Delete `.next/` and `out/` build folders |

---

## How to add a new blog post

1. Create a new `.mdx` file inside `content/blog/`:

```
content/blog/your-post-slug.mdx
```

2. Add frontmatter at the top of the file:

```mdx
---
title: "Your Post Title Here"
date: "2026-06-01"
tags: ["Django", "Python", "Backend"]
excerpt: "One sentence shown as a preview on the blog list page."
---

Your content starts here. Full **Markdown** syntax works, plus JSX components.

## A heading

Some paragraph text with `inline code` and [links](https://example.com).

```python
def hello():
    return "world"
```
```

3. The filename becomes the URL slug automatically:
   - `content/blog/my-post.mdx` → `https://yoursite.com/blog/my-post`

4. Posts are sorted by `date` descending — the newest post appears first.

> **Tip:** The `excerpt` field is optional. If omitted, the blog list page
> auto-generates one from the first 150 characters of your post content.

---

## How to update personal info

Open **`src/config.js`** — this is the single source of truth for everything
displayed across the site.

```js
// src/config.js
const config = {
  name:        "Jagadeesh",          // ← Your name
  nickname:    "jaggu",              // ← Used in the navbar logo
  tagline:     "I build backends…",  // ← Hero subtitle
  bio:         "Final-year CS…",     // ← Hero + About page paragraph
  location:    "Hyderabad, India",   // ← Shown under hero
  openToWork:  true,                 // ← Shows/hides the green badge

  email:       "your@email.com",     // ← Footer + email CTA
  github:      "https://github.com/yourusername",
  linkedin:    "https://linkedin.com/in/yourusername",
  resumeUrl:   "/resume.pdf",        // ← Resume download path

  skills: ["Python", "Django", ...], // ← Skill tags on Home + About
  projects: [...],                   // ← See section below
}
```

Save the file — hot reload picks up the change instantly in dev mode.

---

## How to update your resume

1. Export your CV as a PDF file.
2. Rename it to exactly **`resume.pdf`**.
3. Replace the placeholder in **`public/`**:

```
jaggu-dev/
└── public/
    └── resume.pdf   ← drop your file here
```

The Resume button on the Home page and the About page both download from
`/resume.pdf` automatically. No code changes needed.

> If you prefer to host the PDF elsewhere (e.g. Google Drive, Notion),
> update `resumeUrl` in `src/config.js` to the external URL instead.

---

## How to change project links

Open **`src/config.js`** and edit the `projects` array:

```js
projects: [
  {
    name:   "MCP E-Commerce Backend",
    desc:   "31 AI-callable endpoints…",
    tags:   ["Django", "FastMCP", "PostgreSQL"],
    github: "https://github.com/yourusername/your-repo",  // ← update this
    live:   "https://your-live-url.com",                  // ← or leave "" to hide
  },
  // add more objects here for more projects
],
```

- **`github`** — links to the source repo; set to `""` to hide the GitHub icon.
- **`live`** — links to a live demo; set to `""` to hide the live link entirely.
- Add a new object to the array to add another project card.
- The first project in the array is shown as the **Featured Project** on the Home page.

---

## Deploying on Vercel

Vercel is the easiest way to deploy a Next.js site — it auto-deploys on every
push to your main branch.

### First deploy

1. Push this project to a GitHub repository.

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.

3. Click **"Add New → Project"** and import your `jaggu-dev` repository.

4. Vercel auto-detects Next.js. Leave all settings as defaults and click **Deploy**.

5. Your site is live at `https://jaggu-dev.vercel.app` (or a custom domain you set).

### Auto-deploy on push

After the first deploy, every `git push` to `main` triggers a new production
deployment automatically. Pull requests get preview deployments at unique URLs.

### Custom domain

In your Vercel project → **Settings → Domains**, add your domain (e.g. `jaggu.dev`)
and follow the DNS instructions Vercel provides.

### Environment variables

This project has no required environment variables. If you add any secrets later,
add them in **Vercel → Settings → Environment Variables** — never commit `.env`
files to Git.

---

## Project structure

```
jaggu-dev/
│
├── content/
│   └── blog/                        # MDX blog posts — add new posts here
│       ├── mcp-server-django.mdx
│       └── rbac-jwt-django.mdx
│
├── public/
│   └── resume.pdf                   # Drop your PDF here
│
├── src/
│   ├── app/
│   │   ├── layout.js                # Root layout — Navbar + Footer wrapper
│   │   ├── globals.css              # Tailwind base + custom component classes
│   │   ├── page.js                  # Home — hero, skills, featured project, latest posts
│   │   ├── about/
│   │   │   └── page.js              # About — bio, education, skills, resume download
│   │   ├── blog/
│   │   │   ├── page.js              # Blog list — all posts sorted by date
│   │   │   └── [slug]/
│   │   │       └── page.js          # Blog post — MDX rendered with custom components
│   │   └── projects/
│   │       └── page.js              # Projects — all cards from config.projects
│   │
│   ├── components/
│   │   ├── Navbar.js                # Sticky top nav — jaggu.dev logo, Blog/Projects/About/Resume
│   │   ├── Footer.js                # Footer — copyright, GitHub/LinkedIn/email links
│   │   └── ProjectCard.js           # Reusable project card (name, desc, tags, links)
│   │
│   ├── lib/
│   │   └── posts.js                 # getAllPosts() + getPostBySlug() — reads content/blog/
│   │
│   └── config.js                    # ← Edit this to update all your personal info
│
├── .gitignore
├── jsconfig.json                    # Path alias — @/ maps to src/
├── next.config.js                   # Next.js config (clean — no @next/mdx needed)
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json                      # Vercel deployment config
└── README.md
```

---

*Built by Jagadeesh · [jaggu.dev](https://jaggu.dev)*
