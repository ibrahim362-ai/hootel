#!/bin/bash

echo "🔧 Fixing Git setup and deploying to GitHub Pages..."

# Set up proper Git configuration
echo "📝 Setting up Git..."
git config --global user.email "action@github.com"
git config --global user.name "GitHub Actions"

# Check current status
echo "📊 Current Git status:"
git status --short

# Add all files
echo "📁 Adding all files..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️ No changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Add complete Hotel ERP System with GitHub Pages deployment setup"
fi

# Set up branch tracking and push
echo "🚀 Setting up branch tracking and pushing..."
git branch --set-upstream-to=origin/main main
git push origin main

echo "✅ Git setup complete!"
echo ""
echo "🌐 Next steps for GitHub Pages:"
echo "1. Go to: https://github.com/ibrahim362-ai/hootel"
echo "2. Click Settings → Pages"
echo "3. Set Source to 'GitHub Actions'"
echo "4. Your site will be live at: https://ibrahim362-ai.github.io/hootel/"
echo ""
echo "🎉 Your Hotel ERP System is ready for deployment!"