import React from 'react'

export default function SizebarComponent() {
  return (
    <div className="sidebar-menu">
    <div className="container">
        <div className="menu-block" id="menu">
            <ul className="menu-links">
                <li data-menuanchor="homeSec" className="active"><a href="#homeSec">home</a></li>
                <li data-menuanchor="aboutSec"><a href="#aboutSec">about</a></li>
                <li data-menuanchor="servicesSec"><a href="#servicesSec">services</a></li>
                <li data-menuanchor="awardSec"><a href="#awardSec">awards</a></li>
                <li data-menuanchor="blogSec"><a href="#blogSec">blog</a></li>
                <li data-menuanchor="portfolioSec"><a href="#portfolioSec">portfolio</a></li>
                <li data-menuanchor="contactSec"><a href="#contactSec">contact</a></li>
            </ul>
            <div className="contact-links">
                <ul className="">
                    <li><i className="phone-icon"></i><span>Phone <a href="tel:+917843023574">+91 784 302 3574</a></span></li>
                    <li><i className="skype-icon"></i><span>Skype <a href="skype:test.test?chat">Sajeed kannoje</a></span></li>
                    <li><i className="linkedin-icon"></i><span>LinkedIn <a href="/">Sajeed kannoje</a></span></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}
