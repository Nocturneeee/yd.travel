// Stylised dotted world map
try {
  const s = document.getElementById('mapsvg');
  if (s) {
    let h = '';
    const land = [
      [40, 60, 300, 200],
      [150, 230, 200, 200],
      [430, 70, 200, 130],
      [470, 190, 150, 220],
      [560, 70, 380, 200],
      [700, 230, 150, 100]
    ];
    land.forEach(([x, y, w, hh]) => {
      for (let i = x; i < x + w; i += 14) {
        for (let j = y; j < y + hh; j += 14) {
          h += `<circle cx="${i}" cy="${j}" r="1.6" fill="#fff" opacity=".05"/>`;
        }
      }
    });
    [[40, 100, 5], [395, 120, 5], [440, 130, 4], [430, 165, 5], [395, 165, 6], [470, 180, 3], [500, 160, 3], [512, 200, 3], [390, 250, 4], [445, 235, 6], [860, 250, 6], [285, 235, 4], [455, 135, 3]].forEach(([x, y, r]) => {
      h += `<circle cx="${x * 1}" cy="${y * 1}" r="${r * 4}" fill="#f5a02b" opacity=".12"/><circle cx="${x}" cy="${y}" r="${r}" fill="#f5a02b"/>`;
    });
    s.innerHTML = h;
  }
} catch (e) {}
