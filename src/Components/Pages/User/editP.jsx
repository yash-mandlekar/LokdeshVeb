import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../Axios/Axios";
import "./userEditProfile.css";
import { loadUser } from "../../../Store/Actions/User";
import { useNavigate } from "react-router-dom";

const UserEditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileRef = useRef();
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
    navigate("/User");
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
        <div className="loading"></div>
      ) : (
        <div className="editProfile">
          <div className="editProfileLeft">
            <div className="editProfileLeftBox">
              <div className="editpofileleft">
                <img
                  onClick={() => fileRef.current.click()}
                  src={
                    user?.profileImage?.includes("/avtar")
                      ? user?.profileImage
                      : `data:video/mp4;base64,${user?.profileImage}`
                  }
                  alt=""
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          <div className="editProfileCenter">
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
                  defaultValue={user?.gender}
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
                  name="businessAcc"
                  placeholder="Enter Here"
                  defaultValue={user?.business}
                />
                <datalist id="bussiness">
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </datalist>
                <br />

                <button type="submit">Update</button>
              </ul>
            </form>
            <input
              type="file"
              name="profileImage"
              onChange={handleProfileImage}
              style={{ display: "none" }}
              ref={fileRef}
            />
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
