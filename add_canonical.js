const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, 'src', 'app');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('page.js')) {
        results.push(file);
      }
    }
  });
  return results;
}

const pageFiles = walk(srcAppDir);

let updatedCount = 0;

pageFiles.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');

  // Skip if alternates is already there
  if (content.includes('alternates:') && content.includes('canonical:')) {
    return;
  }

  // Get path relative to src/app
  let relPath = path.relative(srcAppDir, file);
  // Remove page.js
  relPath = relPath.replace(/\\?page\.js$/, '');
  // Normalize slashes
  relPath = relPath.replace(/\\/g, '/');

  const canonicalPath = '/' + relPath;

  const metadataRegex = /export\s+const\s+metadata\s*=\s*\{/;
  if (metadataRegex.test(content)) {
    const alternatesCode = `\n  alternates: {\n    canonical: "${canonicalPath}",\n  },`;
    content = content.replace(metadataRegex, `export const metadata = {` + alternatesCode);
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated ${canonicalPath}`);
  }
});

console.log(`Total files updated: ${updatedCount}`);
