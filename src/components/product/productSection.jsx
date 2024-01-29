import Link from "next/link";
import ProductCard from "./productCard";

export default async function ProductSection({ products }) {

    return (
        <section className="col-span-3 flex flex-row flex-wrap">
            {products.products.map((product) => (
                <Link key={product.id} className="w-2/4" href={`/product/${product.id}`}>
                    <ProductCard product={product} />
                </Link>
            ))}
        </section>
    )
}