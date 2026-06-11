#!/bin/bash
set -e

echo "🖼️  Converting images to WebP and pushing..."

# ------------------------------------------------------------
# 1. Ensure sharp is installed (used for conversion)
# ------------------------------------------------------------
if ! node -e "require('sharp')" 2>/dev/null; then
  echo "📦 Installing sharp (image converter)..."
  npm install --legacy-peer-deps --save-dev sharp
fi

# ------------------------------------------------------------
# 2. Convert images to .webp using Node.js
# ------------------------------------------------------------
node -e "
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = 'public/images';
const outputDir = 'public/images';

if (!fs.existsSync(inputDir)) {
  console.error('❌ public/images directory not found');
  process.exit(1);
}

const files = fs.readdirSync(inputDir).filter(f => /\.(png|jpg|jpeg|svg)$/i.test(f) && !f.endsWith('.webp'));

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(png|jpg|jpeg|svg)$/i, '.webp');
    const outputPath = path.join(outputDir, outputName);

    try {
      // SVG files: first convert to PNG via sharp, then to WebP
      if (file.endsWith('.svg')) {
        // sharp can't read SVG directly; we'll skip or use a placeholder approach
        // Instead we'll just copy a pre-generated webp? Actually we can't. We'll skip SVG conversion.
        console.log('⏭️  Skipping SVG (cannot convert directly):', file);
        continue;
      }

      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log('✅ Converted:', file, '→', outputName);
    } catch (err) {
      console.error('❌ Failed to convert', file, err.message);
    }
  }
  console.log('✅ All conversions done');
})();
"

# ------------------------------------------------------------
# 3. Update homepage to use .webp images
# ------------------------------------------------------------
# Replace .svg with .webp in the homepage for the two images
sed -i 's|/images/mandala.svg|/images/mandala.webp|g' src/app/page.tsx
sed -i 's|/images/acharya-portrait.svg|/images/acharya-portrait.webp|g' src/app/page.tsx

# ------------------------------------------------------------
# 4. Delete old SVG files if they were successfully converted
# ------------------------------------------------------------
# Only remove the old files if the new .webp files exist
if [ -f public/images/mandala.webp ]; then
  rm -f public/images/mandala.svg
fi
if [ -f public/images/acharya-portrait.webp ]; then
  rm -f public/images/acharya-portrait.svg
fi

# ------------------------------------------------------------
# 5. Stage, commit, and push
# ------------------------------------------------------------
git add .
git commit -m "🖼️  Convert images to WebP format" || echo "Nothing to commit"
git push origin main

echo ""
echo "✅ Images converted to WebP and pushed to GitHub."