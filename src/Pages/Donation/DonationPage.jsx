import React from 'react';
import bg from './bg.png'
import donationPage from './donation-page.png'
import { Link } from 'react-router-dom';

function DonationPage() {
  return (
    <>
      {/* breadcrumb-area-start */}
      <div
        className="tp-breadcrumb__area p-relative fix tp-breadcrumb-height" style={{backgroundImage:`url(${bg})`}}
      >
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
                  <span>
                    <Link to={'/'}>home</Link>
                  </span>
                  <span className="dvdr">
                    <i className="fa-sharp fa-solid fa-slash-forward"></i>
                  </span>
                  <span>Donations</span>
                </div>
                <h3 className="tp-breadcrumb__title">Donations</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area-end */}

      {/* donate-area-start */}
      <div className="tp-donate__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-donate__item">
                <div className="tp-donate__thumb p-relative fix">
                  <img src={donationPage} alt="" />
                  <div className="tp-donate__thumb-shape">
                    <img src="assets/img/donate/donate-shape-1.png" alt="" />
                    <div className="tp-donate__thumb-text">
                      <span>SHELTER</span>
                    </div>
                  </div>
                </div>
                <div className="tp-donate__content">
                  <div className="tp-donate__text">
                    <Link to={'/donation-detail'}>
                      <h5 className="tp-donate__title">
                        Contribute Make For The Somalians happy
                      </h5>
                    </Link>
                    <p>
                      Street children are poor or home children who live on the
                      streets
                    </p>
                  </div>
                  <div className="tp-donate-progress">
                    <div className="tp-donate-progress-item fix">
                      <span className="progress-count">42%</span>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          role="progressbar"
                          data-width="42%"
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
                      <div className="progress-goals">
                        <span>
                          Raised <b> $4,407</b>
                        </span>
                        <span>
                          Goal <b> $10.000</b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="tp-donate__button">
                    <Link className="tp-grey-btn" to={'/donation-detail'}>
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the structure for other donation items */}
            {/* More donation items can go here */}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="basic-pagination text-center pt-30">
                <nav>
                  <ul>
                    <li>
                      <a href="donation-details.html">1</a>
                    </li>
                    <li>
                      <a href="donation-details.html">2</a>
                    </li>
                    <li>
                      <a href="donation-details.html">3</a>
                    </li>
                    {/* More pagination items can go here */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* donate-area-end */}
    </>
  );
}

export default DonationPage;
