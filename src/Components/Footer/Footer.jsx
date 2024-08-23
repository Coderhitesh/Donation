import React from 'react';
import logo from './logo.jpg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer>
        {/* footer-area-start */}
        <div className="tp-footer__area">
          <div className="tp-footer__bg" data-background="assets/img/footer/ft-bg-1.jpg">
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 col-md-6 mb-45 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="tp-footer__widget footer-2-col-1">
                    <div className="tp-footer__logo">
                      <a href="index.html">
                        <img style={{height:'100px'}} src={logo} alt="" />
                      </a>
                    </div>
                    <div className="tp-footer__text">
                      <p>
                      Charity is the act of extending love <br /> and kindness to others unconditional <br /> which
                      is a conscious
                      </p>
                    </div>
                    <div className="tp-footer__contact-list">
                      <div className="tp-footer__contact-item pb-20 d-flex about-items-center">
                        <div className="tp-footer__icon">
                          <i className="flaticon-mail"></i>
                        </div>
                        <div className="tp-footer__text">
                          <a href="mailto:poorexcharity@gmail.com">Helplesspeople@gmail.com</a>
                        </div>
                      </div>
                      <div className="tp-footer__contact-item d-flex about-items-center">
                        <div className="tp-footer__icon">
                          <i aria-hidden="true" className="flaticon-phone"></i>
                        </div>
                        <div className="tp-footer__text">
                          <a href="tel:+9199999999">+91 99999999</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-2 col-md-6 mb-45 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div className="tp-footer__widget footer-2-col-2">
                    <h4 className="tp-footer__widget-title-3">Navigation</h4>
                    <div className="tp-footer__list">
                      <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About Us</Link></li>
                        {/* <li><Link to={''}>Donation</Link></li>
                        <li><Link to={''}>Latest News</Link></li> */}
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-2 col-md-6 mb-45 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <div className="tp-footer__widget footer-2-col-3">
                    <h4 className="tp-footer__widget-title-3">Campaigns</h4>
                    <div className="tp-footer__list">
                      <ul>
                        <li><Link to={'/donation'}>Donation</Link></li>
                        {/* <li><a href="#">Differently Abled</a></li>
                        <li><a href="#">Clean Water</a></li>
                        <li><a href="#">Start Fundraising</a></li>
                        <li><a href="#">Give Education</a></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 mb-45 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  <div className="tp-footer__widget footer-2-col-4">
                    <div className="tp-footer__donate-box">
                      <h4 className="tp-footer__donate-title-sm">
                        We Work Together For a <br />
                        Beautiful World, Come Join Us Today!
                      </h4>
                      <Link className="tp-btn theme-2-bg" to={'/donation'}>Donate Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer-area-end */}

        {/* copyright-area-start */}
        <div className="tp-copyright__area tp-copyright__bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="tp-copyright__text text-center text-sm-start">
                  <span> Copyright 2023 by Helpless People</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="tp-copyright__social text-center text-sm-end">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright-area-end */}
      </footer>
    </>
  );
}

export default Footer;
