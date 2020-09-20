import React from "react";
import "./laptop.css";
import useWebAnimations, { bounceIn } from "@wellyshen/use-web-animations";

const LaptopView = () => {
  const { ref: ref1 } = useWebAnimations({
    ...bounceIn,
    timing: {
      delay: 500, // Delay 1s
      duration: 1000 * 3, // Speed up the animation,
      iterations: Infinity,
    },
  });
  return (
    <div className="my-5">
      <div className="laptopWrapper pt-5 mt-5">
        <div className="laptopWrapper">
          <img
            className="laptop"
            src="https://mutify.app/images/macbook-1-51fcc36e0a.png"
          />
        </div>
        <div className="wave">
          <img src="https://mutify.app/images/wave-2-ca2e74569e.svg" />
        </div>
        <div className="micWrapper" ref={ref1}>
          <img src="https://mutify.app/images/magnifier-1878b93fb0.png" />
        </div>
      </div>
        <p className="text2 text-center mt-2">
          Use a shortcut or the touch bar on any Mac device to quickly mute your
          microphone
        </p>
      <div className="text-center my-3">
          <button className="downloadBtnHeder m-1 mx-3">Download</button>
          hsla(0,0%,100%,.7)        </div>
    </div>
  );
};
export default LaptopView;
