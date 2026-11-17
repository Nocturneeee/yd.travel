// Stylised vector map of Indonesia with active service location dots matching the catalog
try {
  const s = document.getElementById('mapsvg');
  if (s) {
    // Fetch cleaned SVG paths of Indonesia provinces from public asset CDN
    fetch('https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/indonesia.svg')
      .then(res => res.text())
      .then(xmlString => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlString, 'image/svg+xml');
        const features = doc.getElementById('features');
        if (!features) return;

        // Extract path elements
        const paths = Array.from(features.querySelectorAll('path'));
        let mapContent = '<g class="id-land" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round">';
        paths.forEach(p => {
          mapContent += `<path d="${p.getAttribute('d')}" name="${p.getAttribute('name') || ''}"/>`;
        });
        mapContent += '</g>';

        // Catalog-specific active service locations:
        // 1. Ubud, Bali
        // 2. Seminyak, Bali
        // 3. Uluwatu, Bali
        // 4. Malang / Mt Bromo, East Java
        // 5. Lombok, West Nusa Tenggara
        const catalogDots = [
          [682, 427, "Ubud, Bali"],
          [680, 431, "Seminyak, Bali"],
          [679, 433, "Uluwatu, Bali"],
          [638, 418, "Malang & Mt Bromo, East Java"],
          [712, 432, "Lombok, West Nusa Tenggara"]
        ];

        let dotsContent = '<g class="id-dots">';
        catalogDots.forEach(([x, y, label]) => {
          // Glow outer ring + pulsing dot + tooltip title
          dotsContent += `
            <g class="dot-group">
              <circle cx="${x}" cy="${y}" r="10" fill="#f5a02b" opacity="0.25">
                <animate attributeName="r" values="7;14;7" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.35;0.1;0.35" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="${x}" cy="${y}" r="4" fill="#f5a02b" stroke="#ffffff" stroke-width="0.8">
                <title>${label}</title>
              </circle>
            </g>`;
        });
        dotsContent += '</g>';

        s.innerHTML = mapContent + dotsContent;
      })
      .catch(err => {
        console.error('Failed to load Indonesia vector map:', err);
      });
  }
} catch (e) {
  console.error(e);
}
