// ── PRODUCTS DATA ──────────────────────────────────────────────────
const PRODUCTS = [
  // Fashion Accessories
  { id:1, cat:'fashion', name:'Jaipuri Block-Print Scarf', desc:'Hand-stamped block-print on soft cotton. 180×70 cm. BIS certified.', price:349, orig:499, emoji:'🧣', rating:4.8, reviews:124, badge:'Bestseller', colors:['#FF6B35','#1A237E','#4CAF50'] },
  { id:2, cat:'fashion', name:'Bandhani Tie-Dye Dupatta', desc:'Authentic Surat Bandhani. Vibrant tie-dye on georgette. OEKO-TEX certified.', price:499, orig:699, emoji:'🌈', rating:4.9, reviews:89, badge:'New', colors:['#E91E63','#FF9800','#9C27B0'] },
  { id:3, cat:'fashion', name:'Embroidered Clutch Bag', desc:'Hand-embroidered mirror-work clutch. 24×16 cm. Magnetic snap closure.', price:599, orig:899, emoji:'👜', rating:4.7, reviews:67, badge:null, colors:['#FF6B35','#FFB300'] },
  { id:4, cat:'fashion', name:'Oxidised Statement Earrings', desc:'Handcrafted oxidised silver-tone jhumkas. Hypoallergenic hooks.', price:249, orig:349, emoji:'💍', rating:4.6, reviews:203, badge:'Hot', colors:['#9E9E9E'] },
  { id:5, cat:'fashion', name:'Handloom Cotton Kurta', desc:'Pure handloom cotton with subtle texture. XS–3XL. Dermat-tested dyes.', price:899, orig:1299, emoji:'👘', rating:4.8, reviews:56, badge:null, colors:['#FF6B35','#1A237E','#F5F5F5'] },
  { id:6, cat:'fashion', name:'Phulkari Tote Bag', desc:'Punjab Phulkari embroidery on sturdy canvas. Spacious zip closure.', price:699, orig:999, emoji:'🛍️', rating:4.5, reviews:41, badge:'Eco', colors:['#FF6B35','#4CAF50'] },
  // Skincare
  { id:7, cat:'skincare', name:'Kumkumadi Night Oil', desc:'Ayurvedic saffron-infused face oil. CDSCO approved. 30ml dropper.', price:449, orig:599, emoji:'✨', rating:4.9, reviews:312, badge:'Bestseller', colors:['#FFB300'] },
  { id:8, cat:'skincare', name:'Multani Mitti Clay Mask', desc:'100% pure Fuller\'s Earth. FSSAI approved. For all skin types.', price:199, orig:299, emoji:'🌿', rating:4.7, reviews:198, badge:null, colors:['#A1887F'] },
  { id:9, cat:'skincare', name:'Vitamin C Face Serum', desc:'Stable 15% L-Ascorbic Acid. Dermatologist tested. 30ml glass bottle.', price:549, orig:799, emoji:'🍋', rating:4.8, reviews:156, badge:'New', colors:['#FFD700'] },
  { id:10, cat:'skincare', name:'SPF 50+ Sunscreen Gel', desc:'Lightweight, non-greasy. PA++++. Dermatologist certified for Indian climate.', price:299, orig:449, emoji:'☀️', rating:4.6, reviews:421, badge:'Must-Have', colors:['#FFEB3B'] },
  { id:11, cat:'skincare', name:'Rose Hip Lip Balm', desc:'Natural rose hip + shea butter. Tinted + nude options. CDSCO certified.', price:149, orig:199, emoji:'🌹', rating:4.7, reviews:289, badge:null, colors:['#E91E63','#F48FB1','#D2691E'] },
  { id:12, cat:'skincare', name:'De-Tan Face Scrub', desc:'Walnut + turmeric micro-scrub. FSSAI approved. 100g. Gentle exfoliation.', price:249, orig:349, emoji:'🫧', rating:4.5, reviews:134, badge:null, colors:['#FF9800'] },
  // Home Aesthetics
  { id:13, cat:'home', name:'Soy Wax Scented Candle', desc:'Hand-poured. 40-hour burn. Fragrances: Sandalwood, Jasmine, Rose.', price:349, orig:499, emoji:'🕯️', rating:4.9, reviews:178, badge:'Bestseller', colors:['#FFF9C4','#FFCC80','#F8BBD9'] },
  { id:14, cat:'home', name:'Block-Print Cushion Cover', desc:'Jaipuri block-print on 100% cotton. 40×40 cm. Zipper closure.', price:299, orig:449, emoji:'🛋️', rating:4.6, reviews:92, badge:null, colors:['#FF6B35','#1A237E','#4CAF50'] },
  { id:15, cat:'home', name:'Brass Ganesha Idol', desc:'Hand-cast brass. 10 cm height. BIS hall-marked artisan craft.', price:799, orig:1099, emoji:'🪔', rating:4.9, reviews:67, badge:'Limited', colors:['#FFD700'] },
  { id:16, cat:'home', name:'Terracotta Tea Set (4pc)', desc:'Handmade terracotta cups. Naturally cooling. Safe for hot beverages.', price:599, orig:849, emoji:'🍵', rating:4.7, reviews:45, badge:null, colors:['#A1887F'] },
  { id:17, cat:'home', name:'Aromatherapy Reed Diffuser', desc:'Essential oil blend + 8 natural reeds. 120ml. 60-day fragrance.', price:449, orig:649, emoji:'🌸', rating:4.8, reviews:113, badge:'New', colors:['#CE93D8','#F48FB1'] },
  { id:18, cat:'home', name:'Macramé Wall Hanging', desc:'Handmade cotton macramé. 45×90 cm. Boho-chic aesthetic.', price:699, orig:999, emoji:'🎨', rating:4.6, reviews:38, badge:'Artisan', colors:['#EFEBE9'] },
  // Wellness
  { id:19, cat:'wellness', name:'Ashwagandha KSM-66 Capsules', desc:'Clinically studied root extract. 300mg × 60 caps. FSSAI & GMP certified.', price:549, orig:799, emoji:'💊', rating:4.8, reviews:267, badge:'Science-Backed', colors:['#4CAF50'] },
  { id:20, cat:'wellness', name:'Jade Face Roller', desc:'Genuine jade stone. Dual-end. Anti-puffiness, lymphatic drainage.', price:399, orig:599, emoji:'💚', rating:4.7, reviews:189, badge:null, colors:['#4CAF50','#81C784'] },
  { id:21, cat:'wellness', name:'Triphala Herbal Blend', desc:'Organic Triphala powder. FSSAI certified. 200g. Traditional Ayurveda.', price:249, orig:349, emoji:'🌱', rating:4.6, reviews:134, badge:'Organic', colors:['#8BC34A'] },
  { id:22, cat:'wellness', name:'Neem Wooden Comb (Wide)', desc:'100% natural neem. Anti-static, anti-dandruff. Handcrafted.', price:149, orig:199, emoji:'🪮', rating:4.5, reviews:312, badge:'Natural', colors:['#8D6E63'] },
];

const REVIEWS = [
  {name:'Priya S.',city:'Surat, Gujarat',text:'"I was spending ₹600 every month on random stuff from the bazaar. Now I get 7 certified products AND a style guide that actually teaches me what looks good. Game changer!"',stars:5,avatar:'P'},
  {name:'Rahul M.',city:'Nagpur, Maharashtra',text:'"The Style Kit is unbelievable value. I finally know how to dress for office. My colleagues started asking me for fashion advice. Genuinely shocked by the quality."',stars:5,avatar:'R'},
  {name:'Sneha K.',city:'Indore, MP',text:'"Gifted the Premium Box to my sister for Diwali. She literally cried when she opened it. The packaging is so beautiful and every product is certified. Will order again!"',stars:5,avatar:'S'},
  {name:'Ankit P.',city:'Jaipur, Rajasthan',text:'"As someone from a Tier 2 city, I never had access to this quality of products before. India in a Box changed that. The Kumkumadi oil alone is worth the subscription."',stars:5,avatar:'A'},
  {name:'Divya T.',city:'Lucknow, UP',text:'"Been subscribing for 4 months. Every box surprises me. The style guide is my favourite part — I\'ve learned more about fashion in 4 months than in my entire life!"',stars:5,avatar:'D'},
  {name:'Rohan B.',city:'Pune, Maharashtra',text:'"Ordered as a gift for my girlfriend. She absolutely loved the Boho Summer box. Will definitely continue subscribing. Delivery was super fast too!"',stars:4,avatar:'R'},
];

// ── CART ───────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('iiab_cart') || '[]');

function saveCart() { localStorage.setItem('iiab_cart', JSON.stringify(cart)); }

function cartTotal() { return cart.reduce((s,i)=>s+i.price*i.qty, 0); }

function addToCart(id) {
  const prod = PRODUCTS.find(p=>p.id===id);
  if (!prod) return;
  const existing = cart.find(i=>i.id===id);
  if (existing) existing.qty++;
  else cart.push({...prod, qty:1});
  saveCart();
  renderCart();
  updateCartCount();
  showToast(`✅ ${prod.name} added to cart!`);
}

function removeFromCart(id) { cart = cart.filter(i=>i.id!==id); saveCart(); renderCart(); updateCartCount(); }

function changeQty(id, delta) {
  const item = cart.find(i=>i.id===id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(); renderCart();
}

function updateCartCount() {
  const total = cart.reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('.cart-count').forEach(el=>el.textContent=total);
}

function renderCart() {
  const el = document.getElementById('cart-items');
  if (!cart.length) {
    el.innerHTML = '<div class="cart-empty"><span class="big-emoji">🛒</span><p>Your cart is empty.<br/>Add some amazing products!</p></div>';
    document.getElementById('cart-total-val').textContent = '₹0';
    return;
  }
  el.innerHTML = cart.map(item=>`
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">✕ Remove</button>
        </div>
      </div>
    </div>
  `).join('');
  document.getElementById('cart-total-val').textContent = '₹' + cartTotal().toLocaleString('en-IN');
}

function openCart() { document.getElementById('cart-overlay').classList.add('open'); document.getElementById('cart-sidebar').classList.add('open'); }
function closeCart() { document.getElementById('cart-overlay').classList.remove('open'); document.getElementById('cart-sidebar').classList.remove('open'); }

// ── PRODUCTS RENDER ────────────────────────────────────────────────
let activeCategory = 'all';

function renderProducts() {
  const filtered = activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===activeCategory);
  const grid = document.getElementById('products-grid');
  grid.innerHTML = filtered.map(p=>`
    <div class="product-card reveal">
      <div class="prod-img" style="background:linear-gradient(135deg,rgba(255,107,53,.12),rgba(26,35,126,.15))">
        ${p.badge ? `<div class="prod-badge">${p.badge}</div>` : ''}
        <span style="font-size:3.8rem">${p.emoji}</span>
      </div>
      <div class="prod-body">
        <div class="prod-cat">${p.cat === 'fashion' ? '👗 Fashion' : p.cat === 'skincare' ? '✨ Skincare' : p.cat === 'home' ? '🏡 Home' : '🌿 Wellness'}</div>
        <div class="prod-rating">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))} <span style="color:rgba(255,255,255,.5);font-size:.72rem">(${p.reviews})</span></div>
        <div class="prod-name">${p.name}</div>
        <div class="prod-desc">${p.desc}</div>
        <div class="prod-footer">
          <div>
            <span class="prod-price">₹${p.price.toLocaleString('en-IN')}</span>
            ${p.orig ? `<span class="prod-price-old">₹${p.orig}</span>` : ''}
          </div>
          <button class="add-btn" onclick="addToCart(${p.id})">+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
  // Re-trigger reveal
  observeReveal();
}

// ── REVIEWS RENDER ─────────────────────────────────────────────────
function renderReviews() {
  document.getElementById('reviews-grid').innerHTML = REVIEWS.map(r=>`
    <div class="review-card reveal">
      <div class="review-stars">${'★'.repeat(r.stars)}</div>
      <div class="review-text">${r.text}</div>
      <div class="review-author">
        <div class="review-avatar">${r.avatar}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-city">📍 ${r.city}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── TOAST ──────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.querySelector('.toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 3000);
}

// ── FAQ ────────────────────────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// ── SCROLL REVEAL ──────────────────────────────────────────────────
const revealObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); revealObs.unobserve(e.target); }});
},{threshold:0.08});

function observeReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>revealObs.observe(el));
}

// ── CATEGORY TABS ──────────────────────────────────────────────────
function initCategoryTabs() {
  document.querySelectorAll('.cat-tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      document.querySelectorAll('.cat-tab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.cat;
      renderProducts();
    });
  });
}

// ── PARTICLES ─────────────────────────────────────────────────────
function initParticles() {
  const c = document.getElementById('particles');
  if(!c) return;
  const colors=['#FF6B35','#FFB300','#009688','#1A237E'];
  for(let i=0;i<16;i++){
    const p=document.createElement('div'); p.className='particle';
    const s=Math.random()*60+15;
    p.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;background:${colors[i%4]};animation-duration:${Math.random()*13+8}s;animation-delay:${Math.random()*-15}s;`;
    c.appendChild(p);
  }
}

// ── NAVBAR SHRINK ─────────────────────────────────────────────────
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('main-nav');
  if(window.scrollY>50){nav.style.padding='.55rem 5%';nav.style.boxShadow='0 4px 28px rgba(0,0,0,.5)';}
  else{nav.style.padding='1rem 5%';nav.style.boxShadow='none';}
});

// ── NEWSLETTER ────────────────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('nl-email').value;
  if(!email) return;
  showToast('🎉 Welcome! Check your email for your 30% off coupon!');
  document.getElementById('nl-email').value='';
}

// ── PLAN CARDS ────────────────────────────────────────────────────
function subscribePlan(plan) { showToast(`📦 ${plan} subscription selected! Redirecting to checkout...`); }

// ── INIT ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', ()=>{
  renderProducts();
  renderReviews();
  initCategoryTabs();
  initFAQ();
  initParticles();
  updateCartCount();
  renderCart();
  observeReveal();

  document.getElementById('cart-overlay').addEventListener('click', closeCart);
});
