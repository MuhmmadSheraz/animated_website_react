import React from "react";
import Navbar from "../Navbar/index"
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footerWrapper">
      <div className="footerContainer">
        <div className="footerFeedbackWrapper">
          <h2 className="footerTitleText">Have an Idea or Feedback?</h2>
          <span className="footerSubtitleText">help@mutify.app</span>
          <video
            src="https://mutify.app/videos/wave-white@1x.mp4"
            muted
            autoPlay
            loop
            className="footerVideo"
          ></video>
        </div>
        <div className="footerNav">
          <Navbar />
        </div>
        {/* <div className="footerLogoWrapper">
          <img src={Logo} width={60} height={60} alt="logo" />
          <span className="brandName"> MUTIFY</span>
        </div> */}
        <div className="footerCopyrightText">
          Made by{" "}
          <a
            rel="noopener noreferrer"
            href="https://github.com/MuhmmadSheraz"
            target="_blank"
          >
            M.Shiraz
          </a>
          – Front-End-Dev. © 2020 All right reserved
        </div>
      </div>
    </footer>
  );
};
