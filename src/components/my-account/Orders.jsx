import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserOrders } from "@/api/order";

// Function to decode JWT
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export default function Orders() {
  const [userData, setUserData] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) return;

      try {
        const decodedToken = parseJwt(token);
        if (decodedToken && decodedToken._id) {
          const user = await getUserOrders(decodedToken._id);
          setUserData(user.user);

          // Extract address details from user data if available
          if (user.user?.address) {
            setAddresses([
              {
                id: 1,
                houseNo: user.user.address.houseNo,
                street: user.user.address.street,
                landmark: user.user.address.landmark,
                city: user.user.address.city,
                state: user.user.address.state,
                country: user.user.address.country,
                pincode: user.user.address.pincode,
                isEditing: false,
              },
            ]);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);

  return (
    <div className="my-account-content">
      <div className="account-orders">
        <div className="wrap-account-order">
          <table>
            <thead>
              <tr>
                <th className="fw-6">Order</th>
                <th className="fw-6">Date</th>
                <th className="fw-6">Status</th>
                <th className="fw-6">Total</th>
                <th className="fw-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tf-order-item">
                <td>#123</td>
                <td>August 1, 2024</td>
                <td>On hold</td>
                <td>$200.0 for 1 item</td>
                <td>
                  <Link
                    to="/order-details/1"
                    className="tf-btn btn-fill radius-4"
                  >
                    <span className="text">View</span>
                  </Link>
                </td>
              </tr>
              <tr className="tf-order-item">
                <td>#345</td>
                <td>August 2, 2024</td>
                <td>On hold</td>
                <td>$300.0 for 1 item</td>
                <td>
                  <Link
                    to="/order-details/1"
                    className="tf-btn btn-fill radius-4"
                  >
                    <span className="text">View</span>
                  </Link>
                </td>
              </tr>
              <tr className="tf-order-item">
                <td>#567</td>
                <td>August 3, 2024</td>
                <td>On hold</td>
                <td>$400.0 for 1 item</td>
                <td>
                  <Link
                    to="/order-details/1"
                    className="tf-btn btn-fill radius-4"
                  >
                    <span className="text">View</span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
