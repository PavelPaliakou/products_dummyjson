import Image from "next/image"

export default function Slider(){
    const images = [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ]

    function currentSlide(){
    }

    function createSlideRow(){
      return (
        <div className="flex flex-row">
          {images.map((image) => (
            <div className="border-2 border-black">
              <Image src={image} width={50} height={50} />
            </div>
          ))}
        </div>
      )
    }

    return (
        <div>
            <div className="bigImage">
                <Image src={images[0]} width={300} height={300} />
            </div>
            {createSlideRow()}
        </div>
    )
}