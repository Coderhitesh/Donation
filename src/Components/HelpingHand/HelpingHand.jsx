import React from 'react';
import bg from './help.jpg'
import { Link } from 'react-router-dom';

function HelpingHand() {
  return (
    <>
      {/* about-area-start */}
      <div className="tp-about-4__area tp-about-4__space p-relative fix grey-bg">
        <div
          className="tp-about-4__bg forhelpbg"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="tp-about-4__bg-text d-none d-lg-block">
            <span>Watch Our Videos</span>
            <div className="tp-about-4__play-btn">
              <a className="popup-video" href="">
                <i className="fa-sharp fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="tp-about-4__shape d-none d-xxl-block">
          <img src="assets/img/about/about-shape-4.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="offset-xl-6 offset-lg-6 col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-about-4__left-side">
                <div className="tp-about-4__section-title">
                  <span className="tp-section-subtitle-3">HELPING HANDS</span>
                  <h4 className="tp-section-title">
                    Raise Fund for Clean <br />& Healthy Food
                  </h4>
                </div>
                <div className="tp-about-4__content">
                  <div className="tp-about-4__text">
                    <p>
                      Supporting personal fundraisers can be a beautiful experience or a <br />
                      horrifying one. Here is what you need to
                    </p>
                  </div>
                  <div className="tp-about-4__wraper pb-45 d-flex justify-content-between">
                    <div className="tp-about-4__list-item d-flex align-items-start">
                      <div className="tp-about-4__list-icon">
                        <i className="flaticon-mission"></i>
                      </div>
                      <div className="tp-about-4__list-content">
                        <h4 className="tp-about-4__title-sm">Our Mission</h4>
                        <p>
                          When we longer able to <br />
                          change situation
                        </p>
                      </div>
                    </div>
                    <div className="tp-about-4__list-item d-flex align-items-start">
                      <div className="tp-about-4__list-icon">
                        <i className="flaticon-vision"></i>
                      </div>
                      <div className="tp-about-4__list-content">
                        <h4 className="tp-about-4__title-sm">Our Vision</h4>
                        <p>
                          When we longer able to <br />
                          change situation
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tp-about-4__progress mb-40">
                    <div className="tp-about-4__progress-item fix">
                      <h4>Charity</h4>
                      <span className="progress-count">78%</span>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{
                            width: '58%',
                            visibility: 'visible',
                            animationDuration: '1s',
                            animationDelay: '0.3s',
                            animationName: 'slideInLeft',
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="tp-about-4__progress-item fix">
                      <h4>Donation</h4>
                      <span className="progress-count">92%</span>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{
                            width: '58%',
                            visibility: 'visible',
                            animationDuration: '1s',
                            animationDelay: '0.3s',
                            animationName: 'slideInLeft',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="tp-about-4__btn">
                    <Link className="tp-btn" to={'/about'}>
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about-area-end */}
    </>
  );
}

export default HelpingHand;
