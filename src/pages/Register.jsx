import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, User, Mail, Lock } from "lucide-react";
import "../styles/register.css";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in all the fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Your password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("The passwords do not match.");
      return;
    }

    localStorage.setItem(
      "learnhub-user",
      JSON.stringify({ name: name.trim(), email: email.trim() })
    );

    navigate("/my-learning");
  }

  return (
    <main className="auth-page">
      <section className="auth-card auth-register-card">
        <Link to="/" className="auth-logo">
          <span className="auth-logo-icon">
            <BookOpen size={24} />
          </span>
          <span>LearnHub</span>
        </Link>

        <div className="auth-heading">
          <p className="other-page-label">START LEARNING TODAY</p>
          <h1>Create your account</h1>
          <p>Join LearnHub and discover something new.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="register-name">Full Name</label>
          <div className="auth-input-wrap">
            <User size={18} />
            <input
              id="register-name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <label htmlFor="register-email">Email Address</label>
          <div className="auth-input-wrap">
            <Mail size={18} />
            <input
              id="register-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <label htmlFor="register-password">Password</label>
          <div className="auth-input-wrap">
            <Lock size={18} />
            <input
              id="register-password"
              type="password"
              placeholder="At least 6 characters"
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={6}
              required
            />
          </div>

          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="auth-input-wrap">
            <Lock size={18} />
            <input
              id="confirm-password"
              type="password"
              placeholder="Re-enter your password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="other-primary-button auth-submit">
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;