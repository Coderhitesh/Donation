import React from 'react'
import s1 from './s1.jpg'
import s2 from './s2.jpg'
import s3 from './s3.jpg'
import s4 from './s4.jpg'

function ServiceHome() {
  return (
    <>
      {/* service-area-start */}
      <div id="service" className="tp-service-3__area tp-service-3__space">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-3__section-title text-center pb-40">
                <span className="tp-section-subtitle-3">What we do</span>
                <h4 className="tp-section-title">We do it for People in need</h4>
              </div>
            </div>
          </div>
          <div className="row">
  <div className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
    <div className="tp-service-3__item p-relative">
      <div className="tp-service-3__thumb-box p-relative">
        <div className="tp-service-3__thumb">
          <img src={s1} alt="" />
        </div>
        <div className="tp-service-3__icon">
          <span><i className="flaticon-healthy-food"></i></span>
        </div>
      </div>
      <div className="tp-service-3__content text-center">
        <a><h4 className="tp-service-3__title-sm">Healthy Food</h4></a>
        <p>Enjoy fresh and nutritious meals daily.</p>
        <div className="tp-service-3__shape">
          <img src="assets/img/service/service-shape.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
    <div className="tp-service-3__item p-relative">
      <div className="tp-service-3__thumb-box p-relative">
        <div className="tp-service-3__thumb">
          <img src={s2} alt="" />
        </div>
        <div className="tp-service-3__icon">
          <span><i className="flaticon-open-book"></i></span>
        </div>
      </div>
      <div className="tp-service-3__content text-center">
        <a><h4 className="tp-service-3__title-sm">Kids Education</h4></a>
        <p>Foster a love of learning in young minds.</p>
        <div className="tp-service-3__shape">
          <img src="assets/img/service/service-shape.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
    <div className="tp-service-3__item p-relative">
      <div className="tp-service-3__thumb-box p-relative">
        <div className="tp-service-3__thumb">
          <img src={s3} alt="" />
        </div>
        <div className="tp-service-3__icon">
          <span><i className="flaticon-drops"></i></span>
        </div>
      </div>
      <div className="tp-service-3__content text-center">
        <a><h4 className="tp-service-3__title-sm">Pure Water</h4></a>
        <p>Experience the purity in every drop.</p>
        <div className="tp-service-3__shape">
          <img src="assets/img/service/service-shape.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
    <div className="tp-service-3__item p-relative">
      <div className="tp-service-3__thumb-box p-relative">
        <div className="tp-service-3__thumb">
          <img src={s4} alt="" />
        </div>
        <div className="tp-service-3__icon">
          <span><i className="flaticon-stethoscope"></i></span>
        </div>
      </div>
      <div className="tp-service-3__content text-center">
        <a><h4 className="tp-service-3__title-sm">Medical Care</h4></a>
        <p>Trust in compassionate, expert medical care.</p>
        <div className="tp-service-3__shape">
          <img src="assets/img/service/service-shape.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      {/* service-area-end */}
    </>
  )
}

export default ServiceHome;
