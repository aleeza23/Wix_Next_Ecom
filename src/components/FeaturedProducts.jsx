import React from 'react'
import ProductList from './ProductList'

const FeaturedProducts = ({categoryId, limit}) => {
    return (
        <div className="px-4 overflow-x-scroll scrollbar-hide mt-5">
            <div className="flex gap-4 md:gap-8">
                <ProductList from={"FEATURED_PRODUCT"} categoryId={categoryId} limit={limit} />
            </div>
        </div>
    )
}

export default FeaturedProducts