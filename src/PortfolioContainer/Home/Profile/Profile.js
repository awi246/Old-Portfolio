import React from "react";
import Typical from 'react-typical';
import './Profile.css';
import ScrollService from "../../../utilities/ScrollService";


export default function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
                <div className="colz-icon">

              <a href="https://www.facebook.com/awiral.chand.9">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/awiral.chand/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/awi246">
              <i className="fa fa-github-square"></i>
              </a>
                </div>
            </div>
            <div className="profile-details-name">
                <span className="profile-text">
                    {" "}
                    Hello, I'm <span class="highlighted-text">Awiral</span>
                </span>
            </div>
            <div className="profile-details-role">
                {" "}
                <h1>
                    {" "}
                    <Typical
                    loop={Infinity}
                    steps={[
                        "💻Ethusiastic Dev🖥️",
                        1000,
                        "😎Frontend Developer",
                        1000,
                        "React Dev📱",
                        1000,
                    ]}
                    />

                </h1>
            </div>
            <div className="profile-options">
                <button className="btn primary-btn" 
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                >Hire Me
                </button>
                <a href='AwiralCV.pdf' download='Awiralcv.pdf'>
                    <button className="btn highlighted-btn">Download Resume</button>
                </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                </div>
            </div>
          </div>

        </div>
      </div>
  );
}
