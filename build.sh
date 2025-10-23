#!/bin/bash

# Build script for NCE Flow
# Copies all static files to www directory for Capacitor

echo "🏗️  Building NCE Flow..."

# Clean www directory
echo "Cleaning www directory..."
rm -rf www
mkdir -p www

# Copy HTML files
echo "Copying HTML files..."
cp *.html www/

# Copy static assets
echo "Copying assets..."
cp -r assets www/
cp -r static www/

# Copy NCE content directories
echo "Copying NCE content..."
cp -r NCE1 www/
cp -r NCE2 www/
cp -r NCE3 www/
cp -r NCE4 www/

# Copy images
echo "Copying images..."
cp -r images www/

# Copy PWA files
echo "Copying PWA files..."
cp favicon.ico www/
cp manifest.json www/
cp service-worker.js www/

# Copy CNAME if exists (for GitHub Pages)
if [ -f CNAME ]; then
    cp CNAME www/
fi

echo "✅ Build completed successfully!"
echo "Output directory: www/"

# Sync with Capacitor
echo "Syncing with Capacitor..."
npx cap sync

echo "🎉 Ready for deployment!"
