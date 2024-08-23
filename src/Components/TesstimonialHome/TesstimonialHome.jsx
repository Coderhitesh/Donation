import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function TestimonialArea() {
  return (
    <>
      {/* testimonial-area-start */}
      <div className="tp-testimonial-3__area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-3__section-title text-center pb-35">
                <span className="tp-section-subtitle-3">OUR TESTIMONIALS</span>
                <h4 className="tp-section-title">Our Clients Feedback</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-3__wrapper">
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  loop
                >
                  <SwiperSlide>
                    <div className="tp-testimonial-3__item">
                      <div className="tp-testimonial-3__top d-flex align-items-center justify-content-between">
                        <div className="tp-testimonial-3__top-thumb">
                          <img src="assets/img/testimonial/author-3-1.png" alt="" />
                        </div>
                        <div className="tp-testimonial-3__top-text">
                          <p>
                            We, the People, recognize that we responsibilities
                            <br />
                            as well as rights; thatdestinies are bound that a
                            <br />
                            freedom which only asks
                          </p>
                        </div>
                      </div>
                      <div className="tp-testimonial-3__bottom d-flex align-items-center justify-content-between">
                        <div className="tp-testimonial-3__author-info">
                          <h4 className="tp-testimonial-3__author-name">Charlotte Ava</h4>
                          <span>Customer</span>
                        </div>
                        <div className="tp-testimonial-3__bottom-right d-none d-sm-block">
                          <img src="assets/img/testimonial/testi-shape-3-1.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="tp-testimonial-3__item">
                      <div className="tp-testimonial-3__top d-flex align-items-center justify-content-between">
                        <div className="tp-testimonial-3__top-thumb">
                          <img src="assets/img/testimonial/author-3-2.png" alt="" />
                        </div>
                        <div className="tp-testimonial-3__top-text">
                          <p>
                            We, the People, recognize that we responsibilities
                            <br />
                            as well as rights; thatdestinies are bound that a
                            <br />
                            freedom which only asks
                          </p>
                        </div>
                      </div>
                      <div className="tp-testimonial-3__bottom d-flex align-items-center justify-content-between">
                        <div className="tp-testimonial-3__author-info">
                          <h4 className="tp-testimonial-3__author-name">Paul Pitterson</h4>
                          <span>Customer</span>
                        </div>
                        <div className="tp-testimonial-3__bottom-right d-none d-sm-block">
                          <img src="assets/img/testimonial/testi-shape-3-2.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="tp-testimonial-3__item">
                      <div className="tp-testimonial-3__top d-flex align-items-center justify-content-between">
                        <div className="tp-testimonial-3__top-thumb">
                          <img src="assets/img/testimonial/author-3-1.png" alt="" />
                        </div>
                        <div className="tp-testimonial-3__top-text">
                          <p>
                            We, the People, recognize that we responsibilities
                            <br />
                            as well as rights; thatdestinies are bound that a
                            <br />
                            freedom which only asks
                          </p>
                        </div>
                      </div>
                      <div className="tp-testimonial-3__bottom d-flex align-items-center justify-content-between">
                        <div className="tp-testimonial-3__author-info">
                          <h4 className="tp-testimonial-3__author-name">Alisha Ava</h4>
                          <span>Customer</span>
                        </div>
                        <div className="tp-testimonial-3__bottom-right d-none d-sm-block">
                          <img src="assets/img/testimonial/testi-shape-3-1.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="tp-testimonial-slider-dots"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial-area-end */}
    </>
  );
}

export default TestimonialArea;
