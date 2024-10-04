import React from 'react'
import ProductList from './ProductList'

const NewProducts = ({ categoryId, limit }) => {
    return (
        <div className="container mx-auto mt-5">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-auto'>
                <ProductList from="NEW_PRODUCT" categoryId={categoryId} limit={limit} />
            </div>
        </div>
    )
}

export default NewProducts