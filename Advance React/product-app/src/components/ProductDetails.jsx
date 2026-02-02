import React, { useEffect } from "react";
import "../assets/css/ProductDetails.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slice/service/product.service";
import { resetProduct } from "../redux/slice/product.slice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let { product } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(getProduct(id));
    return () => {
      dispatch(resetProduct());
    };
  }, []);
  return (
    <>
      {product && (
        <div className="product-details">
          <h2>Product #{id}</h2>

          <div className="images">
            {product.images.map((img, i) => (
              <img key={i} src={img} alt="product" />
            ))}
          </div>

          <h3>{product.title}</h3>
          <p className="price">₹ {product.price}</p>
          <p>{product.description}</p>

          <button className="btn-cart">
            <i className="fa fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
