import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import giftingReels from "@/data/giftingReels"; // <- create this data file like `reels.js`

export default function GiftingReels({ parentClass = "flat-spacing pt-0" }) {
  const videoRefs = useRef([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const handleMouseEnter = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.play();
          setActiveVideoIndex(index);
        } else {
          video.pause();
        }
      }
    });
  };

  const handleMouseLeave = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
    setActiveVideoIndex(null);
  };

  return (
    <section className={parentClass}>
        <hr/>
      <div className="container pb-0">

        <div className="heading-section text-center wow fadeInUp">
          <h4 className="heading">
            Gifting Moments by Beaubless
          </h4>
        </div>

        <Swiper
          dir="ltr"
          className="swiper tf-sw-collection"
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Pagination]}
          pagination={{ el: ".gifting-pagination", clickable: true }}
        >
          {giftingReels.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="gifting-video-wrapper hover-img wow fadeInUp"
                data-wow-delay={slide.wowDelay}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <video
                  className="hover-video"
                  ref={(el) => (videoRefs.current[index] = el)}
                  controls
                  width={300}
                  height={400}
                  playsInline
                  muted
                  loop
                >
                  <source src={slide.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination-collection sw-dots type-circle justify-content-center gifting-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}
