/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="scroll-progress">
        <div className="scroll-progress">
          <span className="scroll-percent"></span>
        </div>
      </div>
      {/* 
<!-- Document Full Container
============================================= --> */}
      <div id="full-container">
        {/* <!-- Banner
  ============================================= --> */}
        <section id="banner">
          <div
            className="banner-parallax"
            data-banner-height="720"
            style={{ minHeight: "720px" }}
          >
            {/* <img src="http://via.placeholder.com/1920x1100?text=Image" alt="" /> */}
            <div className="overlay-colored color-bg-white opacity-90"></div>
            <div className="slide-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="banner-center-box text-center">
                      <a href="index.html">
                        <img
                          className="banner-logo"
                          src="/images/files/logo-header.png"
                          alt=""
                        />
                      </a>
                      <h1>
                        Great{" "}
                        <span className="colored">Business Landing Page</span>{" "}
                        in Online Marketing
                      </h1>
                      <div className="description">
                        This should be used to tell a story and let your users
                        know a little more about your product or service. How
                        can you benefit them?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Content
  ============================================= --> */}
        <section id="content">
          <div id="content-wrap">
            {/* <!-- === Intro Features =========== --> */}
            <div id="intro-features" className="flat-section">
              <div className="section-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="box-info box-info-1 text-center mb-50">
                            {/* <!-- <Image className="arrow right-top" src="images/files/box-info-1/arrow-right-top.png" alt=""> --> */}
                            <div className="box-icon icon">
                              <i className="fa fa-eye"></i>
                            </div>
                            <div className="box-content">
                              <h5>Better Overview</h5>
                              <p>
                                This should be used to tell a story about your
                                service.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="box-info box-info-1 text-center mb-50">
                            {/* <!-- <Image className="arrow right-top" src="images/files/box-info-1/arrow-right-top.png" alt=""> --> */}
                            <div className="box-icon icon">
                              <i className="fa fa-random"></i>
                            </div>
                            <div className="box-content">
                              <h5>Better Analytics</h5>
                              <p>
                                This should be used to tell a story about your
                                service.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <img
                        className="arrow bottom-right"
                        src="/images/general-elements/arrow-bottom-right.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3 col-sm-6 col-md-push-6">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="box-info box-info-1 text-center mb-50">
                            {/* <!-- <Image className="arrow right-top" src="images/files/box-info-1/arrow-right-top.png" alt=""> --> */}
                            <div className="box-icon icon">
                              <i className="fa fa-trophy"></i>
                            </div>
                            <div className="box-content">
                              <h5>Better Design</h5>
                              <p>
                                This should be used to tell a story about your
                                service.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="box-info box-info-1 text-center mb-50">
                            {/* <!-- <Image className="arrow right-top" src="images/files/box-info-1/arrow-right-top.png" alt=""> --> */}
                            <div className="box-icon icon">
                              <i className="fa fa-lightbulb"></i>
                            </div>
                            <div className="box-content">
                              <h5>Better Results</h5>
                              <p>
                                This should be used to tell a story about your
                                service.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <img
                        className="arrow bottom-left"
                        src="/images/general-elements/arrow-bottom-left.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 col-md-pull-3 text-center">
                      <div className="cta-subscribe cta-subscribe-2 box-form ">
                        <div className="box-title">
                          <h3 className="title">Start Your Free Trial</h3>
                          <p>Supporting Call to Action Goes Here</p>
                        </div>
                        <div className="box-content">
                          <form
                            id="form-cta-subscribe-2"
                            className="form-inline"
                            noValidate
                          >
                            <div className="cs-notifications">
                              <div className="cs-notifications-content"></div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="cs2Name">Your Name *</label>
                              <input
                                type="text"
                                name="cs2Name"
                                id="cs2Name"
                                className=""
                                placeholder=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="cs2Email">Your Email *</label>
                              <input
                                type="text"
                                name="cs2Email"
                                id="cs2Email"
                                className=""
                                placeholder=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="cs2PhoneNum">
                                Phone Number *
                              </label>
                              <input
                                type="text"
                                name="cs2PhoneNum"
                                id="cs2PhoneNum"
                                className=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="cs2MoreDetails">
                                More Details *
                              </label>
                              <textarea
                                name="cs2MoreDetails"
                                id="cs2MoreDetails"
                                className=""
                              ></textarea>
                            </div>
                            <div className="form-group">
                              <input
                                type="submit"
                                className=""
                                value="Call to Action"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="divider-80"></div>

                    <div className="col-md-12">
                      <p className="font-size-18px mb-20 text-center">
                        Trusted by the world’s most innovative businesses – big
                        and small
                      </p>
                      <div className="slider-clients">
                        <ul className="owl-carousel">
                          <li>
                            <div className="slide">
                              <div className="client-single">
                                <a href="#">
                                  <img
                                    src="/images/files/sliders/clients/Image-1.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="slide">
                              <div className="client-single">
                                <a href="#">
                                  <img
                                    src="/images/files/sliders/clients/Image-2.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="slide">
                              <div className="client-single">
                                <a href="#">
                                  <img
                                    src="/images/files/sliders/clients/Image-3.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="slide">
                              <div className="client-single">
                                <a href="#">
                                  <img
                                    src="/images/files/sliders/clients/Image-4.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="slide">
                              <div className="client-single">
                                <a href="#">
                                  <img
                                    src="/images/files/sliders/clients/Image-5.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="slide">
                              <div className="client-single">
                                <a href="#">
                                  <img
                                    src="/images/files/sliders/clients/Image-6.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- === CTA Video Lightbox =========== --> */}
            <div
              id="cta-video-lightbox"
              className="parallax-section text-white"
            >
              {/* <img
                src="http://via.placeholder.com/1920x1100?text=Image"
                alt=""
              /> */}
              <div className="overlay-colored color-bg-gradient opacity-90"></div>
              <div className="section-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <a
                        className="btn-video lightbox-iframe"
                        href="https://vimeo.com/45830194"
                      >
                        <span className="circle-1"></span>
                        <span className="circle-2"></span>
                        <span className="circle-3"></span>
                        <i className="fa fa-play"></i>
                      </a>
                      <h1>See Pointree Video in 40 Second...</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- === Clients Testimonials =========== --> */}
            <div id="clients-testimonials" className="flat-section">
              <div className="section-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                      <div className="section-title text-center">
                        <h2>What Customers Say</h2>
                        <p>
                          This should be used to tell a story about your product
                          or service. How can you benefit them?
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="slider-testimonials">
                        <ul className="owl-carousel owl-loaded owl-drag">
                          <div
                            className="owl-stage-outer owl-height"
                            style={{ height: "465px" }}
                          >
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all 0s ease 0s",
                                width: "1617px",
                              }}
                            >
                              <div
                                className="owl-item active"
                                style={{
                                  width: "293.333px",
                                  marginRight: "30px",
                                }}
                              >
                                <li>
                                  <div className="slide">
                                    <div className="testimonial-single-1">
                                      <div className="ts-person">
                                        <div className="ts-img">
                                          <img
                                            src="http://via.placeholder.com/80x80?text=Image"
                                            alt=""
                                          />
                                        </div>
                                        <h5>Mark Smith</h5>
                                        <span>Envato Inc.</span>
                                      </div>
                                      <div className="ts-content">
                                        This should be used to tell a story and
                                        let your users know about your product
                                        or service.
                                        <div className="rating">
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div
                                className="owl-item active"
                                style={{
                                  width: "293.333px",
                                  marginRight: "30px",
                                }}
                              >
                                <li>
                                  <div className="slide">
                                    <div className="testimonial-single-1">
                                      <div className="ts-person">
                                        <div className="ts-img">
                                          <img
                                            src="http://via.placeholder.com/80x80?text=Image"
                                            alt=""
                                          />
                                        </div>
                                        <h5>Vera Duncan</h5>
                                        <span>PayPal Inc.</span>
                                      </div>
                                      <div className="ts-content">
                                        This should be used to tell a story and
                                        let your users know about your product
                                        or service.
                                        <div className="rating">
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div
                                className="owl-item active"
                                style={{
                                  width: "293.333px",
                                  marginRight: "30px",
                                }}
                              >
                                <li>
                                  <div className="slide">
                                    <div className="testimonial-single-1">
                                      <div className="ts-person">
                                        <div className="ts-img">
                                          <img
                                            src="http://via.placeholder.com/80x80?text=Image"
                                            alt=""
                                          />
                                        </div>
                                        <h5>Bryce Vaughn</h5>
                                        <span>Unbounce Inc.</span>
                                      </div>
                                      <div className="ts-content">
                                        This should be used to tell a story and
                                        let your users know about your product
                                        or service.
                                        <div className="rating">
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div
                                className="owl-item active"
                                style={{
                                  width: "293.333px",
                                  marginRight: "30px",
                                }}
                              >
                                <li>
                                  <div className="slide">
                                    <div className="testimonial-single-1">
                                      <div className="ts-person">
                                        <div className="ts-img">
                                          <img
                                            src="http://via.placeholder.com/80x80?text=Image"
                                            alt=""
                                          />
                                        </div>
                                        <h5>Mark Smith</h5>
                                        <span>Envato Inc.</span>
                                      </div>
                                      <div className="ts-content">
                                        This should be used to tell a story and
                                        let your users know about your product
                                        or service.
                                        <div className="rating">
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div
                                className="owl-item"
                                style={{
                                  width: "293.333px",
                                  marginRight: "30px",
                                }}
                              >
                                <li>
                                  <div className="slide">
                                    <div className="testimonial-single-1">
                                      <div className="ts-person">
                                        <div className="ts-img">
                                          <img
                                            src="http://via.placeholder.com/80x80?text=Image"
                                            alt=""
                                          />
                                        </div>
                                        <h5>Vera Duncan</h5>
                                        <span>PayPal Inc.</span>
                                      </div>
                                      <div className="ts-content">
                                        This should be used to tell a story and
                                        let your users know about your product
                                        or service.
                                        <div className="rating">
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                            </div>
                          </div>
                          <div className="owl-nav disabled">
                            <div className="owl-prev">
                              <i className="fa fa-angle-left"></i>
                            </div>
                            <div className="owl-next">
                              <i className="fa fa-angle-right"></i>
                            </div>
                          </div>
                          <div className="owl-dots">
                            <div className="owl-dot active">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- === CTA Title 1 =========== --> */}
            <div id="cta-title-1" className="flat-section">
              <div className="section-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h1>
                        Join Now! Don’t Miss The{" "}
                        <span className="colored">Special Offer</span>
                      </h1>
                      <p>
                        This should be used to tell a story and let your users
                        know a little more about your product or service. How
                        can you benefit them?
                      </p>
                      <a
                        className="btn scroll-to x-large colorful hover-colorful-darken mt-40"
                        href="#banner"
                      >
                        Call to Action
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Footer
  ============================================= --> */}
        <footer id="footer">
          <div id="footer-bar-1" className="footer-bar">
            <div className="footer-bar-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="fb-row">
                      <div className="copyrights-message">
                        2018 - 2019 ©{" "}
                        <a href="https://themeforest.net/user/morad?ref=morad">
                          <span className="colored">Morad</span>
                        </a>
                        . All Rights Reserved.
                      </div>
                      <ul className="social-icons animated x4 grey hover-colorful icon-only">
                        <li>
                          <a className="si-facebook" href="#">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="si-twitter" href="#">
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className="si-instagramorange" href="#">
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <a className="scroll-top-icon scroll-top" href="#">
        <i className="fa fa-angle-up"></i>
      </a>
      {/* 
<!-- External JavaScripts
============================================= --> */}
    </>
  );
}
