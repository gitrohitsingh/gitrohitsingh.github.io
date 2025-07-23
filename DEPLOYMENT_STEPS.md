# Step-by-Step GitHub Pages Deployment Guide

## Method 1: Direct Upload (Easiest)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "+" in top right corner → "New repository"
3. Name it either:
   - `your-username.github.io` (for personal site)
   - `laravel-portfolio` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Check "Add a README file"
6. Click "Create repository"

### Step 2: Prepare Your Files
Download these files from your project:

**From the `dist/public/` folder:**
- `index.html`
- `assets/` folder (contains CSS and JS files)

**Additional files to copy:**
- `GITHUB_PAGES_SETUP.md`
- `.github/workflows/deploy.yml`

### Step 3: Upload to GitHub
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL the files from `dist/public/` folder
3. In the commit message, write: "Initial portfolio upload"
4. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to repository **Settings** tab
2. Scroll down to **Pages** section (left sidebar)
3. Under "Source", select "Deploy from a branch"
4. Choose branch: **main**
5. Choose folder: **/ (root)**
6. Click **Save**

### Step 5: Access Your Live Site
- GitHub will show you the URL (usually takes 5-10 minutes)
- Your site will be live at: `https://your-username.github.io/repository-name`

## Method 2: Using Git (Advanced)

### Step 1: Initialize Git Repository
```bash
# Navigate to your project
cd your-project-folder

# Initialize git
git init

# Add GitHub as remote origin
git remote add origin https://github.com/your-username/your-repo-name.git
```

### Step 2: Prepare Deployment Branch
```bash
# Create a new branch for GitHub Pages
git checkout -b gh-pages

# Copy dist files to root
cp -r dist/public/* .

# Add and commit files
git add .
git commit -m "Deploy Laravel portfolio to GitHub Pages"

# Push to GitHub
git push origin gh-pages
```

### Step 3: Configure GitHub Pages
1. Repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: **gh-pages**
4. Folder: **/ (root)**

## Before Going Live - Customize Your Information

### Update Contact Details
Edit `client/src/components/contact-static.tsx`:

```typescript
// Replace these with your real information:
mailto:your.email@example.com          → mailto:your-real-email@gmail.com
+1 (555) 123-4567                      → your real phone number
https://linkedin.com/in/your-profile   → your LinkedIn URL
https://github.com/your-username       → your GitHub profile
```

### Update Personal Information
Edit `client/src/components/hero.tsx` and `client/src/components/about.tsx`:
- Replace "John Doe" with your real name
- Update location, education, experience details

### Rebuild After Changes
```bash
npm run build
```
Then re-upload the new `dist/public/` files to GitHub.

## Automatic Deployment (Recommended)

The `.github/workflows/deploy.yml` file I created will automatically:
1. Build your site when you push changes
2. Deploy to GitHub Pages
3. No manual file copying needed

To use this:
1. Upload your entire project (including source code)
2. GitHub Actions will handle the build and deployment
3. Just push changes to trigger new deployments

## Your Live Portfolio Will Include:

✅ **Professional Hero Section** - Laravel Developer branding
✅ **Skills Showcase** - Laravel, Vue.js, React, Angular, PHP
✅ **Services & Pricing** - Starting at $75/hour
✅ **Portfolio Projects** - E-commerce, SaaS, Healthcare examples
✅ **About Section** - 6+ years experience, global remote
✅ **Contact Form** - Email integration, social links
✅ **Responsive Design** - Works on all devices
✅ **Fast Loading** - Optimized static files

## Need Help?
- Repository not deploying? Check Settings → Pages
- 404 error? Ensure `index.html` is in the root folder
- Styling issues? Verify all `assets/` files uploaded correctly

Your professional Laravel developer portfolio will be live and ready to attract clients!