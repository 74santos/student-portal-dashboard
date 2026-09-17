
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";


import { ImEye, ImEyeBlocked } from "react-icons/im";  // Import the icons


import type { StudentPortalAccount } from "../types/studentPortalAccount";

import {
  getStudentPortalAccounts,
  saveStudentPortalAccounts,
  findStudentPortalAccountByEmail,
 
} from "../utils/studentPortalAccounts";




import type { User } from "../types/user";
import type { StudentProfile } from "../types/student";

export default function Register() {
  const ctx = useContext(AppContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);




  const [major, setMajor] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [targetGPA, setTargetGPA] = useState("3.5");
  const [studyGoalHours, setStudyGoalHours] = useState("10");


  if (!ctx) return null;

  const {
    setIsAuthenticated,
    setUser,
    setStudent,
  } = ctx;

  const handleSubmit = (
    e: React.SyntheticEvent
  ) => {
    e.preventDefault();

    setError("");


    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword ||
      !major.trim() ||
      !graduationYear
    ) {
      setError(
        "Please complete all required fields."
      );
    
      return;
    }

    

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );

      return;
    }


    const parsedGPA =
      Number(targetGPA);

    const parsedGraduationYear =
      Number(graduationYear);

    const parsedStudyGoalHours =
      Number(studyGoalHours);

    const accounts = getStudentPortalAccounts();

    const normalizedEmail = email.trim().toLowerCase();

    const existingAccount = findStudentPortalAccountByEmail(normalizedEmail);




    if (
      Number.isNaN(parsedGPA) ||
      parsedGPA < 0 ||
      parsedGPA > 4
    ) {
      setError(
        "Target GPA must be between 0.0 and 4.0."
      );
    
      return;
    }
    
    if (existingAccount) {
      setError(
        "An account with this email already exists."
      );
    
      return;
    } 

    if (
      Number.isNaN(parsedGraduationYear) ||
      parsedGraduationYear < 2020 ||
      parsedGraduationYear > 2100
    ) {
      setError(
        "Please enter a valid graduation year."
      );
    
      return;
    }


    if (
      Number.isNaN(parsedStudyGoalHours) ||
      parsedStudyGoalHours < 0 ||
      parsedStudyGoalHours > 168
    ) {
      setError(
        "Study goal must be between 0 and 168 hours."
      );
    
      return;
    }



    const user: User = {
      id: crypto.randomUUID(),
      name: `${firstName.trim()} ${lastName.trim()}`,
      email: normalizedEmail,
      role: "student",
      createdAt: new Date().toISOString(),
    };
    
    
    const newStudent: StudentProfile = {
      id: crypto.randomUUID(),
      name: `${firstName.trim()} ${lastName.trim()}`,
      major: major.trim(),
      graduationYear: parsedGraduationYear,
      targetGPA: parsedGPA,
      studyGoalHours: parsedStudyGoalHours,
    };


    const newAccount: StudentPortalAccount = {
      user,
      student: newStudent,
      password,
    };
    
    saveStudentPortalAccounts([
      ...accounts,
      newAccount,
    ]);

    /*
     * Prototype registration.
     *
     * This will eventually be replaced with
     * real authentication and persistent user
     * creation.
     */

    setUser(user);
    setStudent(newStudent);
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
            Start Your
            <br />
            Learning Journey
          </h1>

          <p>
            Create your student profile and
            begin tracking courses, assignments,
            goals, and academic progress.
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

        <div className="auth-card register-card">

          <div className="auth-header">

            <h2>
              Create Account
            </h2>

            <p>
              Set up your student profile
              to get started.
            </p>

          </div>

          {/* ERROR */}

          {error && (
              <div
                className="auth-error"
                role="alert"
                aria-live="polite"
              >
                <strong>Something needs your attention</strong>
                <span>{error}</span>
              </div>
            )}

          <form onSubmit={handleSubmit}>

             

          <section className="auth-section">
          <h3 className="auth-section-title">
            Account Information
          </h3>

           {/* First + Last */}

            <div className="auth-row">

              <div className="auth-group">

              <label htmlFor="register-first-name">
                  First Name
                </label>

                <input
                  id="register-first-name"
                  type="text"
                  placeholder="Tommy"
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="auth-group">

              <label htmlFor="register-last-name">
                  Last Name
                </label>

                <input
                  id="register-last-name"
                  type="text"
                  placeholder="Eagon"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

            {/* EMAIL */}

            <div className="auth-group">

            <label htmlFor="register-email">
                Email
              </label>

              <input
                id="register-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
              />

            </div>


          <div className="auth-row">
            {/* PASSWORD */}

            <div className="auth-group">

            <label htmlFor="register-password">
              Password
            </label>

              <div className="password-wrapper">

                <input
                  id="register-password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  autoComplete="new-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
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
                  {showPassword
                    ? <ImEye size={15} /> : <ImEyeBlocked size={15} />}
                </button>

              </div>

            </div>

            {/* CONFIRM PASSWORD */}

            <div className="auth-group">

            <label htmlFor="register-confirm-password">
                Confirm Password
              </label>

              <div className="password-wrapper">

                <input
                  id="register-confirm-password"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  autoComplete="new-password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                aria-label={
                  showConfirmPassword
                    ? "Hide confirmation password"
                    : "Show confirmation password"
                }
                aria-pressed={showConfirmPassword}
              >
                {showConfirmPassword ? (
                  <ImEye size={15} />
                ) : (
                  <ImEyeBlocked size={15} />
                )}
              </button>

              </div>

            </div>
          </div>

            </section>


            <section className="auth-section">
            <h3 className="auth-section-title">
              Academic Profile
            </h3>     
            {/* MAJOR */}

            <div className="auth-row">
            <div className="auth-group">
            <label htmlFor="register-major">
              Major
            </label>

            <input
              id="register-major"
              type="text"
              placeholder="Computer Science"
              value={major}
              onChange={(e) =>
                setMajor(e.target.value)
              }
            />

            </div>


            {/* GRADUATION YEAR */}

            <div className="auth-group">

            <label htmlFor="register-graduation-year">
              Graduation Year
            </label>

            <input
              id="register-graduation-year"
              type="number"
              min="2027"
              max="2100"
              placeholder="2027"
              value={graduationYear}
              onChange={(e) =>
                setGraduationYear(e.target.value)
              }
            />

            </div>

            </div>
           </section>       


           <section className="auth-section">
           <h3 className="auth-section-title">
            Academic Goals
          </h3>
            {/* TARGET GPA */}

            <div className="auth-row">
            <div className="auth-group">
            <label htmlFor="register-target-gpa">
              Target GPA
            </label>

            <input
              id="register-target-gpa"
              type="number"
              min="0"
              max="4"
              step="0.1"
              value={targetGPA}
              onChange={(e) =>
                setTargetGPA(e.target.value)
              }
            />

            </div>


            {/* STUDY GOAL */}

            <div className="auth-group">

            <label htmlFor="register-study-goal">
              Weekly Study Goal
            </label>

            <input
              id="register-study-goal"
              type="number"
              min="0"
              max="168"
              value={studyGoalHours}
              onChange={(e) =>
                setStudyGoalHours(e.target.value)
              }
            />

            <small>
              Hours per week
            </small>

            </div>

            </div>
       

            
            </section>
           

           

            {/* SUBMIT */}

            <button
              type="submit"
              className="auth-btn"
            >
              Create Account
            </button>

          </form>

          <p className="auth-footer">

            Already have an account?

            {" "}

            <Link to="/login">
              Sign in
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

