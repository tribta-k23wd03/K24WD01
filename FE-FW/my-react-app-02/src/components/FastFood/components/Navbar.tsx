import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="newBrand">Fastfood App</div>
      <div className="navLinks">
        <NavLink to="/" className="navLink">
          Home
        </NavLink>
        <NavLink to="/review" className="navLink">
          Review
        </NavLink>
      </div>
    </nav>
  );
}
