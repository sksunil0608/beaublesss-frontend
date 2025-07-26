import React, { useState } from "react";
import Description from "./Description";
import Reviews from "./Reviews";
import ReturnPolicies from "./ReturnPolicies";

export default function DescriptionList({ product }) {
  const [openTab, setOpenTab] = useState("reasons");

  const toggleTab = (tabKey) => {
    setOpenTab(openTab === tabKey ? null : tabKey);
  };

  const TabItem = ({ title, tabKey, children }) => (
    <div className="accordion-product-wrap">
      <div
        className="product-description-list-title d-flex justify-between align-items-center cursor-pointer"
        onClick={() => toggleTab(tabKey)}
      >
        <h6
          className={`title-text ${openTab === tabKey ? "active" : ""}`}
          style={
            openTab === tabKey
              ? { borderBottom: "2px solid black", fontWeight: 600 }
              : {}
          }
        >
          {title}
        </h6>

        <span className="toggle-icon">{openTab === tabKey ? "−" : "+"}</span>
      </div>

      {openTab === tabKey && (
        <div className="product-description-list-content">
          <div className={`tab-${tabKey}`}>{children}</div>
        </div>
      )}
    </div>
  );

  return (
    <section className="description-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product-description-list">
              {product?.reasonsToLove && product.reasonsToLove.length > 0 && (
                <TabItem title="Reasons to Love" tabKey="reasons">
                  <div
                    className="mb_12 text-primary text-justify product-info"
                    dangerouslySetInnerHTML={{ __html: product.reasonsToLove }}
                  />
                </TabItem>
              )}

              <TabItem title="Description" tabKey="description">
                <Description product={product} />
              </TabItem>

              {product?.setContains && product.setContains.trim().length > 0 && (
                <TabItem title={"Set Contains"} tabKey="setContains">
                  <div className="mb_12 text-primary text-justify product-info">
                   <div dangerouslySetInnerHTML={{ __html: product.setContains }}></div>
                  </div>
                </TabItem>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
