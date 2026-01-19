import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { itemCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="header">
      <div className="logo">
        <i className="fa fa-shopping-bag" aria-hidden="true"></i> Simple Shop
      </div>
      <nav>
        <NavLink to="/">
          <i className="fa fa-home" aria-hidden="true"></i> Home
        </NavLink>
        <NavLink to="/about-us">
          <i className="fa fa-info-circle" aria-hidden="true"></i> About
        </NavLink>
        <NavLink to="/cart" className="cart-link">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart (
          {itemCount})
        </NavLink>
        {!isAuthenticated ? (
          <>
            <NavLink to="/login">
              <i className="fa fa-sign-in" aria-hidden="true"></i> Login
            </NavLink>
            <NavLink to="/register">
              <i className="fa fa-user-plus" aria-hidden="true"></i> Register
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/profile">
              <i className="fa fa-user" aria-hidden="true"></i> {user.name}
            </NavLink>
            <button
              className="btn-icon"
              onClick={() => logout()}
              title="Logout"
            >
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
