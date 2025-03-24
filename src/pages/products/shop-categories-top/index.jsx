import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import Products1 from "@/components/products/Products1";
import ShopCategories from "@/components/products/ShopCategories";
import { Link, Navigate, useParams } from "react-router-dom";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
import Topbar from "@/components/headers/Topbar";
import Categories from "@/components/common/Categories";
import Products13 from "@/components/products/Products13";
import Products3 from "@/components/common/Products3";
import Products11 from "@/components/products/Products11";
import Products14 from "@/components/products/Products14";
import Products15 from "@/components/products/Products15";
const metadata = {
  title: "Shop Collections || Beaubless",
  description: "Shop Collections",
};
export default function ShopCategoriesTopPage1({ collections }) {
  // Check if slug exists in collection
  const { slug } = useParams();
  const collection = collections.find((item) => item.slug === slug);
  if (!collection) {
    return <Navigate to="/products" replace />;
  }
  // Sending Collection Id to Collection page
  const collectionId = collection.id;
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar />
      <Header1 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/bg-2.png )" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Collections</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" to={`/`}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Collections</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Categories /> */}
      <Products14 parentClass="flat-spacing" collectionId={collectionId} />
      <Footer1 />
    </>
  );
}
