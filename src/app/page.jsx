// "use client";

import CategoryBanners from "@/components/CategoryBanner";
import CategoryList from "@/components/CategoryList";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import NewProducts from "@/components/NewProducts";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import { Suspense } from "react";
import { topBanner, bottomBanner } from '../data/Banner'
import ServiceSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const HomePage = async () => {
  // TEST (FETCHING ON THE SERVER COMPONENT)
  // Since you're using async/await, ensure this function is called in a context that supports it.

  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  // console.log(res);

  return (
    <div>
      <Slider />

      <div className=" mt-10 sm:mt-20 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-64">
        <strong className="text-2xl ">
          Trending Categories
        </strong>
        <hr className="mt-6" />
        <div className="mt-5">
          <Suspense fallback={<Skeleton />}>
            <CategoryList />
          </Suspense>
        </div>

        {/* category banner */}
        <div className="mt-5">
          <Suspense fallback={<Skeleton />}>
            <CategoryBanners banner={topBanner} />
          </Suspense>
        </div>

        {/* products */}

        <div className="bg-[#f5f5f5] py-5  md:py-20 md:px-8 rounded-xl md:mt-10">
          <strong className="text-2xl px-5 ">
            Featured Products
          </strong>
          <hr className="mt-6" />
          <Suspense fallback={<Skeleton />}>
            <FeaturedProducts
              categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID}
              limit={12}
            />
          </Suspense>
        </div>
        {/* category banner */}
        <div className="mt-5">
          <Suspense fallback={<Skeleton />}>
            <CategoryBanners banner={bottomBanner} />
          </Suspense>
        </div>
      </div>

      <div className="mt-10 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-64">
        <strong className="text-2xl  ">
          New Products
        </strong>
        <hr className="mt-6" />
        <Suspense fallback={<Skeleton />}>
          <NewProducts
            categoryId={process.env.NEW_PRODUCTS_CATEGORY_ID}
            limit={8}
          />
        </Suspense>
      </div>
      <ServiceSection />
      <div className="mt-5 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-64">
        <ContactSection />
      </div>


      <Footer />
    </div>

  );
};

export default HomePage;
