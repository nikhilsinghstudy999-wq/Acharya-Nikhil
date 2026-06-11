#!/bin/bash
set -e

echo "🚀 Preparing to push to GitHub..."

# 1. Ensure Git is installed
if ! command -v git &>/dev/null; then
    echo "❌ Git is not installed. Please install it first."
    exit 1
fi

# 2. Initialize Git if not already a repo
if [ ! -d .git ]; then
    git init
    echo "✅ Git repository initialized."
fi

# 3. Set up .gitignore if missing
if [ ! -f .gitignore ]; then
    cat > .gitignore << 'GITIGNORE'
node_modules
.next
.env.local
.env
out
*.tsbuildinfo
GITIGNORE
    echo "✅ .gitignore created."
fi

# 4. Add all files
git add .

# 5. Commit (skip if nothing to commit)
if git diff --cached --quiet; then
    echo "ℹ️ Nothing to commit."
else
    git commit -m "🚀 Production push: Acharya Nikhil Shastri astrology site"
    echo "✅ Changes committed."
fi

# 6. Ask for remote repository URL if not set
if ! git remote get-url origin &>/dev/null; then
    echo ""
    echo "📝 No remote 'origin' found."
    read -p "Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): " REPO_URL
    git remote add origin "$REPO_URL"
    echo "✅ Remote origin added."
fi

# 7. Push (force push only on first push? No, just normal push)
echo "📤 Pushing to GitHub..."
git branch -M main 2>/dev/null || true   # ensure branch is 'main'
git push -u origin main

echo ""
echo "🎉 Successfully pushed to GitHub!"
echo "   Your repository: $(git remote get-url origin)"