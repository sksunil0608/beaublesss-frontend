import axios from "axios";
import { apiConfig } from "../config/apiConfig";

const api = axios.create({
  baseURL: apiConfig.baseURL,
});

// ✅ Create a new coupon
export const createCoupon = async (couponData) => {
  try {
    const response = await api.post("/coupon/create", couponData);
    return response.data;
  } catch (error) {
    console.error("Error creating coupon:", error);
    throw error;
  }
};

// ✅ Get all coupons
export const getAllCoupons = async () => {
  try {
    const response = await api.get("/coupon/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching coupons:", error);
    throw error;
  }
};

// ✅ Get coupon by ID
export const getCouponById = async (couponId) => {
  try {
    const response = await api.get(`/coupon/${couponId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching coupon by ID:", error);
    throw error;
  }
};

// ✅ Update a coupon
export const updateCoupon = async (couponId, updatedData) => {
  try {
    const response = await api.put(`/coupon/${couponId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating coupon:", error);
    throw error;
  }
};

// ✅ Delete a coupon
export const deleteCoupon = async (couponId) => {
  try {
    const response = await api.delete(`/coupon/${couponId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting coupon:", error);
    throw error;
  }
};

// ✅ Apply coupon to cart
export const applyCoupon = async (couponCode) => {
  try {
    const response = await api.post("/coupon/apply", { code: couponCode });
    return response.data;
  } catch (error) {
    console.error("Error applying coupon:", error);
    throw error;
  }
};

export default api;
