"use client";

async function getProduct(id) {
    const productData = await fetch(`https://dummyjson.com/products/${id}`);
    if(!productData.ok){
        throw new Error('Failed to fetch data')
    }

    return productData.json();
}

export default async function Product() {
    const id = 1;
    const product = await getProduct(id);
    return (
        <div className="flex flex-col items-center w-full">
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