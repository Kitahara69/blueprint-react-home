import { useLocation, Link } from "react-router-dom"; // Import useLocation and Link
import "../styles/Navigation.css";

const Navigation = () => {
  const location = useLocation(); // Get the current location object

  // Helper function to check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-container">
          <span className="logo-text">
            Talky<span className="logo-accent">Hands</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          {/* Use Link component for navigation and apply active class conditionally */}
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/sign-bot" className={`nav-link ${isActive("/sign-bot") ? "active" : ""}`}>
            Sign bot
          </Link>
          <Link to="/learning-hub" className={`nav-link ${isActive("/learning-hub") ? "active" : ""}`}>
            Learning Hub
          </Link>
          <Link to="/about-us" className={`nav-link ${isActive("/about-us") ? "active" : ""}`}>
            About us
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <button className="login-button">
            Log in
          </button>
          <button className="signup-button">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
