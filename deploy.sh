#!/bin/bash

# Hotel ERP System - GitHub Pages Deployment Script
echo "🏨 Deploying Hotel ERP System to GitHub Pages..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git remote add origin https://github.com/ibrahim362-ai/hootel.git"
    exit 1
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ Git remote 'origin' not found. Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/ibrahim362-ai/hootel.git"
    exit 1
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Found uncommitted changes. Committing them now..."
    git add .
    echo "Enter commit message (or press Enter for default):"
    read commit_message
    if [ -z "$commit_message" ]; then
        commit_message="Update Hotel ERP System for deployment"
    fi
    git commit -m "$commit_message"
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Deployment initiated!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Click on 'Actions' tab to monitor deployment"
echo "3. Once complete, your site will be available at:"
echo "   https://ibrahim362-ai.github.io/hootel/"
echo ""
echo "⚙️  To enable GitHub Pages:"
echo "1. Go to repository Settings → Pages"
echo "2. Set Source to 'GitHub Actions'"
echo "3. Save the settings"
echo ""
echo "🎉 Your Hotel ERP System will be live shortly!"