import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../Axios/Axios";
import "./userEditProfile.css";
import { loadUser } from "../../../Store/Actions/User";
import { useNavigate } from "react-router-dom";
const UserEditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user } = useSelector((state) => state.auth);
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };
    const formdata = new FormData(e.target);
    console.log(Array.from(formdata));  
    await Axios.put("/user/profile", formdata, config);
    alert("profile updated");
  };
  const handleLogout = async () => {
    try {
      await Axios.post("/user/logout");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      alert("logout success");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleProfileImage = async (e) => {
    const formdata = new FormData();
    formdata.append("profileImage", e.target.files[0]);
    const res = await Axios.post("/user/profile/pic", formdata, {
      headers: {
        token: localStorage.getItem("accessToken"),
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status == 200) {
      dispatch(loadUser());
    }
  };
  return (
    <>
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="editProfile">
          <div className="editProfileLeft">
            <div className="editProfileLeftBox"></div>
          </div>

          <div className="editProfileCenter">
            <div className="editProfileCenterBox1">
              <div className="editProfileCenterBox1Left">
                <img
                  src={
                    user?.profileImage?.includes("/avtar")
                      ? user?.profileImage
                      : `data:video/mp4;base64,${user?.profileImage}`
                  }
                  alt=""
                />
              </div>
              <div className="editProfileCenterBox1Right">
                <h3>{user?.name}</h3>
                <h4>@{user?.userName}</h4>
                <p>{user?.bio}</p>
              </div>
            </div>
            <input
              type="file"
              name="profileImage"
              onChange={handleProfileImage}
            />
            <form onSubmit={handleSubmit} className="editPRofileCenter">
              <ul>
                <label htmlFor="">name</label>
                <br />
                <input type="text" name="name" defaultValue={user?.name} />
                <br />
                <label htmlFor="">username</label>
                <br />
                <input
                  type="text"
                  name="userName"
                  defaultValue={user?.userName}
                />
                <br />
                <label htmlFor="">email</label>
                <br />
                <input type="text" name="email" defaultValue={user?.email} />
                <br />
                <label htmlFor="">location</label>
                <br />
                <input
                  type="text"
                  name="district"
                  defaultValue={user?.district}
                />
                <br />
                <label htmlFor="">bio</label>
                <br />
                <input type="text" name="bio" defaultValue={user?.bio} />
                <br />
                <label htmlFor="">date Of Birth</label>
                <br />
                <input
                  type="text"
                  name="dateOfBirth"
                  defaultValue={user?.dateOfBirth.split("T")[0]}
                />
                <br />
                <label htmlFor=""> phone</label>
                <br />
                <input type="text" name="phone" defaultValue={user?.phone} />
                <br />
                <label htmlFor="">gender</label>
                <br />
                <input
                  type="text"
                  list="gender"
                  name="gender"
                  placeholder="Enter Here"
                />
                <datalist id="gender">
                  <option value="male">male</option>
                  <option value="female">female</option>
                </datalist>
                <br />
                <label htmlFor="">business acc</label>
                <br />
                <input
                  type="text"
                  list="bussiness"
                  name="business"
                  placeholder="Enter Here"
                />
                <datalist id="bussiness">
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </datalist>
                <br />

                <button type="submit">Update</button>
              </ul>
            </form>
          </div>

          <div className="editProfileRight">
            <div className="editProfileRightBox">
              <button onClick={handleLogout}>
                <i className="bi bi-door-closed"></i>Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserEditProfile;
