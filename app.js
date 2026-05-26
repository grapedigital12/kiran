// ============================================================
//  BANGDASH – app.js
// ============================================================

// ===== RESTAURANT DATA =====
const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    logo: "🍕",
    banner: "🍕",
    bannerBg: "linear-gradient(135deg,#fff3e0,#ffe0b2)",
    cuisine: "Italian · Pizza · Pasta",
    rating: 4.8,
    reviews: 2400,
    time: "20-30 min",
    fee: 1.99,
    minOrder: 10,
    badge: "Popular",
    badgeColor: "",
    categories: ["Popular","Pizzas","Pasta","Sides","Drinks"],
    items: [
      { id: 101, name:"Margherita Pizza", emoji:"🍕", desc:"Fresh tomato sauce, mozzarella, basil", price:12.99, cat:"Pizzas" },
      { id: 102, name:"Pepperoni Blast", emoji:"🍕", desc:"Double pepperoni, mozzarella, oregano", price:14.99, cat:"Pizzas" },
      { id: 103, name:"BBQ Chicken Pizza", emoji:"🍕", desc:"Grilled chicken, BBQ sauce, red onion", price:15.49, cat:"Pizzas" },
      { id: 104, name:"Veggie Supreme", emoji:"🍕", desc:"Bell peppers, mushrooms, olives, basil", price:13.49, cat:"Pizzas" },
      { id: 105, name:"Spaghetti Carbonara", emoji:"🍝", desc:"Pancetta, eggs, parmesan, black pepper", price:13.99, cat:"Pasta" },
      { id: 106, name:"Penne Arrabbiata", emoji:"🍝", desc:"Spicy tomato sauce, garlic, chilli flakes", price:11.99, cat:"Pasta" },
      { id: 107, name:"Garlic Bread", emoji:"🥖", desc:"Crispy garlic bread with herb butter", price:4.99, cat:"Sides" },
      { id: 108, name:"Caesar Salad", emoji:"🥗", desc:"Romaine, parmesan, croutons, caesar dressing", price:8.99, cat:"Sides" },
      { id: 109, name:"Tiramisu", emoji:"🍰", desc:"Classic Italian dessert, espresso-soaked", price:6.99, cat:"Sides" },
      { id: 110, name:"Coca-Cola", emoji:"🥤", desc:"330ml can", price:2.49, cat:"Drinks" },
      { id: 111, name:"Margherita Pizza", emoji:"🍕", desc:"Fresh tomato sauce, mozzarella, basil", price:12.99, cat:"Popular" },
      { id: 112, name:"Pepperoni Blast", emoji:"🍕", desc:"Double pepperoni, mozzarella, oregano", price:14.99, cat:"Popular" },
    ]
  },
  {
    id: 2,
    name: "Burger Bros",
    logo: "🍔",
    banner: "🍔",
    bannerBg: "linear-gradient(135deg,#fff8e1,#ffecb3)",
    cuisine: "American · Burgers · Fries",
    rating: 4.6,
    reviews: 3100,
    time: "15-25 min",
    fee: 0.99,
    minOrder: 8,
    badge: "Free delivery",
    badgeColor: "green",
    categories: ["Popular","Burgers","Chicken","Sides","Drinks"],
    items: [
      { id: 201, name:"Classic Smash Burger", emoji:"🍔", desc:"Double smash patty, american cheese, pickles", price:10.99, cat:"Burgers" },
      { id: 202, name:"BBQ Bacon Burger", emoji:"🍔", desc:"Beef patty, crispy bacon, BBQ sauce, onion rings", price:13.49, cat:"Burgers" },
      { id: 203, name:"Mushroom Swiss", emoji:"🍔", desc:"Beef patty, sautéed mushrooms, swiss cheese", price:12.49, cat:"Burgers" },
      { id: 204, name:"Spicy Jalapeno Burger", emoji:"🍔", desc:"Double beef, jalapeños, pepper jack cheese", price:12.99, cat:"Burgers" },
      { id: 205, name:"Crispy Chicken Sandwich", emoji:"🍗", desc:"Crispy fried chicken, coleslaw, pickles", price:11.49, cat:"Chicken" },
      { id: 206, name:"Nashville Hot Chicken", emoji:"🍗", desc:"Hot chicken, cayenne butter, pickles", price:12.99, cat:"Chicken" },
      { id: 207, name:"Loaded Fries", emoji:"🍟", desc:"Thick cut fries, cheese sauce, bacon bits", price:6.99, cat:"Sides" },
      { id: 208, name:"Onion Rings", emoji:"🧅", desc:"Beer-battered, served with ranch", price:5.49, cat:"Sides" },
      { id: 209, name:"Classic Smash Burger", emoji:"🍔", desc:"Double smash patty, american cheese, pickles", price:10.99, cat:"Popular" },
      { id: 210, name:"Loaded Fries", emoji:"🍟", desc:"Thick cut fries, cheese sauce, bacon bits", price:6.99, cat:"Popular" },
      { id: 211, name:"Chocolate Milkshake", emoji:"🥤", desc:"Thick chocolate milkshake", price:5.99, cat:"Drinks" },
      { id: 212, name:"Strawberry Lemonade", emoji:"🍹", desc:"Fresh lemonade with strawberry", price:4.49, cat:"Drinks" },
    ]
  },
  {
    id: 3,
    name: "Sushi Spot",
    logo: "🍣",
    banner: "🍣",
    bannerBg: "linear-gradient(135deg,#e8f5e9,#c8e6c9)",
    cuisine: "Japanese · Sushi · Ramen",
    rating: 4.9,
    reviews: 1800,
    time: "25-40 min",
    fee: 2.99,
    minOrder: 15,
    badge: "Top Rated",
    badgeColor: "",
    categories: ["Popular","Rolls","Nigiri","Ramen","Drinks"],
    items: [
      { id: 301, name:"Spicy Tuna Roll", emoji:"🍣", desc:"Tuna, cucumber, spicy mayo, sesame seeds", price:16.99, cat:"Rolls" },
      { id: 302, name:"Dragon Roll", emoji:"🍣", desc:"Shrimp tempura, avocado, unagi sauce", price:18.49, cat:"Rolls" },
      { id: 303, name:"Rainbow Roll", emoji:"🍣", desc:"California roll topped with assorted fish", price:19.99, cat:"Rolls" },
      { id: 304, name:"Salmon Nigiri (2pc)", emoji:"🍣", desc:"Fresh salmon over seasoned rice", price:8.99, cat:"Nigiri" },
      { id: 305, name:"Tuna Nigiri (2pc)", emoji:"🍣", desc:"Fresh tuna over seasoned rice", price:9.99, cat:"Nigiri" },
      { id: 306, name:"Beef Ramen", emoji:"🍜", desc:"Rich tonkotsu broth, beef chashu, soft egg", price:17.49, cat:"Ramen" },
      { id: 307, name:"Spicy Miso Ramen", emoji:"🍜", desc:"Spicy miso broth, pork, bean sprouts", price:16.99, cat:"Ramen" },
      { id: 308, name:"Spicy Tuna Roll", emoji:"🍣", desc:"Tuna, cucumber, spicy mayo", price:16.99, cat:"Popular" },
      { id: 309, name:"Dragon Roll", emoji:"🍣", desc:"Shrimp tempura, avocado, unagi sauce", price:18.49, cat:"Popular" },
      { id: 310, name:"Japanese Green Tea", emoji:"🍵", desc:"Authentic matcha green tea", price:3.99, cat:"Drinks" },
      { id: 311, name:"Sake (House)", emoji:"🍶", desc:"Cold house sake 180ml", price:7.99, cat:"Drinks" },
    ]
  },
  {
    id: 4,
    name: "Taco Town",
    logo: "🌮",
    banner: "🌮",
    bannerBg: "linear-gradient(135deg,#fff3e0,#ffe0b2)",
    cuisine: "Mexican · Tacos · Burritos",
    rating: 4.7,
    reviews: 2200,
    time: "15-25 min",
    fee: 0,
    minOrder: 10,
    badge: "Free delivery",
    badgeColor: "green",
    categories: ["Popular","Tacos","Burritos","Bowls","Drinks"],
    items: [
      { id: 401, name:"Street Tacos (3pc)", emoji:"🌮", desc:"Carnitas, cilantro, onion, lime, salsa verde", price:9.99, cat:"Tacos" },
      { id: 402, name:"Al Pastor Tacos (3pc)", emoji:"🌮", desc:"Marinated pork, pineapple, cilantro", price:10.99, cat:"Tacos" },
      { id: 403, name:"Crispy Fish Taco (2pc)", emoji:"🌮", desc:"Beer-battered fish, cabbage slaw, chipotle", price:11.49, cat:"Tacos" },
      { id: 404, name:"Carne Asada Burrito", emoji:"🌯", desc:"Grilled steak, rice, beans, cheese, pico", price:13.99, cat:"Burritos" },
      { id: 405, name:"Chicken Burrito", emoji:"🌯", desc:"Grilled chicken, guacamole, sour cream", price:12.99, cat:"Burritos" },
      { id: 406, name:"Veggie Burrito", emoji:"🌯", desc:"Black beans, corn, peppers, cheese, rice", price:11.49, cat:"Burritos" },
      { id: 407, name:"Burrito Bowl", emoji:"🥣", desc:"Steak, rice, black beans, guac, pico, cheese", price:13.49, cat:"Bowls" },
      { id: 408, name:"Street Tacos (3pc)", emoji:"🌮", desc:"Carnitas, cilantro, onion, lime", price:9.99, cat:"Popular" },
      { id: 409, name:"Carne Asada Burrito", emoji:"🌯", desc:"Grilled steak, rice, beans, cheese, pico", price:13.99, cat:"Popular" },
      { id: 410, name:"Horchata", emoji:"🥛", desc:"Traditional Mexican rice drink", price:3.49, cat:"Drinks" },
      { id: 411, name:"Jarritos Tamarind", emoji:"🍹", desc:"Mexican soda, 355ml", price:2.99, cat:"Drinks" },
    ]
  },
  {
    id: 5,
    name: "Noodle House",
    logo: "🍜",
    banner: "🍜",
    bannerBg: "linear-gradient(135deg,#fce4ec,#f8bbd0)",
    cuisine: "Asian · Ramen · Pad Thai",
    rating: 4.8,
    reviews: 1500,
    time: "20-35 min",
    fee: 1.49,
    minOrder: 12,
    badge: "New",
    badgeColor: "",
    categories: ["Popular","Noodles","Rice","Soups","Drinks"],
    items: [
      { id: 501, name:"Pad Thai", emoji:"🍜", desc:"Rice noodles, shrimp, egg, peanuts, bean sprouts", price:13.99, cat:"Noodles" },
      { id: 502, name:"Drunken Noodles", emoji:"🍜", desc:"Wide rice noodles, basil, chilli, egg", price:14.49, cat:"Noodles" },
      { id: 503, name:"Lo Mein", emoji:"🍝", desc:"Egg noodles, vegetables, choice of protein", price:12.99, cat:"Noodles" },
      { id: 504, name:"Chicken Fried Rice", emoji:"🍚", desc:"Jasmine rice, chicken, egg, vegetables, soy", price:11.99, cat:"Rice" },
      { id: 505, name:"Pineapple Fried Rice", emoji:"🍚", desc:"Jasmine rice, pineapple, cashews, raisins", price:12.99, cat:"Rice" },
      { id: 506, name:"Tom Yum Soup", emoji:"🍲", desc:"Spicy lemongrass broth, shrimp, mushrooms", price:10.99, cat:"Soups" },
      { id: 507, name:"Miso Soup", emoji:"🥣", desc:"White miso, tofu, seaweed, green onion", price:4.99, cat:"Soups" },
      { id: 508, name:"Pad Thai", emoji:"🍜", desc:"Rice noodles, shrimp, egg, peanuts", price:13.99, cat:"Popular" },
      { id: 509, name:"Tom Yum Soup", emoji:"🍲", desc:"Spicy lemongrass broth, shrimp", price:10.99, cat:"Popular" },
      { id: 510, name:"Thai Iced Tea", emoji:"🧋", desc:"Spiced black tea with condensed milk", price:4.99, cat:"Drinks" },
      { id: 511, name:"Lychee Soda", emoji:"🥤", desc:"Sparkling lychee drink", price:3.49, cat:"Drinks" },
    ]
  },
  {
    id: 6,
    name: "Sweet Treats",
    logo: "🍰",
    banner: "🍰",
    bannerBg: "linear-gradient(135deg,#f3e5f5,#e1bee7)",
    cuisine: "Desserts · Cakes · Ice Cream",
    rating: 4.9,
    reviews: 900,
    time: "15-25 min",
    fee: 1.99,
    minOrder: 8,
    badge: "Popular",
    badgeColor: "",
    categories: ["Popular","Cakes","Ice Cream","Waffles","Drinks"],
    items: [
      { id: 601, name:"Chocolate Lava Cake", emoji:"🍫", desc:"Warm chocolate cake with molten center", price:7.99, cat:"Cakes" },
      { id: 602, name:"New York Cheesecake", emoji:"🍰", desc:"Classic with berry compote", price:8.49, cat:"Cakes" },
      { id: 603, name:"Tiramisu", emoji:"🍮", desc:"Espresso-soaked ladyfingers, mascarpone", price:8.99, cat:"Cakes" },
      { id: 604, name:"Red Velvet Slice", emoji:"🍰", desc:"Moist red velvet with cream cheese frosting", price:7.49, cat:"Cakes" },
      { id: 605, name:"Vanilla Sundae", emoji:"🍨", desc:"3 scoops vanilla, hot fudge, whipped cream", price:6.99, cat:"Ice Cream" },
      { id: 606, name:"Strawberry Ice Cream", emoji:"🍓", desc:"Fresh strawberry, 2 scoops", price:5.99, cat:"Ice Cream" },
      { id: 607, name:"Nutella Waffle", emoji:"🧇", desc:"Belgian waffle, Nutella, banana, powdered sugar", price:9.49, cat:"Waffles" },
      { id: 608, name:"Berry Waffle", emoji:"🧇", desc:"Belgian waffle, mixed berries, cream", price:8.99, cat:"Waffles" },
      { id: 609, name:"Chocolate Lava Cake", emoji:"🍫", desc:"Warm chocolate cake with molten center", price:7.99, cat:"Popular" },
      { id: 610, name:"Nutella Waffle", emoji:"🧇", desc:"Belgian waffle, Nutella, banana", price:9.49, cat:"Popular" },
      { id: 611, name:"Hot Chocolate", emoji:"☕", desc:"Rich Belgian hot chocolate", price:4.49, cat:"Drinks" },
      { id: 612, name:"Strawberry Milkshake", emoji:"🥤", desc:"Fresh strawberry milkshake", price:5.99, cat:"Drinks" },
    ]
  },
  {
    id: 7,
    name: "Cluck & Fry",
    logo: "🍗",
    banner: "🍗",
    bannerBg: "linear-gradient(135deg,#fff8e1,#fff3e0)",
    cuisine: "American · Fried Chicken · Wings",
    rating: 4.6,
    reviews: 1700,
    time: "20-30 min",
    fee: 0,
    minOrder: 10,
    badge: "Free delivery",
    badgeColor: "green",
    categories: ["Popular","Wings","Combos","Sides","Drinks"],
    items: [
      { id: 701, name:"Classic Wings (8pc)", emoji:"🍗", desc:"Crispy wings with choice of sauce", price:13.99, cat:"Wings" },
      { id: 702, name:"Buffalo Wings (8pc)", emoji:"🍗", desc:"Tossed in classic buffalo sauce", price:14.49, cat:"Wings" },
      { id: 703, name:"Honey Garlic Wings (8pc)", emoji:"🍗", desc:"Sweet honey garlic glaze", price:14.99, cat:"Wings" },
      { id: 704, name:"2pc Chicken Combo", emoji:"🍗", desc:"Leg & thigh, fries, coleslaw, biscuit", price:11.99, cat:"Combos" },
      { id: 705, name:"Chicken Tender Basket", emoji:"🍗", desc:"5 tenders, fries, dipping sauce", price:12.49, cat:"Combos" },
      { id: 706, name:"Mac & Cheese", emoji:"🧀", desc:"Creamy mac and cheese", price:4.99, cat:"Sides" },
      { id: 707, name:"Coleslaw", emoji:"🥗", desc:"Classic creamy coleslaw", price:3.49, cat:"Sides" },
      { id: 708, name:"Classic Wings (8pc)", emoji:"🍗", desc:"Crispy wings with choice of sauce", price:13.99, cat:"Popular" },
      { id: 709, name:"Chicken Tender Basket", emoji:"🍗", desc:"5 tenders, fries, dipping sauce", price:12.49, cat:"Popular" },
      { id: 710, name:"Lemonade", emoji:"🍋", desc:"Fresh squeezed lemonade", price:3.99, cat:"Drinks" },
      { id: 711, name:"Sweet Tea", emoji:"🧃", desc:"Southern style sweet iced tea", price:2.99, cat:"Drinks" },
    ]
  },
  {
    id: 8,
    name: "Green Bowl",
    logo: "🥗",
    banner: "🥗",
    bannerBg: "linear-gradient(135deg,#e8f5e9,#dcedc8)",
    cuisine: "Healthy · Salads · Bowls",
    rating: 4.7,
    reviews: 1200,
    time: "15-20 min",
    fee: 1.49,
    minOrder: 12,
    badge: "Healthy",
    badgeColor: "green",
    categories: ["Popular","Salads","Bowls","Wraps","Drinks"],
    items: [
      { id: 801, name:"Caesar Salad", emoji:"🥗", desc:"Romaine, parmesan, croutons, house caesar", price:11.99, cat:"Salads" },
      { id: 802, name:"Greek Salad", emoji:"🥗", desc:"Cucumber, tomato, olives, feta, red onion", price:12.49, cat:"Salads" },
      { id: 803, name:"Superfood Salad", emoji:"🥗", desc:"Kale, quinoa, avocado, edamame, miso dressing", price:13.99, cat:"Salads" },
      { id: 804, name:"Grain Bowl", emoji:"🥣", desc:"Brown rice, roasted veg, hummus, tahini", price:13.49, cat:"Bowls" },
      { id: 805, name:"Teriyaki Chicken Bowl", emoji:"🥣", desc:"Grilled chicken, steamed rice, teriyaki", price:13.99, cat:"Bowls" },
      { id: 806, name:"Falafel Wrap", emoji:"🌯", desc:"Falafel, tabbouleh, hummus, pita", price:11.99, cat:"Wraps" },
      { id: 807, name:"Grilled Chicken Wrap", emoji:"🌯", desc:"Grilled chicken, avocado, lettuce, sriracha", price:12.49, cat:"Wraps" },
      { id: 808, name:"Superfood Salad", emoji:"🥗", desc:"Kale, quinoa, avocado, edamame", price:13.99, cat:"Popular" },
      { id: 809, name:"Grain Bowl", emoji:"🥣", desc:"Brown rice, roasted veg, hummus, tahini", price:13.49, cat:"Popular" },
      { id: 810, name:"Cold Pressed Juice", emoji:"🥤", desc:"Choice of green, orange, or beet", price:6.99, cat:"Drinks" },
      { id: 811, name:"Sparkling Water", emoji:"💧", desc:"San Pellegrino 500ml", price:2.99, cat:"Drinks" },
    ]
  }
];

// Category → restaurant ids mapping
const categoryMap = {
  pizza: [1], burger: [2], sushi: [3], tacos: [4],
  noodles: [5], dessert: [6], chicken: [7], salad: [8], drinks: [], all: null
};

// ===== STATE =====
let cart = [];
let cartRestaurantId = null;
let orders = [];
let currentRestaurant = null;
let activeMenuCat = "Popular";
let favorites = new Set();

// ===== INIT =====
renderRestaurants(restaurants);

// ===== RENDER RESTAURANTS =====
function renderRestaurants(list) {
  const grid = document.getElementById("restaurantsGrid");
  if (!list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:#999;font-size:1rem">😕 No restaurants found matching your search.</div>`;
    return;
  }
  grid.innerHTML = list.map((r, i) => `
    <div class="rest-card fade-in" style="animation-delay:${i * 0.06}s" onclick="openRestaurant(${r.id})">
      <div class="rest-img" style="background:${r.bannerBg}">
        <span>${r.banner}</span>
        <div class="rest-logo-wrap">${r.logo}</div>
        ${r.badge ? `<div class="rest-badge ${r.badgeColor}">${r.badge}</div>` : ''}
        <button class="rest-fav" onclick="toggleFav(event,${r.id})" id="fav-${r.id}">${favorites.has(r.id)?'❤️':'🤍'}</button>
      </div>
      <div class="rest-info" style="padding-top:24px">
        <div class="rest-name">${r.name}</div>
        <div class="rest-cuisine">${r.cuisine}</div>
        <div class="rest-meta">
          <span class="rest-rating">⭐ ${r.rating}</span>
          <span class="stat-dot"></span>
          <span>(${r.reviews.toLocaleString()})</span>
          <span class="stat-dot"></span>
          <span>🕐 ${r.time}</span>
          <span class="stat-dot"></span>
          <span>${r.fee === 0 ? '🟢 Free delivery' : `$${r.fee.toFixed(2)} delivery`}</span>
        </div>
      </div>
    </div>
  `).join("");
}

// ===== OPEN RESTAURANT =====
function openRestaurant(id) {
  currentRestaurant = restaurants.find(r => r.id === id);
  if (!currentRestaurant) return;
  activeMenuCat = "Popular";

  // Build hero
  document.getElementById("restaurantHeroInfo").innerHTML = `
    <div class="rest-hero-banner" style="background:${currentRestaurant.bannerBg}">
      <span style="font-size:5rem">${currentRestaurant.banner}</span>
      <div class="rest-hero-logo">${currentRestaurant.logo}</div>
    </div>
    <h1 class="rest-hero-name">${currentRestaurant.name}</h1>
    <div class="rest-hero-cuisine">${currentRestaurant.cuisine}</div>
    <div class="rest-hero-stats">
      <span class="rest-hero-stat">⭐ ${currentRestaurant.rating} (${currentRestaurant.reviews.toLocaleString()} reviews)</span>
      <span class="rest-hero-stat">🕐 ${currentRestaurant.time}</span>
      <span class="rest-hero-stat">${currentRestaurant.fee === 0 ? '🟢 Free delivery' : `🚴 $${currentRestaurant.fee.toFixed(2)} delivery fee`}</span>
      <span class="rest-hero-stat">📦 $${currentRestaurant.minOrder} min. order</span>
    </div>
  `;

  // Build sidebar
  document.getElementById("menuSidebar").innerHTML = currentRestaurant.categories.map(cat => `
    <div class="sidebar-item ${cat === 'Popular' ? 'active' : ''}" onclick="switchMenuCat('${cat}', this)">${cat}</div>
  `).join("");

  renderMenuItems("Popular");
  showPage("restaurant");
}

function switchMenuCat(cat, el) {
  activeMenuCat = cat;
  document.querySelectorAll(".sidebar-item").forEach(s => s.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("menuSectionTitle").textContent = cat;
  renderMenuItems(cat);
}

function renderMenuItems(cat) {
  const items = currentRestaurant.items.filter(i => i.cat === cat);
  document.getElementById("menuItemsGrid").innerHTML = items.map((item, i) => `
    <div class="menu-item-card fade-in" style="animation-delay:${i * 0.05}s">
      <div class="menu-item-img" style="background:linear-gradient(135deg,#f9f6f2,#f0ebe4)">
        <span>${item.emoji}</span>
      </div>
      <div class="menu-item-info">
        <div class="menu-item-name">${item.name}</div>
        <div class="menu-item-desc">${item.desc}</div>
        <div class="menu-item-footer">
          <span class="menu-item-price">$${item.price.toFixed(2)}</span>
          <button class="add-item-btn" onclick="addToCart(${item.id})" title="Add to cart">+</button>
        </div>
      </div>
    </div>
  `).join("");
}

// ===== CATEGORY FILTER (home) =====
function filterByCategory(cat, el) {
  document.querySelectorAll(".cat-item").forEach(c => c.classList.remove("active"));
  el.classList.add("active");

  let filtered;
  if (cat === "all") {
    filtered = restaurants;
    document.getElementById("restaurantTitle").textContent = "Featured Restaurants";
  } else {
    const ids = categoryMap[cat];
    filtered = ids ? restaurants.filter(r => ids.includes(r.id)) : restaurants;
    document.getElementById("restaurantTitle").textContent = el.querySelector("span").textContent + " Restaurants";
  }
  renderRestaurants(filtered);
}

// ===== GLOBAL SEARCH =====
function handleGlobalSearch() {
  const q = document.getElementById("globalSearch").value.toLowerCase().trim();
  if (!q) { renderRestaurants(restaurants); return; }
  const filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(q) ||
    r.cuisine.toLowerCase().includes(q) ||
    r.items.some(i => i.name.toLowerCase().includes(q))
  );
  renderRestaurants(filtered);
  // reset category highlights
  document.querySelectorAll(".cat-item").forEach(c => c.classList.remove("active"));
  document.querySelector(".cat-item").classList.add("active");
  document.getElementById("restaurantTitle").textContent = `Results for "${q}"`;
}

// ===== ADDRESS =====
function setAddress() {
  const val = document.getElementById("addressInput").value.trim();
  if (val) {
    document.getElementById("currentAddress").textContent = val;
    showToast("📍 Delivery address updated!");
  }
}

// ===== FAVOURITES =====
function toggleFav(e, id) {
  e.stopPropagation();
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  const btn = document.getElementById(`fav-${id}`);
  if (btn) btn.textContent = favorites.has(id) ? "❤️" : "🤍";
}

// ===== CART =====
function addToCart(itemId) {
  const item = currentRestaurant.items.find(i => i.id === itemId);
  if (!item) return;

  // Switching restaurant
  if (cartRestaurantId && cartRestaurantId !== currentRestaurant.id) {
    if (!confirm(`Your cart has items from ${restaurants.find(r=>r.id===cartRestaurantId).name}. Start a new cart from ${currentRestaurant.name}?`)) return;
    cart = [];
  }
  cartRestaurantId = currentRestaurant.id;

  const existing = cart.find(c => c.id === itemId);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1, restaurantId: currentRestaurant.id });

  updateCartUI();
  showToast(`${item.emoji} ${item.name} added!`);
}

function changeQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  if (!cart.length) cartRestaurantId = null;
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cartBadge");
  badge.textContent = count;
  badge.style.display = count ? "flex" : "none";

  const body = document.getElementById("cartBody");
  const footer = document.getElementById("cartFooter");
  const restName = document.getElementById("cartRestaurantName");

  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty"><div style="font-size:3rem;margin-bottom:12px">🛒</div><p>Your cart is empty</p><small>Add items from a restaurant to get started</small></div>`;
    footer.style.display = "none";
    restName.style.display = "none";
    return;
  }

  const rest = restaurants.find(r => r.id === cartRestaurantId);
  restName.style.display = "block";
  restName.innerHTML = `${rest.logo} Ordering from <strong>${rest.name}</strong>`;

  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span class="cart-item-emoji">${item.emoji}</span>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
      </div>
    </div>
  `).join("");

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const fee = rest.fee;
  const total = subtotal + fee;

  document.getElementById("subtotalAmt").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("deliveryFeeAmt").textContent = fee === 0 ? "FREE" : `$${fee.toFixed(2)}`;
  document.getElementById("totalAmt").textContent = `$${total.toFixed(2)}`;
  footer.style.display = "block";
}

function toggleCart() {
  document.getElementById("cartDrawer").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("active");
}

// ===== PLACE ORDER =====
function placeOrder() {
  if (!cart.length) return;
  const rest = restaurants.find(r => r.id === cartRestaurantId);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const fee = rest.fee;
  const total = subtotal + fee;
  const eta = Math.floor(Math.random() * 15) + 25;

  orders.unshift({
    id: `BD${Date.now().toString().slice(-6)}`,
    restaurant: rest.name,
    logo: rest.logo,
    items: cart.map(i => `${i.name} x${i.qty}`).join(", "),
    total: total.toFixed(2),
    eta,
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    status: "Preparing"
  });

  cart = [];
  cartRestaurantId = null;
  updateCartUI();
  toggleCart();

  document.getElementById("modalEta").textContent = `${eta} min`;
  document.getElementById("modalBg").classList.add("show");

  // auto-mark delivered
  setTimeout(() => {
    if (orders[0] && orders[0].status === "Preparing") {
      orders[0].status = "Delivered";
      renderOrdersList();
    }
  }, 20000);
}

function closeModal() {
  document.getElementById("modalBg").classList.remove("show");
  showPage("orders");
}

// ===== ORDERS LIST =====
function renderOrdersList() {
  const el = document.getElementById("ordersListContainer");
  if (!orders.length) {
    el.innerHTML = `<div class="empty-state"><div class="empty-icon">📦</div><h3>No orders yet</h3><p>Your order history will appear here</p><button onclick="showPage('home')" class="btn-primary">Start ordering</button></div>`;
    return;
  }
  el.innerHTML = orders.map(o => `
    <div class="order-card">
      <div class="order-card-left">
        <strong>${o.logo} ${o.restaurant} — #${o.id}</strong>
        <span>${o.items}</span><br/>
        <span style="font-size:0.78rem;color:#bbb">🕐 ${o.time}</span>
      </div>
      <span class="order-price">$${o.total}</span>
      <span class="order-status ${o.status==='Delivered'?'status-delivered':'status-preparing'}">
        ${o.status==='Delivered'?'✅ Delivered':'🔥 Preparing'}
      </span>
    </div>
  `).join("");
}

// ===== PAGE NAVIGATION =====
function showPage(page) {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("restaurantPage").style.display = "none";
  document.getElementById("ordersPage").style.display = "none";

  if (page === "home") document.getElementById("homePage").style.display = "block";
  else if (page === "restaurant") document.getElementById("restaurantPage").style.display = "block";
  else if (page === "orders") {
    document.getElementById("ordersPage").style.display = "block";
    renderOrdersList();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2600);
}
