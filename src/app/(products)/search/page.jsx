import ProductSection from "@/components/product/productSection";
import { getSearchResult } from "@/lib/fetchData";

export default async function SearchPage({ searchParams }){
    const products = await getSearchResult(searchParams.q);

    return (
        <>
            <ProductSection products={products} />
        </>
    )
}