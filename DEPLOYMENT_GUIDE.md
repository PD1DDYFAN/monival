
# Deployment Guide for Mohamed & Monika's Valentine Site

## 1. Environment Variables
If you decide to add Gemini AI features later, add the following to the Netlify dashboard:
- **Key:** `VITE_GEMINI_API_KEY`
- **Value:** `your-actual-api-key-here`
- **Note:** In the code, access it via `import.meta.env.VITE_GEMINI_API_KEY`.

## 2. Step-by-Step Netlify Deploy
1. **Local Check:** Run `npm run build` locally. Ensure a `dist/` folder is created with an `index.html` and an `assets/` subfolder.
2. **Git:** `git add .`, `git commit -m "Fix production white screen"`, `git push`.
3. **Netlify Dashboard:**
   - Link your Repository.
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. **Deploy:** Click "Deploy site".

## 3. Troubleshooting the "White Screen"
- If it's still blank, open the browser Console (F12).
- Check for `404` errors on `.js` or `.css` files. This usually means the `base` path in `vite.config.ts` is wrong (it should be `/`).
- Check for `MIME type` errors. This happens if the `dist` folder isn't being served correctly.

## 4. Security Note
The `VITE_` prefix makes environment variables available to the client-side code. This means anyone who views the source code of your website can see your API key. For a small Valentine's project, this is usually okay, but for professional apps, you should use a backend proxy.
