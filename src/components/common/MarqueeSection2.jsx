import React from "react";

export default function MarqueeSection2({ parentClass = "tf-marquee" }) {
  return (
    <section className={parentClass}>
      <div className="marquee-wrapper">
        <div className="initial-child-container text-primary">
          <div className="marquee-child-item">
            <p className="text-btn-uppercase">
              Beaubless is LIVE! 🎉 Up to 30% OFF + FREE Gifts on Every Order!
            </p>
          </div>
          <div className="marquee-child-item">
            <span className="icon icon-lightning-line" />
          </div>
          <div className="marquee-child-item">
            <p className="text-btn-uppercase">
              Flat 15% OFF on Combos + Exclusive FREE Gifts!
            </p>
          </div>
          <div className="marquee-child-item">
            <span className="icon icon-lightning-line" />
          </div>
          {/* 2 */}
          <div className="marquee-child-item">
            <p className="text-btn-uppercase">
              Up to 30% OFF + FREE Gift on Orders Above ₹999! Shop Now!
            </p>
          </div>
          <div className="marquee-child-item">
            <span className="icon icon-lightning-line" />
          </div>
          <div className="marquee-child-item">
            <p className="text-btn-uppercase">
              Free shipping on all orders over ₹999.00
            </p>
          </div>
          <div className="marquee-child-item">
            <span className="icon icon-lightning-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
