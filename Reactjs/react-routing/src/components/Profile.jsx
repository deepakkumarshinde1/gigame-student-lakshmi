import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return <div className="page notfound">No profile found</div>;

  function onLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="page profile-page">
      <h2>
        <i className="fa fa-user" aria-hidden="true"></i> Profile
      </h2>
      <div className="profile-card">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <div style={{ marginTop: "1rem" }}>
          <button className="btn" onClick={onLogout}>
            <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
