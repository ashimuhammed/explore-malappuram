const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
console.log(`Checking ${files.length} source files for remote image references...\n`);

let remoteImagesFound = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Match http... with image extensions or img tags
  const matches = [...content.matchAll(/(https?:\/\/[^\s"',)]+\.(?:jpg|jpeg|png|webp|gif|svg))/gi)].map(m => m[1]);
  if (matches.length > 0) {
    remoteImagesFound.push({ file: f, matches });
  }
});

if (remoteImagesFound.length === 0) {
  console.log('SUCCESS: Zero remote image URLs in entire src/ tree!');
} else {
  console.log('Remote images found:', remoteImagesFound);
}

