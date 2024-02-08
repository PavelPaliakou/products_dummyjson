import Link from "next/link";
import Pagination from "@/components/navigation/pagination";
import ProductCard from "@/components/product/productCard";
import { getAllProducts } from "@/lib/fetchData";

export default async function WithPages(){
    const products = await getAllProducts();
    const total = products.total;
    console.log(total);

    return (
        <section className="flex flex-row flex-wrap w-3/4 gap-4 h-fit">
            {products.products.map((product) => (
                <Link key={product.id} className="w-full" href={`/product/${product.id}`}>
                    <ProductCard product={product} />
                </Link>
            ))}
            <Pagination />
        </section>
    )
}