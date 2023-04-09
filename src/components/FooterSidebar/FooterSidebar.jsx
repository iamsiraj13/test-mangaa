import React from "react";
import up from "../../assets/images/episodepage/up.svg";
import prev from "../../assets/images/episodepage/prev.svg";
import next from "../../assets/images/episodepage/next.svg";
import book from "../../assets/images/episodepage/twopage.svg";
import fullscreen from "../../assets/images/episodepage/fullscreen.svg";
import wide from "../../assets/images/episodepage/widescreen.svg";
import fullpage from "../../assets/images/episodepage/page1.png";
import fullscreensm from "../../assets/images/episodepage/fullscreensm.svg";
import widesm from "../../assets/images/episodepage/widesm.svg";
import scrollsm from "../../assets/images/episodepage/scrollsm.svg";
import booksm from "../../assets/images/episodepage/booksm.svg";
import scroll1 from "../../assets/images/episodepage/scroll.svg";

const FooterSidebar = ({ scroll, setScroll, screen, setScreen }) => {
  return (
    <div className="episode-footer">
      {/* episode footer button  */}
      <div className="left-buttons">
        <button>
          chapter list{" "}
          <span>
            <img src={up} alt="" />
          </span>
        </button>
        <button>
          <span>
            <img src={prev} alt="prev btn" />
          </span>
          prv ep
        </button>
        <button>
          nxt ep
          <span>
            <img src={next} alt="next btn" />
          </span>
        </button>
      </div>

      {/* page layout  */}

      <div className="right-buttons">
        {/* page height wise */}
        <div className="screen-button">
          {scroll === true ? (
            <button>
              <img src={scroll1} alt="scroll" />
            </button>
          ) : (
            <button onClick={() => setScroll(true)}>
              <img src={scrollsm} alt="scroll" />
            </button>
          )}
          {scroll === true ? (
            <button onClick={() => setScroll(false)}>
              <img src={booksm} alt="" />
            </button>
          ) : (
            <button>
              <img src={book} alt="" />
            </button>
          )}
        </div>

        <div className="view-button">
          {screen === true ? (
            <button>
              <img src={fullscreensm} alt="" />
            </button>
          ) : (
            <button onClick={() => setScreen(true)}>
              <img src={fullscreen} alt="" />
            </button>
          )}

          {screen === false ? (
            <button>
              <img src={widesm} alt="" />
            </button>
          ) : (
            <button onClick={() => setScreen(false)}>
              <img src={wide} alt="" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterSidebar;
