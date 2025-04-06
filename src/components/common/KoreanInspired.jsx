import ProductCard1 from "@/components/productCards/ProductCard1";
import { products } from "@/data/products";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function KoreanInspired() {
  return (
    <section className="flat-spacing">
      {/* Heading Outside the Image */}
      <div className="container">
        <div className="heading-section wow fadeInUp text-center">
          <h3 className="heading text-primary">Korean-Inspired Skincare</h3>
          <p className="subheading">
            No Harsh Chemicals | Dermatologist Approved | Suitable for All Skin
            Types Join the Beaubless Glow Community Today!
          </p>
        </div>
      </div>

      {/* Image + Slider */}
      <div className="position-relative" style={{ height: "650px" }}>
        {/* Background Image */}
        <img
          src="/images/banner/Korean.png"
          alt="Korean Skincare Banner"
          className="w-100 h-100 position-absolute top-0 start-0 rounded"
          style={{ objectFit: "cover", zIndex: 0 }}
        />

        {/* Slider Section overlayed at the bottom */}
        <div className=" position-absolute bottom-0 w-100 px-10 pb-5">
          <div
            className="bg-white rounded shadow p-3"
            style={{
              maxHeight: "280px",
              overflow: "hidden",
            }}
          >
            <Swiper
              className="swiper tf-sw-latest"
              dir="ltr"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 4, spaceBetween: 30 },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd6",
              }}
            >
              {products.map((product, i) => (
                <SwiperSlide key={i} className="swiper-slide p-2">
                  <div style={{ height: "220px" }}>
                    <ProductCard1 product={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="sw-pagination-latest spd6 sw-dots type-circle justify-content-center mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
