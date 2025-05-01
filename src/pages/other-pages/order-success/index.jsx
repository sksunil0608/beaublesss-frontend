import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import Topbar from "@/components/headers/Topbar";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

export default function OrderSuccessPage() {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const storedOrder = sessionStorage.getItem("orderDetails");
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
      sessionStorage.removeItem("orderDetails"); // clear it if you want
    }
  }, []);

  return (
    <>
      <Topbar />
      <Header1 />
      <section className="flat-spacing page-success">
        <div className="container">
          <div className="page-success-inner justify-content-center text-center">
            <div className="image justify-content-center">
              <img
                className="lazyload"
                data-src="/images/payment/done.png"
                alt="Order Success"
                src="/images/payment/done.png"
                width={100}
                height={100}
              />
            </div>
            <div className="content">
              <h1 className="title mb_4 text-primary">Thank You!</h1>
              <h4 className="title mb_4 text-primary pt-2">
                Your Order is Confirmed
              </h4>
              <div className="text body-text-1 pt-3">
                We appreciate your purchase! Your order is being processed and
                will be shipped soon.
              </div>

              {order && (
                <div className="mt-5 text-left">
                  <h5>Order Summary</h5>
                  <p><strong>Order ID:</strong> {order._id}</p>
                  <p><strong>Payment ID:</strong> {paymentId}</p>
                  <p><strong>Name:</strong> {order.firstName} {order.lastName}</p>
                  <p><strong>Email:</strong> {order.email}</p>
                  <p><strong>Phone:</strong> {order.phone}</p>
                  <p><strong>Total:</strong> ₹{order.totalPrice.toFixed(2)}</p>
                  <p><strong>Shipping:</strong> {order.selectedShippingOption.label}</p>
                  <p><strong>Note:</strong> {order.note || 'None'}</p>
                  <p><strong>Address:</strong> {order.address.street}, {order.address.city}, {order.address.state} - {order.address.pincode}</p>

                  <h6 className="mt-3">Items:</h6>
                  <ul>
                    {order.cartProducts.map((product, idx) => (
                      <li key={idx}>
                        {product.name} × {product.quantity} – ₹{(product.price * product.quantity).toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <RelatedProducts />
        </div>
      </section>
      <Footer1 />
    </>
  );
}
