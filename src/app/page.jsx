// "use client";

import CategoryList from "@/components/CategoryList";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import { Suspense } from "react";

const HomePage = async () => {
  // TEST (FETCHING ON THE SERVER COMPONENT)
  // Since you're using async/await, ensure this function is called in a context that supports it.

  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  // console.log(res);

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.NEW_PRODUCTS_CATEGORY_ID}
            limit={8}
          />
        </Suspense>
      </div>
      <Footer />
    </div>
    
  );
};

export default HomePage;
