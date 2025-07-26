import React from "react";

export default function Description({ product }) {
  return (
    <>
      {" "}
      <div className="right">
        <h1 className="product-title">{product?.name}</h1>
        {product?.description && (
          <div
            className="mb_12 text-primary text-justify product-info"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        )}
      </div>
    </>
  );
}
