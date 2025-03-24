import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import CountdownTimer from "@/components/common/Countdown";
import { useContextElement } from "@/context/Context";
import { products } from "@/data/products";
import Topbar from "@/components/headers/Topbar";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
const metadata = {
  title: "Order Successful || Beaubless",
  description:
    "Thank you for your order at Beaubless - Hair Care and Skin Care Solution.",
};

export default function OrderSuccessPage() {
  return (
    <>
      <Topbar />
      <Header1 />
      <section className="flat-spacing page-success">
        <div className="container">
          <div className="page-success-inner justify-content-center text-center">
            <div className="image justify-content-center">
              <img
                className="lazyload"
                data-src="/images/payment/done.png"
                alt="Order Success"
                src="/images/payment/done.png"
                width={100}
                height={100}
              />
            </div>
            <div className="content">
              <h1 className="title mb_4 text-primary">Thank You!</h1>
              <div>
                <h4 className="title mb_4 text-primary pt-2">
                  Your Order is Confirmed
                </h4>
                <div className="text body-text-1 pt-3">
                  We appreciate your purchase! Your order is being processed and
                  will be shipped soon.
                </div>
              </div>
            </div>
          </div>

          {/* Upsell Section */}
          <RelatedProducts />
        </div>
      </section>
      <Footer1 />
    </>
  );
}
