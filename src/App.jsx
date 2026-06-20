import PageHeader from "./components/PageHeader";
import ProductCard from "./components/ProductCard";
import PageFooter from "./components/PageFooter";
import "./styles/index.css";
import { useState } from "react";
import { products } from "./data/products";

function App() {
  const [cart, setCart] = useState(
    products.map((product) => ({
      ...product,
      quantity: 0,
    })),
  );

  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  function updateQuantity(id, newQuantity) {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product,
      ),
    );
  }

  return (
    <>
      <PageHeader
        storeName="Olujobi's Shoppping Mall"
        tagLine='High Quality at reasonable prices'
        total={total}
      />
      <section className='product-card-container'>
        {cart.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            cartCount={product.quantity}
            setCartCount={(value) => updateQuantity(product.id, value)}
          />
        ))}
      </section>
      <PageFooter footerText='&copy; 2026 ShopReact. Built with React' />
    </>
  );
}

export default App;
