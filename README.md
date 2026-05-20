# jaggu-dev

Personal portfolio and blog built with Next.js 14 App Router, Tailwind CSS, and MDX.

## Tech Stack

- **Framework:** Next.js 14 (App Router, React Server Components)
- **Styling:** Tailwind CSS v3 + custom accent color
- **Blog:** MDX via `next-mdx-remote`, frontmatter via `gray-matter`
- **Deployment:** Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, skills, featured project, latest posts, LinkedIn writing |
| `/about` | Bio, education, categorized skills, resume download |
| `/projects` | All projects grid |
| `/blog` | MDX articles + LinkedIn posts |
| `/blog/[slug]` | Individual post |

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploying

Push to GitHub and import into [Vercel](https://vercel.com/). No extra config needed — `vercel.json` is already set up.

> **Before deploying**, drop your actual `resume.pdf` into the `/public` folder.

## Project Structure

```
src/
  app/          # Pages (App Router)
  components/   # Navbar, Footer, LinkedInPostCard
  lib/          # posts.js — MDX file reader
  config.js     # All personal data (name, links, projects, skills)
content/
  blog/         # MDX posts
public/         # avatar.jpeg, resume.pdf
```

## Customization

| What to change | Where |
|----------------|-------|
| Name, bio, links, socials | `src/config.js` |
| Skills or projects | `src/config.js` |
| Add a blog post | Drop a new `.mdx` file in `content/blog/` |
| Update resume | Replace `public/resume.pdf` |
