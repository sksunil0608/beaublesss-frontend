import React from "react";
import Pagination from "../common/Pagination";
import { collections } from "@/data/collections";


export default function Collections() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="tf-grid-layout tf-col-2 lg-col-4">
          {/* item 1 */}
          {collections.map((item, index) => (
            <div
              key={index}
              className="collection-position-2 radius-lg style-3 hover-img"
            >
              <a className="img-style">
                <img
                  className="lazyload"
                  data-src={item.imgSrc}
                  alt={`banner-${item.title.toLowerCase()}`}
                  src={item.imgSrc}
                  width={450}
                  height={600}
                />
              </a>
              <div className="content">
                <a href="#" className="cls-btn">
                  <h6 className="text">{item.title}</h6>
                  <span className="count-item text-secondary">
                    {item.count}
                  </span>
                  <i className="icon icon-arrowUpRight" />
                </a>
              </div>
            </div>
          ))}
          {/* pagination */}
          <ul className="wg-pagination justify-content-center">
            <Pagination />
          </ul>
        </div>
      </div>
    </section>
  );
}
