import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { handleSuccess } from "../../../util";
import { ToastContainer } from "react-toastify";
import Products from "../Products";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged out");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />

      <div className="container">
        <h1 className="heading">
          {loggedInUser ? `Welcome, ${loggedInUser}!` : "Welcome, Guest!"}
        </h1>
      </div>

      <div className="shop-container">
        <h1>Start Your Shopping from Here!</h1>
        <Link to="/landingPage">
          <button className="shop-btn">Shop Here...</button>
        </Link>
        <Products />
      </div>

      <ToastContainer />
    </>
  );
};

export default Home;
