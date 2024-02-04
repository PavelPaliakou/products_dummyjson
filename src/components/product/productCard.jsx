export default function ProductCard({ product }) {
    return (
        <div className="flex flex-row p-4 w-full gap-4 hover:bg-gray-100">
            <img width={180} height={180} src={product.thumbnail} alt="thumbnail" />
            <div className="w-3/4">
                <p>{product.category.replaceAll("-"," ")} {product.brand}</p>
                <p className="font-bold text-xl">{product.title}</p>
                <p>rating <span>{product.rating}</span></p>
                <p>{product.description}</p>
            </div>
            <div className="w-1/4 pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-3xl">{product.price}$</p>
                <p>{product.discountPercentage}%</p>
                <p>stock <span>{product.stock}</span></p>
            </div>
        </div>
    )
}