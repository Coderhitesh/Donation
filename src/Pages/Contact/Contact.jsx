import React from 'react'
import bg from './bg.png'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      
      {/* <!-- breadcrumb-area-start --> */}
        <div className="tp-breadcrumb__area p-relative fix tp-breadcrumb-height" style={{backgroundImage:`url(${bg})`}}>
            <div className="tp-breadcrumb__shape-1 z-index-5">
                <img src="assets/img/breadcrumb/breadcrumb-shape-1.png" alt=""/>
            </div>
            <div className="tp-breadcrumb__shape-2 z-index-5">
                <img src="assets/img/breadcrumb/breadcrumb-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-breadcrumb__content z-index-5">
                            <div className="tp-breadcrumb__list">
                               <span><Link to={'/'}>home</Link></span> 
                               <span className="dvdr"><i className="fa-sharp fa-solid fa-slash-forward"></i></span>
                               <span>Contact</span>
                            </div>
                            <h3 className="tp-breadcrumb__title">Contact</h3>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- breadcrumb-area-end --> */}


        {/* <!-- form-area-start --> */}
        <div className="tp-contact-form__area tp-contact-form__space">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".9s"
                    data-wow-delay=".3s">
                        <div className="tp-contact-form__left-box">
                            <span className="tp-contact-form__subtitle">CONTACT WITH POOREX</span>
                            <h4 className="tp-section-title pb-20">Just have a quick <br/>any questions?</h4>
                            <p>If You need any type of help you can drop your detail our team contact you as soon as possible.</p>
                            <div className="tp-contact-form__social-box">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 wow tpfadeRight" data-wow-duration=".9s"
                    data-wow-delay=".7s">
                        <div className="tp-contact-form__form-box">
                            <form action="#">
                                <div className="row">
                                    <div className="col-xl-6 mb-30">
                                        <div className="tp-contact-form__input-box">
                                            <input type="text" placeholder="Your Name"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-30">
                                        <div className="tp-contact-form__input-box">
                                            <input type="email" placeholder="Your Email"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-30">
                                        <div className="tp-contact-form__input-box">
                                            <input type="text" placeholder="Phone"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-30">
                                        <div className="tp-contact-form__input-box">
                                            <input type="text" placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 mb-30">
                                        <div className="tp-contact-form__textarea-box">
                                            <textarea placeholder="Write Your Message"></textarea>
                                        </div>
                                    </div>
                                </div>                                
                            </form>
                            <div className="tp-contact-form__button">
                                <button className="tp-btn">Send Your Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- form-area-end --> */}

        {/* <!-- contact-area-start --> */}
        <div className="tp-contact__area">
            <div className="container">
                <div className="tp-contact__bg">
                    <div className="tp-contact__wrapper d-flex align-items-center justify-content-between">
                        <div className="tp-contact__item d-flex align-items-center">
                            <div className="tp-contact__icon">
                              <span><i className="flaticon-phone"></i></span>
                            </div>
                            <div className="tp-contact__text">
                                <a href="tel:">+ 9194829423</a>
                                <a href="tel:">+ 9129382930</a>
                            </div>
                        </div>                        
                        <div className="tp-contact__item d-flex align-items-center">
                            <div className="tp-contact__icon">
                              <span><i className="flaticon-email"></i></span>
                            </div>
                            <div className="tp-contact__text">
                                <a href="mailto:helplesspeople@gmail.com">helplesspeople@gmail.com</a>
                                <a href="mailto:helplesspeople@gmail.com">helplesspeople@gmail.com</a>
                            </div>
                        </div>
                        <div className="tp-contact__item d-flex align-items-center">
                            <div className="tp-contact__icon">
                              <span><i className="flaticon-location"></i></span>
                            </div>
                            <div className="tp-contact__text">
                                <a href="#">55 Hereford catdal street line <br/> New york, USA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- contact-area-end --> */}

        {/* <!-- location-area-start --> */}
        <div className="tp-location__area">
            <div className="container-fluid g-0">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-location__info-box">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2803502.0308645153!2d89.16338837780354!3d23.65743155768624!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1684146049617!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- location-area-end --> */}

    </>
  )
}

export default Contact
