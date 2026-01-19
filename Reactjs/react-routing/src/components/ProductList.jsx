import products from "../data/products";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

function ProductList() {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
