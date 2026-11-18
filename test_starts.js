const https = require('https');
https.get('https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/indonesia.svg', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /<path[^>]*name="([^"]*)"[^>]*d="([^"]*)"/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      const name = match[1];
      const d = match[2];
      if (/Bali|Jawa|Nusa Tenggara|Yogyakarta|Banten/i.test(name)) {
        let x = 0, y = 0;
        let isRel = d.startsWith('m');
        let firstX = 0, firstY = 0;
        const firstMove = d.match(/^m\s*([-\d.]+)\s+([-\d.]+)/i) || d.match(/^M\s*([-\d.]+)\s+([-\d.]+)/i);
        if (firstMove) {
          firstX = parseFloat(firstMove[1]);
          firstY = parseFloat(firstMove[2]);
        }
        console.log(`${name}: start (${firstX}, ${firstY})`);
      }
    }
  });
});
