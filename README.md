# My Portfolio (React + TypeScript + Vite + Docker)

## Run
    docker compose up
Open http://localhost:5173 – every time you save a file the page reloads.

## Edit (you only need these)
| What | Where |
|---|---|
| All your texts, skills, projects, journey, links | `src/data.ts` |
| Your photo | `public/photo.jpg` (portrait, ~800×1000) |
| Your CV | `public/cv.pdf` |
| Project screenshots | `public/projects/name.png`, then `image: '/projects/name.png'` in data.ts |
| Google / LinkedIn preview text | `index.html` (+ `public/og.png`, 1200×630) |
| Colors & fonts | top of `src/styles.css` |

## Publish for free
- **Vercel / Netlify**: push to GitHub → "Import project" → build command `npm run build`, output folder `dist`.
- **Docker server**: `docker compose -f docker-compose.prod.yml up -d --build`.
After publishing, replace `https://your-domain.com` in `index.html` with your real address.

## PFE tips
Keep 3–5 best projects with a live demo or clear screenshots, put the PFE dates in `availability`,
and use the same name on this site, LinkedIn, GitHub and your CV.
