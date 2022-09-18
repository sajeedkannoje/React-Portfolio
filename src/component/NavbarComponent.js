import React from 'react'
import $ from 'jquery';
export default function NavbarComponent() {
    const sidebar = (e) =>{
        $(this).toggleClass("show");
        $(".sidebar-menu").toggleClass("show");
    }
  return (
    <header className="header">
    <div className="container">
        <div className="d-flex align-items-center nav-block">
            <div className="site-logo">
                <a href="#homeSec"><img loading="lazy"  src="images/logo.png" alt=""/></a>
            </div>
            <div className="right-nav">
                <a href="#contactSec" className="contact-btn">contact us</a>
                <a href="#" onClick={sidebar} className="toggle-btn">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</header>
  )
}
