export default function ProductCard({ product }) {
    return (
        <div className="flex flex-col items-center p-4 border-2 border-black w-full h-auto">
            <img src={product.thumbnail} alt="thumbnail" />
            <p className="font-bold text-xl">{product.id} {product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}$</p>
            <p>{product.discountPercentage}%</p>
            <p>rating <span>{product.rating}</span></p>
            <p>stock <span>{product.stock}</span></p>
            <p>brand <span>{product.brand}</span></p>
            <p>category <span>{product.category}</span></p>
        </div>
    )
}