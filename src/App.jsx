import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./App.css";

const SLOGANS = [
  "Next-Gen Tech, Today.",
  "Power Up Your World.",
  "Built for Builders.",
  "Where Innovation Lives.",
  "Gear That Keeps Up.",
];

function useTypingEffect(words, typeSpeed = 80, deleteSpeed = 50, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (typing) {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deleteSpeed);
      } else {
        setWordIdx((prev) => (prev + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, typing, wordIdx, words, typeSpeed, deleteSpeed, pause]);

  return display;
}

function App() {
  const [cart, setCart] = useState([]);
const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const slogan = useTypingEffect(SLOGANS);

useEffect(() => {
  fetch("http://localhost:8080/products")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.error(err));
}, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  const addToCart = (product) => {
    if (!cart.find((i) => i.id === product.id)) {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => setCart(cart.filter((i) => i.id !== id));

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Electro<span className="logo-accent">Mart</span></span>
          </div>
          <div className="nav-search-wrap">
            <input
              className="nav-search"
              type="text"
              placeholder="Search products, categories…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>
          <button className="cart-btn" onClick={() => setCartOpen(!cartOpen)}>
            🛒 Cart
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </button>
        </div>
      </nav>

      {/* CART SIDEBAR */}
      <div className={`cart-overlay ${cartOpen ? "open" : ""}`} onClick={() => setCartOpen(false)} />
      <aside className={`cart-sidebar ${cartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={() => setCartOpen(false)}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span>🛒</span>
            <p>Your cart is empty</p>
            <small>Add products to get started</small>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <span className="cart-item-emoji">{item.emoji}</span>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal ({cart.length} item{cart.length > 1 ? "s" : ""})</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-ship">FREE</span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
  className="checkout-btn"
  onClick={() => {
    alert("Order Placed Successfully!");
    setCart([]);
    setCartOpen(false);
  }}
>
  Proceed to Checkout →
</button>
            </div>
          </>
        )}
      </aside>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-content">
          <p className="hero-eyebrow">🔥 Summer Sale — Up to 40% Off</p>
          <h1 className="hero-headline">
            <span className="typing-text">{slogan}</span>
            <span className="cursor">|</span>
          </h1>
          <p className="hero-sub">
            Premium electronics from the world's top brands — curated, reviewed, and delivered fast.
          </p>
          <div className="hero-actions">
            <button className="hero-cta" onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}>
              Shop Now →
            </button>
            <button
  className="hero-ghost"
  onClick={() =>
    document.getElementById("products").scrollIntoView({
      behavior: "smooth",
    })
  }
>
  View Deals
</button>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>50K+</strong><span>Products</span></div>
            <div className="stat-divider" />
            <div className="stat"><strong>4.9★</strong><span>Avg Rating</span></div>
            <div className="stat-divider" />
            <div className="stat"><strong>Free</strong><span>Shipping</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow-ring" />
          <div className="hero-icon-grid">
            {["💻","📱","🎧","📺","⌨️","🖱️","📷","🖥️"].map((e, i) => (
              <div key={i} className="hero-icon-tile" style={{ animationDelay: `${i * 0.15}s` }}>{e}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-bar">
        <div className="inner">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-chip ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="products">
        <div className="inner">
          <div className="section-head">
            <h2>
              {activeCategory === "All" ? "All Products" : activeCategory}
              <span className="count"> — {filtered.length} items</span>
            </h2>
          </div>
          {filtered.length === 0 ? (
            <div className="no-results">
              <span>🔍</span>
              <p>No products match "{search}"</p>
              <button onClick={() => setSearch("")}>Clear search</button>
            </div>
          ) : (
            <div className="product-grid">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={addToCart} cartItems={cart} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="inner footer-inner">
          <div className="footer-brand">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Electro<span className="logo-accent">Mart</span></span>
            <p>Your trusted destination for premium electronics since 2024.</p>
          </div>
          <div className="footer-links">
            <h4>Shop</h4>
            <a href="#">Laptops</a>
            <a href="#">Audio</a>
            <a href="#">Cameras</a>
            <a href="#">Components</a>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <a href="#">Track Order</a>
            <a href="#">Returns</a>
            <a href="#">Warranty</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 ElectroMart. Built with React + Vite.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
