import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookOpen, Menu, X, UserRound } from "lucide-react";

import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="lh-navbar">
      <div className="lh-navbar-inner">
        <Link to="/" className="lh-brand" onClick={closeMenu}>
          <span className="lh-brand-icon">
            <BookOpen size={23} />
          </span>
          <span>LearnHub</span>
        </Link>

        <button
          type="button"
          className="lh-mobile-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`lh-nav-links ${menuOpen ? "is-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/courses" onClick={closeMenu}>
            Courses
          </NavLink>
          <NavLink to="/my-learning" onClick={closeMenu}>
            My Learning
          </NavLink>

          <div className="lh-nav-auth">
            <Link to="/login" className="lh-login-link" onClick={closeMenu}>
              <UserRound size={17} />
              Login
            </Link>
            <Link
              to="/register"
              className="lh-register-link"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;