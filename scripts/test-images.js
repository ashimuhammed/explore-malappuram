const fs = require('fs');
const path = require('path');

function inspectProjectImages() {
  console.log('=== VERIFYING PROJECT IMAGES ===\n');

  // 1. Check spots.ts
  const spotsRaw = fs.readFileSync('src/data/spots.ts', 'utf8');
  // Match image strings: image: "..." and gallery: ["...", "..."]
  const imageMatches = [...spotsRaw.matchAll(/image:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const galleryMatches = [...spotsRaw.matchAll(/["'](\/images\/[^"']+)["']/g)].map(m => m[1]);
  const remoteInSpots = [...spotsRaw.matchAll(/["'](https?:\/\/[^"']+)["']/g)].map(m => m[1]);

  const allSpotsImages = Array.from(new Set([...imageMatches, ...galleryMatches]));

  console.log(`Found ${allSpotsImages.length} spot image references in src/data/spots.ts`);
  console.log(`Found ${remoteInSpots.length} remote URLs in src/data/spots.ts`);

  let missing = [];
  let valid = [];
  let corrupt = [];

  for (const imgPath of allSpotsImages) {
    if (imgPath.startsWith('http')) {
      continue;
    }
    const fullPath = path.join(process.cwd(), 'public', imgPath.replace(/^\//, ''));
    if (!fs.existsSync(fullPath)) {
      missing.push(imgPath);
    } else {
      const stats = fs.statSync(fullPath);
      const buf = Buffer.alloc(12);
      const fd = fs.openSync(fullPath, 'r');
      fs.readSync(fd, buf, 0, 12, 0);
      fs.closeSync(fd);

      const isJpg = buf[0] === 0xff && buf[1] === 0xd8;
      const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
      const isWebp = buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP';

      if (stats.size < 2000 || (!isJpg && !isPng && !isWebp)) {
        corrupt.push({ path: imgPath, size: stats.size, magic: buf.toString('hex') });
      } else {
        valid.push({ path: imgPath, sizeKB: Math.round(stats.size / 1024), type: isJpg ? 'JPG' : isPng ? 'PNG' : 'WEBP' });
      }
    }
  }

  console.log(`\nValid images: ${valid.length}`);
  console.log(`Missing images: ${missing.length}`);
  if (missing.length > 0) console.log('Missing:', missing);
  console.log(`Corrupt/Invalid images: ${corrupt.length}`);
  if (corrupt.length > 0) console.log('Corrupt:', corrupt);
  if (remoteInSpots.length > 0) console.log('Remote URLs in spots.ts:', remoteInSpots);

  // 2. Check cuisines.ts
  const cuisineRaw = fs.readFileSync('src/data/cuisines.ts', 'utf8');
  const cuisineImages = [...cuisineRaw.matchAll(/image:\s*["']([^"']+)["']/g)].map(m => m[1]);
  console.log(`\nFound ${cuisineImages.length} cuisine images in src/data/cuisines.ts:`);
  cuisineImages.forEach(img => console.log(' - ' + img));

  // 3. Check Hero.tsx
  const heroRaw = fs.readFileSync('src/components/Hero.tsx', 'utf8');
  const heroImages = [...heroRaw.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
  console.log(`\nFound Hero images in src/components/Hero.tsx:`, heroImages);

  // 4. List all files currently in public/images/spots and public/images/cuisine
  console.log('\n--- Files in public/images/spots ---');
  const spotsFiles = fs.readdirSync('public/images/spots');
  console.log(`Total files in public/images/spots: ${spotsFiles.length}`);

  console.log('\n--- Files in public/images/cuisine ---');
  const cuisineFiles = fs.readdirSync('public/images/cuisine');
  console.log(`Total files in public/images/cuisine: ${cuisineFiles.length}`, cuisineFiles);
}

inspectProjectImages();

