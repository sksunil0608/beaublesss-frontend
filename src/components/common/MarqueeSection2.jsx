import React from "react";

export default function MarqueeSection2({ parentClass = "tf-marquee" }) {
  return (
    <section className={parentClass}>
      <div className="marquee-wrapper">
        <div className="initial-child-container text-primary">
          <div className="marquee-child-item">
            <p className="text-btn-uppercase">
              Beaubless is LIVE! 🎉
            </p>
          </div>
          <div className="marquee-child-item">
            <span className="icon icon-lightning-line" />
          </div>
          <div className="marquee-child-item">
            <p className="text-btn-uppercase">
              Flat 15% OFF on Combos!
            </p>
          </div>
          <div className="marquee-child-item">
            <span className="icon icon-lightning-line" />
          </div>
          {/* 2 */}
          <div className="marquee-child-item">
            <p className="text-btn-uppercase">
              Up to 15% OFF Code: CARE15! Shop Now!
            </p>
          </div>
          <div className="marquee-child-item">
            <span className="icon icon-lightning-line" />
          </div>
          <div className="marquee-child-item">
            <p className="text-btn-uppercase">
              Free shipping on all orders
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
