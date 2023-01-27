import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Axios from "../../../Axios/Axios";
import "./userPhotoUpload.css";

const UserPhotoUpload = () => {
  const fileTypes = ["JPG", "PNG", "GIF", "mp4"];
  const [file, setFile] = useState();
  const handleChange = (file) => {
    setFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
        "Content-Type": "multipart/form-data",
      },
    };
    let formData = new FormData();
    formData.append("caption", e.target.caption.value);
    formData.append("file", file);
    console.log(Array.from(formData));
    try {
      const res = await Axios.post("/user/post", formData, config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit} className="uploadphoto">
        <h1>Upload your posts</h1>
        <div className="uploadform">
          <FileUploader
            className="fileupload"
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            value={file}
          />
          <textarea name="caption" id=""></textarea>
          <button type="submit">
            <b>Done!</b>
          </button>
        </div>
        <div className="preview">
          {file && (
            <div className="preview">
              {file.type?.includes("image") && (
                <img
                  height={200}
                  src={file.preview ? file.preview : URL.createObjectURL(file)}
                  alt=""
                />
              )}
              {file.type?.includes("video") && (
                <video
                  src={file.preview ? file.preview : URL.createObjectURL(file)}
                  alt=""
                  controls
                />
              )}
              <p>name: {file.name}</p>
              <p>size: {file.size}</p>
              <p>type: {file.type}</p>
            </div>
          )}
        </div>
      </form> */}
       <div className="myphotomain">
        <div className="Myphotform">
          <h1>Post upload</h1>
          <form className="contact_form" name="contact_form" method="post">
            <div className="mb-5 row">
              <div className="col">
                <label>First Name</label>
                <input
                  type="text"
                  required
                  maxLength="50"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                />
              </div>
              <div className="col">
                <label>Last Name</label>
                <input
                  type="text"
                  required
                  maxLength="50"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                />
              </div>
            </div>
            <div className="mb-5 row">
              <div className="col">
                <label htmlFor="email_addr">Email address</label>
                <input
                  type="email"
                  required
                  maxLength="50"
                  className="form-control"
                  id="email_addr"
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="col">
                <label htmlFor="phone_input">Phone</label>
                <input
                  type="tel"
                  required
                  maxLength="50"
                  className="form-control"
                  id="phone_input"
                  name="Phone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-4 btn-lg">
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserPhotoUpload;
