import React from "react";
import "./DesktopPres.module.scss";
import bg1 from "../../backgrounds/bg1.jpg";
import bg2 from "../../backgrounds/bg2.jpg";
import bg3 from "../../backgrounds/bg3.jpg";
import bg4 from "../../backgrounds/bg4.jpg";
import bg5 from "../../backgrounds/bg5.jpg";
import bg6 from "../../backgrounds/bg6.jpg";
import bg7 from "../../backgrounds/bg7.jpg";
import bg8 from "../../backgrounds/bg8.jpg";
import bgblur from "../../backgrounds/bgblur.png";
import vid1 from "../../vids/vid1.mp4";
import vid2 from "../../vids/vid2.mp4";
import vid3 from "../../vids/vid3.mp4";
import vid4 from "../../vids/vid4.mp4";
import vid5 from "../../vids/vid5.mp4";
import vid6 from "../../vids/vid6.mp4";
import vid7 from "../../vids/vid7.mp4";
import vid8 from "../../vids/vid8.mp4";

import styles from "./DesktopPres.module.scss";

const slides = [
  { background: bg1, video: 1 },
  { background: bg2, video: 2 },
  { background: bg3, video: 3 },
  { background: bg4, video: 4 },
  { background: bg5, video: 5 },
  { background: bg6, video: 6 },
  { background: bg7, video: 7 },
  { background: bg8, video: 8 },
];

const Presentation = () => {
  const [activePres, setActivePres] = React.useState(0);
  const [activeVideo, setActiveVideo] = React.useState(vid1);
  const [speed, setSpeed] = React.useState(1);
  const [speedModal, setSpeedModal] = React.useState(false);
  const [paused, setPaused] = React.useState(true);
  const [fullScreen, setFullScreen] = React.useState(false);
  const [firstNew, setFirstNew] = React.useState(true);

  const vidRef = React.useRef<any>(null);

  function changeSpeed(spd: number) {
    vidRef.current.playbackRate = spd;
    setSpeed(spd);
  }

  function setPlay() {
    if (vidRef.current !== null) {
      if (vidRef.current.paused) {
        vidRef.current.play();
        setPaused(false);
      } else {
        vidRef.current.pause();
        setPaused(true);
      }
    }
    vidRef.current.addEventListener("ended", (event: any) => {
      setPaused(false);
    });
  }

  function setActiveLeft() {
    if (activePres === 0) {
    } else if (activePres === 1) {
      setActivePres(0);
      setActiveVideo(vid1);
    } else if (activePres === 2) {
      setActivePres(1);
      setActiveVideo(vid2);
    } else if (activePres === 3) {
      setActivePres(2);
      setActiveVideo(vid3);
    } else if (activePres === 4) {
      setActivePres(3);
      setActiveVideo(vid4);
    } else if (activePres === 5) {
      setActivePres(4);
      setActiveVideo(vid5);
    } else if (activePres === 6) {
      setActivePres(5);
      setActiveVideo(vid6);
    } else if (activePres === 7) {
      setActivePres(6);
      setActiveVideo(vid7);
    }
    setSpeed(1);
    setPaused(false);
  }

  function setActiveRight() {
    if (activePres === 0) {
      setActivePres(1);
      setActiveVideo(vid2);
    } else if (activePres === 1) {
      setActivePres(2);
      setActiveVideo(vid3);
    } else if (activePres === 2) {
      setActivePres(3);
      setActiveVideo(vid4);
    } else if (activePres === 3) {
      setActivePres(4);
      setActiveVideo(vid5);
    } else if (activePres === 4) {
      setActivePres(5);
      setActiveVideo(vid6);
    } else if (activePres === 5) {
      setActivePres(6);
      setActiveVideo(vid7);
    } else if (activePres === 6) {
      setActivePres(7);
      setActiveVideo(vid8);
    }

    setSpeed(1);
    setPaused(false);
  }

  //костыль , хотя тут все равно везде костыли
  // React.useEffect(() => {
  //   function handleKeyDown(event: any) {
  //     if (event.keyCode === 27) {
  //       setFullScreen(!fullScreen);
  //     }
  //   }
  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [fullScreen]);

  // if (width < 700) {
  //   return (
  //     <div className={styles.wrapperMobile}>
  //       <div className={styles.containerMobile}>
  //         <div className={styles.slidesMobile}>
  //           {slides.map((value: any, index: number) => (
  //             <div
  //               className={`${
  //                 index === activePres
  //                   ? styles.slideMobileActive
  //                   : styles.slideMobile
  //               }`}
  //             ></div>
  //           ))}
  //         </div>
  //         <div className={styles.bottomNavigationMobile}>
  //           <div className={styles.setSpeedMobileContainer}>
  //             <div
  //               className={styles.setSpeedMobile}
  //               onClick={() => setMobileSpeedModal(!speedModal)}
  //             >
  //               {mobileSpeedModal ? "1234" : "4321"}
  //             </div>
  //           </div>
  //           <div className={styles.videoMobileContainer}>
  //             <div className={styles.videoClick} onClick={() => setPlay()}>
  //               <video
  //                 ref={vidRef}
  //                 className={styles.videoMobileF}
  //                 src={activeVideo}
  //                 autoPlay={true}
  //               ></video>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  return (
    <div className={styles.wrapper}>
      <div id="wrapperOne" className={styles.wrapperOne}>
        <div
          className={styles.container}
          style={
            fullScreen
              ? firstNew
                ? {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "100vw",
                    minHeight: "calc(100vh - 50px)",
                    borderRadius: "0px",
                    // backgroundImage: `url(${bgblur})`,
                    background: `linear-gradient( rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3)100%),url(${bgblur})`,
                    backgroundPosition: "top",
                    backgroundSize: "contain",
                    backgroundColor: "#242424",
                    backgroundRepeat: "no-repeat",
                  }
                : {
                    minWidth: "100vw",
                    minHeight: "calc(100vh - 50px)",
                    borderRadius: "0px",
                    backgroundImage: `url(${slides[activePres].background})`,
                    backgroundPosition: "top",
                    backgroundSize: "contain",
                    backgroundColor: "#242424",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                  }
              : firstNew
              ? {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  minHeight: "650px",
                  background: `linear-gradient( rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3)100%),url(${bgblur})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }
              : {
                  width: "100%",
                  minHeight: "650px",
                  backgroundImage: `url(${slides[activePres].background})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }
          }
        >
          <div
            className={styles.blur}
            onClick={() => setFirstNew(false)}
            style={
              firstNew
                ? {
                    display: "flex",
                  }
                : {
                    display: "none",
                  }
            }
          >
            <span className={styles.blurText}>Открыть презентацию</span>
            <div>
              <svg
                width="96"
                height="96"
                viewBox="0 0 126 126"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_182_89)">
                  <path
                    d="M112.268 59.6532L41.4422 16.3407C40.846 15.9729 40.1624 15.7708 39.4621 15.7554C38.7617 15.7399 38.0699 15.9115 37.458 16.2526C36.8461 16.5936 36.3363 17.0918 35.9811 17.6956C35.6259 18.2994 35.4383 18.987 35.4375 19.6876V106.313C35.4383 107.013 35.6259 107.701 35.9811 108.305C36.3363 108.908 36.8461 109.406 37.458 109.748C38.0699 110.089 38.7617 110.26 39.4621 110.245C40.1624 110.229 40.846 110.027 41.4422 109.659L112.268 66.3469C112.85 66.003 113.331 65.5135 113.666 64.9266C114.001 64.3397 114.177 63.6757 114.177 63.0001C114.177 62.3244 114.001 61.6604 113.666 61.0735C113.331 60.4866 112.85 59.9971 112.268 59.6532Z"
                    fill="#E1E1E1"
                    stroke="#E1E1E1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_182_89">
                    <rect width="126" height="126" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div
            className={styles.volume}
            style={
              firstNew
                ? {
                    display: "flex",
                  }
                : {
                    display: "none",
                  }
            }
          >
            <div>
              <svg
                width="51"
                height="51"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.9634 21.6248C47.1565 22.8151 48.1031 24.2291 48.7489 25.7858C49.3948 27.3425 49.7272 29.0113 49.7272 30.6966C49.7272 32.382 49.3948 34.0508 48.7489 35.6075C48.1031 37.1641 47.1565 38.5781 45.9634 39.7685"
                  stroke="#E1E1E1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.2074 37.8258H12.6524C12.2742 37.8258 11.9116 37.6756 11.6442 37.4082C11.3768 37.1408 11.2266 36.7782 11.2266 36.4V24.9933C11.2266 24.6152 11.3768 24.2525 11.6442 23.9851C11.9116 23.7177 12.2742 23.5675 12.6524 23.5675H21.2074L34.0399 13.5867V47.8067L21.2074 37.8258Z"
                  stroke="#E1E1E1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.2075 23.5674V37.8257"
                  stroke="#E1E1E1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.9194 26.6687C41.4497 27.1969 41.8704 27.8247 42.1575 28.5159C42.4446 29.2071 42.5924 29.9482 42.5924 30.6967C42.5924 31.4452 42.4446 32.1863 42.1575 32.8775C41.8704 33.5687 41.4497 34.1964 40.9194 34.7247"
                  stroke="#E1E1E1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="30.5"
                  cy="30.5"
                  r="29.5"
                  stroke="#E1E1E1"
                  stroke-width="2"
                />
              </svg>
            </div>
            <span className={styles.volumeText}>
              Презентация содержит аудиовизуальное сопровождение
            </span>
          </div>
          {!firstNew && (
            <div
              className={styles.videoRow}
              style={
                activePres === 0
                  ? { position: "relative", bottom: "124px", right: "150px" }
                  : activePres === 1
                  ? { position: "relative", bottom: "400px", right: "220px" }
                  : activePres === 2
                  ? { position: "relative", bottom: "130px", right: "72px" }
                  : activePres === 3
                  ? { position: "relative", bottom: "420px", right: "40px" }
                  : activePres === 4
                  ? { position: "relative", bottom: "390px", right: "150px" }
                  : activePres === 5
                  ? { position: "relative", bottom: "150px", right: "980px" }
                  : activePres === 6
                  ? { position: "relative", bottom: "444px", right: "400px" }
                  : { position: "relative", bottom: "180px", right: "320px" }
              }
            >
              <div className={styles.videoDiv}>
                <div className={styles.videoClick} onClick={() => setPlay()}>
                  <video
                    onEnded={() => {
                      setActiveRight();
                    }}
                    ref={vidRef}
                    className={styles.video}
                    src={activeVideo}
                    autoPlay={true}
                  ></video>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className={styles.controls}
          style={
            fullScreen
              ? { width: "100%", height: "50px", borderRadius: "0px" }
              : {}
          }
        >
          <div className={styles.controlsLeft}>
            {paused ? (
              <svg
                onClick={() => setPlay()}
                width="15"
                height="20"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.6406 14.9375L3.15625 1.18753C2.96697 1.07077 2.74997 1.00663 2.52764 1.00171C2.3053 0.996792 2.08568 1.05128 1.89143 1.15955C1.69717 1.26783 1.53532 1.42596 1.42257 1.61765C1.30982 1.80934 1.25025 2.02764 1.25 2.25003V29.75C1.25025 29.9724 1.30982 30.1907 1.42257 30.3824C1.53532 30.5741 1.69717 30.7322 1.89143 30.8405C2.08568 30.9488 2.3053 31.0033 2.52764 30.9983C2.74997 30.9934 2.96697 30.9293 3.15625 30.8125L25.6406 17.0625C25.8253 16.9533 25.9782 16.7979 26.0845 16.6116C26.1908 16.4253 26.2467 16.2145 26.2467 16C26.2467 15.7855 26.1908 15.5747 26.0845 15.3884C25.9782 15.2021 25.8253 15.0467 25.6406 14.9375Z"
                  fill="#E1E1E1"
                  stroke="#E1E1E1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setPlay()}
                width="15"
                height="20"
                viewBox="5 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_624_3626)">
                  <path
                    d="M31.25 6.25H25.625C24.9346 6.25 24.375 6.80964 24.375 7.5V32.5C24.375 33.1904 24.9346 33.75 25.625 33.75H31.25C31.9404 33.75 32.5 33.1904 32.5 32.5V7.5C32.5 6.80964 31.9404 6.25 31.25 6.25Z"
                    fill="#E1E1E1"
                    stroke="#E1E1E1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.375 6.25H8.75C8.05964 6.25 7.5 6.80964 7.5 7.5V32.5C7.5 33.1904 8.05964 33.75 8.75 33.75H14.375C15.0654 33.75 15.625 33.1904 15.625 32.5V7.5C15.625 6.80964 15.0654 6.25 14.375 6.25Z"
                    fill="#E1E1E1"
                    stroke="#E1E1E1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_624_3626">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
          <div className={styles.controlsPage}>
            <svg
              onClick={() => setActiveLeft()}
              className={styles.leftBtn}
              width="15"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6667 3.33335L10 20L26.6667 36.6667"
                stroke="#E1E1E1"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {activePres + 1}/{slides.length}
            <svg
              onClick={() => setActiveRight()}
              className={styles.rightBtn}
              width="15"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6667 3.33335L10 20L26.6667 36.6667"
                stroke="#E1E1E1"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.controlsRight}>
            <div
              className={styles.controlsSpeed}
              onClick={() => setSpeedModal(!speedModal)}
            >
              {speedModal ? (
                <>
                  {speed}x
                  <div className={styles.modalControlSpeed}>
                    <div className={styles.columnChoose}>
                      <div
                        className={styles.choose}
                        onClick={() => changeSpeed(1)}
                      >
                        1x
                      </div>
                      <div
                        className={styles.choose}
                        onClick={() => changeSpeed(1.2)}
                      >
                        1.2x
                      </div>
                      <div
                        className={styles.choose}
                        onClick={() => changeSpeed(1.5)}
                      >
                        1.5x
                      </div>
                      <div
                        className={styles.choose}
                        onClick={() => changeSpeed(2)}
                      >
                        2x
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div>{speed}x</div>
              )}
            </div>
            <div className={styles.controlsFullscreen}>
              {fullScreen ? (
                <svg
                  onClick={() => {
                    setFullScreen(!fullScreen);
                    document.exitFullscreen();
                  }}
                  width="16"
                  height="16"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_624_3672)">
                    <path
                      d="M24.9375 9.1875V17.0625H32.8125"
                      stroke="#E1E1E1"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.125 7.875L24.9375 17.0625"
                      stroke="#E1E1E1"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.1875 24.9375H17.0625V32.8125"
                      stroke="#E1E1E1"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.875 34.125L17.0625 24.9375"
                      stroke="#E1E1E1"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_624_3672">
                      <rect width="42" height="42" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  onClick={() => {
                    setFullScreen(!fullScreen);
                    const inputTag = document.getElementById("wrapperOne");
                    inputTag!.requestFullscreen();
                  }}
                  width="16"
                  height="16"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_624_3672)">
                    <path
                      d="M26.25 7.875H34.125V15.75"
                      stroke="#E1E1E1"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.9375 17.0625L34.125 7.875"
                      stroke="#E1E1E1"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 34.125H7.875V26.25"
                      stroke="#E1E1E1"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.0625 24.9375L7.875 34.125"
                      stroke="#E1E1E1"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_624_3672">
                      <rect width="42" height="42" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
