import { Link } from "react-router-dom";
import { BookOpen, Mail, MapPin, Phone } from "lucide-react";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="lh-footer">
      <div className="lh-footer-main">
        <div className="lh-footer-about">
          <Link to="/" className="lh-footer-brand">
            <span className="lh-footer-brand-icon">
              <BookOpen size={23} />
            </span>
            LearnHub
          </Link>

          <p>
            Learn new skills, explore new opportunities, and take the next
            step in your learning journey.
          </p>
        </div>

        <div className="lh-footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/courses">All Courses</Link>
          <Link to="/my-learning">My Learning</Link>
        </div>

        <div className="lh-footer-column">
          <h3>Account</h3>
          <Link to="/login">Login</Link>
          <Link to="/register">Create Account</Link>
        </div>

        <div className="lh-footer-column lh-footer-contact">
          <h3>Contact</h3>
          <p><Mail size={16} /> hello@learnhub.com</p>
          <p><Phone size={16} /> +91 98765 43210</p>
          <p><MapPin size={16} /> Coimbatore, India</p>
        </div>
      </div>

      <div className="lh-footer-bottom">
        <p>© {new Date().getFullYear()} LearnHub. All rights reserved.</p>
        <p>Keep learning. Keep growing.</p>
      </div>
    </footer>
  );
}

export default Footer;