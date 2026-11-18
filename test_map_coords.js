const https = require('https');
https.get('https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/indonesia.svg', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /<path[^>]*name="([^"]*)"[^>]*d="([^"]*)"/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      if (/Bali|Jawa Timur|Nusa Tenggara Barat/i.test(match[1])) {
        console.log('=== ' + match[1] + ' ===');
        console.log(match[2]);
      }
    }
  });
});
