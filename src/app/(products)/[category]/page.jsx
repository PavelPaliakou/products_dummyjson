import { getProductsByCategory } from "@/lib/fetchData";
import ProductSection from "@/components/product/productSection";


export default async function Category({ params }) {
    const products = await getProductsByCategory(params.category);

    return (
        <ProductSection products = {products}/>
    )
}