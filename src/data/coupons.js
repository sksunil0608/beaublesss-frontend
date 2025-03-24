import { getAllCoupons } from "@/api/coupans"

const couponCodes = await getAllCoupons();

export const coupons = couponCodes.coupons.map((coupon) => ({
      id: coupon._id,
      code: coupon.code,
      title: coupon.title,
      discount: coupon.discountValue,
      discountValue:coupon.discountValue,
      type: coupon.discountType,
      discountType:coupon.discountType,
      isActive: coupon.isActive,
      usageCount: coupon.usageCount,
      maxUsage: coupon.maxUsage,
      startDate: coupon.startDate,
      expireDate: coupon.expireDate,
    }));

  export const shippingInfo =[
    { id: 1, type: "express", charges: 100, name: "Express Delivery" },
    { id: 2, type: "normal", charges: 50, name: "Standard Delivery" },
    { id: 3, type: "free", charges: 1, name: "Free Delivery" }
    ];
  