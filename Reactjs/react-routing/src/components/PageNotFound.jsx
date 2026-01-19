import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page notfound">
      <h2>
        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Page
        not found
      </h2>
      <p>The page you're looking for doesn't exist.</p>
      <NavLink to="/" className="btn">
        Return Home
      </NavLink>
    </div>
  );
}

export default PageNotFound;
