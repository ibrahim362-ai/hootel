# Quick GitHub Pages Setup

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `hotel-erp-system` (or your preferred name)
3. Make it **public** (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

## Step 2: Connect Local Project to GitHub

Run these commands in your terminal:

```bash
# Initialize git (if not already done)
git init

# Your repository is already connected to:
# https://github.com/ibrahim362-ai/hootel

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Hotel ERP System"

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

## Step 4: Monitor Deployment

1. Go to **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Wait for green checkmark (usually 2-5 minutes)

## Step 5: Access Your Site

Your site will be available at:
```
https://ibrahim362-ai.github.io/hootel/
```

## Quick Deploy Script

For future updates, just run:
```bash
./deploy.sh
```

This will automatically commit changes and trigger deployment.

## Important Notes

- **Repository must be public** for free GitHub Pages
- **First deployment** takes 5-10 minutes
- **Updates** deploy automatically when you push to main
- **Custom domain** can be configured in repository settings

## Troubleshooting

### Build Fails
- Check Actions tab for error details
- Ensure all dependencies are in package.json
- Run `npm run build` locally to test

### Site Not Loading
- Wait 10 minutes for initial deployment
- Clear browser cache
- Check repository is public

### 404 Errors
- Verify GitHub Pages is enabled
- Check the correct URL format
- Ensure workflow completed successfully

---

🎉 **Your Hotel ERP System will be live on GitHub Pages!**