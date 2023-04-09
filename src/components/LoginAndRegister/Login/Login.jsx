import React, { useEffect } from "react";
import google from "../../../assets/images/common/google.svg";
import facebook from "../../../assets/images/common/facebook.svg";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../../utils/config";
import { toast } from "react-hot-toast";
import { login } from "../../../feature/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "" || email === "" || password === "") {
      toast.error("Field must not be empty !", {
        position: "bottom center",
      });
    }

    dispatch(
      login({
        username: email,
        password: password,
      })
    );
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        {/*--------------- login forms input ----------- */}
        <div className="login-form-group">
          <div>
            <label htmlFor="">User Name:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="username12"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="login-form-group">
          <div>
            <label htmlFor="">password:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="password852"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {/*--------------- login form buttons ---------------- */}
        <div className="login-form-button">
          <div>
            <img src={google} alt="" />
          </div>
          <div>
            <img src={facebook} alt="" />
          </div>
          <div className="form-btn">
            <button type="submit">Log in</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
