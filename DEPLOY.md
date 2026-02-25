# Deploy Guide

## Current Deploy Behavior

This project is currently deploying automatically from GitHub `main`.

Workflow:
1. Commit local changes
2. Push to `origin main`
3. Hosting platform auto-builds and publishes

If you see changes live shortly after a push, auto-deploy is active and working.

## Standard Push Flow

```bash
cd /Users/khalilchapman/Desktop/lazy-lab-ai-studio
git add -A
git commit -m "Your update message"
git push origin main
```

## Local Validation Before Push

```bash
npm run lint
npm run build
```

## Manual Publish Fallback (If Auto-Deploy Stops)

Use Vercel CLI only if needed:

```bash
npx vercel --prod --yes
```

If authentication fails, run:

```bash
vercel login
```

Then retry production deploy.

## Quick Checks

- Git sync status:

```bash
git status -sb
```

- Confirm remote:

```bash
git remote -v
```

Expected remote includes:

`git@github.com:kchap2000/lazy_motion_ai_labs_2.26.git`
