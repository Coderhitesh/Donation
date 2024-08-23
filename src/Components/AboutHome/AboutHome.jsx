import React from 'react';
import about1 from './about1.jpg'
import about2 from './about2.jpg'
import { Link } from 'react-router-dom';

function AboutHome() {
  return (
    <>
      {/* about-area-start */}
      <div className="tp-about-3__area tp-about-3__pb">
        <div className="container">
          <div className="row align-items-xl-start align-items-center">
            <div
              className="col-xl-5 col-lg-5 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-about-3__main-thumb p-relative">
                <img src={about1} alt="" />
                <div className="tp-about-3__thumb-sm">
                  <img src={about2} alt="" />
                </div>
                <div className="tp-about-3__circle-box">
                  <img src="assets/img/about/about-3-2.png" alt="" />
                  <div className="tp-about-3__circle-text">
                    <img src="assets/img/about/about-3-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-7 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="tp-about-3__left-side">
                <div className="tp-about-3__section-title">
                  <span className="tp-section-subtitle-3">KNOW ABOUT OUR Helpless People</span>
                  <h4 className="tp-section-title">Helping each other can <br /> make world better</h4>
                </div>
                <div className="tp-about-3__content">
                  <div className="tp-about-3__text">
                    <p>
                      Charity is the act of extending love and kindness to others
                      unconditional which <br /> is a conscious act but the decision
                      is made by the heart, without expecting a <br /> reward. When
                      Charity is carried out selflessly
                    </p>
                  </div>
                  <div className="tp-about-3__text-2 d-flex align-items-center">
                    <span>
                      <i className="flaticon-volunteer"></i>
                    </span>
                    <p>
                      You can use Charity Navigator to find and support thousands of
                      <br /> charities that align with your passions
                    </p>
                  </div>
                  <div className="tp-about-3__progress">
                    <div className="tp-about-3__progress-item fix">
                      <h4>Donation</h4>
                      <span className="progress-count">82%</span>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          role="progressbar"
                          style={{ width: '82%' }}
                          aria-valuenow="82"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="tp-about-3__wraper pb-40 d-flex justify-content-between">
                    <div className="tp-about-3__list-item d-flex about-items-start">
                      <div className="tp-about-3__list-icon">
                        <i className="flaticon-check-mark-black-outline"></i>
                      </div>
                      <div className="tp-about-3__list-content">
                        <h4 className="tp-about-3__title-sm">Quick Fundraising</h4>
                        <p>Charity Navigator's Giving you <br /> support multiple</p>
                      </div>
                    </div>
                    <div className="tp-about-3__list-item d-flex align-items-start">
                      <div className="tp-about-3__list-icon">
                        <i className="flaticon-check-mark-black-outline"></i>
                      </div>
                      <div className="tp-about-3__list-content">
                        <h4 className="tp-about-3__title-sm">Join Our Team</h4>
                        <p>Charity Navigator's Giving you <br /> support multiple</p>
                      </div>
                    </div>
                  </div>
                  <div className="tp-about-3__btn">
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

export default AboutHome;
