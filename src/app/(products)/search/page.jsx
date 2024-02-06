import ProductSection from "@/components/product/productSection";
import { getSearchResult } from "@/lib/fetchData";

export default async function SearchPage({searchParams}){
    // const products = await getSearchResult("phone");
    console.log(searchParams);

    return (
        <>
        <h1>Hello World</h1>
            {/* <ProductSection products={products} /> */}
        </>
    )
}