const fs = require('fs');
const path = require('path');

// Simple build script to copy static files to public directory
const srcDir = path.join(__dirname, 'src', 'static');
const publicDir = path.join(__dirname, 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy HTML file
const htmlContent = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf8');
fs.writeFileSync(path.join(publicDir, 'index.html'), htmlContent);

// Copy CSS file
const cssContent = fs.readFileSync(path.join(srcDir, 'styles.css'), 'utf8');
fs.writeFileSync(path.join(publicDir, 'styles.css'), cssContent);

console.log('✅ Build completed successfully!');
console.log(`📁 Output directory: ${publicDir}`);
console.log('📄 Files built:');
console.log('   - index.html');
console.log('   - styles.css');
