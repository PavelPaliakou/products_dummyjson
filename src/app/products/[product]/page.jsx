"use client";

async function getProduct() {
    const productData = await fetch('https://dummyjson.com/products/1');
    if(!productData.ok){
        throw new Error('Failed to fetch data')
    }

    return productData.json();
}

export default async function ProductCard() {
    const product = await getProduct();
    return (
        <div>
            <h1>Product</h1>
            <p>Title <span>{product.title}</span></p>
            <p>Description <span>{product.description}</span></p>
            <p>price <span>{product.price}</span></p>
            <p>discountPercentage <span>{product.discountPercentage}</span></p>
            <p>rating <span>{product.rating}</span></p>
            <p>stock <span>{product.stock}</span></p>
            <p>brand <span>{product.brand}</span></p>
            <p>category <span>{product.category}</span></p>
            <img src={product.thumbnail} alt="thumbnail" />
            <img src={product.images[0]} alt="image" />
        </div>
    )
}