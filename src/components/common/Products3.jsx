import ProductCard1 from "@/components/productCards/ProductCard1";
import { products } from "@/data/products";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const tabItems = ["New Arrivals", "Best Seller", "On Sale"];
export default function Products3({ parentClass = "flat-spacing-3" }) {
  const [activeItem, setActiveItem] = useState(tabItems[0]); // Default the first item as active
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    document.getElementById("newArrivals").classList.remove("filtered");
    setTimeout(() => {
      setSelectedItems(
        products.filter((elm) => elm.tabFilterOptions2.includes(activeItem))
      );
      document.getElementById("newArrivals").classList.add("filtered");
    }, 300);
  }, [activeItem]);
  return (
    <section className={parentClass}>
      <div className="container">
        <div className="heading-section wow fadeInUp text-center">
          <h3 className="heading text-primary">
            Skincare & Haircare Essentials
          </h3>
          <p className="subheading">
            Discover skincare & haircare essentials tailored for every need.
            From frizz-free hair to radiant, protected skin—find your perfect
            match!
          </p>
        </div>
        <div className="flat-animate-tab ">
          <ul className="tab-product justify-content-center" role="tablist">
            {tabItems.map((item) => (
              <li
                key={item}
                className={` p-2 rounded ${
                  activeItem === item ? "active-tab" : "inactive-tab"
                }`}
              >
                <a
                  href={`#`} // Generate href dynamically
                  className={`${activeItem === item ? "active-text" : ""}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    setActiveItem(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content justify-content-center">
            <div
              className="tab-pane active show tabFilter filtered"
              id="newArrivals"
              role="tabpanel"
            >
              <div className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
                {selectedItems.slice(0, 4).map((product, i) => (
                  <ProductCard1 key={i} product={product} />
                ))}
              </div>
              <div
                className="sec-btn text-center pt-2 pb-2 rounded"
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
          </div>
        </div>
      </div>
    </section>
  );
}
