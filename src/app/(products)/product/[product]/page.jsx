import { getProduct } from "@/lib/fetchData";
import Slider from "@/components/Slider/slider";

export default async function Product({ params }) {
    const product = await getProduct(params.product);

    return (
        <div className="col-span-3 flex flex-col items-center w-full">
            <p><span>{product.title}</span></p>
            <div className="flex flex-row">
                <p>rating <span>{product.rating}</span></p>
                <p>|</p>
                <p>stock <span>{product.stock}</span></p>
            </div>
            <Slider images={product.images} />
            <p>Description <span>{product.description}</span></p>
            <p>price <span>{product.price}</span></p>
            <p>discountPercentage <span>{product.discountPercentage}</span></p>
            <p>brand <span>{product.brand}</span></p>
            <p>category <span>{product.category}</span></p>
        </div>
    )
}