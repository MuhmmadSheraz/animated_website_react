import React from "react";
import NavbarHeader from "../Navbar/index";
import "./header.css";
const Header = () => {
  return (
    <div className="headerWrapper">
    <NavbarHeader />
      <div className="headerContent mt-5 pt-4">
        <p className="heading">Mutify for Mac</p>
        <p className="text">
          Use a shortcut or the touch bar on any Mac device to quickly mute your
          microphone
        </p>
        <div>
          <button className="downloadBtnHeder mx-3">Download</button>
          <button className="priceBtn">Buy: $4.99</button>
        </div>
        <div className=" videoBox text-center mt-5">
          <video
            src="https://mutify.app/videos/main-screen@1x.mp4"
            autoPlay
            loop
          />
          <div className="Img_box">
            <img src="https://mutify.app/images/wave-1-ddc3a23018.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
