const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/data/spots.ts', 'utf8');

// Simple regex parser for spots array
const spotBlocks = content.split(/id:\s*["']/g).slice(1);

console.log(`Found ${spotBlocks.length} spots in data/spots.ts\n`);

const spotDetails = [];

spotBlocks.forEach((block, idx) => {
  const idMatch = block.match(/^([^"']+)/);
  const titleMatch = block.match(/title:\s*["']([^"']+)["']/);
  const locationMatch = block.match(/location:\s*["']([^"']+)["']/);
  const imageMatch = block.match(/image:\s*["']([^"']+)["']/);
  const galleryMatch = block.match(/gallery:\s*\[([\s\S]*?)\]/);
  
  const id = idMatch ? idMatch[1] : `unknown-${idx}`;
  const title = titleMatch ? titleMatch[1] : 'Untitled';
  const location = locationMatch ? locationMatch[1] : 'Unknown';
  const heroImage = imageMatch ? imageMatch[1] : 'None';
  
  let gallery = [];
  if (galleryMatch) {
    gallery = [...galleryMatch[1].matchAll(/["']([^"']+)["']/g)].map(m => m[1]);
  }

  spotDetails.push({ id, title, location, heroImage, gallery });
});

spotDetails.forEach((spot, i) => {
  console.log(`[${i+1}] ${spot.title} (${spot.id}) - Loc: ${spot.location}`);
  console.log(`    Hero: ${spot.heroImage}`);
  spot.gallery.forEach((g, gi) => {
    console.log(`    Gallery ${gi+1}: ${g}`);
  });
});

