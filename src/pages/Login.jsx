import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Mail, Lock } from "lucide-react";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    localStorage.setItem(
      "learnhub-user",
      JSON.stringify({ email: email.trim() })
    );

    navigate("/my-learning");
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <Link to="/" className="auth-logo">
          <span className="auth-logo-icon">
            <BookOpen size={24} />
          </span>
          <span>LearnHub</span>
        </Link>

        <div className="auth-heading">
          <p className="other-page-label">WELCOME BACK</p>
          <h1>Login to your account</h1>
          <p>Continue your learning journey with LearnHub.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email Address</label>
          <div className="auth-input-wrap">
            <Mail size={18} />
            <input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <label htmlFor="login-password">Password</label>
          <div className="auth-input-wrap">
            <Lock size={18} />
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="other-primary-button auth-submit">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Create an account</Link>
        </p>

        <p className="auth-demo-note">
          Demo login: enter any valid email and a password.
        </p>
      </section>
    </main>
  );
}

export default Login;