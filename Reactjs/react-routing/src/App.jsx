import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

import "./App.css";
import ProtectedRouting from "./components/ProtectedRouting";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Header />
        <main className="card">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="" element={<ProtectedRouting type={0} />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route path="" element={<ProtectedRouting type={1} />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/about-us" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
