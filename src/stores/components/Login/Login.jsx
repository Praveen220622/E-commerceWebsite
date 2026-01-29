import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../../util";
import Header from "../Header/Header";
import "./Login.css";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("Email and Password are required");
    }

    try {
      const response = await fetch(
        "https://mern-backend-akgp.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        }
      );

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => navigate("/home"), 1000);
      } else if (error) {
        handleError(error?.details?.[0]?.message || message);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <div className="outer-container">
        <div className="container1">
          <div className="image-container">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/login-illustration-download-in-svg-png-gif-file-formats--select-an-account-join-the-forum-password-digital-marketing-pack-business-illustrations-8333958.png?f=webp"
              alt="login"
              className="image"
            />
          </div>

          <div className="paragraph-container">
            <h1>Login</h1>
            <h5>
              If you don&apos;t have an account
              <Link to="/">
                <span className="span-element"> SignUp Here..!</span>
              </Link>
            </h5>
          </div>
        </div>

        <div className="container2">
          <form onSubmit={handleLogin}>
            <div className="form-container">
              {/* Email */}
              <div className="inputs-container">
                <label className="Input-Type">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={loginInfo.email}
                  onChange={handleChange}
                  className="inputs-value"
                  placeholder="Enter Your Email..."
                />
              </div>

              {/* Password with Eye Toggle */}
              <div
                className="inputs-container"
                style={{ position: "relative" }}
              >
                <label className="Input-Type">Password</label>
                <br />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginInfo.password}
                  onChange={handleChange}
                  className="inputs-value"
                  placeholder="Enter Your Password..."
                />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "38px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>

              <button type="submit" className="button">
                Login
              </button>
            </div>
          </form>

          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Login;
