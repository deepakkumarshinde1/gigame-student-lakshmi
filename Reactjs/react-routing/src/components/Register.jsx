import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await register({ name, email, password });
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="page auth-page">
      <h2>
        <i className="fa fa-user-plus" aria-hidden="true"></i> Register
      </h2>
      <form className="form-container" onSubmit={onSubmit}>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          <i className="fa fa-user-plus" aria-hidden="true"></i> Create account
        </button>
        <p className="small-note">
          Have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
