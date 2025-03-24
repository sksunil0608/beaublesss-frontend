import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import AccountSidebar from "@/components/my-account/AccountSidebar";
import Address from "@/components/my-account/Address";
import { Link, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import Topbar from "@/components/headers/Topbar";
import { getUserData } from "@/api/auth";
import parseJwt from "@/utlis/jwt";
import useAuthorization from "@/hooks/userAuthorization";

const metadata = {
  title: "My Account Address || Beaubless",
  description: "Beaubless - Hair Care and Skin Care Solution",
};

export default function MyAccountAddressPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Define loading state
  const token = localStorage.getItem("authToken");

  const isAuthorized = useAuthorization(); // ✅ Hook is called at the top level

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const decodedToken = parseJwt(token);
          if (decodedToken && decodedToken._id) {
            const user = await getUserData(token);
            setUserData(user?.user || null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
      setLoading(false); // ✅ Ensure loading is properly updated
    };

    fetchUserData();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>; // ✅ This won't break the hook rules
  }

  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar />
      <Header1 />

      {/* page-title */}
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/bg-2.png )" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">My Account</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" to={`/`}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>
                  <a className="link" href="#">
                    Pages
                  </a>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>My Account</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /page-title */}
      <div className="btn-sidebar-account">
        <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
          <i className="icon icon-squares-four" />
        </button>
      </div>

      <section className="flat-spacing">
        <div className="container">
          <div className="my-account-wrap">
            <AccountSidebar userData={userData} />
            <Address />
          </div>
        </div>
      </section>
      <Footer1 />
    </>
  );
}
