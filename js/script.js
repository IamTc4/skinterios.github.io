// Main JavaScript file for Interior Designer site

console.log('Interior Designer site loaded.'); 

// === Service Gallery Modal Logic ===
// Map service alt attributes to image arrays (update paths as needed)
const serviceGalleries = {
  "Custom Desk Benches": [
    "images/services/desk-bench/1.jpg",
    "images/services/desk-bench/2.jpg"
  ],
  "Interior Design": [
    "images/services/interior-design/1.jpg",
    "images/services/interior-design/2.jpg"
  ],
  "Furniture Work": [
    "images/services/furniture/1.jpg",
    "images/services/furniture/2.jpg"
  ],
  "P.O.P & Paint": [
    "images/services/pop-paint/1.jpg",
    "images/services/pop-paint/2.jpg"
  ],
  "Civil Work": [
    "images/services/civil-work/1.jpg",
    "images/services/civil-work/2.jpg"
  ],
  "Fabrication Work": [
    "images/services/fabrication/1.jpg",
    "images/services/fabrication/2.jpg"
  ],
  "Electrical Work": [
    "images/services/electrical/1.jpg",
    "images/services/electrical/2.jpg"
  ],
  "AC Installation": [
    "images/services/ac/1.jpg",
    "images/services/ac/2.jpg"
  ]
};

// Gallery modal logic now works on any page with .services-section and .services-grid
if (document.querySelector('.services-section') && document.querySelector('.services-grid')) {
  document.querySelector('.services-grid').addEventListener('click', function(e) {
    const card = e.target.closest('.service-card');
    if (!card) return;
    const serviceTitle = card.querySelector('h2')?.textContent?.trim();
    const gallery = serviceGalleries[serviceTitle];
    if (!gallery) return;
    const galleryImagesDiv = document.getElementById('galleryImages');
    galleryImagesDiv.innerHTML = gallery.map(src => `<img src="${src}" alt="${serviceTitle} gallery image">`).join('');
    document.getElementById('galleryModal').style.display = 'flex';
  });
  document.getElementById('galleryClose').onclick = function() {
    document.getElementById('galleryModal').style.display = 'none';
    document.getElementById('galleryImages').innerHTML = '';
  };
  document.getElementById('galleryModal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
      document.getElementById('galleryImages').innerHTML = '';
    }
  });
} 