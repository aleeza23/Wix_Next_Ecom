// ProductList.js
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import ProductCard from "./ProductCard"; // Import the new ProductCard component
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 18;

const ProductList = async ({
    categoryId,
    limit,
    searchParams,
    from
}) => {
    const wixClient = await wixClientServer();
    let res;

    if (categoryId) {
        res = await wixClient.products.queryProducts()
            .startsWith("name", searchParams?.name || "")
            .eq("collectionIds", categoryId)
            .hasSome(
                "productType",
                searchParams?.type ? [searchParams.type] : ["physical", "digital"]
            )
            .gt("priceData.price", searchParams?.min || 0)
            .lt("priceData.price", searchParams?.max || 999999)
            .limit(limit || PRODUCT_PER_PAGE)
            .skip(
                searchParams?.page
                    ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
                    : 0
            ).find();
    } else {
        console.error("categoryId is not defined or invalid.");
        return <div>No products available.</div>; // Return a fallback UI
    }

    if (searchParams?.sort) {
        const [sortType, sortBy] = searchParams.sort.split(" ");

        if (sortType === "asc") {
            productQuery.ascending(sortBy);
        }
        if (sortType === "desc") {
            productQuery.descending(sortBy);
        }
    }

    return (
        <>
            {res?.items?.map((product) => (
                <ProductCard product={product} key={product._id} from={from} /> // Use the ProductCard component
            ))}
            {searchParams?.cat || searchParams?.name ? (
                <Pagination
                    currentPage={res.currentPage || 0}
                    hasPrev={res.hasPrev()}
                    hasNext={res.hasNext()}
                />
            ) : null}
        </>
    );
};

export default ProductList;
