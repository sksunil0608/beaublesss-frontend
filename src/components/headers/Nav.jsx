import { Link, useLocation } from "react-router-dom";
import React from "react";

import { products } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard1 from "../productCards/ProductCard1";
import {
  ContactMenu,
  HomeMenu,
  Shop,
  blogMenu,
  shopByMaterial,
  shopByUse,
  shopMenu,
  shop_by_price,
} from "@/data/menu";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <>
      <li className={`menu-item ${pathname === "/" ? "active" : ""}`}>
        <Link to="/" className="item-link">
          Home
        </Link>
      </li>

      <li
        className={`menu-item position-relative ${
          Shop.some((elm) => elm.href === pathname) ? "active" : ""
        }`}
      >
        <Link to="/products" className="item-link">
          Products
        </Link>
      </li>

      <li
        className={`menu-item position-relative ${
          blogMenu.some((elm) => elm.href === pathname) ? "active" : ""
        }`}
      >
        <Link to="/blogs" className="item-link">
          Beauty tips
        </Link>
      </li>

      <li className={`menu-item ${pathname === "/about-us" ? "active" : ""}`}>
        <Link to="/about-us" className="item-link">
          About Us
        </Link>
      </li>

      <li
        className={`menu-item ${
          ContactMenu.some((elm) => elm.href === pathname) ? "active" : ""
        }`}
      >
        <Link to="/contact-us" className="item-link">
          Contact
        </Link>
      </li>
    </>
  );
}
