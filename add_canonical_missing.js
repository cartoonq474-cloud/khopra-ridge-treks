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

let addedCount = 0;

pageFiles.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');

  // Skip if it already exports metadata
  if (/export\s+const\s+metadata/.test(content)) {
    return;
  }

  // Get path relative to src/app
  let relPath = path.relative(srcAppDir, file);
  // Remove page.js
  relPath = relPath.replace(/\\?page\.js$/, '');
  // Normalize slashes
  relPath = relPath.replace(/\\/g, '/');

  const canonicalPath = '/' + relPath;

  const metadataCode = `\nexport const metadata = {\n  alternates: {\n    canonical: '${canonicalPath}',\n  },\n};\n`;

  // Append to the end of the file
  content += metadataCode;
  
  fs.writeFileSync(file, content, 'utf8');
  addedCount++;
  console.log(`Added metadata to ${canonicalPath}`);
});

console.log(`Total files updated with new metadata block: ${addedCount}`);
