import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useNavigate } from "react-router-dom";
import Axios from "../../../Axios/Axios";
import "./userPhotoUpload.css";

const UserPhotoUpload = () => {
  const navigate = useNavigate();
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
      navigate("/userwall");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="photouploadform">
        <div className="photouploadmain">
          <form onSubmit={handleSubmit} className="uploadphoto">
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
                      src={
                        file.preview ? file.preview : URL.createObjectURL(file)
                      }
                      alt=""
                    />
                  )}
                  {file.type?.includes("video") && (
                    <video
                      src={
                        file.preview ? file.preview : URL.createObjectURL(file)
                      }
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
          </form>
        </div>
      </div>
    </>
  );
};

export default UserPhotoUpload;
