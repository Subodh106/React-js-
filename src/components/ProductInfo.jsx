import React from 'react'

const ProductInfo = () => {
    const product ={
        name: "Laptop",
        price: 999.99,
        description: "A high-performance laptop for all your computing needs.",
        inStock: true
    }
  return (
    <>
    <div>
        <h1>{product.name}</h1>
        <p>Price : {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
        <button>{product.inStock ? "Add to Cart" : "Notify Me"}</button>
        <button>Buy Now</button>
    </div>
    </>
  )
}

export default ProductInfo