const fs = require('fs');
const path = require('path');

const clientPages = [
  './src/app/checkout/page.js',
  './src/app/contact/page.js',
  './src/app/mountains/mountain-id-guide/page.js',
  './src/app/planning/difficulty-calculator/page.js',
  './src/app/planning/interactive-map/page.js',
  './src/app/planning/khayer-lake-altitude-difficulty/page.js',
  './src/app/planning/khopra-trek-itinerary/page.js',
  './src/app/planning/khopra-trek-map/page.js',
  './src/app/planning/trek-comparison-tool/page.js',
  './src/app/review-submission/page.js'
];

clientPages.forEach((file) => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract the canonical path from the metadata block
    const match = content.match(/canonical:\s*'([^']+)'/);
    if (!match) return; // Skip if can't find canonical
    const canonicalPath = match[1];

    // Remove the appended metadata block from page.js
    const metadataRegex = /\nexport\s+const\s+metadata\s*=\s*\{\s*alternates:\s*\{\s*canonical:\s*'[^']+',\s*\},\s*\};\n/g;
    content = content.replace(metadataRegex, '');
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Removed metadata from ${file}`);

    // Create layout.js with the metadata
    const dir = path.dirname(fullPath);
    const layoutPath = path.join(dir, 'layout.js');
    if (!fs.existsSync(layoutPath)) {
      const layoutContent = `export const metadata = {
  alternates: {
    canonical: '${canonicalPath}',
  },
};

export default function Layout({ children }) {
  return children;
}
`;
      fs.writeFileSync(layoutPath, layoutContent, 'utf8');
      console.log(`Created layout.js for ${canonicalPath}`);
    } else {
      // If layout.js already exists, we might need to append metadata to it.
      let layoutContent = fs.readFileSync(layoutPath, 'utf8');
      if (!layoutContent.includes('export const metadata')) {
        layoutContent += `\nexport const metadata = {\n  alternates: {\n    canonical: '${canonicalPath}',\n  },\n};\n`;
        fs.writeFileSync(layoutPath, layoutContent, 'utf8');
        console.log(`Appended metadata to existing layout.js for ${canonicalPath}`);
      }
    }
  }
});
