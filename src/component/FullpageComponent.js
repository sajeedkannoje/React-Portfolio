import React from 'react'

export default function FullpageComponent() {
  return (
    <div id="fullpage">
  <section className="hero-banner section " id="section1">
    <div className="horse-img" />
    <div className="container">
      <div className="banner-content">
        <h4>You ideate,</h4>
        <h2>
          <span>we create</span>we create
        </h2>
      </div>
    </div>
  </section>
  <section className="about-sec section" id="section2">
    <div className="container">
      <div className="row align-items-center about-row">
        <div className="col-lg-6 order-lg-2">
          <div className="about-content">
            <h4>WE GIVE</h4>
            <h2>wings to your ideas</h2>
            <h6>We are a talented team of designers and we love what we do!</h6>
          </div>
          <div className="row align-items-center">
            <div className="col-6 col-md-3 col-lg-3">
              <div className="about-details exp-box">
                <img loading="lazy" src="images/text-shape1.png" alt="" />
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="about-details happyclient-box">
                <img loading="lazy" src="images/text-shape2.png" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="about-rating">
                <img loading="lazy" src="images/about-rating.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="about-img">
            <img loading="lazy" src="images/dog-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="services-sec section" id="section3">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-12 col-lg-7">
          <div className="services-content">
            <h4>
              we just do <span>“one thing”</span> and we do it the best way we
              can:
            </h4>
            <h2>
              <span className="">we</span> design!
            </h2>
          </div>
        </div>
        <div className="col-md-12 col-lg-5">
          <div className="services-details">
            <h4>web &amp; graphic design</h4>
            <div className="row">
              <div className="col-4 col-md-4 col-xl-3">
                <div className="services-icon-block">
                  <i className="services-icon serv-1" />
                  <h6>visual mockups/ layouts</h6>
                </div>
              </div>
              <div className="col-4 col-md-4 col-xl-3">
                <div className="services-icon-block">
                  <i className="services-icon serv-2" />
                  <h6>landing pages</h6>
                </div>
              </div>
              <div className="col-4 col-md-4 col-xl-3">
                <div className="services-icon-block">
                  <i className="services-icon serv-3" />
                  <h6>social media ads</h6>
                </div>
              </div>
              <div className="col-4 col-md-4 col-xl-3">
                <div className="services-icon-block">
                  <i className="services-icon serv-4" />
                  <h6>brochures</h6>
                </div>
              </div>
              <div className="col-4 col-md-4 col-xl-3">
                <div className="services-icon-block">
                  <i className="services-icon serv-5" />
                  <h6>mobile app design</h6>
                </div>
              </div>
              <div className="col-4 col-md-4 col-xl-3">
                <div className="services-icon-block">
                  <i className="services-icon serv-6" />
                  <h6>ui/ux</h6>
                </div>
              </div>
              <div className="col-4 col-md-4 col-xl-3">
                <div className="services-icon-block">
                  <i className="services-icon serv-7" />
                  <h6>email ads</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="awards-sec section " id="section4">
    <div className="container">
      <div className="awards-block">
        <div className="awards-heading">
          <h2>
            “their highly tuned creative skills and loyalty set them apart.”
          </h2>
          <h6>
            <strong>- Patrick Nagle,</strong> CEO at <a href="#">Rehab.com</a>
          </h6>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="awards-img-box">
              <img
                loading="lazy"
                src="images/awards-img-1.png"
                className="awards-desktop"
                alt=""
              />
              <img
                loading="lazy"
                src="images/awards-img-mob-1.png"
                className="awards-mob"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="awards-img-box">
              <img
                loading="lazy"
                src="images/awards-img-2.png"
                className="awards-desktop"
                alt=""
              />
              <img
                loading="lazy"
                src="images/awards-img-mob-2.png"
                className="awards-mob"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="awards-box d-flex">
              <div className="d-flex align-items-center web-guru awards-box-inner">
                <img loading="lazy" src="images/awards-img-3.png" alt="" />
                <h4>guru of the day</h4>
              </div>
              <div className="d-flex align-items-center awards-box-inner">
                <img loading="lazy" src="images/awards-img-4.png" alt="" />
                <h4>
                  mindsparklemag <br />
                  site of the day
                </h4>
              </div>
              <div className="awards-box-inner">
                <h4>Nominee</h4>
                <img loading="lazy" src="images/awards-img-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="blog-sec section" id="section5">
    <div className="container">
      <div className="blog-">
        <div className="row align-items-center">
          <div className="col-lg-3 order-lg-2">
            <div className="nav-block">
              <h4>Browse Articles</h4>
              <ul className="nav nav-tabs" id="myBlogTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="blog-tab1"
                    data-toggle="tab"
                    href="#blog-1"
                    role="tab"
                    aria-controls="blog-1"
                    aria-selected="true"
                  >
                    Anyone can design, but can you imagine?
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="blog-tab2"
                    data-toggle="tab"
                    href="#blog-2"
                    role="tab"
                    aria-controls="blog-2"
                    aria-selected="false"
                  >
                    How do you design award - winning websites?
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="tab-content" id="myBlogTabContent">
              <div
                className="tab-pane fade show active"
                id="blog-1"
                role="tabpanel"
                aria-labelledby="blog-tab1"
              >
                <div className="blog-content">
                  <h2>Anyone can design, but can you imagine?</h2>
                  <div className="blog-img">
                    <img loading="lazy" src="images/blog-img.png" alt="" />
                    <img
                      loading="lazy"
                      src="images/blog-mob-img.png"
                      className="mob-blog-img"
                      alt=""
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="blog-tab-text mobile-show">
                        <p>
                          Good news for the slapdash and the slipshod – your
                          messiness might drive your team crazy but it is
                          actually a sign of very high intelligence. So stack up
                          the dirty coffee cups and strike “organized” and
                          “detail-orientated” from your CV – it’s time to make
                          one hell of a mess.
                        </p>
                      </div>
                      <div className="blog-tab-text">
                        <p>
                          <strong>Benefits of Physical Mess</strong>
                        </p>
                        <p>
                          “If cluttered desk is a sign of a cluttered mind then
                          what do we think of an empty desk?”
                        </p>
                        <p>
                          Your mess just increases your creativity. Want to know
                          how? Surrounding yourself with mess heightens our
                          alertness, and higher the alertness means higher the
                          creativity, innovation and problem solving. And
                          creativity makes you a better person.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog-tab-text">
                        <p>
                          <strong>Benefits of Mental Mess</strong>
                        </p>
                        <p>
                          If you’re an average human, you spend 8 minutes every
                          hour daydreaming! Now don’t you worry because you’re
                          not wasting your time. When people daydream it
                          activates the same regions of the brain which it uses
                          for problem solving. So next time someone disturbs
                          your daydream land, tell them you’re contemplating,
                          which in other words, equals creativity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="blog-2"
                role="tabpanel"
                aria-labelledby="blog-tab2"
              >
                <div className="blog-content">
                  <h2>How do you design award - winning websites?</h2>
                  <div className="blog-img">
                    <img loading="lazy" src="images/blog-img.png" alt="" />
                    <img
                      loading="lazy"
                      src="images/blog-mob-img.png"
                      className="mob-blog-img"
                      alt=""
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="blog-tab-text mobile-show">
                        <p>
                          Good news for the slapdash and the slipshod – your
                          messiness might drive your team crazy but it is
                          actually a sign of very high intelligence. So stack up
                          the dirty coffee cups and strike “organized” and
                          “detail-orientated” from your CV – it’s time to make
                          one hell of a mess.
                        </p>
                      </div>
                      <div className="blog-tab-text">
                        <p>
                          <strong>Benefits of Physical Mess</strong>
                        </p>
                        <p>
                          “If cluttered desk is a sign of a cluttered mind then
                          what do we think of an empty desk?”
                        </p>
                        <p>
                          Your mess just increases your creativity. Want to know
                          how? Surrounding yourself with mess heightens our
                          alertness, and higher the alertness means higher the
                          creativity, innovation and problem solving. And
                          creativity makes you a better person.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog-tab-text">
                        <p>
                          <strong>Benefits of Mental Mess</strong>
                        </p>
                        <p>
                          If you’re an average human, you spend 8 minutes every
                          hour daydreaming! Now don’t you worry because you’re
                          not wasting your time. When people daydream it
                          activates the same regions of the brain which it uses
                          for problem solving. So next time someone disturbs
                          your daydream land, tell them you’re contemplating,
                          which in other words, equals creativity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="blog-tab3"
              >
                <div className="blog-content">
                  <h2>Anyone can design, but can you imagine?</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="blog-tab-text">
                        <p>
                          Good news for the slapdash and the slipshod – your
                          messiness might drive your team crazy but it is
                          actually a sign of very high intelligence. So stack up
                          the dirty coffee cups and strike “organized” and
                          “detail-orientated” from your CV – it’s time to make
                          one hell of a mess.
                        </p>
                      </div>
                      <div className="blog-tab-text">
                        <p>
                          <strong>Benefits of Physical Mess</strong>
                        </p>
                        <p>
                          “If cluttered desk is a sign of a cluttered mind then
                          what do we think of an empty desk?”
                        </p>
                        <p>
                          Your mess just increases your creativity. Want to know
                          how? Surrounding yourself with mess heightens our
                          alertness, and higher the alertness means higher the
                          creativity, innovation and problem solving. And
                          creativity makes you a better person.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog-tab-text">
                        <p>
                          <strong>Benefits of Mental Mess</strong>
                        </p>
                        <p>
                          If you’re an average human, you spend 8 minutes every
                          hour daydreaming! Now don’t you worry because you’re
                          not wasting your time. When people daydream it
                          activates the same regions of the brain which it uses
                          for problem solving. So next time someone disturbs
                          your daydream land, tell them you’re contemplating,
                          which in other words, equals creativity.
                        </p>
                      </div>
                      <div className="social-icons">
                        <ul className="">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="portfolio-sec section " id="section6">
    <div className="container">
      <div className="portfolio-heading">
        <h2>portfolio</h2>
      </div>
      <div className="portfolio-tabs d-flex">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="portfolio-tab1"
              data-toggle="tab"
              href="#portfolio1"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-1.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab2"
              data-toggle="tab"
              href="#portfolio2"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-2.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab3"
              data-toggle="tab"
              href="#portfolio3"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-3.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab4"
              data-toggle="tab"
              href="#portfolio4"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-4.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab5"
              data-toggle="tab"
              href="#portfolio5"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-5.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab6"
              data-toggle="tab"
              href="#portfolio6"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-6.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab7"
              data-toggle="tab"
              href="#portfolio7"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-7.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab8"
              data-toggle="tab"
              href="#portfolio8"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-8.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab9"
              data-toggle="tab"
              href="#portfolio9"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-9.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab10"
              data-toggle="tab"
              href="#portfolio10"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-10.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab11"
              data-toggle="tab"
              href="#portfolio11"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-11.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab12"
              data-toggle="tab"
              href="#portfolio12"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-12.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab13"
              data-toggle="tab"
              href="#portfolio13"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-13.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab14"
              data-toggle="tab"
              href="#portfolio14"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-14.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab15"
              data-toggle="tab"
              href="#portfolio15"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-15.png"
                alt=""
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="portfolio-tab16"
              data-toggle="tab"
              href="#portfolio16"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <img
                loading="lazy"
                src="images/portfolio-thumbnail-16.png"
                alt=""
              />
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="arrow-block">
            <a href="" className="arrow-icon" id="upClick" />
            <a
              href=""
              className="arrow-icon"
              id="downClick"
            />
          </div>
          <div
            className="tab-pane fade show active"
            id="portfolio1"
            role="tabpanel"
            aria-labelledby="portfolio-tab1"
          >
            <div className="portfolio-img fp-scroller" id="draggable">
              <img loading="lazy" src="images/portfolio-img-1.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio2"
            role="tabpanel"
            aria-labelledby="portfolio-tab2"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-2.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio3"
            role="tabpanel"
            aria-labelledby="portfolio-tab3"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-3.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio4"
            role="tabpanel"
            aria-labelledby="portfolio-tab3"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-4.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio5"
            role="tabpanel"
            aria-labelledby="portfolio-tab5"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-5.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio6"
            role="tabpanel"
            aria-labelledby="portfolio-tab5"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-6.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio7"
            role="tabpanel"
            aria-labelledby="portfolio-tab7"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-7.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio8"
            role="tabpanel"
            aria-labelledby="portfolio-tab8"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-8.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio9"
            role="tabpanel"
            aria-labelledby="portfolio-tab9"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-9.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio10"
            role="tabpanel"
            aria-labelledby="portfolio-tab10"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-10.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio11"
            role="tabpanel"
            aria-labelledby="portfolio-tab12"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-11.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio12"
            role="tabpanel"
            aria-labelledby="portfolio-tab12"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-12.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio13"
            role="tabpanel"
            aria-labelledby="portfolio-tab13"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-13.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio14"
            role="tabpanel"
            aria-labelledby="portfolio-tab14"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-14.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio15"
            role="tabpanel"
            aria-labelledby="portfolio-tab15"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-15.jpg" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="portfolio16"
            role="tabpanel"
            aria-labelledby="portfolio-tab16"
          >
            <div className="portfolio-img">
              <img loading="lazy" src="images/portfolio-img-16.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="loop owl-carousel owl-theme">
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-1.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-2.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-3.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item popup">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-4.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-5.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-6.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-7.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-8.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-9.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-10.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-11.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-12.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-13.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-14.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-15.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="item">
          <div className="mob-portfolio-item">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img loading="lazy" src="images/portfolio-img-16.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="contact-sec section " id="section7">
    <div className="container">
      <div className="contact-block">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-7">
            <div className="contact-heading">
              <h2>hello!</h2>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <div className="contact-form">
              <h4>Drop us a message, quotes are free!</h4>
              <form id="mail-form" method="post" action="mail.php">
                <div className="form-group half-block">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    required=""
                    name="first_name"
                    type="text"
                    className="form-control"
                    placeholder=""
                    id="first-name"
                  />
                </div>
                <div className="form-group half-block">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    required=""
                    name="last_name"
                    type="text"
                    className="form-control"
                    placeholder=""
                    id="last-name"
                  />
                </div>
                <div className="form-group half-block">
                  <label htmlFor="email">Email</label>
                  <input
                    required=""
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder=""
                    id="email"
                  />
                </div>
                <div className="form-group half-block">
                  <label htmlFor="phone">Phone</label>
                  <input
                    required=""
                    name="phone"
                    type="tel"
                    className="form-control"
                    placeholder=""
                    id="phone"
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    required=""
                    name="message"
                    className="form-control"
                    placeholder="your message here"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" name="submit" className="submit-btn">
                    submit
                    <i className="paper-plane" />
                  </button>
                </div>
              </form>
              <p id="mail-sent" style={{ display: "none" }}>
                <strong>Congratulations!</strong> Message sent successfully.
              </p>
              <p id="mail-failed" style={{ display: "none" }}>
                <strong>Error!</strong> Message sent failed.
              </p>
              <div className="contact-links">
                <ul className="">
                  <li>
                    <i className="skype-icon" />
                    <span>
                      Skype <a href="skype: ?chat"> </a>
                    </span>
                  </li>
                  <li>
                    <i className="email-icon" />
                    <span>
                      Email <a href="#">Sajeed Kannoje</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}
