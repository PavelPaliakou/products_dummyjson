import Link from "next/link";
import ProductCard from "./productCard";

export default async function ProductSection({ products }) {

    return (
        <section className="col-span-3 flex flex-row flex-wrap gap-4 bg-white">
            {products.products.map((product) => (
                <Link key={product.id} className="w-full" href={`/product/${product.id}`}>
                    <ProductCard product={product} />
                </Link>
            ))}
        </section>
    )
}