import React from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDisclosure } from "@chakra-ui/react";
import Vijay_s_Resume from "./Downloads/Vijay_s_Resume.pdf";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1tiWbwgenZzakNKEBwAV7KW-DxHDVBD0t/view?usp=share_link"
    );
    onClose();
  };
  const NavigateSection = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const offset = document.querySelector(target).offsetTop;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  const handleToggle = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const offset = document.querySelector(target).offsetTop;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
    onClose();
  };

  return (
    <nav>
      <div id="logo">
        <span className="span">{"<"}</span> <h2>Vijay</h2>
        {""}
        <span className="span"> {"/>"}</span>
      </div>
      <ul>
        <li>
          <a href="#home" onClick={NavigateSection}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={NavigateSection}>
            About
          </a>
        </li>
        <li>
          <a href="#experiance" onClick={NavigateSection}>
            Experiance
          </a>
        </li>
        <li>
          <a href="#projects" onClick={NavigateSection}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={NavigateSection}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={NavigateSection}>
            Contact
          </a>
        </li>
        <li id="resume-link-1">
          <a
            className="nav-link resume"
            id="resume-link-1"
            href={Vijay_s_Resume}
            onClick={handleClick}
            download="Vijay_s_Resume"
          >
            Resume
          </a>
        </li>
      </ul>
      <div id="menu-btn">
        <RxHamburgerMenu
          onClick={onToggle}
          fontSize={"28px"}
          fontWeight={"700"}
        />
      </div>
      {isOpen && (
        <div id="sideMenu">
          <ul id="sideList">
            <li>
              <a href="#home" onClick={handleToggle}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleToggle}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleToggle}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleToggle}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleToggle}>
                Contact
              </a>
            </li>
            <li>
              <a
                className="nav-link resume"
                id="resume-link-1"
                href={Vijay_s_Resume}
                onClick={handleClick}
                download="Vijay_s_Resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
