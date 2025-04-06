import { useEffect, useState } from "react";
import { getAllCategories } from "@/api/category";
import slugify from "slugify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Collections() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await getAllCategories();
        const collectionArray = response.categories || [];

        setCollections(
          collectionArray.map((item, index) => ({
            id: item._id,
            imgSrc: item.image[0],
            alt: item.name,
            title: item.name,
            slug: slugify(item.name, { lower: true }),
            subtitle: item.name,
            delay: `${index * 0.1}s`,
          }))
        );
      } catch (error) {
        console.error("Error fetching collections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <section id="downSection" className="pt-5">
      <div className="container">
        {loading ? (
          <div className="text-center py-5">Loading collections...</div>
        ) : (
          <Swiper
            dir="ltr"
            slidesPerView={3}
            breakpoints={{
              1300: { slidesPerView: 3 },
              924: { slidesPerView: 2 },
              0: { slidesPerView: 1.7 },
            }}
            spaceBetween={30}
          >
            {collections.map((item, index) => (
              <SwiperSlide key={item.id || index}>
                <div
                  className="collection-position-2 style-5 hover-img wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <Link className="img-style" to={`/collections/${item.slug}`}>
                    <img
                      className="lazyload"
                      data-src={item.imgSrc}
                      alt={item.alt}
                      src={item.imgSrc}
                      width={615}
                      height={819}
                    />
                  </Link>
                  <div className="content">
                    {/* <h4 className="title">
                      <Link
                        to={`/shop-default-grid`}
                        className="link text-white"
                      >
                        {item.title}
                      </Link>
                    </h4>
                    <span className="text-title text-white">
                      {item.subtitle}
                    </span> */}
                    <div>
                      <Link
                        to={`/collections/${item.slug}`}
                        className="btn-line style-white"
                      >
                        {item.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div
                className="sec-btn text-center pt-2 pb-2 rounded mt-5"
                style={{
                  background:
                    "linear-gradient(81deg, #5e0d8b 1% 37.5%, #9268aa 91.5%)",
                }}
              >
                 <Link to={`/products`} className="text-white">
                  View All Products
                </Link>
              </div>
      </div>
    </section>
  );
}
