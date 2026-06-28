# my-study-notes

Personal learning platform with progress tracking.

## Recommended deployment

- Use **Vercel** for this Next.js app.
- Import `https://github.com/xfjsssq/my-study-notes`.
- Framework preset: **Next.js**.
- Build command: `npm run build`
- Output directory: `out`
- Root directory: `project` if you import the repo root, otherwise keep repo root if the working directory is already `project`.

## Notes

- This repo is configured for static export.
- If you redeploy, Vercel will serve the app from the repo root.
- For chapter routes, use root-relative links instead of hard-coded subpaths.
