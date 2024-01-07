import ProductCard from "./productCard";

async function getProducts() {
    const productsData = await fetch('https://dummyjson.com/products');
    
    if(!productsData.ok){
        throw new Error('Failed to fetch data')
    }

    return productsData.json();
}

export default async function ProductSection (){
    const data = await getProducts();

    return (
        <section className="flex flex-row gap-4 flex-wrap">
            {data.products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    )
}