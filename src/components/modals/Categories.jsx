import { categories } from "@/data/productFilterOptions";
import React from "react";

export default function Categories() {
  return (
    <div
      className="offcanvas offcanvas-start canvas-filter canvas-categories"
      id="shopCategories"
    >
      <div className="canvas-wrapper">
        <div className="canvas-header">
          <span className="icon-left icon-filter" />
          <h5>Categories</h5>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="canvas-body">
          {categories.map((category) => (
            <div key={category._id} className="wd-facet-categories">
              <div
                role="dialog"
                className="facet-title collapsed"
                data-bs-target={`#${category.slug}`}
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls={category.slug}
              >
                <img
                  className="avt"
                  alt="avt"
                  src={category.image}
                  width={48}
                  height={48}
                />
                <span className="title">{category.name}</span>
                <span className="icon icon-arrow-down" />
              </div>
              <div id={category.slug} className="collapse">
                <ul className="facet-body">
                  <li>
                    <a
                      href={`collections/${category.slug}`}
                      className="item link"
                    >
                      {category.name} ({category.count} products)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
