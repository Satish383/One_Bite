/* ==========================================================
   ONE BITE — COMPLETE JAVASCRIPT
   ========================================================== */

/* ---------- MENU DATA (centralized — update prices here) ---------- */
const MENU_DATA = [
    // --- Potato Tornado ---
    { id: 1, category: 'potato', name: 'OB Potato Regular Tornado', desc: 'Crispy spiral potato, perfectly seasoned.', price: 70, veg: true, img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop&auto=format' },
    { id: 2, category: 'potato', name: 'OB Potato Sprinkler Tornado', desc: 'Tornado potato with tangy sprinkles.', price: 80, veg: true, img: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=500&h=400&fit=crop&auto=format' },
    { id: 3, category: 'potato', name: 'OB Potato Peppery Tornado', desc: 'Spiral potato with a peppery kick.', price: 85, veg: true, img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500&h=400&fit=crop&auto=format' },

    // --- Burgers ---
    { id: 4, category: 'burger', name: 'OB Street', desc: 'Classic street-style veg burger.', price: 50, veg: true, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop&auto=format' },
    { id: 5, category: 'burger', name: 'OB Amazing', desc: 'Loaded veg burger with signature sauce.', price: 70, veg: true, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=400&fit=crop&auto=format' },
    { id: 6, category: 'burger', name: 'OB Amazing Eggy', desc: 'Veg patty topped with a fried egg.', price: 85, veg: false, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop&auto=format' },
    { id: 7, category: 'burger', name: 'OB Peppery', desc: 'Spicy peppery veg burger.', price: 70, veg: true, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=400&fit=crop&auto=format' },
    { id: 8, category: 'burger', name: 'OB Cheese Corn', desc: 'Cheese and sweet corn veg burger.', price: 80, veg: true, img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&h=400&fit=crop&auto=format' },
    { id: 9, category: 'burger', name: 'OB Paneer Jalapeno', desc: 'Paneer patty with jalapeno heat.', price: 90, veg: true, img: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&h=400&fit=crop&auto=format' },
    { id: 10, category: 'burger', name: 'OB Double Patty', desc: 'Double patty, double cheese, double joy.', price: 120, veg: true, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=400&fit=crop&auto=format' },
    { id: 11, category: 'burger', name: 'OB Eggy', desc: 'Veg burger with egg topping.', price: 75, veg: false, img: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?w=500&h=400&fit=crop&auto=format' },
    { id: 12, category: 'burger', name: 'OB Chicken Amazing', desc: 'Crispy chicken patty with sauce.', price: 110, veg: false, img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&h=400&fit=crop&auto=format' },
    { id: 13, category: 'burger', name: 'OB Chicken Peppery', desc: 'Spicy peppery chicken burger.', price: 110, veg: false, img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=400&fit=crop&auto=format' },
    { id: 14, category: 'burger', name: 'OB Chicken Jalapeno', desc: 'Chicken patty with jalapeno kick.', price: 120, veg: false, img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&h=400&fit=crop&auto=format' },

    // --- Snacks ---
    { id: 15, category: 'snacks', name: 'Crazy Masala Fries', desc: 'Fries tossed in crazy masala.', price: 70, veg: true, img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop&auto=format' },
    { id: 16, category: 'snacks', name: 'Chilli Potato Balls', desc: 'Crispy potato balls with chilli.', price: 80, veg: true, img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&h=400&fit=crop&auto=format' },
    { id: 17, category: 'snacks', name: 'Crazy Fries With Sauce', desc: 'Fries loaded with signature sauce.', price: 90, veg: true, img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&h=400&fit=crop&auto=format' },
    { id: 18, category: 'snacks', name: 'Paneer Balls', desc: 'Crispy paneer balls, soft inside.', price: 100, veg: true, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=400&fit=crop&auto=format' },
    { id: 19, category: 'snacks', name: 'OB Chicken Balls', desc: 'Golden fried chicken balls.', price: 110, veg: false, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=400&fit=crop&auto=format' },
    { id: 20, category: 'snacks', name: 'OB Chicken Nuggets', desc: 'Crispy chicken nuggets.', price: 110, veg: false, img: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500&h=400&fit=crop&auto=format' },

    // --- Pasta ---
    { id: 21, category: 'pasta', name: 'OB Spicy Cottage', desc: 'Spicy cottage cheese pasta.', price: 110, veg: true, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=400&fit=crop&auto=format' },
    { id: 22, category: 'pasta', name: 'OB Cheese Pasta', desc: 'Creamy cheesy pasta.', price: 120, veg: true, img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&h=400&fit=crop&auto=format' },
    { id: 23, category: 'pasta', name: 'OB Spicy Cheese Cottage', desc: 'Spicy cheese with cottage.', price: 125, veg: true, img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&h=400&fit=crop&auto=format' },
    { id: 24, category: 'pasta', name: 'OB Chicken Spicy', desc: 'Spicy chicken pasta.', price: 140, veg: false, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=400&fit=crop&auto=format' },
    { id: 25, category: 'pasta', name: 'OB Chicken Cheese', desc: 'Creamy chicken cheese pasta.', price: 150, veg: false, img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&h=400&fit=crop&auto=format' },
    { id: 26, category: 'pasta', name: 'OB Chicken Cheese Cottage', desc: 'Chicken, cheese & cottage blend.', price: 160, veg: false, img: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&h=400&fit=crop&auto=format' },

    // --- Waffles ---
    { id: 27, category: 'waffles', name: 'OB Nutella', desc: 'Golden waffle with Nutella spread.', price: 90, veg: true, img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&h=400&fit=crop&auto=format' },
    { id: 28, category: 'waffles', name: 'OB Oreo / Kitkat', desc: 'Waffle topped with Oreo or KitKat.', price: 100, veg: true, img: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=500&h=400&fit=crop&auto=format' },
    { id: 29, category: 'waffles', name: 'OB Chocolate', desc: 'Classic chocolate waffle.', price: 90, veg: true, img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&h=400&fit=crop&auto=format' },
    { id: 30, category: 'waffles', name: 'Strawberry & Chocolate', desc: 'Waffle with strawberry & chocolate.', price: 110, veg: true, img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&h=400&fit=crop&auto=format' },

    // --- Chicken Bucket ---
    { id: 31, category: 'chicken-bucket', name: 'Fried Chicken (2 pcs)', desc: 'Crispy fried chicken, 2 pieces.', price: 120, veg: false, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=400&fit=crop&auto=format' },
    { id: 32, category: 'chicken-bucket', name: 'Fried Chicken (5 pcs)', desc: 'Crispy fried chicken, 5 pieces.', price: 280, veg: false, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=400&fit=crop&auto=format' },
    { id: 33, category: 'chicken-bucket', name: 'Fried Chicken (9 pcs)', desc: 'Crispy fried chicken, 9 pieces.', price: 480, veg: false, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=400&fit=crop&auto=format' },
    { id: 34, category: 'chicken-bucket', name: 'Fiery Grilled (2 pcs)', desc: 'Fiery grilled chicken, 2 pieces.', price: 140, veg: false, img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&h=400&fit=crop&auto=format' },
    { id: 35, category: 'chicken-bucket', name: 'Fiery Grilled (5 pcs)', desc: 'Fiery grilled chicken, 5 pieces.', price: 320, veg: false, img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&h=400&fit=crop&auto=format' },
    { id: 36, category: 'chicken-bucket', name: 'Fiery Grilled (9 pcs)', desc: 'Fiery grilled chicken, 9 pieces.', price: 550, veg: false, img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&h=400&fit=crop&auto=format' },

    // --- Grilled Chicken ---
    { id: 37, category: 'grilled-chicken', name: 'OB Grilled Chicken (Quarter)', desc: 'Tender grilled chicken quarter.', price: 150, veg: false, img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=400&fit=crop&auto=format' },
    { id: 38, category: 'grilled-chicken', name: 'OB Grilled Chicken (Half)', desc: 'Tender grilled chicken half.', price: 280, veg: false, img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=400&fit=crop&auto=format' },
    { id: 39, category: 'grilled-chicken', name: 'OB Grilled Chicken (Full)', desc: 'Tender grilled chicken full.', price: 520, veg: false, img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=400&fit=crop&auto=format' },

    // --- Rice Bowl ---
    { id: 40, category: 'rice-bowl', name: 'OB Paneer Rice Bowl', desc: 'Rice bowl with spiced paneer.', price: 130, veg: true, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop&auto=format' },
    { id: 41, category: 'rice-bowl', name: 'OB Chicken Rice Bowl', desc: 'Rice bowl with grilled chicken.', price: 160, veg: false, img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=400&fit=crop&auto=format' },

    // --- Wraps ---
    { id: 42, category: 'wraps', name: 'OB Cheese Potato Wrap', desc: 'Wrap with cheese & potato.', price: 80, veg: true, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=400&fit=crop&auto=format' },
    { id: 43, category: 'wraps', name: 'OB Paneer Wrap', desc: 'Wrap with spiced paneer.', price: 100, veg: true, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=400&fit=crop&auto=format' },
    { id: 44, category: 'wraps', name: 'OB Paneer Exotic Wrap', desc: 'Exotic paneer wrap.', price: 110, veg: true, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=400&fit=crop&auto=format' },
    { id: 45, category: 'wraps', name: 'OB Egg Wrap', desc: 'Wrap with egg filling.', price: 90, veg: false, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=400&fit=crop&auto=format' },
    { id: 46, category: 'wraps', name: 'OB Chicken Wrap', desc: 'Wrap with grilled chicken.', price: 120, veg: false, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=400&fit=crop&auto=format' },
    { id: 47, category: 'wraps', name: 'OB Chicken Exotic Wrap', desc: 'Exotic chicken wrap.', price: 130, veg: false, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=400&fit=crop&auto=format' },

    // --- Pizza (Veg) ---
    { id: 48, category: 'pizza', name: 'OB Cheese Pizza', desc: 'Classic cheese pizza.', price: 120, veg: true, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop&auto=format' },
    { id: 49, category: 'pizza', name: 'OB Classic Pizza', desc: 'Classic veg pizza.', price: 130, veg: true, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop&auto=format' },
    { id: 50, category: 'pizza', name: 'OB Paneer Peppery', desc: 'Paneer pizza with pepper.', price: 150, veg: true, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&h=400&fit=crop&auto=format' },
    { id: 51, category: 'pizza', name: 'OB Veggie Corn', desc: 'Pizza with veggies & corn.', price: 140, veg: true, img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&h=400&fit=crop&auto=format' },
    { id: 52, category: 'pizza', name: 'OB Cheese Mushroom', desc: 'Pizza with cheese & mushroom.', price: 150, veg: true, img: 'https://images.unsplash.com/photo-1571066811602-716837d681de?w=500&h=400&fit=crop&auto=format' },
    // --- Pizza (Non-Veg) ---
    { id: 53, category: 'pizza', name: 'OB Chicken Classic', desc: 'Classic chicken pizza.', price: 170, veg: false, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop&auto=format' },
    { id: 54, category: 'pizza', name: 'OB Chicken Peppery', desc: 'Chicken pizza with pepper.', price: 180, veg: false, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&h=400&fit=crop&auto=format' },
    { id: 55, category: 'pizza', name: 'OB Chicken Corn', desc: 'Chicken pizza with corn.', price: 180, veg: false, img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&h=400&fit=crop&auto=format' },
    { id: 56, category: 'pizza', name: 'OB Chicken Mushroom', desc: 'Chicken pizza with mushroom.', price: 190, veg: false, img: 'https://images.unsplash.com/photo-1571066811602-716837d681de?w=500&h=400&fit=crop&auto=format' },
    { id: 57, category: 'pizza', name: 'OB Chicken Exotica', desc: 'Exotic chicken pizza.', price: 200, veg: false, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop&auto=format' },

    // --- Add-ons ---
    { id: 58, category: 'addons', name: 'Extra Cheese', desc: 'Add extra cheese to any item.', price: 30, veg: true, img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&h=400&fit=crop&auto=format' },
    { id: 59, category: 'addons', name: 'Cheese Dip', desc: 'Creamy cheese dip on the side.', price: 25, veg: true, img: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=500&h=400&fit=crop&auto=format' }
];

/* ---------- RENDER MENU ---------- */
const menuGrid = document.getElementById('menuGrid');

function renderMenu(filter = 'all') {
    if (!menuGrid) return;
    const items = filter === 'all' ? MENU_DATA : MENU_DATA.filter(item => item.category === filter);

    menuGrid.innerHTML = items.map(item => `
    <div class="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up">
      <div class="menu-card">
        <div class="position-relative overflow-hidden">
          <img src="${item.img}" alt="${item.name}" class="menu-card-img" loading="lazy">
        </div>
        <div class="menu-card-body">
          <div class="d-flex justify-content-between align-items-start mb-1">
            <h5 class="menu-card-title">${item.name}</h5>
            <span class="veg-indicator ${item.veg ? 'veg' : 'nonveg'}">
              <span class="veg-dot"></span>${item.veg ? 'Veg' : 'Non-Veg'}
            </span>
          </div>
          <p class="menu-card-desc">${item.desc}</p>
          <div class="menu-card-footer">
            <span class="menu-price">₹${item.price}</span>
            <a href="tel:+918800893218" class="btn btn-accent btn-sm px-3">
              <i class="bi bi-bag-plus me-1"></i>Order
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');

    // Re-init AOS for newly injected elements
    if (window.AOS) AOS.refresh();
}

/* ---------- FILTER BUTTONS ---------- */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu(btn.dataset.filter);
    });
});

/* ---------- FOOTER MENU FILTER LINKS ---------- */
document.querySelectorAll('[data-footer-filter]').forEach(link => {
    link.addEventListener('click', () => {
        const filter = link.dataset.footerFilter;
        const btn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (btn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(filter);
        }
    });
});

/* ---------- NAVBAR SCROLL ---------- */
const navbar = document.getElementById('mainNav');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

/* ---------- BACK TO TOP ---------- */
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ---------- CLOSE MOBILE NAV ON LINK CLICK ---------- */
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const collapse = document.getElementById('navMenu');
        if (collapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(collapse);
            if (bsCollapse) bsCollapse.hide();
        }
    });
});

/* ---------- GALLERY LIGHTBOX ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img && lightbox && lightboxImg) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

/* ---------- SMOOTH SCROLL FOR HASH LINKS ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ---------- INIT ON DOM READY ---------- */
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderMenu('all');

    // Init AOS
    if (window.AOS) {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 60,
            disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        });
    }
});