# Deployment Guide for Posspole Catalyst

This guide provides comprehensive instructions for deploying the Posspole Catalyst application to GitHub Pages.

## 🚀 Quick Deployment

### Prerequisites
- Node.js 18+ installed
- Git repository set up with GitHub Pages enabled
- All dependencies installed (`npm install`)

### Deploy Commands

```bash
# Full deployment (recommended)
npm run deploy

# Manual deployment steps
npm run clean          # Clean previous builds
npm run build:prod     # Build for production
npm run verify:build   # Verify build output
npm run deploy:manual  # Deploy to GitHub Pages
```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for development |
| `npm run build:prod` | Build for production with optimizations |
| `npm run build:analyze` | Build with bundle analysis |
| `npm run clean` | Remove build artifacts |
| `npm run verify` | Run linting and production build |
| `npm run verify:build` | Verify build output integrity |
| `npm run deploy` | Full deployment process |
| `npm run deploy:manual` | Manual GitHub Pages deployment |

## 🔧 Configuration

### Environment-Specific Settings

The application uses different configurations based on `NODE_ENV`:

- **Development**: No base path, optimized for local development
- **Production**: Base path `/Posspole-catalyst` for GitHub Pages
- **Test**: Static export without base path

### Build Configuration Files

- `next.config.js` - Main Next.js configuration
- `build.config.js` - Environment-specific build settings
- `deploy.js` - Automated deployment script
- `verify-build.js` - Build verification script

## 🛠️ Troubleshooting

### Common Issues

#### 1. Permission Errors (EPERM)
```bash
# If you encounter permission errors with .next/trace:
# Close any running development servers first
npm run dev # Stop this if running

# Then try cleaning manually
rmdir /s .next
rmdir /s out
```

#### 2. Build Hanging
```bash
# If build process hangs:
# 1. Stop all Node processes
# 2. Clear build cache
# 3. Restart build
npm run clean
npm run build:prod
```

#### 3. GitHub Pages Not Updating
```bash
# Ensure .nojekyll file exists in output
# Check GitHub Pages settings in repository
# Verify base path configuration
```

#### 4. Asset Loading Issues
```bash
# Check basePath and assetPrefix in production
# Verify all images use Next.js Image component
# Ensure unoptimized: true for static export
```

### Build Verification

The `verify-build.js` script checks:
- ✅ Output directory exists
- ✅ Required files present (index.html, _next, .nojekyll)
- ✅ Asset files available
- ✅ Correct base path in production
- 📊 Build size analysis

## 📁 Output Structure

After successful build, the `out/` directory contains:

```
out/
├── .nojekyll          # GitHub Pages configuration
├── index.html         # Main page
├── _next/             # Next.js assets
│   ├── static/        # Static assets
│   └── ...           
├── favicon.ico        # Favicon
└── images/           # Public images
```

## 🔍 Performance Optimization

The build includes several optimizations:

- **Code Splitting**: Automatic vendor chunk separation
- **Minification**: SWC-based minification
- **Compression**: Gzip compression enabled
- **Console Removal**: Production console.log removal
- **CSS Optimization**: Experimental CSS optimization

## 📝 Deployment Checklist

- [ ] All ESLint errors resolved
- [ ] TypeScript compilation successful
- [ ] Production build completes without errors
- [ ] Build verification passes
- [ ] GitHub repository configured for Pages
- [ ] Base path matches repository name
- [ ] All assets load correctly

## 🆘 Support

If you encounter issues:

1. Check the build logs for specific errors
2. Verify all dependencies are installed
3. Ensure Node.js version compatibility
4. Review GitHub Pages settings
5. Check network connectivity for deployment

## 🔄 Continuous Deployment

For automated deployment, consider setting up GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run deploy
```

This ensures automatic deployment on every push to the main branch.