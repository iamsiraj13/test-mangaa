import React from "react";
import axios from "axios";
import BASE_URL from "../../../utils/config.js";
import facebook from "../../../assets/images/common/facebook.svg";
import google from "../../../assets/images/common/google.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
const Register = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      username === "" ||
      displayName === "" ||
      email === "" ||
      password === ""
    ) {
      toast.error("Field must not be empty !", {
        position: "bottom center",
      });
    }

    await axios
      .post(`${BASE_URL}/user/register/`, {
        display_name: displayName,
        email: email,
        password: password,
      })
      .then((res) => {
        toast.success("Registration Success!", { position: "bottom center" });
        navigate("/login");
      })
      .catch((err) => {
        // toast.error(err.response.data.message, { position: "bottom center" });
        console.log(err);
      });
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
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="login-form-group">
          <div>
            <label htmlFor="">Display Name:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Display Name"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
        </div>
        <div className="login-form-group">
          <div>
            <label htmlFor="">Email:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="username122gmail.com"
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
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
