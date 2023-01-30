import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../../Axios/Axios";
import "./mynews.css";

const Mynews = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    message: "",
  });
  const { first_name, last_name, phone, message } = form;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
        "Content-Type": "multipart/form-data",
      },
    };
    const data = new FormData(e.target);
    try {
      await Axios.post("/user/usernews", data, config);
      navigate("/user");
      setForm({
        first_name: "",
        last_name: "",
        phone: "",
        message: "",
        file: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1 className="lokdeshh1">
        अगर आप लोकदेश टीवी में अपनी खबर दिखाना चाहते हैं तो कृपया इस फॉर्म को
        भरें
      </h1>

      <div className="mynewsmain">
        <div className="Mynewsform">
          <form
            onSubmit={handleSubmit}
            className="contact_form"
            name="contact_form"
          >
            <div className="mb-5 row">
              <div className="col">
                <label>First Name</label>
                <input
                  type="text"
                  maxLength="50"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                  onChange={handleChange}
                  value={first_name}
                />
              </div>
              <div className="col">
                <label>Last Name</label>
                <input
                  type="text"
                  maxLength="50"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  onChange={handleChange}
                  value={last_name}
                />
              </div>
            </div>
            <div className="mb-5 row">
              <div className="col">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  maxLength="50"
                  className="form-control"
                  id="image"
                  name="file"
                  placeholder="name@example.com"
                />
              </div>
              <div className="col">
                <label htmlFor="phone_input">Phone</label>
                <input
                  type="tel"
                  maxLength="50"
                  className="form-control"
                  id="phone_input"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                  value={phone}
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
                onChange={handleChange}
                value={message}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-4 btn-lg">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mynews;
