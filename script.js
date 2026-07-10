const seedProducts = [
  { id: "seed-joola-1", name: "JOOLA Ben Johns Hyperion C2", brand: "joola", category: "rackets", price: 18499, rating: 4.9, reviews: 128, badge: "Bestseller", color: "#1e2220", description: "Carbon-composite racket for controlled power and confident spin.", features: ["Carbon face", "Elongated sweet spot", "Advanced profile"] },
  { id: "seed-joola-2", name: "JOOLA Infinity Edge Racket", brand: "joola", category: "rackets", price: 5499, rating: 4.7, reviews: 74, badge: "Club pick", color: "#d33d35", description: "Versatile racket for developing club players.", features: ["Control feel", "Flared handle", "Club play"] },
  { id: "seed-joola-3", name: "JOOLA Prime 40+ 3-Star Balls", brand: "joola", category: "balls", price: 1299, rating: 4.8, reviews: 182, badge: "Competition", color: "#ffffff", description: "Consistent 40+ balls for predictable bounce.", features: ["3-star", "Pack of 12", "Competition use"] },
  { id: "seed-joola-4", name: "JOOLA Inside 15 Table", brand: "joola", category: "tables", price: 49999, rating: 4.8, reviews: 44, badge: "Indoor", color: "#263d46", description: "Foldable indoor table with smooth mobility.", features: ["15 mm surface", "Foldable", "Wheels"] },
  { id: "seed-tibhar-1", name: "Tibhar Evolution MX-P Rubber", brand: "tibhar", category: "rubbers", price: 4699, rating: 4.8, reviews: 88, badge: "Spin", color: "#d8312b", description: "Fast attacking rubber for heavy topspin.", features: ["Hard sponge", "High arc", "Offensive"] },
  { id: "seed-tibhar-2", name: "Tibhar Stratus Power Wood Blade", brand: "tibhar", category: "blades", price: 7199, rating: 4.7, reviews: 61, badge: "5-ply", color: "#d9a466", description: "Classic allround offensive blade with clean feedback.", features: ["5-ply wood", "Control", "Balanced speed"] },
  { id: "seed-tibhar-3", name: "Tibhar Game Racket Case", brand: "tibhar", category: "accessories", price: 1699, rating: 4.5, reviews: 42, badge: "Protective", color: "#151815", description: "Slim protective case for one assembled racket.", features: ["Hard shell", "Compact", "Zipper closure"] },
  { id: "seed-butterfly-1", name: "Butterfly Tenergy 05 Rubber", brand: "butterfly", category: "rubbers", price: 6999, rating: 4.9, reviews: 110, badge: "Pro choice", color: "#c7172d", description: "High-grip rubber for loopers and advanced players.", features: ["Spring sponge", "High spin", "Premium"] },
  { id: "seed-butterfly-2", name: "Butterfly Viscaria Style Blade", brand: "butterfly", category: "blades", price: 12999, rating: 4.9, reviews: 55, badge: "Carbon", color: "#202420", description: "Carbon-style offensive blade for fast close-table play.", features: ["Carbon feel", "Fast attack", "Pro build"] },
  { id: "seed-butterfly-3", name: "Butterfly Training Ball Pack", brand: "butterfly", category: "balls", price: 2199, rating: 4.6, reviews: 71, badge: "Training", color: "#ffffff", description: "Durable training balls for multi-ball sessions.", features: ["Pack of 30", "Training", "Consistent bounce"] },
  { id: "seed-stiga-1", name: "Stiga Cybershape Style Racket", brand: "stiga", category: "rackets", price: 8999, rating: 4.7, reviews: 67, badge: "Modern", color: "#d7ff3f", description: "Modern racket profile made for speed and control.", features: ["Large sweet spot", "Lightweight", "Control"] },
  { id: "seed-stiga-2", name: "Stiga Club Indoor Table", brand: "stiga", category: "tables", price: 44999, rating: 4.6, reviews: 37, badge: "Club", color: "#244652", description: "Indoor table for clubs, homes and training rooms.", features: ["Foldable", "Stable frame", "Club use"] },
  { id: "seed-stiga-3", name: "Stiga Court Shoes", brand: "stiga", category: "footwear", price: 6499, rating: 4.5, reviews: 29, badge: "Grip", color: "#f6f4ec", description: "Low-profile court shoes for quick lateral movement.", features: ["Non-marking", "Lightweight", "Grip sole"] }
];

const builderOptions = {
  blade: [
    { id: "5-ply-allround", name: "5-Ply Allround Wood", desc: "Best for control, blocks and developing technique.", price: 3200 },
    { id: "7-ply-offensive", name: "7-Ply Offensive Wood", desc: "More speed and stability for aggressive shots.", price: 5200 },
    { id: "carbon-pro", name: "Carbon Pro Blade", desc: "Fast carbon feel for advanced attacking players.", price: 9200 }
  ],
  forehand: [
    { id: "fh-control", name: "Control Rubber", desc: "Medium speed, easier placement and spin.", price: 2600 },
    { id: "fh-spin", name: "Heavy Spin Rubber", desc: "Higher grip for topspin and serves.", price: 4200 },
    { id: "fh-pro", name: "Pro Speed Rubber", desc: "Fast attacking rubber for experienced players.", price: 6200 }
  ],
  backhand: [
    { id: "bh-control", name: "Backhand Control", desc: "Stable receives, pushes and blocks.", price: 2400 },
    { id: "bh-spin", name: "Backhand Spin", desc: "Extra grip for flicks and counters.", price: 3900 },
    { id: "bh-pro", name: "Backhand Pro Speed", desc: "Fast backhand rubber for counter attacks.", price: 5900 }
  ],
  service: [
    { id: "basic-assembly", name: "Basic Assembly", desc: "Blade + rubber pasting with edge tape.", price: 600 },
    { id: "premium-assembly", name: "Premium Setup", desc: "Assembly, edge tape, case and balance check.", price: 1600 }
  ]
};


const addonOptions = [
  { id: "edge-tape", name: "Edge Tape", desc: "Protects the side of the blade and rubber sheets.", price: 250, color: "#111311" },
  { id: "racket-case", name: "Racket Case", desc: "Slim protective cover for carrying the assembled racket.", price: 799, color: "#263d46" },
  { id: "rubber-cleaner", name: "Rubber Cleaner", desc: "Cleaning spray to maintain grip and rubber life.", price: 449, color: "#d7ff3f" },
  { id: "ball-pack", name: "40+ Ball Pack", desc: "Practice ball pack for warmups and drills.", price: 599, color: "#ffffff" },
  { id: "grip-tape", name: "Grip Tape", desc: "Extra grip wrap for better handle comfort.", price: 199, color: "#d8312b" }
];

const rubberColours = [
  { label: "Red", value: "red", hex: "#d8312b" },
  { label: "Black", value: "black", hex: "#111311" }
];

const STORAGE_PRODUCTS = "ttw-admin-products";
const STORAGE_CART = "ttw-cart-v3";
const STORAGE_AUTH = "ttw-admin-auth";
const STORAGE_ORDERS = "ttw-orders";
const ADMIN_USER = "admin";
const ADMIN_PASS = "ttwala123";

// Replace this with your real Razorpay Test/Live Key ID.
const RAZORPAY_KEY_ID = "rzp_test_REPLACE_WITH_YOUR_KEY_ID";
const STORE_ORDER_EMAIL = "orders@tabletenniswala.in";

// Optional EmailJS configuration. Fill these values to send automatic emails from the static site.
const EMAILJS_CONFIG = {
  publicKey: "",
  serviceId: "",
  ownerTemplateId: "",
  customerTemplateId: ""
};

const state = {
  sort: "featured",
  cart: JSON.parse(localStorage.getItem(STORAGE_CART) || "[]")
};
let uploadedImageData = "";
let toastTimer;
let adminFormReady = false;
let activeModalProductId = null;

const formatPrice = value => new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
}).format(Number(value || 0));

const cap = value => String(value || "").charAt(0).toUpperCase() + String(value || "").slice(1);

function needsRubberColour(product) {
  const text = `${product.category || ""} ${product.name || ""} ${product.description || ""} ${(product.features || []).join(" ")}`.toLowerCase();
  return product.category === "rubbers" || text.includes("rubber");
}

function getAdminProducts() {
  try { return JSON.parse(localStorage.getItem(STORAGE_PRODUCTS) || "[]"); }
  catch { return []; }
}
function saveAdminProducts(products) { localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(products)); }
function getProducts() { return [...seedProducts, ...getAdminProducts()]; }
function getCartTotal() { return state.cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0); }

function fallbackArt(product) {
  return `<div class="product-art art-${product.category}" style="--product-color:${product.color || "#d7ff3f"}"></div>`;
}

function productArtwork(product) {
  return product.image
    ? `<img src="${product.image}" alt="${product.name}" onerror="this.remove();this.parentElement.insertAdjacentHTML('beforeend','${fallbackArt(product).replaceAll("'", "\\'")}')">`
    : fallbackArt(product);
}

function productCard(product) {
  return `<article class="product-card" data-product-card="${product.id}">
    <div class="product-visual" data-view-product="${product.id}">
      <span class="product-badge">${product.badge || cap(product.brand)}</span>
      ${productArtwork(product)}
      <button class="quick-add" data-add-product="${product.id}">Add to cart</button>
    </div>
    <div class="product-info" data-view-product="${product.id}">
      <div class="product-topline">
        <h3 class="product-name">${product.name}</h3>
        <span class="product-price">${formatPrice(product.price)}</span>
      </div>
      <div class="product-meta">
        <span>${cap(product.brand)} • ${cap(product.category)}</span>
        <span class="rating">★ ${product.rating || 4.7}<small>(${product.reviews || 0})</small></span>
      </div>
    </div>
  </article>`;
}

function renderHomeProducts() {
  const grid = document.getElementById("homeProductGrid");
  if (!grid) return;

  let list = getProducts();
  const brands = checkedValues("brandFilter");
  const categories = checkedValues("categoryFilter");
  const rating = checkedValues("ratingFilter");
  const min = Number(document.getElementById("minPrice")?.value || 0);
  const max = Number(document.getElementById("maxPrice")?.value || 0);
  const query = (document.getElementById("productSearch")?.value || "").toLowerCase().trim();

  if (brands.length) list = list.filter(product => brands.includes(product.brand));
  if (categories.length) list = list.filter(product => categories.includes(product.category));
  if (min) list = list.filter(product => Number(product.price) >= min);
  if (max) list = list.filter(product => Number(product.price) <= max);
  if (rating.length) list = list.filter(product => Number(product.rating || 0) >= Number(rating[0]));
  if (query) list = list.filter(product => `${product.name} ${product.brand} ${product.category} ${product.description || ""}`.toLowerCase().includes(query));

  if (state.sort === "price-low") list.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") list.sort((a, b) => b.price - a.price);
  if (state.sort === "rating") list.sort((a, b) => (b.rating || 0) - (a.rating || 0));

  const totalMatches = list.length;
  const visibleList = list.slice(0, 8);
  grid.innerHTML = visibleList.map(productCard).join("");
  const empty = grid.parentElement?.querySelector(".empty-state");
  if (empty) empty.hidden = totalMatches > 0;
  const note = document.getElementById("filterNote");
  if (note) note.textContent = totalMatches > 8
    ? `Showing ${visibleList.length} of ${totalMatches} products`
    : `Showing ${totalMatches} ${totalMatches === 1 ? "product" : "products"}`;
  const viewMoreWrap = document.getElementById("homeViewMoreWrap");
  if (viewMoreWrap) viewMoreWrap.hidden = totalMatches === 0;
}

function checkedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(item => item.value);
}

function renderBrandProducts() {
  const grid = document.getElementById("brandProductGrid");
  if (!grid) return;

  let list = getProducts();
  const brands = checkedValues("brandFilter");
  const categories = checkedValues("categoryFilter");
  const rating = checkedValues("ratingFilter");
  const min = Number(document.getElementById("minPrice")?.value || 0);
  const max = Number(document.getElementById("maxPrice")?.value || 0);
  const query = (document.getElementById("productSearch")?.value || "").toLowerCase().trim();

  if (brands.length) list = list.filter(product => brands.includes(product.brand));
  if (categories.length) list = list.filter(product => categories.includes(product.category));
  if (min) list = list.filter(product => Number(product.price) >= min);
  if (max) list = list.filter(product => Number(product.price) <= max);
  if (rating.length) list = list.filter(product => Number(product.rating || 0) >= Number(rating[0]));
  if (query) {
    list = list.filter(product => `${product.name} ${product.brand} ${product.category} ${product.description || ""}`.toLowerCase().includes(query));
  }

  if (state.sort === "price-low") list.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") list.sort((a, b) => b.price - a.price);
  if (state.sort === "rating") list.sort((a, b) => (b.rating || 0) - (a.rating || 0));

  grid.innerHTML = list.map(productCard).join("");
  const empty = document.querySelector(".empty-state");
  if (empty) empty.hidden = list.length > 0;
  const note = document.getElementById("filterNote");
  if (note) note.textContent = `Showing ${list.length} ${list.length === 1 ? "product" : "products"}`;
}

function saveCart() { localStorage.setItem(STORAGE_CART, JSON.stringify(state.cart)); }

function addProductById(id) {
  const product = getProducts().find(item => item.id === id);
  if (!product) return;
  if (needsRubberColour(product)) openProductModal(id);
  else addToCart(product);
}

function addToCart(product) {
  const cartId = product.cartId || product.id;
  const existing = state.cart.find(item => item.id === cartId && !product.custom);
  if (existing) existing.quantity += 1;
  else {
    state.cart.push({
      id: cartId,
      productId: product.id,
      name: product.name,
      price: Number(product.price),
      brand: product.brand,
      category: product.category,
      image: product.image || "",
      color: product.color || "#d7ff3f",
      details: product.details || "",
      selectedRubberColour: product.selectedRubberColour || "",
      custom: Boolean(product.custom),
      quantity: 1
    });
  }
  saveCart();
  renderCart();
  renderCheckoutPage();
  showToast("Added to cart");
}

function changeQuantity(id, delta) {
  const item = state.cart.find(entry => entry.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) state.cart = state.cart.filter(entry => entry.id !== id);
  saveCart();
  renderCart();
  renderCheckoutPage();
}

function renderCart() {
  const items = document.querySelector(".cart-items");
  const empty = document.querySelector(".cart-empty");
  const summary = document.querySelector(".cart-summary");
  const totalEl = document.querySelector(".cart-total");
  if (!items) {
    document.querySelectorAll(".cart-count").forEach(el => el.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0));
    return;
  }

  const qty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach(el => el.textContent = qty);

  if (!state.cart.length) {
    items.innerHTML = "";
    if (empty) empty.style.display = "block";
    if (summary) summary.style.display = "none";
    return;
  }

  if (empty) empty.style.display = "none";
  if (summary) summary.style.display = "block";
  items.innerHTML = state.cart.map(item => cartItemMarkup(item)).join("");
  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
}

function cartItemMarkup(item) {
  return `<div class="cart-item">
    <div class="cart-item-visual">${item.image ? `<img src="${item.image}" alt="${item.name}">` : `<div class="cart-puck" style="background:${item.color}"></div>`}</div>
    <div>
      <h3>${item.name}</h3>
      <div class="cart-item-price">${formatPrice(item.price)}</div>
      ${item.details ? `<div class="cart-item-detail">${item.details}</div>` : ""}
      <div class="quantity"><button data-qty-minus="${item.id}">−</button><span>${item.quantity}</span><button data-qty-plus="${item.id}">+</button></div>
    </div>
    <button class="remove-item" data-remove-item="${item.id}" aria-label="Remove ${item.name}">×</button>
  </div>`;
}

function openCart() {
  document.querySelector(".cart-drawer")?.classList.add("open");
  document.querySelector(".page-backdrop")?.classList.add("open");
  document.body.classList.add("locked");
}
function closeCart() {
  document.querySelector(".cart-drawer")?.classList.remove("open");
  document.querySelector(".page-backdrop")?.classList.remove("open");
  document.querySelector(".product-modal")?.classList.remove("open");
  document.body.classList.remove("locked");
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

function initUI() {
  document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());
  document.querySelector(".announcement-close")?.addEventListener("click", () => document.querySelector(".announcement")?.classList.add("hidden"));
  window.addEventListener("scroll", () => document.querySelector(".site-header")?.classList.toggle("scrolled", window.scrollY > 16));

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  menuToggle?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });
  mobileMenu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle?.classList.remove("active");
  }));

  document.querySelector(".cart-trigger")?.addEventListener("click", openCart);
  document.querySelector(".cart-close")?.addEventListener("click", closeCart);
  document.querySelector(".page-backdrop")?.addEventListener("click", closeCart);
  document.querySelectorAll(".checkout-button").forEach(button => button.addEventListener("click", () => window.location.href = "cart.html"));
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

function bindControls() {
  document.addEventListener("click", event => {
    const add = event.target.closest("[data-add-product]");
    if (add) {
      event.stopPropagation();
      addProductById(add.dataset.addProduct);
    }

    const view = event.target.closest("[data-view-product]");
    if (view && !event.target.closest("button")) openProductModal(view.dataset.viewProduct);

    const modalAdd = event.target.closest("[data-modal-add-product]");
    if (modalAdd) addModalProductToCart(modalAdd.dataset.modalAddProduct);

    const modalClose = event.target.closest("[data-close-product-modal]");
    if (modalClose) closeCart();

    const minus = event.target.closest("[data-qty-minus]");
    if (minus) changeQuantity(minus.dataset.qtyMinus, -1);

    const plus = event.target.closest("[data-qty-plus]");
    if (plus) changeQuantity(plus.dataset.qtyPlus, 1);

    const remove = event.target.closest("[data-remove-item]");
    if (remove) {
      state.cart = state.cart.filter(item => item.id !== remove.dataset.removeItem);
      saveCart();
      renderCart();
      renderCheckoutPage();
    }
  });

  document.getElementById("sortProducts")?.addEventListener("change", event => {
    state.sort = event.target.value;
    renderBrandProducts();
    renderHomeProducts();
  });
  ["brandFilter", "categoryFilter", "ratingFilter"].forEach(name => {
    document.querySelectorAll(`input[name="${name}"]`).forEach(el => el.addEventListener("change", () => {
      renderBrandProducts();
      renderHomeProducts();
    }));
  });
  ["minPrice", "maxPrice", "productSearch"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", () => {
      renderBrandProducts();
      renderHomeProducts();
    });
  });
  document.getElementById("resetFilters")?.addEventListener("click", () => {
    document.querySelectorAll('input[name="categoryFilter"],input[name="ratingFilter"]').forEach(item => item.checked = false);
    document.querySelectorAll('input[name="brandFilter"]').forEach(item => item.checked = Boolean(document.body.dataset.brand) && item.value === document.body.dataset.brand);
    ["minPrice", "maxPrice", "productSearch"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });
    state.sort = "featured";
    const sort = document.getElementById("sortProducts");
    if (sort) sort.value = "featured";
    renderBrandProducts();
    renderHomeProducts();
  });
}

function ensureProductModal() {
  if (document.querySelector(".product-modal")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <section class="product-modal" aria-hidden="true">
      <button class="product-modal-close" data-close-product-modal aria-label="Close product details">×</button>
      <div class="modal-product-visual" id="modalProductVisual"></div>
      <div class="modal-product-info">
        <span class="eyebrow" id="modalProductBrand"></span>
        <h2 id="modalProductName"></h2>
        <p id="modalProductDescription"></p>
        <div class="modal-features" id="modalProductFeatures"></div>
        <div class="rubber-colour-picker" id="modalRubberColours"></div>
        <div class="modal-purchase-row">
          <strong id="modalProductPrice"></strong>
          <button class="button primary" id="modalAddButton" data-modal-add-product="">Add to cart</button>
        </div>
      </div>
    </section>
  `);
}

function openProductModal(productId) {
  ensureProductModal();
  const product = getProducts().find(item => item.id === productId);
  if (!product) return;
  activeModalProductId = productId;
  const modal = document.querySelector(".product-modal");
  document.getElementById("modalProductVisual").innerHTML = productArtwork(product);
  document.getElementById("modalProductBrand").textContent = `${cap(product.brand)} • ${cap(product.category)}`;
  document.getElementById("modalProductName").textContent = product.name;
  document.getElementById("modalProductDescription").textContent = product.description || "Premium table tennis product selected for serious players.";
  const features = product.features?.length ? product.features : ["Authenticity checked", "Fast dispatch", "Player-friendly selection"];
  document.getElementById("modalProductFeatures").innerHTML = features.map(feature => `<span>${feature}</span>`).join("");
  document.getElementById("modalProductPrice").textContent = formatPrice(product.price);
  document.getElementById("modalAddButton").dataset.modalAddProduct = product.id;

  const colourWrap = document.getElementById("modalRubberColours");
  if (needsRubberColour(product)) {
    colourWrap.innerHTML = `<h3>Select rubber colour</h3><div class="rubber-colour-options">${rubberColours.map((colour, index) => `
      <label class="rubber-colour-option">
        <input type="radio" name="modalRubberColour" value="${colour.value}" data-label="${colour.label}" ${index === 0 ? "checked" : ""}>
        <span style="--rubber-choice:${colour.hex}"></span><b>${colour.label}</b>
      </label>`).join("")}</div>`;
  } else {
    colourWrap.innerHTML = "";
  }

  modal.classList.add("open");
  document.querySelector(".page-backdrop")?.classList.add("open");
  document.body.classList.add("locked");
}

function addModalProductToCart(productId) {
  const product = getProducts().find(item => item.id === productId);
  if (!product) return;
  if (needsRubberColour(product)) {
    const selected = document.querySelector('input[name="modalRubberColour"]:checked');
    const label = selected?.dataset.label || "Red";
    addToCart({
      ...product,
      cartId: `${product.id}-${selected?.value || "red"}`,
      details: `Rubber colour: ${label}`,
      selectedRubberColour: label,
      color: rubberColours.find(colour => colour.value === selected?.value)?.hex || product.color
    });
  } else {
    addToCart(product);
  }
  closeCart();
}


function renderAddonOptions() {
  const wrapper = document.getElementById("builderAddons");
  if (!wrapper) return;
  wrapper.innerHTML = addonOptions.map(addon => `<label class="addon-card">
    <input type="checkbox" name="addonProduct" value="${addon.id}">
    <span class="addon-card-visual" style="--addon-color:${addon.color}"><i></i></span>
    <span class="addon-card-copy"><b>${addon.name}</b><small>${addon.desc}</small><strong>${formatPrice(addon.price)}</strong></span>
  </label>`).join("");
}

function getSelectedAddons() {
  return [...document.querySelectorAll('input[name="addonProduct"]:checked')]
    .map(input => addonOptions.find(addon => addon.id === input.value))
    .filter(Boolean);
}


function getBuilderRubberColour(side) {
  const inputName = side === "forehand" ? "forehandRubberColour" : "backhandRubberColour";
  const selectedValue = document.querySelector(`input[name="${inputName}"]:checked`)?.value || (side === "forehand" ? "red" : "black");
  return rubberColours.find(colour => colour.value === selectedValue) || rubberColours[0];
}

function updateBuilderRubberVisuals(build) {
  const forehandFace = document.querySelector(".forehand-face");
  const backhandFace = document.querySelector(".backhand-face");
  if (forehandFace) forehandFace.style.background = build.forehandColour.hex;
  if (backhandFace) backhandFace.style.background = build.backhandColour.hex;
}

function initBuilder() {
  const form = document.getElementById("racketBuilderForm");
  if (!form) return;
  renderAddonOptions();
  Object.entries(builderOptions).forEach(([group, options]) => {
    const wrapper = document.querySelector(`[data-option-group="${group}"]`);
    if (!wrapper) return;
    wrapper.innerHTML = options.map((option, index) => `<label class="option-card">
      <input type="radio" name="${group}" value="${option.id}" ${index === 0 ? "checked" : ""}>
      <span class="option-card-content"><h3>${option.name}</h3><p>${option.desc}</p><strong>${formatPrice(option.price)}</strong></span>
    </label>`).join("");
  });
  form.addEventListener("change", updateBuilder);
  document.getElementById("builderAddons")?.addEventListener("change", updateBuilder);
  document.getElementById("addCustomBuild")?.addEventListener("click", () => {
    const build = getBuild();
    addToCart({
      id: `custom-${Date.now()}`,
      name: "Custom Table Tennis Racket",
      brand: "custom",
      category: "rackets",
      price: build.total,
      color: "#d7ff3f",
      details: `Blade: ${build.blade.name}<br>FH: ${build.forehand.name} (${build.forehandColour.label})<br>BH: ${build.backhand.name} (${build.backhandColour.label})<br>Service: ${build.service.name}${build.addons.length ? `<br>Add-ons: ${build.addons.map(addon => addon.name).join(", ")}` : ""}`,
      custom: true
    });
    openCart();
  });
  updateBuilder();
}

function getBuild() {
  const selected = {};
  let total = 0;
  Object.keys(builderOptions).forEach(group => {
    const checked = document.querySelector(`input[name="${group}"]:checked`);
    const option = builderOptions[group].find(item => item.id === checked?.value) || builderOptions[group][0];
    selected[group] = option;
    total += option.price;
  });
  selected.forehandColour = getBuilderRubberColour("forehand");
  selected.backhandColour = getBuilderRubberColour("backhand");
  selected.addons = getSelectedAddons();
  selected.addonsTotal = selected.addons.reduce((sum, addon) => sum + addon.price, 0);
  total += selected.addonsTotal;
  selected.total = total;
  return selected;
}

function updateBuilder() {
  const build = getBuild();
  updateBuilderRubberVisuals(build);
  const addonSummary = build.addons.length
    ? { name: build.addons.map(addon => addon.name).join(", "), price: build.addonsTotal }
    : { name: "No add-ons selected", price: 0 };
  const groups = [
    ["Blade ply", build.blade],
    ["Forehand rubber", { name: `${build.forehand.name} · ${build.forehandColour.label}`, price: build.forehand.price }],
    ["Backhand rubber", { name: `${build.backhand.name} · ${build.backhandColour.label}`, price: build.backhand.price }],
    ["Service", build.service],
    ["Add-ons", addonSummary]
  ];
  const lines = document.getElementById("buildSummaryLines");
  if (lines) {
    lines.innerHTML = groups.map(([label, option]) => `<div class="summary-line"><span>${label}</span><strong>${option.name}<br>${formatPrice(option.price)}</strong></div>`).join("");
  }
  if (document.getElementById("builderTotal")) document.getElementById("builderTotal").textContent = formatPrice(build.total);
  if (document.getElementById("summaryTotal")) document.getElementById("summaryTotal").textContent = formatPrice(build.total);
}

function brandColor(brand) {
  return { joola: "#d7ff3f", tibhar: "#d8312b", butterfly: "#66b9ff", stiga: "#ffe870", other: "#202420" }[brand] || "#d7ff3f";
}

function setAdminVisibility(isLoggedIn) {
  const login = document.getElementById("adminLoginPanel");
  const secure = document.getElementById("adminSecureArea");
  if (!login || !secure) return;
  login.classList.toggle("hidden", isLoggedIn);
  secure.classList.toggle("hidden", !isLoggedIn);
  if (isLoggedIn && !adminFormReady) {
    initAdminProductForm();
    adminFormReady = true;
    renderAdminProducts();
  }
}

function initAdmin() {
  const loginForm = document.getElementById("adminLoginForm");
  if (!loginForm) return;
  setAdminVisibility(sessionStorage.getItem(STORAGE_AUTH) === "true");
  loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const username = document.getElementById("adminUsername").value.trim();
    const password = document.getElementById("adminPassword").value;
    const message = document.getElementById("loginMessage");
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      sessionStorage.setItem(STORAGE_AUTH, "true");
      if (message) message.textContent = "";
      setAdminVisibility(true);
      showToast("Admin login successful");
    } else {
      if (message) message.textContent = "Incorrect username or password";
      showToast("Login failed");
    }
  });
  document.getElementById("adminLogout")?.addEventListener("click", () => {
    sessionStorage.removeItem(STORAGE_AUTH);
    setAdminVisibility(false);
    showToast("Logged out");
  });
}

function initAdminProductForm() {
  const form = document.getElementById("productAdminForm");
  if (!form) return;
  const fields = {
    id: document.getElementById("editingProductId"),
    name: document.getElementById("adminName"),
    brand: document.getElementById("adminBrand"),
    category: document.getElementById("adminCategory"),
    price: document.getElementById("adminPrice"),
    badge: document.getElementById("adminBadge"),
    rating: document.getElementById("adminRating"),
    imageUrl: document.getElementById("adminImageUrl"),
    imageFile: document.getElementById("adminImageFile"),
    description: document.getElementById("adminDescription"),
    features: document.getElementById("adminFeatures"),
    preview: document.getElementById("adminImagePreview")
  };

  fields.imageFile?.addEventListener("change", () => {
    const file = fields.imageFile.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImageData = reader.result;
      fields.preview.innerHTML = `<img src="${uploadedImageData}" alt="Preview">`;
      fields.imageUrl.value = "";
    };
    reader.readAsDataURL(file);
  });
  fields.imageUrl?.addEventListener("input", () => {
    if (fields.imageUrl.value.trim()) {
      uploadedImageData = "";
      fields.preview.innerHTML = `<img src="${fields.imageUrl.value.trim()}" alt="Preview">`;
    } else {
      fields.preview.innerHTML = "<span>No image selected</span>";
    }
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const products = getAdminProducts();
    const product = {
      id: fields.id.value || `admin-${Date.now()}`,
      name: fields.name.value.trim(),
      brand: fields.brand.value,
      category: fields.category.value,
      price: Number(fields.price.value),
      badge: fields.badge.value.trim() || "New",
      rating: Number(fields.rating.value || 4.7),
      reviews: 0,
      image: uploadedImageData || fields.imageUrl.value.trim(),
      description: fields.description.value.trim(),
      features: fields.features.value.split(",").map(item => item.trim()).filter(Boolean),
      color: brandColor(fields.brand.value)
    };
    const index = products.findIndex(item => item.id === product.id);
    if (index >= 0) products[index] = product;
    else products.push(product);
    saveAdminProducts(products);
    resetAdminForm();
    renderAdminProducts();
    renderHomeProducts();
    renderBrandProducts();
    showToast("Product saved and connected to website");
  });

  document.getElementById("resetAdminForm")?.addEventListener("click", resetAdminForm);
  document.getElementById("exportProducts")?.addEventListener("click", () => {
    const data = JSON.stringify(getAdminProducts(), null, 2);
    navigator.clipboard?.writeText(data);
    alert(data);
    showToast("Product JSON copied");
  });
  document.getElementById("importProducts")?.addEventListener("click", () => {
    try {
      const incoming = JSON.parse(document.getElementById("importProductsInput").value || "[]");
      if (!Array.isArray(incoming)) throw new Error("Invalid");
      saveAdminProducts(incoming);
      document.getElementById("importProductsInput").value = "";
      renderAdminProducts();
      renderHomeProducts();
      showToast("Products imported");
    } catch {
      showToast("Invalid JSON");
    }
  });

  window.editAdminProduct = id => {
    const product = getAdminProducts().find(item => item.id === id);
    if (!product) return;
    fields.id.value = product.id;
    fields.name.value = product.name;
    fields.brand.value = product.brand;
    fields.category.value = product.category;
    fields.price.value = product.price;
    fields.badge.value = product.badge || "";
    fields.rating.value = product.rating || 4.7;
    fields.imageUrl.value = product.image && product.image.startsWith("http") ? product.image : "";
    uploadedImageData = product.image && product.image.startsWith("data:") ? product.image : "";
    fields.preview.innerHTML = product.image ? `<img src="${product.image}" alt="Preview">` : "<span>No image selected</span>";
    fields.description.value = product.description || "";
    fields.features.value = (product.features || []).join(", ");
    document.getElementById("adminFormTitle").textContent = "Edit product";
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  window.deleteAdminProduct = id => {
    if (!confirm("Remove this product from the website?")) return;
    saveAdminProducts(getAdminProducts().filter(item => item.id !== id));
    renderAdminProducts();
    renderHomeProducts();
    showToast("Product removed");
  };

  function resetAdminForm() {
    form.reset();
    fields.id.value = "";
    fields.rating.value = "4.7";
    uploadedImageData = "";
    fields.preview.innerHTML = "<span>No image selected</span>";
    document.getElementById("adminFormTitle").textContent = "Add new product";
  }
}

function renderAdminProducts() {
  const list = document.getElementById("adminProductList");
  if (!list) return;
  const products = getAdminProducts();
  if (!products.length) {
    list.innerHTML = '<p class="empty-state">No client-added products yet. Add one from the upload form.</p>';
    return;
  }
  list.innerHTML = products.slice().reverse().map(product => `<div class="admin-product-row">
    <div class="admin-product-thumb">${product.image ? `<img src="${product.image}" alt="${product.name}">` : `<div class="cart-puck" style="background:${product.color || brandColor(product.brand)}"></div>`}</div>
    <div><h3>${product.name}</h3><p>${cap(product.brand)} • ${cap(product.category)} • ${formatPrice(product.price)}</p></div>
    <div class="admin-row-actions"><button onclick="editAdminProduct('${product.id}')">Edit</button><button onclick="deleteAdminProduct('${product.id}')">Delete</button></div>
  </div>`).join("");
}

function renderCheckoutPage() {
  const wrapper = document.getElementById("checkoutCartItems");
  if (!wrapper) return;
  const subtotalEl = document.getElementById("checkoutSubtotal");
  const grandEl = document.getElementById("checkoutGrandTotal");
  const emptyEl = document.getElementById("checkoutEmpty");
  const form = document.getElementById("checkoutForm");
  if (!state.cart.length) {
    wrapper.innerHTML = "";
    if (emptyEl) emptyEl.hidden = false;
    if (form) form.style.display = "none";
  } else {
    if (emptyEl) emptyEl.hidden = true;
    if (form) form.style.display = "grid";
    wrapper.innerHTML = state.cart.map(item => `<div class="checkout-line">
      <div><strong>${item.name}</strong>${item.details ? `<p>${item.details}</p>` : ""}</div>
      <span>${item.quantity} × ${formatPrice(item.price)}</span>
    </div>`).join("");
  }
  if (subtotalEl) subtotalEl.textContent = formatPrice(getCartTotal());
  if (grandEl) grandEl.textContent = formatPrice(getCartTotal());
}

function initCheckoutPage() {
  const form = document.getElementById("checkoutForm");
  if (!form) return;
  renderCheckoutPage();
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!state.cart.length) {
      showToast("Your cart is empty");
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    startRazorpayPayment(data);
  });
}

function startRazorpayPayment(customer) {
  const amount = getCartTotal();
  if (!amount) return;
  const orderDraft = createOrderObject(customer, amount);

  if (!window.Razorpay || RAZORPAY_KEY_ID.includes("REPLACE_WITH_YOUR_KEY_ID")) {
    completeOrder({ ...orderDraft, paymentId: `DEMO-${Date.now()}`, paymentMode: "Demo Razorpay placeholder" });
    showToast("Demo order placed. Add Razorpay Key ID for live payment.");
    return;
  }

  const options = {
    key: RAZORPAY_KEY_ID,
    amount: Math.round(amount * 100),
    currency: "INR",
    name: "Table Tennis Wala",
    description: `Order ${orderDraft.orderId}`,
    prefill: {
      name: customer.fullName,
      email: customer.email,
      contact: customer.phone
    },
    notes: {
      order_id: orderDraft.orderId,
      customer_name: customer.fullName,
      address: `${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}`
    },
    theme: { color: "#111311" },
    handler: function(response) {
      completeOrder({ ...orderDraft, paymentId: response.razorpay_payment_id, paymentMode: "Razorpay" });
    },
    modal: { ondismiss: () => showToast("Payment cancelled") }
  };
  const razorpay = new Razorpay(options);
  razorpay.open();
}

function createOrderObject(customer, amount) {
  return {
    orderId: `TTW-${Date.now()}`,
    date: new Date().toISOString(),
    customer,
    items: state.cart.map(item => ({ ...item })),
    amount
  };
}

function completeOrder(order) {
  const existing = JSON.parse(localStorage.getItem(STORAGE_ORDERS) || "[]");
  existing.push(order);
  localStorage.setItem(STORAGE_ORDERS, JSON.stringify(existing));
  localStorage.setItem("ttw-last-order", JSON.stringify(order));
  state.cart = [];
  saveCart();
  renderCart();
  renderCheckoutPage();
  showOrderSuccess(order);
  sendOrderEmails(order);
}

function orderPlainText(order) {
  const items = order.items.map(item => `- ${item.name} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}${item.details ? ` (${item.details.replace(/<br>/g, ", ")})` : ""}`).join("%0D%0A");
  const address = `${order.customer.address}, ${order.customer.city}, ${order.customer.state} - ${order.customer.pincode}`;
  return `Order ID: ${order.orderId}%0D%0APayment: ${order.paymentMode} - ${order.paymentId}%0D%0AName: ${order.customer.fullName}%0D%0AEmail: ${order.customer.email}%0D%0APhone: ${order.customer.phone}%0D%0AAddress: ${address}%0D%0A%0D%0AItems:%0D%0A${items}%0D%0A%0D%0ATotal: ${formatPrice(order.amount)}%0D%0ANotes: ${order.customer.notes || ""}`;
}

function showOrderSuccess(order) {
  const success = document.getElementById("orderSuccess");
  if (!success) return;
  success.hidden = false;
  success.innerHTML = `<div class="order-success-card">
    <span class="eyebrow">Order placed</span>
    <h2>Thank you, ${order.customer.fullName}.</h2>
    <p>Your order <strong>${order.orderId}</strong> has been placed. Payment reference: <strong>${order.paymentId}</strong>.</p>
    <a class="button primary" href="mailto:${STORE_ORDER_EMAIL}?subject=New Table Tennis Wala Order ${order.orderId}&body=${orderPlainText(order)}">Send order details to store email</a>
    <a class="button ghost" href="index.html">Continue shopping</a>
  </div>`;
  success.scrollIntoView({ behavior: "smooth", block: "center" });
}

function sendOrderEmails(order) {
  const configured = EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.ownerTemplateId && EMAILJS_CONFIG.customerTemplateId;
  if (!configured || !window.emailjs) return;
  emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  const templateParams = {
    order_id: order.orderId,
    store_email: STORE_ORDER_EMAIL,
    customer_name: order.customer.fullName,
    customer_email: order.customer.email,
    customer_phone: order.customer.phone,
    customer_address: `${order.customer.address}, ${order.customer.city}, ${order.customer.state} - ${order.customer.pincode}`,
    order_total: formatPrice(order.amount),
    payment_id: order.paymentId,
    order_items: order.items.map(item => `${item.name} x ${item.quantity} — ${formatPrice(item.price * item.quantity)} ${item.details ? item.details.replace(/<br>/g, ", ") : ""}`).join("\n")
  };
  emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.ownerTemplateId, templateParams).catch(() => {});
  emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.customerTemplateId, templateParams).catch(() => {});
}

document.addEventListener("DOMContentLoaded", () => {
  initUI();
  bindControls();
  renderCart();
  renderHomeProducts();
  renderBrandProducts();
  initBuilder();
  initAdmin();
  initCheckoutPage();
});


// Final additions: privacy popup and WhatsApp free consultation button
(function () {
  function addPrivacyPopup() {
    if (document.querySelector(".privacy-popup")) return;

    const popup = document.createElement("div");
    popup.className = "privacy-popup";
    popup.innerHTML = `
      <h3>Privacy & No Return Policy</h3>
      <p>We use customer details only for orders, delivery and support. Products follow a no return and exchange policy unless approved by the store.</p>
      <div class="privacy-popup-actions">
        <a href="privacy.html">Read policy</a>
        <button class="accept-policy" type="button">Okay</button>
      </div>
    `;
    document.body.appendChild(popup);

    popup.querySelector(".accept-policy").addEventListener("click", () => {
      popup.classList.remove("show");
      setTimeout(() => popup.remove(), 350);
    });

    setTimeout(() => popup.classList.add("show"), 700);
  }

  function addWhatsAppButton() {
    if (document.querySelector(".whatsapp-consult")) return;

    const link = document.createElement("a");
    link.className = "whatsapp-consult";
    link.href = "https://wa.me/919999999999?text=Hi%20Table%20Tennis%20Wala%2C%20I%20want%20a%20free%20consultation%20for%20table%20tennis%20equipment.";
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute("aria-label", "Free consultation on WhatsApp");
    link.innerHTML = `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16.04 3C9.05 3 3.37 8.66 3.37 15.62c0 2.22.58 4.39 1.69 6.3L3.2 29l7.25-1.82a12.7 12.7 0 0 0 5.59 1.29h.01c6.98 0 12.66-5.66 12.66-12.62C28.71 8.67 23.02 3 16.04 3Zm0 23.35h-.01c-1.84 0-3.64-.49-5.22-1.43l-.37-.22-4.3 1.08 1.12-4.17-.24-.39a10.43 10.43 0 0 1-1.6-5.6c0-5.79 4.76-10.5 10.62-10.5 2.84 0 5.51 1.1 7.52 3.08a10.43 10.43 0 0 1 3.12 7.44c0 5.79-4.77 10.51-10.64 10.51Zm5.83-7.88c-.32-.16-1.9-.93-2.2-1.04-.3-.11-.52-.16-.74.16-.22.32-.85 1.04-1.04 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.58-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.7s1.17 3.13 1.33 3.35c.16.22 2.31 3.5 5.6 4.91.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.13-.3-.21-.62-.37Z"/>
      </svg>
      <span>Free consultation</span>
    `;
    document.body.appendChild(link);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const isHomePage =
      document.body?.dataset?.page === "home" ||
      location.pathname.endsWith("/") ||
      location.pathname.endsWith("index.html");
    if (isHomePage) addPrivacyPopup();
    addWhatsAppButton();
  });
})();


// Mobile products dropdown fallback
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mobile-product-dropdown summary").forEach(summary => {
    summary.addEventListener("click", () => {
      const details = summary.closest("details");
      if (!details) return;
      setTimeout(() => {
        details.setAttribute("aria-expanded", details.open ? "true" : "false");
      }, 0);
    });
  });
});
