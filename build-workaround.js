const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting build workaround for Windows permission issues...');

try {
  // Set environment variables to avoid permission issues
  process.env.NEXT_TELEMETRY_DISABLED = '1';
  process.env.NODE_ENV = 'production';
  
  // Try to remove .next directory with different methods
  const nextDir = path.join(process.cwd(), '.next');
  
  if (fs.existsSync(nextDir)) {
    console.log('Attempting to clean .next directory...');
    try {
      // Try different removal methods
      execSync('rmdir /s /q .next', { stdio: 'inherit', shell: true });
    } catch (e) {
      console.log('Standard removal failed, trying alternative...');
      try {
        execSync('powershell -Command "Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue"', { stdio: 'inherit' });
      } catch (e2) {
        console.log('Directory cleanup failed, proceeding with build...');
      }
    }
  }
  
  // Wait a moment for file system to settle
  setTimeout(() => {
    console.log('Starting Next.js build...');
    
    // Try build with different options
    try {
      execSync('npx next build --no-lint --experimental-build-mode=compile', { 
        stdio: 'inherit',
        env: {
          ...process.env,
          NEXT_TELEMETRY_DISABLED: '1',
          NODE_ENV: 'production'
        }
      });
      console.log('Build completed successfully!');
    } catch (buildError) {
      console.log('Standard build failed, trying alternative approach...');
      
      // Try with different flags
      execSync('npx next build --no-lint', { 
        stdio: 'inherit',
        env: {
          ...process.env,
          NEXT_TELEMETRY_DISABLED: '1',
          NODE_ENV: 'production'
        }
      });
      console.log('Alternative build completed!');
    }
  }, 2000);
  
} catch (error) {
  console.error('Build workaround failed:', error.message);
  process.exit(1);
}