import React from "react";
import "./floatingIcons.css";
import useWebAnimations, { shakeY } from "@wellyshen/use-web-animations";

const FloatingIcons = () => {
  const { ref: ref1 } = useWebAnimations({
    ...shakeY,
    timing: {
      delay: 1000, // Delay 1s
      duration: 1000 * 10, // Speed up the animation,
      iterations: Infinity
    }
  });
  const { ref: ref2 } = useWebAnimations({
    ...shakeY,
    timing: {
      delay: 500, // Delay 1s
      duration:1000 * 10, // Speed up the animation,
      iterations: Infinity
    }
  });
  const { ref: ref3 } = useWebAnimations({
    ...shakeY,
    timing: {
      delay: 500, // Delay 1s
      duration:1000 * 10, // Speed up the animation,
      iterations: Infinity
    }
  });
  const { ref: ref4 } = useWebAnimations({
    ...shakeY,
    timing: {
      delay: 500, // Delay 1s
      duration:1000 * 10, // Speed up the animation,
      iterations: Infinity
    }
  });
  const { ref: ref5 } = useWebAnimations({
    ...shakeY,
    timing: {
      delay: 500, // Delay 1s
      duration:1000 * 10, // Speed up the animation,
      iterations: Infinity
    }
  });
  const { ref: ref6} = useWebAnimations({
    ...shakeY,
    timing: {
      delay: 500, // Delay 1s
      duration:1000 * 10, // Speed up the animation,
      iterations: Infinity
    }
  });
  const { ref: ref7 } = useWebAnimations({
    ...shakeY,
    timing: {
      delay: 500, // Delay 1s
      duration:1000 * 10, // Speed up the animation,
      iterations: Infinity
    }
  });
  const { ref: ref8 } = useWebAnimations({
    ...shakeY,
    timing: {
      delay: 500, // Delay 1s
      duration:1000 * 10, // Speed up the animation,
      iterations: Infinity
    }
  });
  const { ref: ref9 } = useWebAnimations({
    ...shakeY,
    timing: {
      delay: 500, // Delay 1s
      duration:1000 * 10, // Speed up the animation,
      iterations: Infinity
    }
  });
  const { ref: ref10 } = useWebAnimations({
    ...shakeY,
    timing: {
      delay: 500, // Delay 1s
      duration:1000 * 10, // Speed up the animation,
      iterations: Infinity
    }
  });
  return (
    <>
      <div className="text-center pt-5 my-5 content_recorder">
        <h1>Control</h1>
        <h1>Your Microphone</h1>
        <h1>anywhere</h1>
        <p>Even during calls</p>
        <p>
          <img
            className="recorderShow text-muted"
            src="https://mutify.app/images/FaceTimePopup@2x-11df12166f.jpg"
            alt="FaceTime Popup"
          />
        </p>
      </div>
      <div className="mainIcons">
        <div className="sameClass appear" ref={ref1}>
          <img src="https://mutify.app/images/Appear@2x-524960b483.png" />
          <p>Appear</p>
        </div>
        <div className="sameClass fbMessenger"ref={ref2}>
          <img src="https://mutify.app/images/FB-1b46484926.png" />
          <p>FB Messenger</p>
        </div>
        <div className="sameClass goMeeting" ref={ref3}>
          <img src="https://mutify.app/images/GoToMeetings@2x-9a4bc25e56.png" />
          <p>Go Meeting</p>
        </div>
        <div className="sameClass skype" ref={ref4}>
          <img src="https://mutify.app/images/Skype-64e68baaf2.png" />
          <p>Skype</p>
        </div>
        <div className="sameClass slack"ref={ref5}>
          <img src="https://mutify.app/images/Slack-a34e725729.png" />
          <p>Slack</p>
        </div>
        <div className="sameClass zoom" ref={ref6}>
          <img src="https://mutify.app/images/Zoom-0cb3267633.png" />
          <p>Zoom</p>
        </div>
        <div className="sameClass hangout" ref={ref7}>
          <img src="https://mutify.app/images/Hangouts-de6270cae5.png" />
          <p>Hangout</p>
        </div>
        <div className="sameClass webex"ref={ref8}>
          <img src="https://mutify.app/images/Webex-0b269eb5af.png" />
          <p>Webex</p>
        </div>
        <div className="sameClass viber" ref={ref9}>
          <img src="https://mutify.app/images/Viber-bcad9961af.png" />
          <p>Viber</p>
        </div>
        <div className="sameClass telegram" ref={ref10}>
          <img src="https://mutify.app/images/Telegram-d2ec968abe.png" />
          <p>Telegram</p>
        </div>
      
        {/* Hello */}
      
     
        <div className="sameClass2 skypeBlur" >
          <img src="https://mutify.app/images/Skype-64e68baaf2.png" />
          <p>Skype</p>
        </div>
        <div className="sameClass2 slackBlur">
          <img src="https://mutify.app/images/Slack-a34e725729.png" />
          <p>Slack</p>
        </div>
        <div className="sameClass2 zoomBlur" >
          <img src="https://mutify.app/images/Zoom-0cb3267633.png" />
          <p>Zoom</p>
        </div>
        <div className="sameClass2 hangoutBlur" >
          <img src="https://mutify.app/images/Hangouts-de6270cae5.png" />
          <p>Hangout</p>
        </div>
        
        <div className="sameClass2 viberBlur" >
          <img src="https://mutify.app/images/Viber-bcad9961af.png" />
          <p>Viber</p>
        </div>
        <div className="sameClass2 telegramBlur" >
          <img src="https://mutify.app/images/Telegram-d2ec968abe.png" />
          <p>Telegram</p>
        </div>
        </div>
    </>
  );
};

export default FloatingIcons;
