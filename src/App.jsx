import "./styles/style.scss";
import { useContext, useEffect, useState } from "react";

import Context from "@/context/Context";
import CartModal from "@/components/modals/CartModal";
import QuickView from "@/components/modals/QuickView";
import QuickAdd from "@/components/modals/QuickAdd";
import Compare from "@/components/modals/Compare";
import MobileMenu from "@/components/modals/MobileMenu";
import NewsLetterModal from "@/components/modals/NewsLetterModal";
import SearchModal from "@/components/modals/SearchModal";
import SizeGuide from "@/components/modals/SizeGuide";
import Wishlist from "@/components/modals/Wishlist";
import DemoModal from "@/components/modals/DemoModal";
import Categories from "@/components/modals/Categories";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages";
import ShopDefaultGridPage from "./pages/products/shop-default-grid";
import ShopDefaultListPage from "./pages/products/shop-default-list";
import ShopFullwidthListPage from "./pages/products/shop-fullwidth-list";
import ShopFullwidthGridPage from "./pages/products/shop-fullwidth-grid";
import ShopLeftSidebarPage from "./pages/products/shop-left-sidebar";
import ShopRightSidebarPage from "./pages/products/shop-right-sidebar";
import ShopFilterDropdownPage from "./pages/products/shop-filter-dropdown";
import ShopFilterCanvasPage from "./pages/products/shop-filter-canvas";
import ShopCategoriesTopPage1 from "./pages/products/shop-categories-top";
import ShopCategoriesTopPag2 from "./pages/products/shop-categories-top-02";
import ShopCollectionPage from "./pages/products/shop-collection";

import WishListPage from "./pages/other-pages/wish-list";
import SearchResultPage from "./pages/products/search-result";
import ShopingCartPage from "./pages/products/shopping-cart";
import LoginPage from "./pages/other-pages/login";
import ForgotPasswordPage from "./pages/other-pages/forget-password";
import OrderTrackingPage from "./pages/other-pages/order-tracking";
import MyAccountPage from "./pages/my-account/my-account";

import ProductRighrThumbnailPage from "./pages/productDetails/product-right-thumbnails";
import ProductBottomThumbnailPage from "./pages/productDetails/product-bottom-thumbnails";
import ProductDescriptionAccordionPage from "./pages/productDetails/product-description-accordion";
import ProductDescriptionListPage from "./pages/productDetails/product-description-list";
import ProductDescriptionMenutabPage from "./pages/productDetails/product-description-menutab";
import ProductDescriptionFullwidthPage from "./pages/productDetails/product-description-fullwidth";
import ProductFixedProcePage from "./pages/productDetails/product-fixed-price";

import ProductFrequentlyBoughtTogetherPage1 from "./pages/productDetails/product-frequently-bought-together";
import ProductFrequentlyBoughtTogetherPage2 from "./pages/productDetails/product-frequently-bought-together-02";
import ProductUpSellPage from "./pages/productDetails/product-up-sell";
import ProductPreorderPage from "./pages/productDetails/product-pre-order";
import ProductGroupedPage from "./pages/productDetails/product-grouped";
import ProductCustomerNotePage from "./pages/productDetails/product-customer-note";
import ProductOutOfStockPage from "./pages/productDetails/product-out-of-stock";
import ProductPickupAvailablePage from "./pages/productDetails/product-pickup-available";
import ProductVariablePage from "./pages/productDetails/product-variable";
import ProductDealsPage from "./pages/productDetails/product-deals";
import ProductWithDiscountPage from "./pages/productDetails/product-with-discount";
import ProductExternalPage from "./pages/productDetails/product-external";
import ProductSubscribeSavePage from "./pages/productDetails/product-subscribe-save";
import BlogGridPage from "./pages/blogs/blog-grid";
import BlogDetailsPage2 from "./pages/blogs/blog-details";
import AboutUsPage from "./pages/other-pages/about-us";
import PageNotFoundPage from "./pages/not-found";
import TermsOfUsePage from "./pages/other-pages/term-of-use";

// import Privacy from "./pages/other-pages/privacy-policy";

import CommingSoonPage from "./pages/other-pages/coming-soon";
import WOW from "@/utlis/wow";
import CompareProductsPage from "./pages/other-pages/compare-products";

import PrivacyPage from "./pages/other-pages/privacy-policy";
import ShopPage from "./pages/other-pages/shop";
import ReturnPage from "./pages/other-pages/refund-return";

import RegisterPage from "./pages/other-pages/register";
import MyAccountOrdersPage from "./pages/my-account/my-account-orders";
import MyAccountAddressPage from "./pages/my-account/my-account-address";
import MyAccountOrdersDetailsPage from "./pages/my-account/my-account-orders-details";
import ShippingPage from "./pages/other-pages/shipping";
import ContactPage from "./pages/other-pages/contact";
import CheckoutPage from "./pages/products/checkout";
import OrderSuccessPage from "./pages/other-pages/order-success";

function App({ setIsLoading }) {
  const { pathname } = useLocation();
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await getAllCategories();
        const collectionArray = response.categories || [];

        setCollections(
          collectionArray.map((item, index) => ({
            id: item._id,
            imgSrc: item.image[0],
            alt: item.name,
            title: item.name,
            slug: slugify(item.name, { lower: true }),
            subtitle: item.name,
            delay: `${index * 0.1}s`,
          }))
        );
      } catch (error) {
        console.error("Error fetching collections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  useEffect(() => {
    // Simulate API call or content loading check
    const checkAppReady = async () => {
      // Simulate delay for data fetching (Replace with actual API calls)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Hide loader once content is ready
    };

    checkAppReady();
  }, [setIsLoading]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 100) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    setScrollDirection("up");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
      } else {
        // Below 250px
        setScrollDirection("down");
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  useEffect(() => {
    // Dynamically import Bootstrap
    import("bootstrap")
      .then((bootstrap) => {
        // Close any open modal
        const modalElements = document.querySelectorAll(".modal.show");
        modalElements.forEach((modal) => {
          const modalInstance = bootstrap.Modal.getInstance(modal);
          if (modalInstance) {
            modalInstance.hide();
          }
        });

        // Close any open offcanvas
        const offcanvasElements = document.querySelectorAll(".offcanvas.show");
        offcanvasElements.forEach((offcanvas) => {
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
          }
        });
      })
      .catch((error) => {
        console.error("Error loading Bootstrap:", error);
      });
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      if (scrollDirection == "up") {
        header.style.top = "0px";
      } else {
        header.style.top = "-185px";
      }
    }
  }, [scrollDirection]);
  useEffect(() => {
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);
  return (
    <>
      <Context>
        <div id="wrapper">
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />

              {/* My Account */}
              <Route path="wish-list" element={<WishListPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="forget-password" element={<ForgotPasswordPage />} />
              <Route path="order-tracking" element={<OrderTrackingPage />} />
              <Route path="my-account" element={<MyAccountPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="cart" element={<ShopingCartPage />} />
              <Route path="order-success" element={<OrderSuccessPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="my-orders" element={<MyAccountOrdersPage />} />
              <Route path="my-address" element={<MyAccountAddressPage />} />
              <Route
                path="order-details/:id"
                element={<MyAccountOrdersDetailsPage />}
              />
              {/* My Account End */}

              {/* Pages */}
              <Route path="blogs" element={<BlogGridPage />} />
              <Route path="blogs/:slug" element={<BlogDetailsPage2 />} />
              <Route path="about-us" element={<AboutUsPage />} />
              <Route path="contact-us" element={<ContactPage />} />
              <Route path="term-of-use" element={<TermsOfUsePage />} />
              <Route path="privacy-policy" element={<PrivacyPage />} />
              <Route path="refund-return" element={<ReturnPage />} />
              <Route path="shipping" element={<ShippingPage />} />
              <Route path="coming-soon" element={<CommingSoonPage />} />
              <Route path="404" element={<PageNotFoundPage />} />
              {/* Pages End */}

              {/* Shop */}
              <Route path="products" element={<ShopLeftSidebarPage />} />
              <Route path="search-result" element={<SearchResultPage />} />
              <Route
                path="compare-products"
                element={<CompareProductsPage />}
              />
              <Route path="all-collections" element={<ShopCollectionPage />} />
              <Route path="collections" element={<ShopCollectionPage />} />
              <Route
                path="collections/:slug"
                element={<ShopCategoriesTopPage1 collections={collections} />}
              />
              {/* Shop End */}

              {/* Single Product Pages */}
              <Route
                path="product-detail/:slug"
                element={<ProductDescriptionListPage />}
              />

              {/* Single Product Page End */}
              <Route
                path="/products/:slug"
                element={<ProductDescriptionListPage />}
              />

              {/* Extra Pages */}
              <Route
                path="product-right-thumbnails/:id"
                element={<ProductRighrThumbnailPage />}
              />
              <Route
                path="product-bottom-thumbnails/:id"
                element={<ProductBottomThumbnailPage />}
              />
              <Route
                path="product-description-accordion/:id"
                element={<ProductDescriptionAccordionPage />}
              />
              <Route
                path="product-description-list/:id"
                element={<ProductDescriptionListPage />}
              />

              <Route
                path="product-fixed-price/:id"
                element={<ProductFixedProcePage />}
              />

              <Route
                path="product-frequently-bought-together/:id"
                element={<ProductFrequentlyBoughtTogetherPage1 />}
              />

              <Route
                path="product-up-sell/:id"
                element={<ProductUpSellPage />}
              />
              <Route
                path="product-pre-order/:id"
                element={<ProductPreorderPage />}
              />
              <Route
                path="product-grouped/:id"
                element={<ProductGroupedPage />}
              />
              <Route
                path="product-customer-note/:id"
                element={<ProductCustomerNotePage />}
              />
              <Route
                path="product-out-of-stock/:id"
                element={<ProductOutOfStockPage />}
              />
              <Route
                path="product-pickup-available/:id"
                element={<ProductPickupAvailablePage />}
              />
              <Route
                path="product-variable/:id"
                element={<ProductVariablePage />}
              />
              <Route path="product-deals/:id" element={<ProductDealsPage />} />
              <Route
                path="product-with-discount/:id"
                element={<ProductWithDiscountPage />}
              />
              <Route
                path="product-external/:id"
                element={<ProductExternalPage />}
              />
              <Route
                path="product-subscribe-save/:id"
                element={<ProductSubscribeSavePage />}
              />

              <Route
                path="shop-default-grid"
                element={<ShopDefaultGridPage />}
              />
              <Route
                path="shop-default-list"
                element={<ShopDefaultListPage />}
              />
              <Route
                path="shop-fullwidth-list"
                element={<ShopFullwidthListPage />}
              />
              <Route
                path="shop-fullwidth-grid"
                element={<ShopFullwidthGridPage />}
              />
              <Route
                path="shop-left-sidebar"
                element={<ShopLeftSidebarPage />}
              />
              <Route
                path="shop-right-sidebar"
                element={<ShopRightSidebarPage />}
              />
              <Route
                path="shop-filter-dropdown"
                element={<ShopFilterDropdownPage />}
              />
              <Route
                path="shop-filter-canvas"
                element={<ShopFilterCanvasPage />}
              />

              <Route
                path="shop-categories-top-02"
                element={<ShopCategoriesTopPag2 />}
              />

              {/* Extra Pages End */}

              <Route path="*" element={<PageNotFoundPage />} />
            </Route>
          </Routes>
        </div>
        <CartModal />
        <QuickView />
        <QuickAdd />
        <Compare />
        <MobileMenu />

        <NewsLetterModal />
        <SearchModal />
        <SizeGuide />
        <Wishlist />
        <DemoModal />
        <Categories />
      </Context>
    </>
  );
}

export default App;
