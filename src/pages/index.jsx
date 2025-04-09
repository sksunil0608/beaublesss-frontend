import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar from "@/components/headers/Topbar";
import Hero from "@/components/homes/cosmetic/Hero";
import MetaComponent from "@/components/common/MetaComponent";
import { lazy, Suspense, useState, useEffect } from "react";
import Testimonials3 from "@/components/common/Testimonials3";
import BannerTab from "@/components/common/BannerTab";
import KoreanInspired from "@/components/common/KoreanInspired";
const BannerCollection = lazy(() =>
  import("@/components/homes/cosmetic/BannerCollection")
);
const BannerCountdown = lazy(() =>
  import("@/components/homes/cosmetic/BannerCountdown")
);
const Features = lazy(() => import("@/components/common/Features"));
const ShopGram = lazy(() => import("@/components/common/ShopGram"));
const Testimonials = lazy(() => import("@/components/common/Testimonials"));
const MarqueeSection2 = lazy(() =>
  import("@/components/common/MarqueeSection2")
);
const Products = lazy(() => import("@/components/common/Products5"));
// const Tiktok = lazy(() => import("@/components/common/Tiktok"));
// const Lookbook = lazy(() => import("@/components/homes/cosmetic/Lookbook"));
const Collections = lazy(() => import("@/components/homes/cosmetic/Collections"));
const Products3 = lazy(() => import("@/components/common/Products3"));

const metadata = {
  title: "Beaubless || For Every Skin Type, Every Routine, and Every Glow",
  description:
    "Beaubless – Your ultimate destination for hair care and skincare. Crafted for every skin type, every routine, and every glow. Experience beauty that truly cares!",
};

// Full-page Loader
const FullPageLoader = () => (
  <div className="full-page-loader">Loading....</div>
);

// Inline Section Loader
const Loader = () => <div className="loader-container">Loading...</div>;

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Show loader for at least 1 second
  }, []);

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <>
      <MetaComponent meta={metadata} />
      <Topbar />
      <Header1 />
      <Hero />

      <Suspense fallback={<Loader />}>
        <MarqueeSection2 />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Collections />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Products3 />
      </Suspense>

      <Hero />

      {/* <Suspense fallback={<Loader />}>
        <BannerCountdown />
      </Suspense> */}

      <Suspense fallback={<Loader />}>
        <Products />
      </Suspense>

      {/* <Suspense fallback={<Loader />}>
        <Lookbook />
      </Suspense> */}

      <Suspense fallback={<Loader />}>
        <BannerCollection />
      </Suspense>

      {/* <Suspense fallback={<Loader />}>
        <Tiktok />
      </Suspense> */}
      <KoreanInspired/>
      <Suspense fallback={<Loader />}>
        <Testimonials3 />
      </Suspense>

      {/* <Suspense fallback={<Loader />}>
        <Features />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <ShopGram />
      </Suspense> */}

      <Footer1 />
    </>
  );
}
