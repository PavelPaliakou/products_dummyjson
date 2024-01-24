import Image from "next/image"
import SlideRow from "./slideRow"
import { useState } from "react"
const images = [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
]

export default function Slider(){
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [imageIndex, setImageIndex] = useState(0);
    let arrows = "❮ ❯"; 
    let newIndex = 0;


    function setImage(offset){

        let newIndex = imageIndex + offset;

        if (imageIndex === 0 && offset === -1) {
            newIndex = images.length - 1;
        }

        if (imageIndex === images.length - 1 && offset === 1) {
            newIndex = 0;
        }

        setImageIndex(newIndex)
        setCurrentImage(images[newIndex]);
    }

    return (
        <div>
            <div className="flex relative mx-auto w-fit items-center">
                <a onClick={() => setImage(-1)} className="absolute left-0 p-4 ml-2 rounded-md bg-white text-3xl font-bold">❮</a>
                <img src={currentImage} width={600} height={600} />
                <a onClick={() => setImage(1)} className="absolute right-0 p-4 mr-2 rounded-md bg-white text-3xl font-bold">❯</a>
            </div>
            <SlideRow images={images} />
        </div>
    )
}