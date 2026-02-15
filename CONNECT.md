# Codex Connection Guide

If Codex says `Permission denied (publickey)`, the environment is reachable, but GitHub auth is not configured on the machine that is trying to talk to GitHub.

## Why it can work "here" but fail in the Codex app

The Codex app and this session can run in different environments. SSH keys are machine-specific.

- One environment may already have GitHub auth.
- The Codex app environment may not have an authorized SSH key yet.
- Result: chat/commands can work, but `git push` from the app environment fails with `Permission denied (publickey)`.

## Fastest fix for `Permission denied (publickey)`

Run these on the machine/environment where push fails (usually the Codex app runtime):

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
ssh-keygen -t ed25519 -C "your_github_email@example.com"
cat ~/.ssh/id_ed25519.pub
```

Then add the printed key in GitHub:

- **GitHub** → **Settings** → **SSH and GPG keys** → **New SSH key**

Test auth from that same environment:

```bash
ssh -T git@github.com
```

Expected success output includes:

- `Hi <username>! You've successfully authenticated...`

Then retry push:

```bash
git push -u origin main
```

## Existing key path (optional)

If you already have a key, you can print it directly:

```bash
ls -la ~/.ssh
cat ~/.ssh/id_ed25519.pub
```

## If you prefer HTTPS instead of SSH

Use an HTTPS remote and a GitHub Personal Access Token (PAT):

```bash
git remote -v
git remote set-url origin https://github.com/<owner>/<repo>.git
```

Then authenticate with username + PAT when prompted.

## What to send me if it still fails

Paste these outputs from the failing environment (redact secrets):

```bash
git remote -v
ssh -T git@github.com
git push -u origin main
ls -la ~/.ssh
cat ~/.ssh/id_ed25519.pub
```

Also include the exact Codex error text and what action triggered it (clone/pull/push/open repo).

## How we communicate back and forth

1. You share exact error + command output in chat.
2. I give you the next command (or run what I can from here).
3. You paste results; I iterate until connection is fixed.
