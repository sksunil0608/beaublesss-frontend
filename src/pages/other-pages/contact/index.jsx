import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import Contact3 from "@/components/otherPages/Contact3";
import Faqs from "@/components/otherPages/Faqs";
import StoreLocations3 from "@/components/otherPages/StoreLocations3";
import React from "react";
import { Link } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import Topbar from "@/components/headers/Topbar";
const metadata = {
  title: "Countact Us || Beaubless",
  description: "Beaubless - Hair Care and Skin Care Solution",
};

export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar />
      <Header1 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/bg-2.png )" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Contact Us</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" to={`/`}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>
                  <a className="link" href="#">
                    Pages
                  </a>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li className="text-primary">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="contact-highlight-section py-5">
       <div className="container contact-info-box py-2 py-md-5 px-1 px-md-5">
          <div className="row align-items-center">
            {/* Left Column with Icons */}
            <div className=" col-md-8  mb-4 mb-md-0 py-5 px-4">
              <div className="d-flex flex-column gap-4">
                <div className="contact-box p-3 rounded shadow-sm d-flex align-items-start gap-3 mb-4">
                  <div className="icon-circle">
                    <svg
                      width="28"
                      height="28"
                      fill="#580b9cff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13401 2 5 5.13401 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86599-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Our Address</h6>
                    <p className="mb-0">
                      Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017
                    </p>
                  </div>
                </div>

                <div className="contact-box p-3 rounded shadow-sm d-flex align-items-start gap-3 mb-4">
                  <div className="icon-circle">
                    <svg
                      width="28"
                      height="28"
                      fill="#580b9cff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.89.76a1 1 0 011 1V20a1 1 0 01-1 1C10.42 21 3 13.58 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.26 2.68.76 3.89a1 1 0 01-.21 1.11l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="mt-3">
                    <h6 className="fw-bold mb-1">Call Us</h6>
                    <p className="mb-0">
                      <a
                        href="tel:+919876543210"
                        className="text-decoration-none text-dark"
                      >
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-box p-3 rounded shadow-sm d-flex align-items-start gap-3 mb-4">
                  <div className="icon-circle">
                    <svg
                      width="28"
                      height="28"
                      fill="#580b9cff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.11 0-2 .89-2 2v1.99L12 13 22 7.99V6c0-1.11-.89-2-2-2zm0 4.25L12 14 4 8.25V18c0 1.1.89 2 2 2h12c1.11 0 2-.9 2-2V8.25z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Email Us</h6>
                    <p className="mb-0">
                      <a
                        href="mailto:support@beaubless.com"
                        className="text-decoration-none text-dark"
                      >
                        support@beaubless.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column with Image */}
            <div className="col-md-4 text-center">
              <img
                src="https://res.cloudinary.com/dc2mqs3kv/image/upload/v1746075362/_FRIZZOUT_page-0003_bkzuv8.jpg"
                alt="Contact Visual"
                className="img-fluid rounded shadow"
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <StoreLocations3 />
      <hr />
      <Faqs />
      <Footer1 />
    </>
  );
}
