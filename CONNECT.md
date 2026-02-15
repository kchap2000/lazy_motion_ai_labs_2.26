# Codex Connection Guide

If Codex says `Permission denied (publickey)`, the environment is reachable, but GitHub auth is not configured on this machine yet.

## Fastest fix for `Permission denied (publickey)`

Run on this machine:

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
ssh-keygen -t ed25519 -C "your_github_email@example.com"
cat ~/.ssh/id_ed25519.pub
```

Then add the printed key in GitHub:

- **GitHub** → **Settings** → **SSH and GPG keys** → **New SSH key**

Test auth:

```bash
ssh -T git@github.com
```

Expected success message includes:

- `Hi <username>! You've successfully authenticated...`

## If you prefer HTTPS instead of SSH

Use an HTTPS remote and a GitHub Personal Access Token (PAT):

```bash
git remote -v
git remote set-url origin https://github.com/<owner>/<repo>.git
```

Then authenticate with username + PAT when prompted.

## What to send me if it still fails

Paste these outputs (redact secrets):

```bash
git remote -v
ssh -T git@github.com
ls -la ~/.ssh
```

Also include the exact Codex error text and what action triggered it (clone/pull/push/open repo).

## How we communicate back and forth

1. You share the exact error + command/output in chat.
2. I tell you the next command to run (or run it here when possible).
3. You paste result; I iterate until it connects.

That loop is usually enough to resolve connection issues quickly.
