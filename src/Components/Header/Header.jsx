import React, { useState } from 'react';
import logo from './logo.jpg'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    const [isMobActive,setIsMobActive] = useState(false)
    const handleMobActive = () => {
        setIsMobActive(!isMobActive)
    }
    const handleMobDeActive = () => {
        setIsMobActive(false)
    }
  return (
   <>
    {/* <!-- back-to-top-start  --> */}
    <button className="scroll-top scroll-to-target" data-target="html">
        <i className="far fa-angle-double-up"></i>
    </button>
    {/* <!-- back-to-top-end  --> */}

    {/* <!-- search popup start --> */}
    <div className="search__popup">
        <div className="container">
        <div className="row">
            <div className="col-xxl-12">
                <div className="search__wrapper">
                    <div className="search__top d-flex justify-content-between align-items-center">
                    <div className="search__logo">
                        <a href="index.html">
                            <img style={{height:'100px'}} src={logo} alt=""/>
                        </a>
                    </div>
                    <div className="search__close">
                        <button type="button" className="search__close-btn search-close-btn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                 
                        </button>
                    </div>
                    </div>
                    <div className="search__form">
                    <form action="#">
                        <div className="search__input">
                            <input className="search-input-field" type="text" placeholder="Type here to search..."/>
                            <span className="search-focus-border"></span>
                            <button type="submit">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> 
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    {/* <!-- search popup end --> */}

    {/* <!-- tp-offcanvus-area-start --> */}
    <div className="tpoffcanvas-area">
        <div className="tpoffcanvas">
            <div className="tpoffcanvas__close-btn">
                <button className="close-btn"><i className="fal fa-times"></i></button>
            </div>
            <div className="tpoffcanvas__logo">
                <a href="index.html">
                    <img src="assets/img/logo/footer-1.png" alt=""/>
                </a>
            </div>
            <div className="tpoffcanvas__title">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt eaque a cumque, porro maxime
                    autem sed.</p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none"></div>
            <div className="tpoffcanvas__contact-info">
                <div className="tpoffcanvas__contact-title">
                    <h5>Contact us</h5>
                </div>
                <ul>
                    <li>
                        <i className="fa-light fa-location-dot"></i>
                        <a href="https://www.google.com/maps/@23.8223586,90.3661283,15z" target="_blank">Melbone st,
                            Australia, Ny 12099</a>
                    </li>
                    <li>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:solaredge@gmail.com">themepure@gmail.com</a>
                    </li>
                    <li>
                        <i className="fal fa-phone-alt"></i>
                        <a href="tel:+48555223224">+48 555 223 224</a>
                    </li>
                </ul>
            </div>
            <div className="tpoffcanvas__input">
                <div className="tpoffcanvas__input-title">
                    <h4>Get UPdate</h4>
                </div>
                <form action="#">
                    <div className="p-relative">
                        <input type="text" placeholder="Enter mail"/>
                        <button>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className="tpoffcanvas__social">
                <div className="social-icon">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div className="body-overlay"></div>
    {/* <!-- tp-offcanvus-area-end --> */}

    <header className="tp-header-height">
        {/* <!-- header-top-area-start --> */}
        <div className="tp-header-top-3__area grey-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-5 col-md-7 col-12 col-sm-12">
                        <div className="tp-header-top-3__left-box text-center text-md-start">
                            <ul>
                                <li><span>Connect with our charity</span></li>
                                <li>
                                    <div className="tp-header-top-3__social">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    </div>  
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-5">
                        <div className="tp-header-top-3__right-box text-end">
                            <ul>
                                <li className="location"><i className="flaticon-map"></i><a target="_blank" href="https://www.google.com/maps/place/%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A6%BF%E0%A6%A8+%E0%A6%AF%E0%A7%81%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A6%BE%E0%A6%B7%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%B0/@39.7270203,-104.9556871,14z/data=!4m6!3m5!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891!16zL20vMDljN3cw?entry=ttu">66 Broklyne  Golden Street, USA</a></li>
                                <li className="email"><i className="flaticon-mail"></i><a href="mailto:">helplesspeople@company.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- header-top-area-end --> */}
        
        {/* <!-- header-area-start --> */}
        <div id="header-sticky" className="tp-header-3__area relative-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-6 col-md-4 col-7">
                        <div className="tp-header-3__logo">
                            <a style={{padding:'10px 0px'}} href="index.html">
                                <img style={{height:'70px'}} src={logo} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-7 d-none d-xl-block">
                        <div className="tp-header-3__main-menu">
                            <nav className="tp-main-menu-content">
                                <ul>
                                    <li className="has-dropdown"><Link to={'/'}>Home</Link>
                                       
                                    </li>
                                    <li className="has-dropdown"><Link to={'/about'}>About Us</Link>
                                    </li>
                                    <li className="has-dropdown"><Link to={'/donation'}>Donation</Link>
                                    </li>
                                    <li><Link to={'/contact'}>Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-8 col-5">
                        <div className="tp-header-3__right-box">
                            <div className="tp-header-3__right-action text-end">
                                <ul className="d-flex align-items-center justify-content-end">
                                    <li>
                                        <div className="tp-header-3__icon-box d-none d-md-block">
                                            {/* <button className="search-open-btn"><i className="flaticon-loupe"></i></button><a href="login.html"><i className="flaticon-user"></i></a> */}
                                        </div>
                                    </li>                                    
                                    <li>
                                        <div className="tp-header-3__btn d-none d-md-block">
                                            <a className="tp-btn" href="donation-sidebar.html">Donate Now</a>
                                        </div>
                                    </li>  
                                    <li>
                                        <div className="tp-header-3__bar d-xl-none">
                                            <button onClick={handleMobActive} className="tp-menu-bar"><i className="fa-solid fa-bars-staggered"></i></button>
                                        </div>
                                    </li>                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className={`mob-header ${isMobActive ? 'active-mob-header' : ''}`}>
                <li><Link onClick={handleMobDeActive} to={'/'}>Home</Link></li>
                <li><Link onClick={handleMobDeActive} to={'/about'}>About</Link></li>
                <li><Link onClick={handleMobDeActive} to={'/donation'}>Donate</Link></li>
                <li><Link onClick={handleMobDeActive} to={'/contact'}>Contact</Link></li>  
            </ul>
        </div>
        {/* <!-- header-area-end --> */}
    </header>
   </>
  );
}

export default Header;
