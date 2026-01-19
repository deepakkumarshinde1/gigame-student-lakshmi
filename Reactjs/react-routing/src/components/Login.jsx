import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="page auth-page">
      <h2>
        <i className="fa fa-sign-in" aria-hidden="true"></i> Login
      </h2>
      <form className="form-container" onSubmit={onSubmit}>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn" type="submit">
          <i className="fa fa-sign-in" aria-hidden="true"></i> Login
        </button>
        <p className="small-note">
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
