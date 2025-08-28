const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying build output...');

const outDir = path.join(process.cwd(), 'out');
const requiredFiles = [
  'index.html',
  '_next',
  '.nojekyll'
];

const requiredAssets = [
  'favicon.ico',
  'images'
];

try {
  // Check if out directory exists
  if (!fs.existsSync(outDir)) {
    throw new Error('Build output directory "out" does not exist');
  }

  console.log('✅ Output directory exists');

  // Check required files
  for (const file of requiredFiles) {
    const filePath = path.join(outDir, file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Required file/directory "${file}" is missing from build output`);
    }
  }

  console.log('✅ Required files are present');

  // Check assets
  for (const asset of requiredAssets) {
    const assetPath = path.join(outDir, asset);
    if (!fs.existsSync(assetPath)) {
      console.warn(`⚠️  Asset "${asset}" is missing from build output`);
    }
  }

  // Check index.html content
  const indexPath = path.join(outDir, 'index.html');
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  if (!indexContent.includes('<title>')) {
    console.warn('⚠️  index.html may be missing title tag');
  }

  if (!indexContent.includes('_next')) {
    throw new Error('index.html does not reference Next.js assets');
  }

  console.log('✅ index.html appears to be valid');

  // Check for proper asset paths
  const hasCorrectBasePath = indexContent.includes('/Posspole-catalyst/');
  if (process.env.NODE_ENV === 'production' && !hasCorrectBasePath) {
    console.warn('⚠️  Production build may be missing correct basePath');
  }

  // Get build size information
  const getDirectorySize = (dirPath) => {
    let totalSize = 0;
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        totalSize += getDirectorySize(filePath);
      } else {
        totalSize += stats.size;
      }
    }
    
    return totalSize;
  };

  const buildSize = getDirectorySize(outDir);
  const buildSizeMB = (buildSize / 1024 / 1024).toFixed(2);
  
  console.log(`📊 Build size: ${buildSizeMB} MB`);
  
  if (buildSize > 50 * 1024 * 1024) { // 50MB
    console.warn('⚠️  Build size is quite large (>50MB). Consider optimization.');
  }

  console.log('🎉 Build verification completed successfully!');
  
} catch (error) {
  console.error('❌ Build verification failed:', error.message);
  process.exit(1);
}