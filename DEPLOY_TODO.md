Deploy TODO for chironsb.github.io

1) Create GitHub repo
- Name: `chironsb.github.io` (user site for account `chironsb`)
- Visibility: Public
- Settings → Pages → Build and deployment: Source = GitHub Actions

2) Local structure (already prepared)
- Folder: `chironsb.github.io/` (next to `my-blog-project/`)
- Contains: `mkdocs.yml`, `docs/`, `.github/workflows/pages.yml`, `requirements.txt`, `.gitignore`

3) Configure MkDocs
- In `mkdocs.yml` set `site_url: https://chironsb.github.io`
- Keep existing theme, CSS/JS, navigation, and plugins

4) Initialize git and push (you do)
- cd `chironsb.github.io`
- git init
- git remote add origin git@github.com:chironsb/chironsb.github.io.git (or https URL)
- git add .
- git commit -m "initial site"
- git branch -M main
- git push -u origin main

5) First deploy
- In GitHub → Actions → Run workflow (manual) OR create tag:
  - git tag v1.0.0 && git push origin v1.0.0
- Wait for Actions to complete
- Check Settings → Pages → Visit `https://chironsb.github.io`

6) Future deploys
- Edit content in `docs/` or config in `mkdocs.yml`
- Trigger Actions manually or push a new tag (v1.0.1)

Notes
- Build output is not committed; CI publishes to Pages using `actions/deploy-pages`
- No `--force --reset` pushes; keep history clean

