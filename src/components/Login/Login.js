import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|co\.in)$/;

    if (!login) {
      setLoginError("Email is required");
    } else if (!emailRegex.test(login)) {
      setLoginError("Invalid email format");
    } else {
      setLoginError("");
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

    if (!password) {
      setPasswordError("Password is required");
    } else if (!passwordRegex.test(password)) {
      setPasswordError("Invalid password format");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateLogin();
    validatePassword();

    if (!login && !password) {
      return;
    }
    setFormError("");
    if (!loginError && !passwordError) {
      navigate("/dashboard");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-main-container">
        <div className="login-child-conatiner">
          <form onSubmit={handleSubmit}>
            <h2>USER LOGIN</h2>
            <input
              type="text"
              id="login"
              name="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Email Address"
              onBlur={validateLogin}
            />
            {loginError && <p className="error-message">{loginError}</p>}
            <div>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  onBlur={validatePassword}
                />
                <i
                  className={`fa-regular fa-eye${showPassword ? "-slash" : ""}`}
                  onClick={togglePasswordVisibility}
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "40%",
                    right: "10px",
                    transform: "translateY(-50%)",
                  }}
                ></i>
              </div>
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>
            <div className="forgot-password">
              <Link
                to="/forgot-password"
                style={{ color: "#0066ff", textDecoration: "none" }}
              >
                Forgot Password?
              </Link>
            </div>
            {formError && <div className="error-message">{formError}</div>}
            <div className="bottom-buttons">
              <button type="submit">LOG ME IN</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
