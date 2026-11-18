const https = require('https');
https.get('https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/indonesia.svg', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Extract all path d and name attributes
    const paths = [];
    const nameRegex = /<path[^>]*name="([^"]*)"[^>]*>/g;
    let match;
    while ((match = nameRegex.exec(data)) !== null) {
      const name = match[1];
      const dMatch = data.match(new RegExp('<path[^>]*name="' + name + '[^>]*d="([^"]*)"', 'i'));
      if (dMatch && dMatch[1]) {
        paths.push({name: name, d: dMatch[1]});
      }
    }
    
    // Get start points
    for (const p of paths) {
      const firstMove = p.d.match(/^[Mm]\s+([-\d.]+)\s+([-\d.]+)/);
      if (firstMove) {
        const x = parseFloat(firstMove[1]);
        const y = parseFloat(firstMove[2]);
        console.log(p.name + ': start[' + x.toFixed(1) + ', ' + y.toFixed(1) + ']');
      }
    }
  });
});