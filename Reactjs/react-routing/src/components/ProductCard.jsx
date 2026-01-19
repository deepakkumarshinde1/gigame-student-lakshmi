import { NavLink } from "react-router-dom";

function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>
        <NavLink
          to={`/product/${product.id}?rate=${product.rating.rate}&count=${product.rating.count}`}
        >
          {product.title}
        </NavLink>
      </h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <button className="btn" onClick={() => onAdd(product)}>
        <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
