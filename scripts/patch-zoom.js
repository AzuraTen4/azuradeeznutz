const fs = require('fs');
const path = require('path');

const zoomPath = path.join(__dirname, '../node_modules/react-medium-image-zoom/dist/utils.js');

if (fs.existsSync(zoomPath)) {
  let content = fs.readFileSync(zoomPath, 'utf8');
  // Add safe check for Element
  content = content.replace(
    'function isElement(el) {',
    'function isElement(el) { if (typeof Element === "undefined") return false;'
  );
  fs.writeFileSync(zoomPath, content);
  console.log('✓ Patched react-medium-image-zoom for SSR');
}
