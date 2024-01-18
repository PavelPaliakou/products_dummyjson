"use client";
import Carousel from "@/components/carousel";
import { getProduct } from "@/lib/fetchData";

//FIXME: useEffect for calling once

export default function Product({ params }) {
    console.log(params);
    console.log(params.product);

    const product = {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
    }
    // const product = await getProduct(params.product);

    return (
        <div className="col-span-3 flex flex-col items-center w-full">
            <p><span>{product.title}</span></p>
            <p>rating <span>{product.rating}</span></p>
            <p>stock <span>{product.stock}</span></p>
            <img src={product.images[0]} alt="image" />
            <Carousel />
            <p>Description <span>{product.description}</span></p>
            <p>price <span>{product.price}</span></p>
            <p>discountPercentage <span>{product.discountPercentage}</span></p>
            <p>brand <span>{product.brand}</span></p>
            <p>category <span>{product.category}</span></p>
            <img src={product.thumbnail} alt="thumbnail" />
        </div>
    )
}