import { useCart } from "../context/CartContext";

function Cart() {
  const { items, removeFromCart, clearCart, total } = useCart();

  if (items.length === 0)
    return (
      <div className="page cart-page">
        <h2>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> Your cart
          is empty
        </h2>
      </div>
    );

  return (
    <div className="page cart-page">
      <h2>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i> Your Cart
      </h2>
      <ul className="cart-list">
        {items.map((i) => (
          <li key={i.product.id} className="cart-item">
            <img src={i.product.image} alt={i.product.name} />
            <div>
              <strong>{i.product.name}</strong>
              <p>Qty: {i.quantity}</p>
              <p>${(i.product.price * i.quantity).toFixed(2)}</p>
              <button
                className="btn-icon"
                onClick={() => removeFromCart(i.product.id)}
              >
                <i className="fa fa-trash" aria-hidden="true"></i> Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-footer">
        <strong>Total: ${total.toFixed(2)}</strong>
        <button className="btn" onClick={() => clearCart()}>
          <i className="fa fa-trash-o" aria-hidden="true"></i> Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
