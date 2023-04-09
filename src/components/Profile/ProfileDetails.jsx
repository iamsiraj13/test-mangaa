import React from "react";
import pedit from "../../assets/images/common/edit.svg";

import "./profiledetail.css";
const ProfileDetails = ({ data }) => {
  return (
    <div className="profile-details">
      <div className="profile-details-content">
        <p>Display Name: {data && data.display_name}</p>
        <p>User Name: {data && data.display_name}</p>
        <p>Email: {data && data.email}</p>
        <p>Password:{data && data?.password}</p>
      </div>
      <div className="profile-edit-btn">
        <img src={pedit} alt="" />
      </div>
    </div>
  );
};

export default ProfileDetails;
