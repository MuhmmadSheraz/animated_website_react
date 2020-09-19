import React from "react";
import NavbarHeader from "../Navbar/index";
import "./header.css";
import FloatingIcons from "../FloatingIcons/index";
import LaptopView from "../LaptopView/index";


const Header = () => {
  return (
    <div className="headerWrapper">
    <NavbarHeader />
      <div className="headerContent my-5 pt-4">
        <p className="heading">Mutify for Mac</p>
        <p className="text">
          Use a shortcut or the touch bar on any Mac device to quickly mute your
          microphone
        </p>
        <div>
          <button className="downloadBtnHeder m-1 mx-3">Download</button>
          <button className="priceBtn m-1">Buy: $4.99</button>
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
      <div className="mt-5">
 <FloatingIcons/>
 <LaptopView/>
    </div>
    </div>
  );
};
export default Header;
