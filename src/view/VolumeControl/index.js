import React from "react";
// import { BallBeat } from "react-pure-loaders";
import "./volume.css";
import { Button, Row, Col,Container } from "react-bootstrap";

const VolumeControl = () => {
  return (
    <>
      <div className="mainWrapper mb-5 ">
       <div className="content p-5">
          <Row>
            <Col md="5">
              <div className="mainContent">
                <div className="contentVolume">
                  <h1 className="text-light displayHeading">
                    Eaily Control The volume Level
                  </h1>
                  <p className="text-muted displayPara mt-1">
                    Use a shortcut to&nbsp;quickly access a&nbsp;window for
                    your&nbsp;microphone volume&nbsp;controls
                    <button className="priceBtn mt-5 d-block">
                      Buy: $4.99
                    </button>
                  </p>
                </div>
              </div>
            </Col>
            <Col md="7">
              <div className="img_side">
                <img
                  className="img_volume"
                  src="https://mutify.app/images/wave-c1b84a9196.png"
                />{" "}
                <div className="volumeLoaderWrapper">
                  {/* <BallBeat color={"#fff"} loading={true} /> */}
                  {/* <BallBeat color={"#fff"} loading={true} />
                  <BallBeat className="dot" color={"#fff"} loading={true} /> */}
                </div>
              </div>
            </Col>
          </Row>
        </div>

      </div>
    </>
  );
};

export default VolumeControl;
{
  /* <div className="para">
            <div className="content_inside">
              <h1 className="text-light">Eaily Control The volume Level</h1>
              <p>
                Use a shortcut to&nbsp;quickly access a&nbsp;window for
                your&nbsp;microphone volume&nbsp;controls
              </p>
            </div>
            
            <div className="img_div">
              <img src="https://mutify.app/images/wave-c1b84a9196.png" /> */
}
//     </div>
//   </div>
