import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import donate from './donate.png'
import { Link } from 'react-router-dom';


function DonateHome() {
    return (
        <>
            {/* donate-area-start */}
            <div className="tp-donate__area p-relative fix">
                <div className="tp-donate__shape-3 d-none d-lg-block">
                    <img src="assets/img/donate/donate-shape-1-4.png" alt="" />
                </div>
                <div className="tp-donate__bg">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="tp-donate__section-title">
                                    <span className="tp-section-subtitle-3">Help the people</span>
                                    <h4 className="tp-section-title">Our Popular Causes</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="tp-donate__section-arrow d-flex justify-content-start justify-content-md-end pb-50">
                                </div>
                            </div>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            // slidesPerView={3}
                            breakpoints={{
                                640: {
                                  slidesPerView: 1,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 2,
                                  spaceBetween: 40,
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetween: 50,
                                },
                              }}
                            navigation
                            pagination={{ clickable: true }}
                            loop
                        >
                            <SwiperSlide>
                                <div className="tp-donate__item">
                                    <div className="tp-donate__thumb p-relative fix">
                                        <img src={donate} alt="" />
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
                                            <p>Street children are poor or home children who live on the streets</p>
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
                                                        style={{ width: '42%' }}
                                                        aria-valuenow="42"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                                <div className="progress-goals">
                                                    <span>Raised <b>$4,407</b></span>
                                                    <span>Goal <b>$10,000</b></span>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tp-donate__item">
                                    <div className="tp-donate__thumb p-relative fix">
                                        <img src={donate} alt="" />
                                        <div className="tp-donate__thumb-shape">
                                            <img src="assets/img/donate/donate-shape-1.png" alt="" />
                                            <div className="tp-donate__thumb-text">
                                                <span>CHARITY</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-donate__content">
                                        <div className="tp-donate__text">
                                            <Link to={'/donation-detail'}>
                                                <h5 className="tp-donate__title">
                                                    Give African Child A Good Education
                                                </h5>
                                            </Link>
                                            <p>Street children are poor or home children who live on the streets</p>
                                        </div>
                                        <div className="tp-donate-progress">
                                            <div className="tp-donate-progress-item fix">
                                                <span className="progress-count">64%</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar wow slideInLeft"
                                                        data-wow-duration="1s"
                                                        data-wow-delay=".3s"
                                                        role="progressbar"
                                                        style={{ width: '64%' }}
                                                        aria-valuenow="64"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                                <div className="progress-goals">
                                                    <span>Raised <b>$6,790</b></span>
                                                    <span>Goal <b>$10,000</b></span>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tp-donate__item">
                                    <div className="tp-donate__thumb p-relative fix">
                                        <img src={donate} alt="" />
                                        <div className="tp-donate__thumb-shape">
                                            <img src="assets/img/donate/donate-shape-1.png" alt="" />
                                            <div className="tp-donate__thumb-text">
                                                <span>FOOD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-donate__content">
                                        <div className="tp-donate__text">
                                            <Link to={'/donation-detail'}>
                                                <h5 className="tp-donate__title">
                                                    Raise Fund For Clean & Healthy Food
                                                </h5>
                                            </Link>
                                            <p>Street children are poor or home children who live on the streets</p>
                                        </div>
                                        <div className="tp-donate-progress">
                                            <div className="tp-donate-progress-item fix">
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
                                                <div className="progress-goals">
                                                    <span>Raised <b>$8,904</b></span>
                                                    <span>Goal <b>$10,000</b></span>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tp-donate__item">
                                    <div className="tp-donate__thumb p-relative fix">
                                        <img src={donate} alt="" />
                                        <div className="tp-donate__thumb-shape">
                                            <img src="assets/img/donate/donate-shape-1.png" alt="" />
                                            <div className="tp-donate__thumb-text">
                                                <span>CHARITY</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-donate__content">
                                        <div className="tp-donate__text">
                                            <Link to={'/donation-detail'}>
                                                <h5 className="tp-donate__title">
                                                    Give African Child A Good Education
                                                </h5>
                                            </Link>
                                            <p>Street children are poor or home children who live on the streets</p>
                                        </div>
                                        <div className="tp-donate-progress">
                                            <div className="tp-donate-progress-item fix">
                                                <span className="progress-count">64%</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar wow slideInLeft"
                                                        data-wow-duration="1s"
                                                        data-wow-delay=".3s"
                                                        role="progressbar"
                                                        style={{ width: '64%' }}
                                                        aria-valuenow="64"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                                <div className="progress-goals">
                                                    <span>Raised <b>$6,790</b></span>
                                                    <span>Goal <b>$10,000</b></span>
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
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* donate-area-end */}
        </>
    );
}

export default DonateHome;
