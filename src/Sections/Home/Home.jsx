import React from "react";
import "./Home.css";
import { Type } from "../../Components/Type";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Vijay_s_Resume from "../../Components/Downloads/Vijay_s_Resume.pdf";

const Home = () => {
  const handleClick = () => {
    const url =
      "https://drive.google.com/file/d/1tiWbwgenZzakNKEBwAV7KW-DxHDVBD0t/view?usp=share_link";
    const link = document.createElement("a");
    link.href = url;
    link.download = "Vijay_s_Resume.pdf";
    link.click();
  };
  const handleOpenMailPage = () => {
    window.open("mailto:zvijay2409.com");
  };
  const handleGit = () => {
    window.open("https://github.com/vijay2409");
  };
  const handlePhoneClick = () => {
    window.open("tel:+918651951219");
  };
  const handleLikedin = () => {
    window.open("https://www.linkedin.com/in/vijay-kumar-951596111/");
  };
  return (
    <>
      <div id="home">
        <div id="heading">
          <h1 id="name">
            Hello, I am <span>Vijay Kumar</span>
          </h1>
          <h1 id="type">
            <Type />
          </h1>
        </div>
        <div id="resume-btn-2">
          <a id="resume-link-2" href={Vijay_s_Resume} download="Vijay_s_Resume">
            <button onClick={handleClick}>
              <HiDownload /> Resume
            </button>
          </a>
        </div>
        <div id="social-links">
          <BsGithub className="social-icons" onClick={handleGit} />
          <SiGmail className="social-icons" onClick={handleOpenMailPage} />
          <FaPhoneAlt className="social-icons" onClick={handlePhoneClick} />
          <BsLinkedin className="social-icons" onClick={handleLikedin} />
        </div>
      </div>
    </>
  );
};

export default Home;
