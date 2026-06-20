import "../styles/product-card.css";

function ProductCard({
  name,
  price,
  category,
  inStock,
  cartCount,
  setCartCount,
}) {
  function increaseCartCount() {
    setCartCount(cartCount + 1);
  }

  function decreaseCartCount() {
    if (cartCount == 0) return;

    setCartCount(cartCount - 1);
  }
  return (
    <section className='product-cards'>
      <div className='product-card'>
        <div className='product-card-content'>
          <h3>{name}</h3>
          <p>Category: {category}</p>
          <p>Price: ₦{price.toLocaleString()}</p>
        </div>
        {inStock ? (
          <div className='product-card-btns'>
            <button className='add-to-cart-btn' onClick={increaseCartCount}>
              {cartCount == 0 ? "Add To Cart" : `Added ${cartCount} times`}
            </button>
            <button
              className='delete-from-cart-btn'
              onClick={decreaseCartCount}
            >
              Delete From Cart
            </button>
          </div>
        ) : (
          <p className='out-of-stock'>Out of Stock😓</p>
        )}
      </div>
    </section>
  );
}

export default ProductCard;
