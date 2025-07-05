import React, { useState, useEffect } from "react";

const images = [
    "/images/about1.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
];

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(()=> {
        const interval = setInterval(()=> {
            setCurrent((prev)=> (prev + 1) % images.length);
        }, 3000);
        return ()=> clearInterval(interval);
    }, []);

    return (
        <>
        <div className="w-full overflow-hidden rounded-xl shadow-lg">
            <img src={images[current]}
            alt = {`Slide ${current + 1}`}
            className="w-full h-[300px] object-center transition duration-700"
            />

        </div>
        </>
    )
}

export default ImageSlider;