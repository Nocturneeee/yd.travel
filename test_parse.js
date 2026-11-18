const https = require('https');
https.get('https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/indonesia.svg', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /<path[^>]*name="([^"]*)"[^>]*d="([^"]*)"/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      if (/Bali|Jawa Timur|Nusa Tenggara Barat/i.test(match[1])) {
        const d = match[2];
        let x = 0, y = 0;
        let sumX = 0, sumY = 0, count = 0;
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        const cmds = d.match(/[mlvzhqtcsa]?[^mlvzhqtcsa]+/gi);
        if (cmds) {
          cmds.forEach(cmd => {
            const type = cmd[0];
            const nums = cmd.substring(1).trim().split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
            for (let i = 0; i < nums.length; i += 2) {
              if (i + 1 < nums.length) {
                if (type === type.toUpperCase()) { x = nums[i]; y = nums[i+1]; }
                else { x += nums[i]; y += nums[i+1]; }
                sumX += x; sumY += y; count++;
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
              }
            }
          });
        }
        console.log(`${match[1]}: bbox[${minX.toFixed(1)}..${maxX.toFixed(1)}, ${minY.toFixed(1)}..${maxY.toFixed(1)}] avg[${(sumX/count).toFixed(1)}, ${(sumY/count).toFixed(1)}]`);
      }
    }
  });
});
