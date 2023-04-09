import React, { useEffect } from "react";
import uploadPlus from "../../assets/images/common/upload-plus.svg";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import ProfileUpdate from "../../components/Profile/ProfileUpdate";
import Bookmark from "../../components/Profile/Bookmark/Bookmark";
import "./profilepage.css";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, user } = useSelector((state) => state.auth);
  const [file, setFile] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    navigate("/");
  };

  return (
    //------------ user profile section ---------
    <div className="profile-section">
      <div className="profile-wrapper">
        <h3>{data && data?.display_name}</h3>

        <div className="profile-container">
          {/*--------- profile left -------- */}
          <div className="profile-left">
            <div className="profile-img">
              <img src={uploadPlus} alt="" />
              <input
                type="file"
                onChange={(e) => console.log(e.target.files[0])}
              />
            </div>
            <div className="tab-item">bookmarks</div>
            <div className="tab-item">account settings</div>
            <div className="tab-item" onClick={handleLogout}>
              log out
            </div>
          </div>

          {/*--------- profile right -------- */}
          <div className="profile-right">
            {/* <ProfileDetails data={data} /> */}
            <ProfileUpdate />
            {/* <Bookmark /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
