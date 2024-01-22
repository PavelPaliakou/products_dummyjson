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


    function setImage(){

        setCurrentImage(images[0]);
    }

    return (
        <div>
            <div className="flex relative mx-auto w-fit items-center">
                <a href="#" onClick={setImage} className="absolute left-0 p-4 ml-2 rounded-md bg-white text-3xl font-bold">❮</a>
                <img src={images[0]} width={600} height={600} />
                <a href="#" onClick={setImage} className="absolute right-0 p-4 mr-2 rounded-md bg-white text-3xl font-bold">❯</a>
            </div>
            <SlideRow images={images} />
        </div>
    )
}