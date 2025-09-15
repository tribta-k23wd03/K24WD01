import { NavLink } from "react-router-dom";
import { useAuth } from "../../../auth/AuthContext";

export default function Navbar() {
  const { token, email, logout } = useAuth();
  return (
    <nav className="nav">
      <div className="newBrand">Fastfood App</div>
      <div className="navLinks">
        <NavLink
          to="/"
          className={({ isActive }) => "navLink" + (isActive ? "active" : "")}
          end>
          Home
        </NavLink>
        <NavLink
          to="/review"
          className={({ isActive }) => "navLink" + (isActive ? "active" : "")}>
          Review
        </NavLink>
        {token ? (
          <>
            <span>{email}</span>
            <button
              className="navLink"
              onClick={logout}
              style={{ border: "none" }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <span>
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  "navLink" + (isActive ? "active" : "")
                }>
                Login
              </NavLink>
              <NavLink
                to={"/register"}
                className={({ isActive }) =>
                  "navLink" + (isActive ? "active" : "")
                }>
                Register
              </NavLink>
            </span>
          </>
        )}
      </div>
    </nav>
  );
}
