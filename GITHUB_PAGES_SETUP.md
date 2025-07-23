# GitHub Pages Deployment Guide

## Quick Setup for Your Laravel Developer Portfolio

### Step 1: Build the Static Site
```bash
npm run build:static
```
This creates a `dist` folder with your static website files.

### Step 2: Create GitHub Repository
1. Create a new repository on GitHub (e.g., `your-username.github.io` or `laravel-portfolio`)
2. Clone the repository to your local machine

### Step 3: Copy Files
Copy these files from your project to the GitHub repository:

**Required files to copy:**
```
dist/               (the entire dist folder contents)
├── index.html
├── assets/
│   ├── *.css files
│   ├── *.js files
│   └── other assets
```

**Or alternatively, copy the client folder structure:**
```
client/
├── src/
├── index.html
├── package.json (client dependencies only)
vite.config.ts (simplified)
```

### Step 4: Configure GitHub Pages
1. Go to your repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` or `master`
4. Folder: `/ (root)` if you copied dist contents, or `/docs` if you put files there

### Step 5: Update Contact Information
Before deploying, update these files with your real information:

**In `client/src/components/contact-static.tsx`:**
- Replace `your.email@example.com` with your actual email
- Replace `+1 (555) 123-4567` with your phone/WhatsApp
- Update social media links:
  - LinkedIn: `https://linkedin.com/in/your-profile`
  - GitHub: `https://github.com/your-username`
  - Twitter: `https://twitter.com/your-handle`

**In `client/src/components/hero.tsx`:**
- Replace "John Doe" with your actual name

**In `client/src/components/about.tsx`:**
- Update personal information
- Replace education and location details

### Step 6: Build Process for GitHub Pages

Create a simple build workflow by adding `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Alternative: Simple Manual Deployment

1. Run `npm run build` locally
2. Copy all files from `dist/` folder
3. Create a new repository or use existing one
4. Upload all files to the repository root
5. Enable GitHub Pages in repository settings

### Important Notes:

- **No Backend Required**: This is now a static site that works without a server
- **Contact Form**: Uses mailto links to open the user's email client
- **Fast Loading**: Optimized static assets for quick loading
- **Mobile Responsive**: Works perfectly on all devices
- **SEO Friendly**: Clean HTML structure for search engines

### Custom Domain (Optional)
1. Add a `CNAME` file to your repository root with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

Your Laravel developer portfolio will be live at:
`https://your-username.github.io/repository-name`

### Contact Form Alternatives
Since this is static, the contact form now:
1. Opens the user's email client with pre-filled information
2. You can integrate with services like:
   - Formspree
   - Netlify Forms
   - EmailJS
   - Contact form services

Just update the form submission in `contact-static.tsx` to use your preferred service.