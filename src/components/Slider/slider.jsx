import SlideRow from "./slideRow"
import { useState } from "react"


export default function Slider({images}) {
    const [imageIndex, setImageIndex] = useState(0);

    function setImage(offset) {

        let newIndex = imageIndex + offset;

        if (imageIndex === 0 && offset === -1) {
            newIndex = images.length - 1;
        }

        if (imageIndex === images.length - 1 && offset === 1) {
            newIndex = 0;
        }

        setImageIndex(newIndex);
    }

    return (
        <div>
            <div className="flex relative mx-auto w-fit items-center">
                <a onClick={() => setImage(-1)} className="absolute left-0 p-4 ml-2 rounded-md bg-white text-3xl font-bold">❮</a>
                <img src={images[imageIndex]} width={600} height={600} />
                <a onClick={() => setImage(1)} className="absolute right-0 p-4 mr-2 rounded-md bg-white text-3xl font-bold">❯</a>
            </div>
            <div className="flex flex-row">
                {images.map((image) => (
                    <SlideRow key={image} image={image} />
                ))}
            </div>
        </div>
    )
}