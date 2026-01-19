import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRouting({ type }) {
  let { isAuthenticated } = useAuth();

  if (type === 0) {
    return <>{isAuthenticated ? <Navigate to="/" /> : <Outlet />}</>;
  } else {
    return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
  }
}

export default ProtectedRouting;

// login => profile-page , avoid login page

// not-login => login page, avoid profile
