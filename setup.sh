#!/bin/bash
set -e

echo "📤 Staging, committing, and pushing to GitHub..."

# Check if there are any changes to commit
if git diff --quiet && git diff --cached --quiet; then
    echo "ℹ️ No changes to commit. Already up to date."
    exit 0
fi

# Add all changes
git add .

# Commit
git commit -m "🚀 High‑end homepage & animated Tarot – production ready"

# Push
git push origin main

echo ""
echo "✅ Successfully pushed to GitHub."
echo "   Vercel will now automatically deploy the latest version."