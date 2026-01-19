import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useParams, useSearchParams } from "react-router-dom";

function ProductDetails() {
  let params = useParams();
  let [searchParams] = useSearchParams();
  const product = products.find((product) => product.id === Number(params.id));
  const { addToCart } = useCart();

  if (!product) return <div className="page notfound">Product not found</div>;

  return (
    <div className="page product-page">
      <h2>
        <i className="fa fa-tag" aria-hidden="true"></i> {product.title} [ Rate
        {searchParams.get("rate")}] [Like {searchParams.get("count")}]
      </h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <button className="btn" onClick={() => addToCart(product)}>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart
      </button>
    </div>
  );
}

export default ProductDetails;
