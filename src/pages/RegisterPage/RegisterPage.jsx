import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Login from "../../components/LoginAndRegister/Login/Login";
import Register from "../../components/LoginAndRegister/Register/Register";
import "./registerpage.css";
const RegisterPage = () => {
  return (
    <div className="auth-form-layout">
      <div className="register-page-title">
        <h3>Log in / Signup</h3>
      </div>

      <Tabs>
        <div className="login-register-box">
          <div className="login-register-btn">
            <TabList>
              <Tab>Log in</Tab>
              <Tab>Sign up</Tab>
            </TabList>
          </div>
          <div className="login-register-content">
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Register />
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default RegisterPage;
