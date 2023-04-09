import React from "react";
import "./profileupdate.css";
import { useSelector } from "react-redux";

const ProfileUpdate = () => {
  const { data } = useSelector((state) => state.auth);

  return (
    <div className="profile-update-form">
      <form>
        {/*--------------- login forms input ----------- */}
        <div className="profile-form-group">
          <div>
            <label htmlFor="">User Name:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="username12"
              defaultValue={data?.display_name}
            />
          </div>
        </div>
        <div className="profile-form-group">
          <div>
            <label htmlFor="">Display Name:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="username12"
              defaultValue={data?.display_name}
            />
          </div>
        </div>
        <div className="profile-form-group">
          <div>
            <label htmlFor="">E-mail:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="username12"
              defaultValue={data?.email}
            />
          </div>
        </div>
        <div className="profile-form-group">
          <div>
            <label htmlFor="">Password:</label>
          </div>
          <div>
            <input type="password" defaultValue={data?.password} />
          </div>
        </div>
        {/*--------------- login form buttons ---------------- */}
        <div className="profile-form-button">
          <button>save</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;
