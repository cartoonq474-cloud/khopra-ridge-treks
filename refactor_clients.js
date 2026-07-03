const fs = require('fs');
const path = require('path');

const clientPages = [
  './src/app/checkout',
  './src/app/contact',
  './src/app/mountains/mountain-id-guide',
  './src/app/planning/difficulty-calculator',
  './src/app/planning/interactive-map',
  './src/app/planning/khayer-lake-altitude-difficulty',
  './src/app/planning/khopra-trek-itinerary',
  './src/app/planning/khopra-trek-map',
  './src/app/planning/trek-comparison-tool',
  './src/app/review-submission'
];

clientPages.forEach((dir) => {
  const fullDir = path.join(__dirname, dir);
  const layoutPath = path.join(fullDir, 'layout.js');
  const pagePath = path.join(fullDir, 'page.js');
  const clientPagePath = path.join(fullDir, 'ClientPage.js');

  // Extract canonical path from layout.js
  let canonicalPath = '';
  if (fs.existsSync(layoutPath)) {
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    const match = layoutContent.match(/canonical:\s*'([^']+)'/);
    if (match) {
      canonicalPath = match[1];
    }
    // Delete layout.js
    fs.unlinkSync(layoutPath);
    console.log(`Deleted ${layoutPath}`);
  } else {
    // Fallback if layout.js isn't there for some reason
    canonicalPath = dir.replace('./src/app', '');
  }

  // Rename page.js to ClientPage.js
  if (fs.existsSync(pagePath)) {
    fs.renameSync(pagePath, clientPagePath);
    console.log(`Renamed page.js to ClientPage.js in ${dir}`);
  }

  // Create new page.js Server Component
  const newPageContent = `import ClientPage from './ClientPage';

export const metadata = {
  alternates: {
    canonical: '${canonicalPath}',
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
`;
  
  fs.writeFileSync(pagePath, newPageContent, 'utf8');
  console.log(`Created new Server Component page.js in ${dir}`);
});

console.log("Refactoring complete.");
