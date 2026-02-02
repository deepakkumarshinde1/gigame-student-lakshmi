import { Navigate, Route, Routes } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import { useLayoutEffect } from "react";
import { getCookies } from "./config/authCookies";
import { useDispatch } from "react-redux";
import { addAuth } from "./redux/slice/service/user.slice";

function App() {
  let dispatch = useDispatch();
  useLayoutEffect(() => {
    try {
      let token = getCookies("accessToken");
      let data = jwtDecode(token);
      dispatch(addAuth({ username: data.username, id: data.id }));
    } catch (error) {}
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart cartItems={[]} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
