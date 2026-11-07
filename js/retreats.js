const R = [
  ["7 Day Mystic Mountain Retreat in Romania", "$1,000", "Gura Humorului, Romania", "Feb 15 - 21, 2026 <em>(7 days, 6 nights)</em>", "12 guests", "190+", "c1"],
  ["Yoga & Outdoor Retreat in Tuscany, Italy", "$1,328", "Province of Grosseto, Tuscany, Italy", "Jan 15 - 21, 2026 <em>(7 days, 6 nights)</em>", "6 guests", "125+", "c2"],
  ["Photography Retreat & Tour in Magical Morocco", "$5,575", "Morocco", "March 06 - 20, 2026 <em>(15 days, 14 nights)</em>", "18 guests", "312+", "c3"],
  ["Morocco Holiday & Desert Moon", "$3,829", "Marrakesh, Marrakesh-Safi, Morocco", "April 12 - 20, 2026 <em>(8 days, 7 nights)</em>", "6 guests", "412+", "c4"],
  ["8 Day Juice Detox Retreat in Portugal", "$1,294", "Portugal", "Feb 06 - 14, 2026 <em>(8 days, 7 nights)</em>", "12 guests", "112+", "c5"],
  ["7 Day Solo Travelers Retreat: Bali", "$406", "Ubud, Bali, Indonesia", "Jan | Feb | Mar | Apr | May <em>(7 days, 6 nights)</em>", "Solo", "287+", "c6"]
];

const ic = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor"><circle cx="8" cy="7" r="3"/><path d="M8 15s5-4 5-8a5 5 0 0 0-10 0c0 4 5 8 5 8z"/></svg>';

const cardsContainer = document.getElementById('cards');
if (cardsContainer) {
  cardsContainer.innerHTML = R.map(r => `
    <article class="card rv">
      <div class="l">
        <h3>${r[0]}</h3>
        <div class="pr">from <b>${r[1]}</b></div>
        <div class="meta">
          <div>${r[2]}${ic}</div>
          <div><span>${r[3]}</span>${ic}</div>
          <div>${r[4]}${ic}</div>
          <div><span>Trusted by ${r[5]} <em>clients worldwide</em></span><span class="st">★★★★★</span></div>
        </div>
        <a class="btn" href="#">Explore Retreat <i class="sq"></i></a>
      </div>
      <div class="img ${r[6]}"></div>
    </article>
  `).join('');
}
