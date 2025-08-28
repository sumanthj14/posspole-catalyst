const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

try {
  // Clean previous build
  console.log('🧹 Cleaning previous build...');
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true, force: true });
  }
  if (fs.existsSync('out')) {
    fs.rmSync('out', { recursive: true, force: true });
  }

  // Set production environment
  process.env.NODE_ENV = 'production';
  console.log('🔧 Environment set to production');

  // Run build
  console.log('📦 Building application...');
  execSync('npm run build', { stdio: 'inherit' });

  // Create .nojekyll file for GitHub Pages
  console.log('📝 Creating .nojekyll file...');
  const outDir = path.join(process.cwd(), 'out');
  if (fs.existsSync(outDir)) {
    fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
    console.log('✅ .nojekyll file created');
  }

  // Deploy to GitHub Pages
  console.log('🌐 Deploying to GitHub Pages...');
  execSync('gh-pages -d out --dotfiles', { stdio: 'inherit' });

  console.log('🎉 Deployment completed successfully!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}