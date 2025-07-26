import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import CurrencySelect from "../common/CurrencySelect";
import LanguageSelect from "../common/LanguageSelect";
import ToolbarBottom from "../headers/ToolbarBottom";
import ScrollTop from "../common/ScrollTop";
import { footerLinks, socialLinks } from "@/data/footerLinks";
export default function Footer1({
  border = true,
  dark = true,
  hasPaddingBottom = false,
}) {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      // const response = await axios.post(
      //   "https://express-brevomail.vercel.app/api/contacts",
      //   {
      //     email,
      //   }
      // );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(true); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(true); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount
  return (
    <>
      <footer
        id="footer"
        className={`footer ${dark ? "bg-black" : ""} ${
          hasPaddingBottom ? "has-pb" : ""
        } `}
      >
        <div className={`footer-wrap ${!border ? "border-0" : ""}`}>
          <div className="footer-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="footer-infor">
                    <div className="footer-logo">
                      <Link to={`/`}>
                        <img
                          alt=""
                          src={
                            dark
                              ? "/images/logo/beaubless_logo_white.png"
                              : "/images/logo/Beaubless_Logo_PNG-04.png"
                          }
                          width={300}
                        />
                      </Link>
                    </div>

                    <ul
                      className={`ms-3 tf-social-icon mt-3 ${
                        dark ? "style-white" : ""
                      } `}
                    >
                      {socialLinks.map((link, index) => (
                        <li key={index}>
                          <a href={link.href} className={link.className}>
                            <i className={`icon ${link.iconClass}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-menu">
                    {footerLinks.map((section, sectionIndex) => (
                      <div className="footer-col-block" key={sectionIndex}>
                        <div
                          className={`text-main ${
                            dark ? "text-white" : ""
                          } footer-heading text-button footer-heading-mobile`}
                        >
                          {section.heading}
                        </div>
                        <div className="tf-collapse-content">
                          <ul className="footer-menu-list">
                            {section.items.map((item, itemIndex) => (
                              <li className="text-caption-1" key={itemIndex}>
                                {item.isLink ? (
                                  <Link
                                    to={item.href}
                                    className={`text-main ${
                                      dark ? "text-white" : ""
                                    } footer-menu_item`}
                                  >
                                    {item.label}
                                  </Link>
                                ) : (
                                  <a
                                    href={item.href}
                                    className="footer-menu_item"
                                  >
                                    {item.label}
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-col-block">
                    <div
                      className={`text-main ${
                        dark ? "text-white" : ""
                      } footer-heading text-button footer-heading-mobile`}
                    >
                      Contact Us
                    </div>
                    {/* <div className="footer-address">
                      <p className={`text-main ${dark ? "text-white" : ""}`}>
                        Delhi , INDIA
                      </p>
                      <Link
                        to={`/contact-us`}
                        className={`tf-btn-default fw-6 ${
                          dark ? "style-white" : ""
                        } `}
                      >
                        GET DIRECTION
                        <i className="icon-arrowUpRight" />
                      </Link>
                    </div> */}
                    <ul className="footer-info">
                      <li className={dark ? "text-white" : ""}>
                        <i
                          className={`icon-mail ${dark ? "text-white" : ""}`}
                        />
                        <p className={`text-main ${dark ? "text-white" : ""}`}>
                          care@beaubless.com
                        </p>
                      </li>
                      <li className={dark ? "text-white" : ""}>
                        <i
                          className={`icon-phone ${dark ? "text-white" : ""}`}
                        />
                        <p className={`text-main ${dark ? "text-white" : ""}`}>
                          +91 9990531210
                        </p>
                      </li>
                    </ul>
                    <div className="tf-collapse-content mt-3">
                      <div className="footer-newsletter">
                        <form
                          onSubmit={sendEmail}
                          className={`form-newsletter subscribe-form ${
                            dark ? "style-black" : ""
                          }`}
                        >
                          <div className="subscribe-content">
                            <fieldset className="email">
                              <input
                                type="email"
                                name="email"
                                className="subscribe-email"
                                placeholder="Enter your e-mail"
                                tabIndex={0}
                                aria-required="true"
                              />
                            </fieldset>
                            <div className="button-submit">
                              <button
                                className="subscribe-button"
                                type="submit"
                              >
                                <i className="icon icon-arrowUpRight" />
                              </button>
                            </div>
                          </div>
                          <div className="subscribe-msg" />
                        </form>
                        <p
                          className={` text-caption-1text-main ${
                            dark ? "text-white" : ""
                          }`}
                        >
                          Sign up for our newsletter and get 10% off your first
                          purchase
                        </p>
                        <div
                          className={`tfSubscribeMsg  footer-sub-element ${
                            showMessage ? "active" : ""
                          }`}
                        >
                          {success ? (
                            <p style={{ color: "rgb(52, 168, 83)" }}>
                              You have successfully subscribed.
                            </p>
                          ) : (
                            <p style={{ color: "red" }}>Something went wrong</p>
                          )}
                        </div>

                        {/* <div className="tf-cart-checkbox">
                          <div className="tf-checkbox-wrapp">
                            <input
                              className=""
                              type="checkbox"
                              id="footer-Form_agree"
                              name="agree_checkbox"
                            />
                            <div>
                              <i className="icon-check" />
                            </div>
                          </div>
                          <label
                            className={`text-primary text-caption-1 ${
                              dark ? "text-white" : ""
                            }`}
                            htmlFor="footer-Form_agree"
                          >
                            By clicking subcribe, you agree to the{" "}
                            <Link
                              className={`fw-6 link ${
                                dark ? "text-white" : ""
                              }`}
                              to={`/term-of-use`}
                            >
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <a
                              className={`fw-6 link ${
                                dark ? "text-white" : ""
                              }`}
                              to={`/privacy-policy`}
                            >
                              Privacy Policy
                            </a>
                            .
                          </label>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="footer-bottom-wrap">
                    <div className="left">
                      <p className="text-caption-1 text-primary">
                        <script
                          type="text/javascript"
                          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
                          id="aisensy-wa-widget"
                          widget-id="RCg1TW"
                        ></script>
                        ©{new Date().getFullYear()} Beaubless Cosmetics. All
                        Rights Reserved.
                      </p>
                      <div className="tf-cur justify-content-end">
                        <div className="tf-currencies">
                          <CurrencySelect light={dark ? true : false} />
                        </div>
                        <div className="tf-languages">
                          <LanguageSelect
                            parentClassName={`image-select center style-default type-languages ${
                              dark ? "color-white" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tf-payment">
                      <p className="text-caption-1  text-primary">Payment:</p>
                      <ul>
                        <li>
                          <img
                            alt=""
                            src="/images/payment/img-1.png"
                            width={100}
                            height={64}
                          />
                        </li>
                        <li>
                          <img
                            alt=""
                            src="/images/payment/img-2.png"
                            width={100}
                            height={64}
                          />
                        </li>
                        <li>
                          <img
                            alt=""
                            src="/images/payment/img-3.png"
                            width={100}
                            height={64}
                          />
                        </li>
                        <li>
                          <img
                            alt=""
                            src="/images/payment/img-4.png"
                            width={98}
                            height={64}
                          />
                        </li>
                        <li>
                          <img
                            alt=""
                            src="/images/payment/img-5.png"
                            width={102}
                            height={64}
                          />
                        </li>
                        <li>
                          <img
                            alt=""
                            src="/images/payment/img-6.png"
                            width={98}
                            height={64}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

         
        </div>
         <div className={`footer-bottom ${dark ? "bg-white" : ""}`}>
            <div className="container">
              <div className="row align-items-center py-3 text-center text-md-start">
                {/* Left side: Copyright */}
                <div className="col-12 col-md-6 mb-2 mb-md-0">
                  <p className={`m-0 ${dark ? "text-black" : "text-dark"}`}>
                    ©{new Date().getFullYear()} Beaubless Cosmetics. All Rights
                    Reserved.
                  </p>
                </div>

                {/* Right side: Also Available On */}
                <div className="col-12 col-md-6 text-center text-md-end">
                  <span
                    className={`d-block d-md-inline ${
                      dark ? "text-black" : "text-dark"
                    }`}
                  >
                    <strong>Also Available On</strong>
                  </span>
                  <span
                    className={`d-block d-md-inline ${
                      dark ? "text-black" : "text-dark"
                    }`}
                  >
                    &nbsp;
                    <a
                      href="https://www.amazon.com/s?k=beaubless+skincare&crid=2OEOG26JCA4X4&sprefix=baubles+skincare%2Caps%2C392&ref=nb_sb_noss_2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Amazon
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="https://www.meesho.com/search?q=beaubless%20skincare&searchType=manual&searchIdentifier=text_search"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Meesho
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="https://www.flipkart.com/search?q=beaubless%20skincare&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Flipkart
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
      </footer>
      <ScrollTop hasPaddingBottom={hasPaddingBottom} />
      <ToolbarBottom />
    </>
  );
}
