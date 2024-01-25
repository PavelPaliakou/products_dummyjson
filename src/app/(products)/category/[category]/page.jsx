"use client";

//FIXME: useEffect for calling once

export default function Category({ params }) {
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