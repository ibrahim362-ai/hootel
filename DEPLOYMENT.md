# GitHub Pages Deployment Guide

This guide will help you deploy your Hotel ERP System to GitHub Pages.

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Repository**: Your project should be in a GitHub repository
3. **Node.js**: Ensure you have Node.js 20+ installed locally

## Step-by-Step Deployment

### 1. Prepare Your Repository

First, make sure your code is in a GitHub repository:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Hotel ERP System"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/hotel-erp-system.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 3. Configure Repository Settings

Make sure your repository has the correct permissions:

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**

### 4. Update Repository Name (Important!)

If your repository name is different from `hotel-erp-system`, you'll need to update the base path:

1. Create a file called `vite.config.production.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  base: '/YOUR-REPOSITORY-NAME/', // Replace with your actual repo name
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
  },
});
```

2. Update the GitHub Actions workflow to use this config:

```yaml
# In .github/workflows/deploy.yml, modify the build step:
- name: Build application
  run: npx vite build --config vite.config.production.ts
  env:
    NODE_ENV: production
```

### 5. Test Local Build

Before deploying, test the build locally:

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Preview the build (optional)
npm run preview
```

### 6. Deploy

Push your changes to trigger the deployment:

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### 7. Monitor Deployment

1. Go to your repository on GitHub
2. Click on **Actions** tab
3. You should see a workflow running called "Deploy to GitHub Pages"
4. Wait for it to complete (usually takes 2-5 minutes)

### 8. Access Your Site

Once deployment is complete, your site will be available at:
```
https://yourusername.github.io/your-repository-name/
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Build Fails Due to TypeScript Errors
```bash
# Fix TypeScript errors first
npm run check
```

#### 2. Assets Not Loading (404 errors)
- Make sure the `base` path in your Vite config matches your repository name
- Check that all asset paths use relative imports

#### 3. Routing Issues (404 on page refresh)
This is normal for GitHub Pages with client-side routing. Users should:
- Use the navigation within the app
- Always start from the home page
- Bookmark the main URL only

#### 4. Deployment Workflow Fails
Check the Actions tab for error details. Common fixes:
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check for syntax errors in workflow file

#### 5. Pages Not Updating
- Clear browser cache
- Wait 5-10 minutes for CDN propagation
- Check if new deployment completed successfully

### Alternative Deployment Options

If GitHub Pages doesn't work for your needs, consider these alternatives:

#### Netlify
1. Fork/clone your repository
2. Connect to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist/public`

#### Vercel
1. Import your GitHub repository
2. Vercel auto-detects Vite projects
3. Deploy with default settings

#### Custom Domain

To use a custom domain with GitHub Pages:

1. Add a `CNAME` file to your repository root:
```
yourdomain.com
```

2. Configure DNS with your domain provider:
```
Type: CNAME
Name: www (or @)
Value: yourusername.github.io
```

3. Enable custom domain in repository settings

## Production Considerations

### Environment Variables
- All environment variables must be prefixed with `VITE_` to be available in the frontend
- Store sensitive variables in GitHub Secrets if needed

### Performance Optimization
- The build automatically optimizes for production
- Assets are minified and compressed
- Code splitting is enabled by default

### SEO Considerations
- Add proper meta tags to your HTML template
- Consider adding a sitemap.xml
- Implement proper Open Graph tags

### Analytics
Consider adding analytics to track usage:
- Google Analytics
- Plausible
- Simple Analytics

## Maintenance

### Regular Updates
```bash
# Update dependencies regularly
npm update

# Test locally
npm run build
npm run preview

# Deploy updates
git add .
git commit -m "Update dependencies"
git push origin main
```

### Monitoring
- Check GitHub Actions for failed deployments
- Monitor site performance
- Keep dependencies updated for security

---

Your Hotel ERP System should now be successfully deployed to GitHub Pages! 🎉