function ProductCard({ product, onAdd, cartItems }) {
  const inCart = cartItems.some((item) => item.id === product.id);
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.floor(product.rating);
    const half = !filled && i < product.rating;
    return (
      <span key={i} className={filled ? "star filled" : half ? "star half" : "star"}>
        ★
      </span>
    );
  });

  return (
    <div className={`product-card ${inCart ? "in-cart" : ""}`}>
      {product.badge && <span className="badge">{product.badge}</span>}
      <div className="product-emoji">{product.emoji}</div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.desc}</p>
        <div className="product-rating">
          <div className="stars">{stars}</div>
          <span className="rating-count">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            className={`add-btn ${inCart ? "added" : ""}`}
            onClick={() => onAdd(product)}
          >
            {inCart ? "✓ Added" : "+ Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
