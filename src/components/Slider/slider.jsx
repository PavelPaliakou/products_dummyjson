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
    const {currentImage, setCurrentImage} = useState(images[0]);
    const {imageIndex, setImageIndex} = useState(0);
    let arrows = "❮ ❯"; 


    function setImage(nextIndex){
        if (imageIndex === 0 && nextIndex === -1) {
            return;
        }
        if (imageIndex === images.length - 1 && nextIndex === 1) {
            return;
        }

        setCurrentImage(imageIndex + nextIndex);
    }

    return (
        <div>
            <div className="flex relative mx-auto w-fit items-center">
                <a href="#" onClick={setImage(-1)} className="absolute left-0 p-4 ml-2 rounded-md bg-white text-3xl font-bold">U+276e</a>
                <img src={currentImage} width={600} height={600} />
                <a href="#" onClick={setImage(1)} className="absolute right-0 p-4 mr-2 rounded-md bg-white text-3xl font-bold">U+276f</a>
            </div>
            <SlideRow images={images} />
        </div>
    )
}