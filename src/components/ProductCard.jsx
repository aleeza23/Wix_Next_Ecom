// ProductCard.js
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const ProductCard = ({ product, from }) => {
    return (

        <Link
            href={"/" + product.slug}
            className="flex-shrink-0"
            key={product._id}
        >
            {/* Card Container */}
            <article className={` ${from === 'NEW_PRODUCT' ? 'w-full h-full  ' : 'w-64'}   bg-white rounded-lg group hover:shadow-lg overflow-hidden dark:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out`}>
                <div className="h-44 relative my-2">
                    {/* Product Image */}
                    <Image
                        className="object-contain w-full"
                        fill
                        src={product.media?.mainMedia?.image?.url || "/product.png"}
                        alt={product.name}
                    />
                </div>

                <div className="flex flex-col gap-1 mt-4 px-4">
                    <h2 className="text-md font-semibold text-gray-800 dark:text-gray-50">{product.name}</h2>
                    <span className="font-normal text-gray-600 dark:text-gray-300">
                        {product.additionalInfoSections &&
                            DOMPurify.sanitize(
                                product.additionalInfoSections.find(
                                    (section) => section.title === "shortDesc"
                                )?.description || ""
                            )}
                    </span>
                    <span className="font-semibold text-gray-800 dark:text-gray-50">
                        Rs {product.priceData.price}
                    </span>
                </div>

                <div className="flex gap-4 mt-4 px-4">
                    {product.variants?.map((color,i) => (
                        <button
                            key={i}
                            aria-label={color}
                            className={`p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer`}
                            style={{ backgroundColor: color.choices.Color }}
                        />
                    ))}
                </div>

                <div className=" p-4 border-t border-gray-200 flex mt-4 dark:border-gray-500">
                    <button className="w-full text-sm font-bold border py-2 rounded-lg border-blue-600 cursor-pointer group-hover:bg-blue-600   group">
                        <span className="text-base text-center group-hover:text-white">Add to Cart</span>
                        
                    </button>
                   
                </div>
            </article>
        </Link>
    );
};

export default ProductCard;
