const https = require('https');
https.get('https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/indonesia.svg', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /<path[^>]*name="([^"]*)"[^>]*>/g;
    let match;
    const starts = {};
    while ((match = regex.exec(data)) !== null) {
      const name = match[1];
      // find the d attribute
      const dMatch = data.match(new RegExp('<path[^>]*name="' + name + '[^>]*d="([^"]*)"', 'i'));
      if (dMatch && dMatch[1]) {
        const d = dMatch[1];
        const firstMove = d.match(/^[Mm]\s+([-\d.]+)\s+([-\d.]+)/);
        if (firstMove) {
          const x = parseFloat(firstMove[1]);
          const y = parseFloat(firstMove[2]);
          starts[name] = [x, y];
        }
      }
    }
    // Print only Java-related islands
    const keywords = ['Bali', 'Jawa', 'Nusa'];
    for (const [name, [x, y]] of Object.entries(starts)) {
      for (const kw of keywords) {
        if (name.includes(kw)) {
          console.log(name + ': start[' + x.toFixed(1) + ', ' + y.toFixed(1) + ']');
        }
      }
    }
  });
});