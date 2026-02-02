import React, { useEffect, useState } from "react";
import "../assets/css/Auth.css";
import { loginUser } from "../redux/slice/service/user.service";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  let dispatch = useDispatch();
  let { user } = useSelector((state) => state.userReducer);
  let [login, setLogin] = useState({
    username: "deepakkumar",
    password: "admin@123",
  });

  useEffect(() => {
    if (user) {
      alert("User Login successfully");
      window.location.replace("/");
    }
  }, [user]);
  return (
    <div className="auth-box">
      <h2>
        <i className="fa fa-sign-in"></i> Login
      </h2>

      <input
        type="text"
        placeholder="Username"
        value={login.username}
        onChange={(event) =>
          setLogin({ ...login, username: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={login.password}
        onChange={(event) =>
          setLogin({ ...login, password: event.target.value })
        }
      />

      <button onClick={() => dispatch(loginUser(login))}>Login</button>
    </div>
  );
}

export default Login;
