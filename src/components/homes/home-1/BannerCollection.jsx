import React from "react";

import { Link } from "react-router-dom";
export default function BannerCollection() {
  return (
    <section className="flat-spacing">
      <div className="">
        <img
          className="lazyload"
          data-src="/images/banner/Offer.png"
          alt="banner-cls"
          src="/images/banner/Offer.png"
          width={1600}
          height={500}
        />
      </div>
    </section>
  );
}
