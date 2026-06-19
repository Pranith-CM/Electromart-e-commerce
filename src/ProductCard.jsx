function ProductCard({ product, onAdd, cartItems }) {
  const inCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className={`product-card ${inCart ? "in-cart" : ""}`}>
      
      {(product.id === 1 || product.id === 4) && (
        <span className="badge">🔥 Deal</span>
      )}

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-name">
          {product.name}
        </h3>

        <div className="product-footer">
          <span className="product-price">
            ₹{product.price.toLocaleString()}
          </span>

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