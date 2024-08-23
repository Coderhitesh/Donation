import React from 'react';
import { Link } from 'react-router-dom';

function CTAHome() {
  return (
    <>
      {/* cta-area-start */}
      <div className="tp-cta-2__area pb-115">
        <div
          className="tp-cta-2__bg p-relative fix"
          style={{ backgroundImage: "url('./bg.png')" }}
        >
          <div className="tp-cta-2__shape-3 d-none d-lg-block">
            <img src="assets/img/cta/cta-shape-3.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-cta-2__content text-center">
                  <span
                    className="tp-cta-2__subtitle wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                  >
                    let's start something for them
                  </span>
                  <h4
                    className="tp-cta-2__title wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    No One Has Ever Become <br /> Poor From Giving
                  </h4>
                  <Link
                    to={'/donation'}
                    className="tp-btn theme-2-bg wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                  >
                    Start Donating Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cta-area-end */}
    </>
  );
}

export default CTAHome;
