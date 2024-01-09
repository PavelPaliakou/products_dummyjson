import ProductCard from "./productCard";
import { mock } from "../../mock/allProducts.json"

async function getProducts() {
    const productsData = await fetch('https://dummyjson.com/products');
    // const productsData = await fetch("../../mock/allProducts.json");

    if (!productsData.ok) {
        throw new Error('Failed to fetch data')
    }

    return productsData.json();
}

export default async function ProductSection() {
    const data = await getProducts();

    return (
        <section className="col-span-3 flex flex-row gap-4 flex-wrap">
            {data.products.map((product) => (
                <a href={`/products/${product.id}`}>
                    <ProductCard key={product.id} product={product} />
                </a>
            ))}
        </section>
    )
}