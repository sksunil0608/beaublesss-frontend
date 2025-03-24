import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section
      className="flat-banner-parallax mt-5"
      style={{ backgroundImage: 'url("/images/banner/CTA.jpg")' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="fl-content text-center">
              <div className="title-top">
                <span className="subtitle text-btn-uppercase text-white wow fadeInUp">
                  sumMer 2025 collection
                </span>
                <h3
                  className="title text-white wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Join the Beaubless Journey
                </h3>
                <p className="text-white wow fadeInUp" data-wow-delay="0.2s">
                  Reserved for special occasions
                </p>
              </div>
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <Link to={`/shop`} className="tf-btn btn-fill btn-white">
                  <span className="text">Shop Now</span>
                  <i className="icon icon-arrowUpRight" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
