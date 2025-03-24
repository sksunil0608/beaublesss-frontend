import { getUserData } from "@/api/auth";
import {
  addToCart,
  addToWishlistBackend,
  removeWishlistItemBackend,
  updateCartItem,
} from "@/api/cart";
import { shippingInfo } from "@/data/coupons";
import { allProducts, products } from "@/data/products";
import useAuthorization from "@/hooks/userAuthorization";
import parseJwt from "@/utlis/jwt";
import { openCartModal } from "@/utlis/openCartModal";
import { openWistlistModal } from "@/utlis/openWishlist";

import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
const dataContext = React.createContext();
export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const isAuthorized = useAuthorization();
  const [cartProducts, setCartProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [compareItem, setCompareItem] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(products[0]);
  const [quickAddItem, setQuickAddItem] = useState(products[0].id);
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalOrderTotal, setFinalOrderTotal] = useState(0);
  const [minThresholdFreeDelivery, setMinThresholdFreeDelivery] = useState(999);
  const [activeCoupon, setActiveCoupon] = useState("");
  const [orderNote, setOrderNote] = useState(null);
  const [discountDetails, setDiscountDetails] = useState([]);
  const [selectedShippingOption, setSelectedShippingOption] = useState(
    shippingInfo[0]
  );

  const [userId, setUserId] = useState(null);
  const token = localStorage.getItem("authToken");
  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        const decodedToken = parseJwt(token);
        if (decodedToken && decodedToken._id) {
          const user = await getUserData(token);
          setUserId(user.user._id);
        }
      }
    };

    fetchUserData();
  }, [token]);

  const applyCoupon = (coupon) => {
    let discountedPrice = totalPrice;
    let discountArray = [];
    if (coupon) {
      if (coupon.discountType === "flat") {
        discountedPrice -= coupon.discountValue;
        discountArray.push({
          type: "Coupon",
          code: coupon.code,
          discount: `₹${coupon.discountValue} off`,
        });
      }
      if (coupon.discountType === "percentage") {
        const discountAmount = (totalPrice * coupon.discountValue) / 100;
        const finalDiscount = Math.min(
          discountAmount,
          coupon.maxDiscount || discountAmount
        );
        discountedPrice -= finalDiscount;

        discountArray.push({
          type: "Coupon",
          code: coupon.code,
          discount: `${coupon.discountValue}% off (₹${finalDiscount})`,
          discountType: coupon.discountType,
        });
      }

      if (coupon.isFreeShipping) {
        setSelectedShippingOption({
          ...shippingInfo,
          type: "free",
          charges: 0,
        });
        discountArray.push({
          type: "Shipping",
          discount: "Free Shipping",
        });
      }
    }
    // Update the discount details array
    setDiscountDetails(discountArray);

    // Update the final total price
    setTotalPrice(discountedPrice > 0 ? discountedPrice : 0);
    setFinalOrderTotal(discountedPrice > 0 ? discountedPrice : 0);
  };

  useEffect(() => {
    const subtotal = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.offerPrice;
    }, 0);
    setTotalPrice(subtotal);
    setFinalOrderTotal(subtotal);
  }, [cartProducts]);

  const isAddedToCartProducts = (id) => {
    return cartProducts.some((item) => item._id === id);
  };

  const addProductToCart = async (
    id,
    qty,
    product,
    activeSize,
    isModal = true
  ) => {
    const item = {
      id: product._id,
      ...product,
      activeSize: activeSize || "",
      quantity: qty || 1,
    };

    if (!isAddedToCartProducts(id)) {
      // If user is not logged in, add to local state
      setCartProducts((prev) => [...prev, item]);
      if (isModal) {
        openCartModal();
      }

      // If user is logged in, send to backend
      if (isAuthorized) {
        try {
          await addToCart(userId, item.id, item.quantity, item.activeSize);
        } catch (error) {
          console.error("Error adding product to cart:", error);
        }
      }
    }
  };

  const updateQuantity = async (id, qty, activeSize) => {
    setCartProducts((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: qty } : item
      )
    );

    // Update the quantity in the backend if the user is authorized
    if (isAuthorized && userId) {
      try {
        await updateCartItem(userId, id, qty, activeSize);
      } catch (error) {
        console.error("Error updating cart item quantity in backend:", error);
      }
    }
  };

  const addToWishlist = async (id) => {
    if (!wishList.includes(id)) {
      setWishList((pre) => [...pre, id]);
      if (isAuthorized && userId) {
        try {
          await addToWishlistBackend(userId, id);
        } catch (error) {
          console.error("Error updating cart item quantity in backend:", error);
        }
      }
      openWistlistModal();
    }
  };

  const removeFromWishlist = async (id) => {
    console.log("Calld");
    if (wishList.includes(id)) {
      setWishList((pre) => [...pre.filter((elm) => elm != id)]);
      if (isAuthorized && userId) {
        try {
          await removeWishlistItemBackend(userId, id);
        } catch (error) {
          console.error("Remove Error:", error);
        }
      }
    }
  };
  const addToCompareItem = (id) => {
    if (!compareItem.includes(id)) {
      setCompareItem((pre) => [...pre, id]);
    }
  };
  const removeFromCompareItem = (id) => {
    if (compareItem.includes(id)) {
      setCompareItem((pre) => [...pre.filter((elm) => elm != id)]);
    }
  };
  const isAddedtoWishlist = (id) => {
    if (wishList.includes(id)) {
      return true;
    }
    return false;
  };
  const isAddedtoCompareItem = (id) => {
    if (compareItem.includes(id)) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartList"));
    if (items?.length) {
      setCartProducts(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
  }, [cartProducts]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist"));
    if (items?.length) {
      setWishList(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const contextElement = {
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    removeFromWishlist,
    addToWishlist,
    isAddedtoWishlist,
    quickViewItem,
    wishList,
    setQuickViewItem,
    quickAddItem,
    setQuickAddItem,
    addToCompareItem,
    isAddedtoCompareItem,
    removeFromCompareItem,
    compareItem,
    setCompareItem,
    updateQuantity,
    minThresholdFreeDelivery,
    applyCoupon,
    finalOrderTotal,
    setFinalOrderTotal,
    activeCoupon,
    setActiveCoupon,
    discountDetails,
    setDiscountDetails,
    setOrderNote,
    orderNote,
    setSelectedShippingOption,
    selectedShippingOption,
  };
  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
