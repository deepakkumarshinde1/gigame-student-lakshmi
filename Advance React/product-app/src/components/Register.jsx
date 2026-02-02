import { useEffect, useState } from "react";
import "../assets/css/Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/slice/service/user.service";
import { useNavigate } from "react-router-dom";
import { resetNewUser } from "../redux/slice/service/user.slice";

function Register() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { newUserAdd } = useSelector((state) => state.userReducer);
  let [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });

  let registerUser = () => {
    if (newUser.username.trim().length > 0 && newUser.password.trim().length)
      dispatch(createUser(newUser));
  };

  useEffect(() => {
    return () => {
      dispatch(resetNewUser());
    };
  }, []);

  useEffect(() => {
    if (newUserAdd === true) {
      alert("User Registration done successfully");
      navigate("/login");
    }
  }, [newUserAdd]);

  return (
    <div className="auth-box">
      <h2>
        <i className="fa fa-user"></i> Register
      </h2>

      <input
        type="text"
        placeholder="Username"
        value={newUser.username}
        onChange={(event) =>
          setNewUser({ ...newUser, username: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={newUser.password}
        onChange={(event) =>
          setNewUser({ ...newUser, password: event.target.value })
        }
      />

      <button onClick={registerUser}>Register</button>
    </div>
  );
}

export default Register;
