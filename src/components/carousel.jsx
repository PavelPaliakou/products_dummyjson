import Image from "next/image"

export default function Carousel(){
    const images = [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ]
    return (
        <div>
            <div className="bigImage">
                <Image src={images[0]} width={300} height={300} />
            </div>
            <div className="smallImages">
                <div className="smallImage">

                </div>
            </div>
        </div>
    )
}