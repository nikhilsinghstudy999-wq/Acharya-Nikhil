#!/bin/bash
set -e

echo "🖼️  Setting up WebP placeholders (no conversion)..."

# ------------------------------------------------------------
# 1. Create placeholder .webp files if they are missing
#    (a 1‑pixel valid WebP image, or just a copy of an existing one)
# ------------------------------------------------------------
mkdir -p public/images

# Minimal valid WebP file (1x1 pixel, lossy) – base64 encoded
MINI_WEBP_BASE64="UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAIAaJaQAA3AA/vpAAA=="

for img in mandala acharya-portrait; do
  if [ ! -f "public/images/${img}.webp" ]; then
    echo "   Creating placeholder ${img}.webp"
    echo "$MINI_WEBP_BASE64" | base64 -d > "public/images/${img}.webp"
  else
    echo "   ${img}.webp already exists – keeping it"
  fi
done

# ------------------------------------------------------------
# 2. Update homepage to use .webp images
# ------------------------------------------------------------
if grep -q '/images/mandala.svg' src/app/page.tsx; then
  sed -i 's|/images/mandala.svg|/images/mandala.webp|g' src/app/page.tsx
fi
if grep -q '/images/acharya-portrait.svg' src/app/page.tsx; then
  sed -i 's|/images/acharya-portrait.svg|/images/acharya-portrait.webp|g' src/app/page.tsx
fi

# ------------------------------------------------------------
# 3. Stage, commit, push
# ------------------------------------------------------------
git add .
git commit -m "🖼️  Use WebP images (placeholder if needed)" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ Placeholders ready and code updated. Your real WebP images will be used once uploaded."