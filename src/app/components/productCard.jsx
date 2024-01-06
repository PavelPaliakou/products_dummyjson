"use client";

async function getProduct() {
    const card = await fetch('https://dummyjson.com/products/1');
    if(!card.ok){
        throw new Error('Failed to fetch data')
    }

    return card.json();
}

export default async function ProductCard() {
    const data = await getProduct();
    return (
        <div>
            <h1>Product</h1>
            <p>Title <span>{data.title}</span></p>
            <p>Description <span>{data.description}</span></p>
            <p>price <span>{data.price}</span></p>
            <p>discountPercentage <span>{data.discountPercentage}</span></p>
            <p>rating <span>{data.rating}</span></p>
            <p>stock <span>{data.stock}</span></p>
            <p>brand <span>{data.brand}</span></p>
            <p>category <span>{data.category}</span></p>
            <img src={data.thumbnail} alt="thumbnail" />
            <img src={data.images[0]} alt="image" />
        </div>
    )
}