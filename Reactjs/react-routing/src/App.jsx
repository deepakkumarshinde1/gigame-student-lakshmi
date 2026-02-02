import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import "./App.css";

import { lazy, Suspense } from "react";
import Header from "./components/Header";

let Home = lazy(() => import("./components/Home"));
let About = lazy(() => import("./components/About"));
let PageNotFound = lazy(() => import("./components/PageNotFound"));
let ProductDetails = lazy(() => import("./components/ProductDetails"));
let Cart = lazy(() => import("./components/Cart"));
let Login = lazy(() => import("./components/Login"));
let Register = lazy(() => import("./components/Register"));
let Profile = lazy(() => import("./components/Profile"));
let ProtectedRouting = lazy(() => import("./components/ProtectedRouting"));

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Header />
        <Suspense fallback={<div className="loading">Loading...</div>}>
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
        </Suspense>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
