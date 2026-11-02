const http = require('http');
const fs = require('fs');

async function testHttpServing() {
  const spotsFiles = fs.readdirSync('public/images/spots').map(f => `/images/spots/${f}`);
  const cuisineFiles = fs.readdirSync('public/images/cuisine').map(f => `/images/cuisine/${f}`);
  const allUrls = [...spotsFiles, ...cuisineFiles];

  console.log(`Testing HTTP response for all ${allUrls.length} images from dev server (http://localhost:3000)...\n`);

  let failures = [];
  let successes = 0;

  for (const urlPath of allUrls) {
    await new Promise((resolve) => {
      http.get(`http://localhost:3000${urlPath}`, (res) => {
        if (res.statusCode === 200) {
          successes++;
        } else {
          failures.push({ path: urlPath, status: res.statusCode });
        }
        res.resume();
        resolve();
      }).on('error', (err) => {
        failures.push({ path: urlPath, error: err.message });
        resolve();
      });
    });
  }

  console.log(`HTTP 200 Successes: ${successes} / ${allUrls.length}`);
  if (failures.length > 0) {
    console.error('HTTP Failures:', failures);
  } else {
    console.log('ALL IMAGES DELIVERED SUCCESSFULLY WITH HTTP 200 OK!');
  }
}

testHttpServing();

