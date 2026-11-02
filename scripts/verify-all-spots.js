const fs = require('fs');
const path = require('path');

// Read spots.ts
const content = fs.readFileSync('src/data/spots.ts', 'utf8');

// Extract all spots
const spotObjects = [];
const spotBlocks = content.split(/\{\s*id:\s*["']/g).slice(1);

for (const b of spotBlocks) {
  const id = b.match(/^([^"']+)/)[1];
  const name = b.match(/name:\s*["']([^"']+)["']/)[1];
  const taluk = b.match(/taluk:\s*["']([^"']+)["']/)[1];
  const heroImage = b.match(/heroImage:\s*["']([^"']+)["']/)[1];
  const galleryMatch = b.match(/gallery:\s*\[([\s\S]*?)\]/);
  const gallery = galleryMatch ? [...galleryMatch[1].matchAll(/["']([^"']+)["']/g)].map(m => m[1]) : [];
  
  spotObjects.push({ id, name, taluk, heroImage, gallery });
}

console.log(`=== TOTAL SPOTS: ${spotObjects.length} ===\n`);

spotObjects.forEach((s, idx) => {
  console.log(`[${idx + 1}] ${s.name} (${s.id}) [Taluk: ${s.taluk}]`);
  
  const checkImg = (imgRef) => {
    const fullPath = path.join(process.cwd(), 'public', imgRef.replace(/^\//, ''));
    if (!fs.existsSync(fullPath)) {
      return `MISSING: ${imgRef}`;
    }
    const stat = fs.statSync(fullPath);
    return `${imgRef} (${Math.round(stat.size / 1024)} KB)`;
  };

  console.log(`   Hero:    ${checkImg(s.heroImage)}`);
  s.gallery.forEach((g, gi) => {
    console.log(`   Gallery: ${checkImg(g)}`);
  });
});

