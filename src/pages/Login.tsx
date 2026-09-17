import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useNavigate} from "react-router-dom";

// import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import the icons

import { ImEye, ImEyeBlocked } from "react-icons/im";  // Import the icons

// import {mockUser} from "../types/mockUser"

import { findStudentPortalAccount } from "../utils/studentPortalAccounts";

import { getUserStorageKey, } from "../utils/userStorage";

import type { StudentProfile } from "../types/student";





export default function Login() {
  const ctx = useContext(AppContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError ] = useState("");

  if (!ctx) return null;

  const { setIsAuthenticated, setUser, setStudent  } = ctx;

  


  const handleSubmit = (
    e: React.SyntheticEvent
  ) => {
    e.preventDefault();
  
    setError("");
  
    const account =
      findStudentPortalAccount(
        email,
        password
      );
  
    if (!account) {
      setError(
        "The email or password you entered is incorrect."
      );
  
      return;
    }
  
    setUser(account.user);
    const savedStudent = localStorage.getItem(
      getUserStorageKey(
        "student",
        account.user.id
      )
    );
    
    if (savedStudent) {
      try {
        const currentStudent: StudentProfile =
        JSON.parse( savedStudent );

        setStudent(currentStudent);
      } catch {
        setStudent(account.student);
      }
    } else {
        setStudent(account.student);
    }

    setIsAuthenticated(true);
  
    navigate("/dashboard");
  };

  return (
    <div className="auth-layout">
      
      {/* LEFT PANEL */}
      <div className="auth-hero">
        <div className="hero-content">
          
          <span className="hero-badge">
            Privacy First Learning
          </span>

          <h1>
            Student Portal
            <br />
            Reimagined
          </h1>

          <p>
            A modern privacy-focused dashboard
            designed for students, educators,
            and secure academic collaboration.
          </p>

          <div className="hero-stats">
            <div>
              <strong>12K+</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>98%</strong>
              <span>Completion Rate</span>
            </div>

            <div>
              <strong>Secure</strong>
              <span>Ninja Mode</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="auth-panel">
        
        <div className="auth-card">
          
          <div className="auth-header">
            <h2>Welcome Back</h2>

            <p>
              Sign in to continue your learning
              journey.
            </p>
          </div>


          {error && (
            <div
              className="auth-error"
              role="alert"
              aria-live="polite"
            >
              <strong>Unable to sign in</strong>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            
            <div className="auth-group">
            <label htmlFor="login-email">
              Email
            </label>

              <input
                id="login-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <div className="auth-group">
            <label htmlFor="login-password">
              Password
            </label>


              <div className="password-wrapper">
                <input
                  id="login-password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}   
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  aria-pressed={showPassword}
                >
                   {/* "🙈" : "👁️" */}  
                  {showPassword ? <ImEye size={15} /> : <ImEyeBlocked size={15} />} 
                </button>
              </div>
            </div>

            <div className="auth-options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="forgot-btn"
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="auth-btn">
              Sign In
            </button>
          </form>

          <p className="auth-footer">
            Don’t have an account?{" "}
            <Link to="/register">Create account</Link>
          </p>
        </div>
      </div>
      
    </div>
  );
}