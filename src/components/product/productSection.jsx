import Link from "next/link";
import ProductCard from "./productCard";
import { getAllProducts } from "@/lib/fetchData";

export default async function ProductSection() {
    const data = await getAllProducts();

    return (
        <section className="col-span-3 flex flex-row flex-wrap">
            {data.products.map((product) => (
                <Link key={product.id} className="w-2/4" href={`/product/${product.id}`}>
                    <ProductCard product={product} />
                </Link>
            ))}
        </section>
    )
}