import React from 'react';
import bg from './bg.png'
import donationDetailBg from './donation-detail-bg.jpg'
import event from './event.jpg'
import latest from './latest.jpg'

function DonationDetail() {
    return (
        <>
            {/* breadcrumb-area-start */}
            <div
                className="tp-breadcrumb__area p-relative fix tp-breadcrumb-height"
                style={{ backgroundImage: `url(${bg})` }}
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
                                    <span><a href="index.html">home</a></span>
                                    <span className="dvdr"><i className="fa-sharp fa-solid fa-slash-forward"></i></span>
                                    <span>Donations</span>
                                </div>
                                <h3 className="tp-breadcrumb__title">Donate Now</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* breadcrumb-area-end */}

            {/* event-area-start */}
            <div className="tp-event-details__area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="tp-event-details__left-side">
                                <div className="tp-event-details__thumb p-relative">
                                    <img src={donationDetailBg} alt="" />
                                    <div className="tp-event-details__thumb-text">
                                        <span>HEALTH</span>
                                    </div>
                                </div>
                                <div className="tp-donation-details__progress-box grey-bg mb-50">
                                    <div className="tp-donation-details__progress w-100">
                                        <div className="tp-donation-details__progress-item fix">
                                            <span className="progress-count">80%</span>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar wow slideInLeft"
                                                    data-wow-duration="1s"
                                                    data-wow-delay=".3s"
                                                    role="progressbar"
                                                    style={{ width: "80%" }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                />
                                            </div>
                                            <div className="progress-goals">
                                                <span>Raised <b>$4,407</b></span>
                                                <span>Goal <b>$10,000</b></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="tp-event-details__title mb-45">Donation Form</h4>
                                <div className="tp-donation-details__notice-box grey-bg">
                                    <div className="tp-donation-details__notice-shape d-none d-md-block">
                                        <img src="assets/img/donate/notic.png" alt="" />
                                    </div>
                                    <span><b>Notice:</b> Test mode is enabled. While in test mode no live donation is processed.</span>
                                </div>
                                <h4 className="tp-donation-details__form-title pb-45">Select Payment Method</h4>
                                <div className="tp-donate__method">
                                    <span>
                                        <input id="flat_rate" type="radio" name="shipping" />
                                        <label htmlFor="flat_rate">Flat rate: <span>$20.00</span></label>
                                    </span>
                                    <span>
                                        <input id="local_pickup" type="radio" name="shipping" />
                                        <label htmlFor="local_pickup">Local pickup: <span>$25.00</span></label>
                                    </span>
                                    <span>
                                        <input id="free_shipping" type="radio" name="shipping" />
                                        <label htmlFor="free_shipping">Free shipping</label>
                                    </span>
                                </div>
                                <div className="tp-donate__button-box">
                                    <button className="active">$30</button>
                                    <button>$30</button>
                                    <button>$180</button>
                                    <button>$500</button>
                                    <button>$1000</button>
                                </div>
                                <div className="tp-donation-details__input-box pb-25">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                            <div className="tp-donation-details__text-box">
                                                <span>Custom amount</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                            <div className="tp-donation-details__input">
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-donation-details__form-box">
                                    <h4 className="tp-donation-details__form-title pb-45">Personal Information</h4>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                                <div className="tp-donation-details__input">
                                                    <label>First Name</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                                <div className="tp-donation-details__input">
                                                    <label>Last Name</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                                <div className="tp-donation-details__input">
                                                    <label>City</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                                <div className="tp-donation-details__input">
                                                    <label>State</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                                <div className="tp-donation-details__input">
                                                    <label>Country</label>
                                                    <select style={{ display: 'none' }} >
                                                        <option>New York US</option>
                                                        <option>Berlin Germany</option>
                                                        <option>Paris France</option>
                                                        <option>Tokiyo Japan</option>
                                                    </select>
                                                    <div className="nice-select"><span className="current">New York
                                                        US</span>
                                                        <ul className="list">
                                                            <li data-value="New York US" className="option selected focus">New
                                                                York US</li>
                                                            <li data-value="Berlin Germany" className="option">Berlin Germany
                                                            </li>
                                                            <li data-value="Paris France" className="option">Paris France</li>
                                                            <li data-value="Tokiyo Japan" className="option">Tokiyo Japan</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                                <div className="tp-donation-details__input">
                                                    <label>Phone Number</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12 mb-30">
                                                <div className="tp-donation-details__input">
                                                    <label>Enter Your Email</label>
                                                    <input type="email" />
                                                </div>
                                            </div>
                                            <div className="postbox__comment-agree-2 pb-50">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckDefault"
                                                    />
                                                    <label
                                                        className="form-check-label text-theme"
                                                        htmlFor="flexCheckDefault"
                                                    >
                                                        You agree to the terms
                                                    </label>
                                                </div>
                                            </div>
                                            <h4 className="tp-donation-details__form-title pb-20">
                                                Total Donation: <span>$430.00</span>
                                            </h4>
                                            <div className="tp-donation-details__button">
                                                <button className="tp-btn">Donate Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="tp-event-details__right-box">
                                <div className="tp-event-details__author-info mb-30 grey-bg text-center">
                                    <div className="tp-event-details__author-thumb pr pb-20">
                                        <img src="assets/img/donate/author-1-4.png" alt="" />
                                    </div>
                                    <div className="tp-event-details__author-text">
                                        <a href="#">
                                            <h5>Kaira Beasley</h5>
                                        </a>
                                        <span>Host & Speaker</span>
                                    </div>
                                    <div className="tp-event-details__social-box">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                                <div className="tp-event-details__item-2 text-center mb-30" style={{backgroundImage:`url(${event})`}}>
                                    <div className="tp-event-details__item-2-logo pb-25">
                                        <img src="assets/img/event/event-details-logo.png" alt="" />
                                    </div>
                                    <div className="tp-event-details__item-2-text">
                                        <h4 className="tp-event-details__item-2-title">Healthy People <br />Better in The World
                                        </h4>
                                        <span>$6,790 of $10,000 raised</span>
                                    </div>
                                    <div className="tp-event-details__button">
                                        <a className="tp-border-btn" href="#">Donate Now</a>
                                    </div>
                                </div>
                                <div class="sidebar__widget mb-30">
                                    <h3 class="sidebar__widget-title">Our Latest Post</h3>
                                    <div class="sidebar__widget-content">
                                        <div class="sidebar__post">
                                            <div class="rc__post mb-10 d-flex align-items-center">
                                                <div class="rc__post-thumb mr-20">
                                                    <a ><img
                                                        src={latest} alt=""/></a>
                                                </div>
                                                <div class="rc__post-content">
                                                    <div class="rc__meta">
                                                        <span><i class="flaticon-comment"></i>
                                                            02 Comments</span>
                                                    </div>
                                                    <h3 class="rc__post-title">
                                                        <a>We Should Donate <br/>For Indian’s
                                                            Poor</a>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div class="rc__post mb-10 d-flex align-items-center">
                                                <div class="rc__post-thumb mr-20">
                                                    <a ><img
                                                        src={latest} alt=""/></a>
                                                </div>
                                                <div class="rc__post-content">
                                                    <div class="rc__meta">
                                                        <span><i class="flaticon-comment"></i>
                                                            02 Comments</span>
                                                    </div>
                                                    <h3 class="rc__post-title">
                                                        <a >Quick Fundraising For <br />African
                                                            Child</a>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div class="rc__post d-flex align-items-center">
                                                <div class="rc__post-thumb mr-20">
                                                    <a ><img
                                                        src={latest} alt="" /></a>
                                                </div>
                                                <div class="rc__post-content">
                                                    <div class="rc__meta">
                                                        <span><i class="flaticon-comment"></i>
                                                            02 Comments</span>
                                                    </div>
                                                    <h3 class="rc__post-title">
                                                        <a >Bring The People For <br />Raise Hands</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sidebar__widget mb-30">
                                <h3 class="sidebar__widget-title">Tags</h3>
                                <div class="sidebar__widget-content">
                                    <div class="tagcloud">
                                        <a href="#">Fundraising</a>
                                        <a href="#">kids</a>
                                        <a href="#">Food</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* event-area-end */}
        </>
    );
}

export default DonationDetail;
