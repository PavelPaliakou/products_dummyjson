import Link from "next/link";
import ProductCard from "./productCard";
import { getAllProducts } from "@/lib/fetchData";

export default async function ProductSection() {
    const data = await getAllProducts();

    return (
        <section className="col-span-3 flex flex-row gap-4 flex-wrap">
            {data.products.map((product) => (
                <Link href={`/product/${product.id}`}>
                    <ProductCard key={product.id} product={product} />
                </Link>
            ))}
        </section>
    )
}