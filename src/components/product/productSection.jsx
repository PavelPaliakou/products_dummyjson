import Link from "next/link";
import ProductCard from "./productCard";

export default async function ProductSection({ products }) {

    return (
        <section className="flex flex-row flex-wrap w-3/4 gap-4 h-fit">
            {products.products.map((product) => (
                <Link key={product.id} className="w-full" href={`/product/${product.id}`}>
                    <ProductCard product={product} />
                </Link>
            ))}
        </section>
    )
}