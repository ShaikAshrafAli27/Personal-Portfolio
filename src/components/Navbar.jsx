import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-[4rem] rounded-3xl" src={logo} alt="company logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shaik-ashraf-ali-59356a242/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/ShaikAshrafAli27" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/ashrafali27._/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
