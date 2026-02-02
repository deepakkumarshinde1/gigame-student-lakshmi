import { Link } from "react-router-dom";
import "../assets/css/ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../config/axios.config";
import { useEffect } from "react";
import { addToCart, getProducts } from "../redux/slice/service/product.service";

function ProductList() {
  let dispatch = useDispatch();
  let { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);
  return (
    <div className="product-list">
      <h2>Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.images[0]} alt={product.title} />

            <h3>
              <Link to={`/products/${product._id}`}>{product.title}</Link>
            </h3>

            <p className="price">₹ {product.price}</p>

            <button
              className="btn-cart"
              onClick={() => {
                dispatch(
                  addToCart({
                    image: product.images[0],
                    productName: product.title,
                    productId: product._id,
                    quantity: 1,
                  })
                );
              }}
            >
              <i className="fa fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
