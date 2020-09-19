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
    </div>
  );
};
export default LaptopView;
