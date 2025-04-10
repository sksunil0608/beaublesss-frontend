import { Link, useLocation } from "react-router-dom";
import React from "react";

import {
  ContactMenu,
 
} from "@/data/menu";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <>
      <li className={`menu-item ${pathname === "skin-care" ? "active" : ""}`}>
        <Link to="/collections/skin-care" className="item-link">
          Skin Care
        </Link>
      </li>
      <li className={`menu-item ${pathname === "hair-care" ? "active" : ""}`}>
        <Link to="/collections/hair-care" className="item-link">
          Hair Care
        </Link>
      </li>
      <li className={`menu-item ${pathname === "combos" ? "active" : ""}`}>
        <Link to="/collections/combos" className="item-link">
        Kits & Combos
        </Link>
      </li>
      <li className={`menu-item ${pathname === "gifting" ? "active" : ""}`}>
        <Link to="/gifting" className="item-link">
          Gifting
        </Link>
      </li>

      {/* <li
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
      </li> */}

      <li
        className={`menu-item ${
          ContactMenu.some((elm) => elm.href === pathname) ? "active" : ""
        }`}
      >
        <Link to="/contact-us" className="item-link">
          Contact Us
        </Link>
      </li>
    </>
  );
}
