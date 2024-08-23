import React, { useEffect } from 'react';
import bg from './about-bg.png'
import about1 from './aboutus1.jpg'
import about2 from './aboutus2.jpg'
import bg2 from './about-bg2.png'
import { Link } from 'react-router-dom';

function About() {
  useEffect(()=>{
    window.scroll({
      top:0,
      behavior: 'smooth'
    })
  },[])
  return (
    <>
      {/* breadcrumb-area-start */}
      <div style={{backgroundImage:`url(${bg})`}} className="tp-breadcrumb__area p-relative fix tp-breadcrumb-height" >
        <div className="tp-breadcrumb__shape-1 z-index-5">
          <img src="assets/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
        </div>
        <div className="tp-breadcrumb__shape-2 z-index-5">
          <img src="assets/img/breadcrumb/breadcrumb-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-breadcrumb__content z-index-5">
                <div className="tp-breadcrumb__list">
                  <span><Link to={'/'}>home</Link></span> 
                  <span className="dvdr"><i className="fa-sharp fa-solid fa-slash-forward"></i></span>
                  <span>About Us</span>
                </div>
                <h3 className="tp-breadcrumb__title">About us</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area-end */}

      {/* about-area-start */}
      <div className="tp-about__area tp-about__space">
        <div className="container">
          <div className="row align-items-xl-start align-items-center">
            <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="tp-about-us__main-thumb p-relative">
                <img src={about1} alt="" />
                <div className="tp-about-us__thumb-sm">
                  <img src={about2} alt="" />
                </div>
                <div className="tp-about-us__thumb-border"></div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="tp-about__right-side tp-about__right-box">
                <div className="tp-about__section-title pb-25">
                  <span className="tp-section-subtitle-2">OUR POOREX CHARITY CENTER</span>
                  <h4 className="tp-section-title">Contribute for the Poor<br />Differently Abled</h4>
                </div>
                <div className="tp-about__content">
                  <div className="tp-about__text">
                    <p>Charity is the act of extending love and kindness to others unconditionally which
                       is a conscious act but the decision is made by the heart, without expecting
                      a  reward. When Charity is carried out selflessly
                    </p>
                  </div>
                  <div className="tp-about__wraper pb-40 d-flex justify-content-between">
                    <div className="tp-about__list-item d-flex align-items-start">
                      <div className="tp-about__list-icon">
                        <i className="far fa-check"></i>
                      </div>
                      <div className="tp-about__list-content">
                        <h4 className="tp-about__title-sm">Quick Fundraising</h4>
                        <p>Charity Navigator's Giving you <br /> support multiple</p>
                      </div>
                    </div>
                    <div className="tp-about__list-item d-flex align-items-start">
                      <div className="tp-about__list-icon">
                        <i className="far fa-check"></i>
                      </div>
                      <div className="tp-about__list-content">
                        <h4 className="tp-about__title-sm">Join Our Team</h4>
                        <p>Charity Navigator's Giving you <br /> support multiple</p>
                      </div>
                    </div>
                  </div>
                  <div className="tp-about-progress">
                    <div className="tp-about-progress-item fix">
                      <h4>Donation</h4>
                      <span className="progress-count">82%</span>
                      <div className="progress">
                        <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" style={{ width: '58%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tp-about__bottom d-flex">
                    <div className="tp-about__contact-us">
                      <span>Call Us Anytime</span>      
                      <a href="tel:+99956786431435">+999 5678 6431 435</a>                                  
                    </div>
                    <div className="tp-about__author-box d-flex align-items-center">
                      <div className="tp-about__author-thumb pr-25">
                        <img src="assets/img/about/author-1.png" alt="" />
                      </div>
                      <div className="tp-about__author-info">
                        <h5 className="tp-about__author-name">Charlotte Ava</h5>
                        <span>Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about-area-end */}

      {/* brand-area-start */}
      {/* <div className="tp-brand-2__area">
        <div className="container">
          <div className="tp-brand-2__border">
            <div className="row">
              <div className="col-12">
                <div className="tp-brand-2__wrapper">
                  <div className="swiper-container tp-brand-2__active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="tp-brand-2__item text-center">
                          <img src="assets/img/brand/brand-2-1.png" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="tp-brand-2__item text-center">
                          <img src="assets/img/brand/brand-2-2.png" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="tp-brand-2__item text-center">
                          <img src="assets/img/brand/brand-2-3.png" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="tp-brand-2__item text-center">
                          <img src="assets/img/brand/brand-2-4.png" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="tp-brand-2__item text-center">
                          <img src="assets/img/brand/brand-2-2.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* brand-area-end */}

      {/* cta-area-start */}
      <div className="tp-cta-2__area tp-cta-2__pt">
        <div className="tp-cta-2__bg p-relative fix" style={{backgroundImage:`url(${bg2})`}}>
          <div className="tp-cta-2__shape-1 d-none d-xl-block">
            <img src="assets/img/cta/cta-shape-1-1.png" alt="" />
          </div>
          <div className="tp-cta-2__shape-2 d-none d-xl-block">
            <img src="assets/img/cta/cta-shape-1-2.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-cta-2__content text-center">
                  <span className="tp-cta-2__subtitle">let's start something for them</span>
                  <h4 className="tp-cta-2__title">No One Has Ever Become <br />Poor From Giving</h4>
                  <a href="donation-sidebar.html" className="tp-btn big">Start Donating Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cta-area-end */}

      {/* Testimonial Area Start */}
      <div className="tp-testimonial__area">
        <div
          className="tp-testimonial__bg"
          style={{ backgroundImage: 'url(assets/img/testimonial/testi-bg-1.jpg)' }}
        >
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="tp-testimonial__left-side">
                  <div className="tp-testimonial__section-title pb-20">
                    <span className="tp-section-subtitle">OUR TESTIMONIALS</span>
                    <h4 className="tp-section-title">
                      What Our Client <br />
                      Tell About?
                    </h4>
                  </div>
                  <div className="tp-testimonial__left-text">
                    <p>
                      Charity is the act of extending kindness unconditionally which is a conscious act but the decision
                      is made by the heart, without expecting act but the decision
                    </p>
                  </div>
                  <a className="tp-btn" href="team-details.html">
                    All Testimonials
                  </a>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-6">
                <div className="tp-testimonial__wrapper">
                  <div className="swiper-container tp-testimonial__active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="tp-testimonial__item-box">
                          <div className="tp-testimonial__item">
                            <div className="tp-testimonial__thumb">
                              <img src="assets/img/testimonial/author-1-1.png" alt="" />
                            </div>
                            <div className="tp-testimonial__content p-relative">
                              <div className="tp-testimonial__text">
                                <div className="tp-testimonial__star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <p>
                                  We can help with both your work and personal life tasks, letting you focus on what’s
                                  most important. simply are many variations of passages of Lorem Ipsum
                                </p>
                              </div>
                              <div className="tp-testimonial__quote">
                                <span>
                                  <i className="flaticon-double-quotes"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="tp-testimonial__author-info">
                            <h4 className="tp-testimonial__author-name">Paul Pitterson</h4>
                            <span>Volunteers</span>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="tp-testimonial__item-box">
                          <div className="tp-testimonial__item">
                            <div className="tp-testimonial__thumb">
                              <img src="assets/img/testimonial/author-1-1.png" alt="" />
                            </div>
                            <div className="tp-testimonial__content p-relative">
                              <div className="tp-testimonial__text">
                                <div className="tp-testimonial__star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <p>
                                  We can help with both your work and personal life tasks, letting you focus on what’s
                                  most important. simply are many variations of passages of Lorem Ipsum
                                </p>
                              </div>
                              <div className="tp-testimonial__quote">
                                <span>
                                  <i className="flaticon-double-quotes"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="tp-testimonial__author-info">
                            <h4 className="tp-testimonial__author-name">Hitesh Pitterson</h4>
                            <span>Volunteers</span>
                          </div>
                        </div>
                      </div>

                      {/* Repeat Swiper slides as needed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Area End */}

      {/* Team Area Start */}
      <div className="tp-team-2__area pt-115 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-team-2__section-title pb-50 text-center">
                <span className="tp-section-subtitle-2">OUR TEAM</span>
                <h4 className="tp-section-title">Meet With Our Expert</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-team-2__wrapper">
                <div className="tp-team-2__item text-center">
                  <div className="tp-team-2__thumb">
                    <img src="assets/img/team/team-1-1.jpg" alt="" />
                  </div>
                  <div className="tp-team-2__content">
                    <div className="tp-team-2__author-info">
                      <a href="team-details.html">
                        <h4 className="tp-team-2__author-name">Kaira Beasley</h4>
                      </a>
                      <span>Volunteer</span>
                    </div>
                    <div className="tp-team-2__social-box">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-team-2__wrapper">
                <div className="tp-team-2__item text-center">
                  <div className="tp-team-2__thumb">
                    <img src="assets/img/team/team-1-1.jpg" alt="" />
                  </div>
                  <div className="tp-team-2__content">
                    <div className="tp-team-2__author-info">
                      <a href="team-details.html">
                        <h4 className="tp-team-2__author-name">Kaira Beasley</h4>
                      </a>
                      <span>Volunteer</span>
                    </div>
                    <div className="tp-team-2__social-box">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-team-2__wrapper">
                <div className="tp-team-2__item text-center">
                  <div className="tp-team-2__thumb">
                    <img src="assets/img/team/team-1-1.jpg" alt="" />
                  </div>
                  <div className="tp-team-2__content">
                    <div className="tp-team-2__author-info">
                      <a href="team-details.html">
                        <h4 className="tp-team-2__author-name">Kaira Beasley</h4>
                      </a>
                      <span>Volunteer</span>
                    </div>
                    <div className="tp-team-2__social-box">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat team members as needed */}
          </div>
        </div>
      </div>
      {/* Team Area End */}

      {/* Call to Action Area Start */}
      <div className="tp-cta__area">
        <div
          className="tp-cta__bg"
          style={{ backgroundImage: 'url(assets/img/cta/cta-bg.jpg)' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="tp-cta__content d-flex align-items-center">
                  <div className="tp-cta__icon d-none d-sm-block">
                    <img src="assets/img/cta/cta-icon-1.png" alt="" />
                  </div>
                  <h4 className="tp-cta__title-sm">
                    Join your hand with us for a <br /> better life and future
                  </h4>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="tp-cta__button text-md-end text-start">
                  <a className="tp-btn" href="about-us.html">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action Area End */}
    </>
  );
}

export default About;
