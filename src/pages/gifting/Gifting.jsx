import React from "react";
import { Link } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import Topbar from "@/components/headers/Topbar";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import GiftingReels from "@/components/common/GiftingReels";
import Products14 from "@/components/products/Products14";

const metadata = {
  title: "Gifting Coming Soon || Beaubless",
  description: "Beaubless - Gifting section launching soon",
};

export default function GiftingPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar />
      <Header1 />
      <section className="flat-spacing py-20 flex flex-col items-center justify-center text-center">
        <div className="offer-banner">
          <div className="banner-text">
            <span className="highlight-text">Upto 20% Off</span> + Surprise Gift
          </div>
        </div>

        <div className="">
          {/* Responsive Image */}
          <img
            src="/images/slider/raksha-bandhan.jpg"
            alt="Gifting Coming Soon"
            className="mx-auto w-full max-w-xl h-auto rounded-lg mb-8"
          />
          <div className="rakhi-gift-text pt-3">
            <p>
              <strong>RAKHI GIFT FEST</strong>
            </p>
            <h2 class="">Celebrate Every Sibling </h2>
            <p>
              From the overprotective elder to the dramatic youngest, every
              sibling brings their own magic, madness, and mischief. This
              Rakshabandhan, celebrate them with gifts as unique and special as
              they are.
            </p>
          </div>
        </div>
        {/* <GiftingReels /> */}
      </section>
      <hr/>
      <div>
        <h4 className="text-center">Raksha Bandhan Specials</h4>
        <Products14
          parentClass="flat-spacing"
          collectionId={"68846504d967c599661ed0a1"}
        />
      </div>
      <Footer1 />
    </>
  );
}
