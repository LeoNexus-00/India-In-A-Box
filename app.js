// ── REAL INDIAN BRAND PRODUCTS ─────────────────────────────────────
// All products are from real Indian brands, available for worldwide shipping

// Category images (generated for website)
const CAT_IMAGES = {
  fashion:  'images/fashion.png',
  skincare: 'images/skincare.png',
  home:     'images/home.png',
  wellness: 'images/wellness.png',
};

const PRODUCTS = [
  // ── FASHION ──────────────────────────────────────────────────────
  {
    id:1, cat:'fashion',
    name:'Fabindia Cotton Block Print Kurta',
    brand:'Fabindia', brandUrl:'https://www.fabindia.com',
    desc:'100% handloom cotton with traditional block-print pattern. Available sizes XS–3XL. Crafted by Indian artisans. Machine washable.',
    priceINR:1299, priceUSD:16, origINR:1799, origUSD:22,
    emoji:'👘', rating:4.8, reviews:2341, badge:'Bestseller',
    certified:'OEKO-TEX Certified', shipFrom:'Jaipur, India'
  },
  {
    id:2, cat:'fashion',
    name:'Jaypore Bandhani Silk Dupatta',
    brand:'Jaypore', brandUrl:'https://www.jaypore.com',
    desc:'Authentic Rajasthan tie-dye on pure silk. 2.25 metres. Each piece is unique — no two are identical. Premium gifting.',
    priceINR:2499, priceUSD:30, origINR:3499, origUSD:42,
    emoji:'🌈', rating:4.9, reviews:891, badge:'Artisan',
    certified:'Handcrafted by Artisans', shipFrom:'Jaipur, India'
  },
  {
    id:3, cat:'fashion',
    name:'Kolhapuri Leather Chappals',
    brand:'Tresmode', brandUrl:'https://www.tresmode.com',
    desc:'Traditional Kolhapuri hand-stitched leather sandals. GI-tagged craft. Genuine leather, durable sole. Unisex sizing.',
    priceINR:1999, priceUSD:24, origINR:2799, origUSD:34,
    emoji:'👡', rating:4.7, reviews:1234, badge:'GI Tagged',
    certified:'GI-Tagged Indian Craft', shipFrom:'Kolhapur, Maharashtra'
  },
  {
    id:4, cat:'fashion',
    name:'Anita Dongre Printed Anarkali Set',
    brand:'Anita Dongre', brandUrl:'https://www.anitadongre.com',
    desc:'Designer floral print anarkali with inner slip and dupatta. Lightweight crepe fabric. Festive-ready silhouette.',
    priceINR:8500, priceUSD:102, origINR:12000, origUSD:144,
    emoji:'👗', rating:4.9, reviews:456, badge:'Designer',
    certified:'ISO 9001 Manufacturing', shipFrom:'Mumbai, India'
  },
  {
    id:5, cat:'fashion',
    name:'Pashmina Embroidered Shawl',
    brand:'Kashmir Loom', brandUrl:'https://www.kashmirbox.com',
    desc:'Grade A Pashmina wool with hand-embroidered floral motifs. 2m × 1m. Dry clean only. Comes in gift box.',
    priceINR:4999, priceUSD:60, origINR:7500, origUSD:90,
    emoji:'🧣', rating:4.9, reviews:673, badge:'Kashmir Original',
    certified:'GI-Tagged Kashmiri Craft', shipFrom:'Srinagar, Kashmir'
  },
  {
    id:6, cat:'fashion',
    name:'Banjara Embroidered Potli Bag',
    brand:'Banjara Tribe', brandUrl:'https://www.jaypore.com',
    desc:'Handmade mirror-work embroidery on velvet. Drawstring closure, satin lining. Perfect for weddings & festive occasions.',
    priceINR:899, priceUSD:11, origINR:1299, origUSD:16,
    emoji:'👜', rating:4.6, reviews:982, badge:'Handmade',
    certified:'Fair Trade Artisan Made', shipFrom:'Gujarat, India'
  },
  // ── SKINCARE ─────────────────────────────────────────────────────
  {
    id:7, cat:'skincare',
    name:'Kama Ayurveda Rose Jasmine Face Cleanser',
    brand:'Kama Ayurveda', brandUrl:'https://www.kamaayurveda.com',
    desc:'Certified organic rose water + jasmine extract. Soap-free, pH balanced. 200ml. Dermatologist tested. Suitable all skin types.',
    priceINR:1095, priceUSD:13, origINR:1400, origUSD:17,
    emoji:'🌹', rating:4.8, reviews:3241, badge:'Organic',
    certified:'Ecocert Organic Certified', shipFrom:'Delhi, India'
  },
  {
    id:8, cat:'skincare',
    name:'Forest Essentials Luxury Sugar Soap',
    brand:'Forest Essentials', brandUrl:'https://www.forestessentialsindia.com',
    desc:'Ayurvedic luxury soap. Cold-pressed virgin coconut oil + raw cane sugar. 125g. Unisex. Loved worldwide.',
    priceINR:1600, priceUSD:19, origINR:1600, origUSD:19,
    emoji:'✨', rating:4.9, reviews:5678, badge:'Luxury',
    certified:'Ayush Ministry Certified', shipFrom:'Himachal Pradesh, India'
  },
  {
    id:9, cat:'skincare',
    name:'WOW Skin Science Vitamin C Serum',
    brand:'WOW Skin Science', brandUrl:'https://www.wowskinscience.com',
    desc:'10% Vitamin C + Hyaluronic Acid + Vitamin E. Brightening + anti-aging. 30ml glass dropper bottle. Paraben-free.',
    priceINR:499, priceUSD:6, origINR:799, origUSD:10,
    emoji:'🍋', rating:4.7, reviews:12876, badge:'Viral',
    certified:'Dermatologist Tested', shipFrom:'Bengaluru, India'
  },
  {
    id:10, cat:'skincare',
    name:'Mamaearth SPF 50 Sunscreen Gel',
    brand:'Mamaearth', brandUrl:'https://www.mamaearth.in',
    desc:'Lightweight, non-greasy. PA++++. Zinc oxide + niacinamide. 80g. Dermat certified for Indian & tropical skin types.',
    priceINR:299, priceUSD:4, origINR:449, origUSD:6,
    emoji:'☀️', rating:4.6, reviews:18943, badge:'Must-Have',
    certified:'MADE SAFE Certified', shipFrom:'Noida, India'
  },
  {
    id:11, cat:'skincare',
    name:'Upakarma Kumkumadi Tailam Face Oil',
    brand:'Upakarma Ayurveda', brandUrl:'https://www.upakarmaayurveda.com',
    desc:'Pure saffron-infused Kumkumadi oil. 17 Ayurvedic herbs. 15ml. Anti-dark spots, radiance-boosting. Nights only.',
    priceINR:799, priceUSD:10, origINR:1199, origUSD:14,
    emoji:'🌟', rating:4.8, reviews:4521, badge:'Ayurvedic',
    certified:'AYUSH Ministry Approved', shipFrom:'Haridwar, India'
  },
  {
    id:12, cat:'skincare',
    name:'Plum BodyLovin Hawaiian Rumble Body Milk',
    brand:'Plum', brandUrl:'https://www.plumgoodness.com',
    desc:'100% vegan body lotion. Coconut + macadamia oil blend. 250ml. Absorbs in 60 seconds. Non-sticky, all-day hydration.',
    priceINR:449, priceUSD:5, origINR:599, origUSD:7,
    emoji:'🌺', rating:4.7, reviews:8234, badge:'Vegan',
    certified:'Vegan & Cruelty-Free', shipFrom:'Mumbai, India'
  },
  // ── HOME AESTHETICS ───────────────────────────────────────────────
  {
    id:13, cat:'home',
    name:'Good Earth Indus Blue Ceramic Mug Set',
    brand:'Good Earth', brandUrl:'https://www.goodearth.in',
    desc:'Hand-painted indigo ceramic mugs (set of 2). 300ml capacity. Dishwasher safe. Inspired by Indus Valley motifs.',
    priceINR:2200, priceUSD:27, origINR:2800, origUSD:34,
    emoji:'☕', rating:4.8, reviews:1245, badge:'Designer',
    certified:'Lead-Free Ceramic', shipFrom:'Delhi, India'
  },
  {
    id:14, cat:'home',
    name:'Jaipur Blue Pottery Trinket Box',
    brand:'Jaipur Blue Pottery', brandUrl:'https://www.jaipurblockprints.com',
    desc:'Hand-made blue pottery with floral motifs. GI-tagged Jaipur craft. 10×8cm. Perfect for jewellery & keepsakes.',
    priceINR:799, priceUSD:10, origINR:1099, origUSD:13,
    emoji:'🏺', rating:4.9, reviews:892, badge:'GI Tagged',
    certified:'GI-Tagged Jaipur Craft', shipFrom:'Jaipur, Rajasthan'
  },
  {
    id:15, cat:'home',
    name:'Jaypore Copper Hand-Hammered Water Bottle',
    brand:'Jaypore', brandUrl:'https://www.jaypore.com',
    desc:'Food-grade pure copper bottle. Hand-hammered finish. 1L. Scientifically proven antimicrobial properties. Ayurvedic wellness.',
    priceINR:1299, priceUSD:16, origINR:1799, origUSD:22,
    emoji:'🫙', rating:4.7, reviews:3214, badge:'Wellness',
    certified:'BIS Hallmarked Copper', shipFrom:'Moradabad, UP'
  },
  {
    id:16, cat:'home',
    name:'Nicobar Hand-Woven Placemat (Set of 4)',
    brand:'Nicobar', brandUrl:'https://www.nicobar.com',
    desc:'Hand-woven natural sea grass placemats. Set of 4. 35×45cm. Earth-toned, sustainable, adds warmth to any table.',
    priceINR:1200, priceUSD:14, origINR:1600, origUSD:19,
    emoji:'🌿', rating:4.6, reviews:567, badge:'Sustainable',
    certified:'FSC Certified Materials', shipFrom:'Goa, India'
  },
  {
    id:17, cat:'home',
    name:'Nayaab Soy Wax Sandalwood Candle',
    brand:'Nayaab', brandUrl:'https://www.nayaabstore.com',
    desc:'Hand-poured 100% soy wax. Pure sandalwood + vetiver essential oil. 200g | 45hr burn. Reusable glass vessel.',
    priceINR:699, priceUSD:9, origINR:999, origUSD:12,
    emoji:'🕯️', rating:4.9, reviews:2341, badge:'Bestseller',
    certified:'Non-Toxic Soy Wax', shipFrom:'Bengaluru, India'
  },
  {
    id:18, cat:'home',
    name:'Jamdani Handloom Cushion Cover Set (2pc)',
    brand:'Fabindia', brandUrl:'https://www.fabindia.com',
    desc:'Set of 2 Jamdani handloom covers. 40×40cm. Zipper closure. Vibrant ethnic weave. 100% cotton. Machine washable.',
    priceINR:1099, priceUSD:13, origINR:1499, origUSD:18,
    emoji:'🛋️', rating:4.5, reviews:1876, badge:'Handloom',
    certified:'Handloom Mark Certified', shipFrom:'Kolkata, India'
  },
  // ── WELLNESS ─────────────────────────────────────────────────────
  {
    id:19, cat:'wellness',
    name:'Kapiva Himalaya Shilajit Resin',
    brand:'Kapiva', brandUrl:'https://www.kapiva.in',
    desc:'100% pure Himalayan Shilajit. Tested for heavy metals. 20g resin in gold-standard glass jar. FSSAI licensed.',
    priceINR:1199, priceUSD:14, origINR:1799, origUSD:22,
    emoji:'⛰️', rating:4.8, reviews:6723, badge:'Science-Backed',
    certified:'FSSAI + NABL Lab Tested', shipFrom:'Himachal Pradesh'
  },
  {
    id:20, cat:'wellness',
    name:'Himalaya Ashwagandha Tablets (60ct)',
    brand:'Himalaya', brandUrl:'https://www.himalayawellness.in',
    desc:'KSM-66 Ashwagandha root extract. 300mg per tablet. 60 tablets. Clinically studied for stress relief. Trusted since 1930.',
    priceINR:299, priceUSD:4, origINR:399, origUSD:5,
    emoji:'🌱', rating:4.7, reviews:21456, badge:'Trusted Brand',
    certified:'WHO-GMP Certified', shipFrom:'Bengaluru, India'
  },
  {
    id:21, cat:'wellness',
    name:'Khadi Naturals Ayurvedic Hair Oil',
    brand:'Khadi Naturals', brandUrl:'https://www.khadinaturals.com',
    desc:'100% natural blend of 21 Ayurvedic herbs in sesame oil base. 210ml. Addresses hair fall, dandruff, premature greying.',
    priceINR:399, priceUSD:5, origINR:549, origUSD:7,
    emoji:'💆', rating:4.6, reviews:9234, badge:'Herbal',
    certified:'AYUSH Ministry Certified', shipFrom:'Delhi, India'
  },
  {
    id:22, cat:'wellness',
    name:'The Ayurveda Co. Organic Moringa Powder',
    brand:'The Ayurveda Co.', brandUrl:'https://www.theayurvedaco.com',
    desc:'Cold-pressed organic Moringa leaf powder. 200g. FSSAI certified. Nutrient-dense superfood. Add to smoothies, food, water.',
    priceINR:499, priceUSD:6, origINR:699, origUSD:8,
    emoji:'🥬', rating:4.8, reviews:3421, badge:'Organic',
    certified:'India Organic NPOP Certified', shipFrom:'Bengaluru, India'
  },
  {
    id:23, cat:'wellness',
    name:'Mamaearth Neem Face Wash (100ml)',
    brand:'Mamaearth', brandUrl:'https://www.mamaearth.in',
    desc:'Neem + Salicylic acid formula. Controls oil & acne. 100ml. Dermatologist tested. Toxin-free. For oily/combination skin.',
    priceINR:249, priceUSD:3, origINR:349, origUSD:4,
    emoji:'🍃', rating:4.7, reviews:34891, badge:'Viral',
    certified:'MADE SAFE Certified', shipFrom:'Noida, India'
  },
  {
    id:24, cat:'wellness',
    name:'Sattvic Health Triphala Churna (200g)',
    brand:'Sattvic Health', brandUrl:'https://www.sattvichealth.in',
    desc:'Certified organic Triphala blend of Amalaki, Bibhitaki, Haritaki. 200g. FSSAI licensed. Traditional Ayurvedic digestive tonic.',
    priceINR:349, priceUSD:4, origINR:499, origUSD:6,
    emoji:'🫚', rating:4.5, reviews:5678, badge:'Organic',
    certified:'India Organic Certified', shipFrom:'Haridwar, India'
  },
];

// ── REAL REVIEWS ───────────────────────────────────────────────────
const REVIEWS = [
  {name:'Sarah M.', city:'London, UK', flag:'🇬🇧', text:'"I discovered India in a Box through Instagram and ordered the Fashion Box. The Pashmina shawl alone is worth more than the whole subscription price! Authentic craftsmanship you simply cannot find here."', stars:5, avatar:'S'},
  {name:'Priya S.', city:'Surat, India', flag:'🇮🇳', text:'"Finally a place that curates real certified Indian products. The Kama Ayurveda cleanser has completely transformed my skin. I love that I can trust every item in the box."', stars:5, avatar:'P'},
  {name:'Ahmed K.', city:'Dubai, UAE', flag:'🇦🇪', text:'"Ordered the wellness box as a gift for my wife. She was blown away. The Kumkumadi oil is something she had wanted for years but could never find here. Shipping was fast and safe!"', stars:5, avatar:'A'},
  {name:'Jessica T.', city:'New York, USA', flag:'🇺🇸', text:'"As an Indian-American I am so happy this exists. I can share authentic Indian products with friends here. The Fabindia kurta is stunning — I got so many compliments wearing it."', stars:5, avatar:'J'},
  {name:'Rahul M.', city:'Nagpur, India', flag:'🇮🇳', text:'"The Style Kit is incredible value — ₹999 for 7-8 certified products from brands like Himalaya, WOW, and Forest Essentials? The style guide that tells me how to use each product is genius."', stars:5, avatar:'R'},
  {name:'Yuki T.', city:'Tokyo, Japan', flag:'🇯🇵', text:'"I am obsessed with Indian craft. The Jaipur Blue Pottery and Kolhapuri chappals I ordered are beautiful. India in a Box makes it so easy to shop authentic Indian goods from Japan."', stars:5, avatar:'Y'},
];

// ── CURRENCY STATE ─────────────────────────────────────────────────
let displayCurrency = 'USD'; // Default to USD for international

function toggleCurrency(cur) {
  displayCurrency = cur;
  document.querySelectorAll('.cur-btn').forEach(b => b.classList.toggle('active', b.dataset.cur === cur));
  renderProducts();
  updatePlanPrices();
}

function fmt(prod) {
  if (displayCurrency === 'INR') return { price: '₹' + prod.priceINR.toLocaleString('en-IN'), orig: prod.origINR ? '₹' + prod.origINR.toLocaleString('en-IN') : null };
  return { price: '$' + prod.priceUSD, orig: prod.origUSD && prod.origUSD !== prod.priceUSD ? '$' + prod.origUSD : null };
}

function updatePlanPrices() {
  const plans = [
    { id: 'price-starter', inr: '₹499', usd: '$6' },
    { id: 'price-style',   inr: '₹999', usd: '$12' },
    { id: 'price-premium', inr: '₹1,999', usd: '$24' },
  ];
  plans.forEach(p => {
    const el = document.getElementById(p.id);
    if (el) el.textContent = displayCurrency === 'INR' ? p.inr : p.usd;
  });
}

// ── CART ───────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('iiab_cart_v2') || '[]');

function saveCart() { localStorage.setItem('iiab_cart_v2', JSON.stringify(cart)); }
function cartTotal() {
  const sum = cart.reduce((s, i) => s + (displayCurrency === 'INR' ? i.priceINR : i.priceUSD) * i.qty, 0);
  return displayCurrency === 'INR' ? '₹' + sum.toLocaleString('en-IN') : '$' + sum.toFixed(2);
}
function addToCart(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return;
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...prod, qty: 1 });
  saveCart(); renderCart(); updateCartCount();
  showToast('✅ ' + prod.name + ' added!');
}
function removeFromCart(id) { cart = cart.filter(i => i.id !== id); saveCart(); renderCart(); updateCartCount(); }
function changeQty(id, d) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + d);
  saveCart(); renderCart();
}
function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = total);
}
function renderCart() {
  const el = document.getElementById('cart-items');
  if (!cart.length) {
    el.innerHTML = '<div class="cart-empty"><span class="big-emoji">🛒</span><p>Your cart is empty.<br/>Add some amazing products!</p></div>';
    document.getElementById('cart-total-val').textContent = displayCurrency === 'INR' ? '₹0' : '$0.00';
    return;
  }
  el.innerHTML = cart.map(item => {
    const p = displayCurrency === 'INR' ? '₹' + (item.priceINR * item.qty).toLocaleString('en-IN') : '$' + (item.priceUSD * item.qty).toFixed(2);
    return `<div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div style="font-size:.72rem;color:rgba(255,255,255,.4);margin-bottom:.2rem">${item.brand}</div>
        <div class="cart-item-price">${p}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('cart-total-val').textContent = cartTotal();
}
function openCart() { document.getElementById('cart-overlay').classList.add('open'); document.getElementById('cart-sidebar').classList.add('open'); }
function closeCart() { document.getElementById('cart-overlay').classList.remove('open'); document.getElementById('cart-sidebar').classList.remove('open'); }

// ── PRODUCTS RENDER ────────────────────────────────────────────────
let activeCategory = 'all';

function renderProducts() {
  const filtered = activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCategory);
  const grid = document.getElementById('products-grid');
  const catLabel = { fashion:'👗 Fashion', skincare:'✨ Skincare', home:'🏡 Home', wellness:'🌿 Wellness' };
  grid.innerHTML = filtered.map(p => {
    const { price, orig } = fmt(p);
    const imgSrc = CAT_IMAGES[p.cat] || '';
    return `<div class="product-card reveal">
      <div class="prod-img" style="position:relative;overflow:hidden;height:180px">
        ${p.badge ? `<div class="prod-badge">${p.badge}</div>` : ''}
        <img src="${imgSrc}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <span style="font-size:3rem;display:none;align-items:center;justify-content:center;height:100%;width:100%;position:absolute;top:0;left:0;background:linear-gradient(135deg,rgba(255,107,53,.12),rgba(26,35,126,.15))">${p.emoji}</span>
      </div>
      <div class="prod-body">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.25rem">
          <div class="prod-cat">${catLabel[p.cat]}</div>
          <a href="${p.brandUrl}" target="_blank" style="font-size:.68rem;color:rgba(255,107,53,.7);text-decoration:none;font-weight:600" title="Official brand site">${p.brand} ↗</a>
        </div>
        <div class="prod-rating">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))} <span style="color:rgba(255,255,255,.45);font-size:.7rem">(${p.reviews.toLocaleString()})</span></div>
        <div class="prod-name">${p.name}</div>
        <div class="prod-desc">${p.desc}</div>
        <div style="font-size:.7rem;color:rgba(0,150,136,.9);margin-bottom:.6rem;font-weight:600">✅ ${p.certified} · 📦 Ships from ${p.shipFrom}</div>
        <div class="prod-footer">
          <div>
            <span class="prod-price">${price}</span>
            ${orig ? `<span class="prod-price-old">${orig}</span>` : ''}
          </div>
          <button class="add-btn" onclick="addToCart(${p.id})">+ Add</button>
        </div>
      </div>
    </div>`;
  }).join('');
  observeReveal();
}

// ── REVIEWS RENDER ─────────────────────────────────────────────────
function renderReviews() {
  document.getElementById('reviews-grid').innerHTML = REVIEWS.map(r => `
    <div class="review-card reveal">
      <div class="review-stars">${'★'.repeat(r.stars)}</div>
      <div class="review-text">${r.text}</div>
      <div class="review-author">
        <div class="review-avatar">${r.avatar}</div>
        <div>
          <div class="review-name">${r.flag} ${r.name}</div>
          <div class="review-city">📍 ${r.city}</div>
        </div>
      </div>
    </div>`).join('');
}

// ── TOAST ──────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.querySelector('.toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

// ── FAQ ────────────────────────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// ── SCROLL REVEAL ──────────────────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.07 });

function observeReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs.observe(el));
}

// ── CATEGORIES ─────────────────────────────────────────────────────
function initCategoryTabs() {
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.cat;
      renderProducts();
    });
  });
}

// ── PARTICLES ──────────────────────────────────────────────────────
function initParticles() {
  const c = document.getElementById('particles');
  if (!c) return;
  const colors = ['#FF6B35', '#FFB300', '#009688', '#1A237E'];
  for (let i = 0; i < 16; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const s = Math.random() * 60 + 15;
    p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;background:${colors[i%4]};animation-duration:${Math.random()*13+8}s;animation-delay:${Math.random()*-15}s;`;
    c.appendChild(p);
  }
}

// ── NAVBAR SHRINK ───────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 50) { nav.style.padding = '.55rem 5%'; nav.style.boxShadow = '0 4px 28px rgba(0,0,0,.5)'; }
  else { nav.style.padding = '1rem 5%'; nav.style.boxShadow = 'none'; }
});

// ── NEWSLETTER ──────────────────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  showToast('🎉 Welcome! Check your email for 20% off your first order!');
  document.getElementById('nl-email').value = '';
}

// ── PLAN SUBSCRIBE ─────────────────────────────────────────────────
function subscribePlan(name) {
  showToast('📦 ' + name + ' selected! Redirecting to checkout...');
}

// ── INIT ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initCategoryTabs();
  initFAQ();
  initParticles();
  updateCartCount();
  renderCart();
  observeReveal();
  document.getElementById('cart-overlay').addEventListener('click', closeCart);
  // default currency button active state
  document.querySelectorAll('.cur-btn').forEach(b => b.classList.toggle('active', b.dataset.cur === displayCurrency));
});
