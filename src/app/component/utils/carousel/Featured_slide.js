"use client"
import { useState } from 'react';

const Featured_slide = () => {
    const banners = [
        { id: 1, content1: "Certainly! Here's the revised and cleaned-up code for the carousel component Column 1", content2: "Banner 1 Column 2", bgColor: "bg-white" },
        { id: 2, content1: "Certainly! Here's the revised and cleaned-up code for the carousel component Column 2", content2: "Banner 2 Column 2", bgColor: "bg-white" },
        { id: 3, content1: "Certainly! Here's the revised and cleaned-up code for the carousel component Column 3", content2: "Banner 3 Column 2", bgColor: "bg-white" },
        { id: 4, content1: "Certainly! Here's the revised and cleaned-up code for the carousel component Column 4", content2: "Banner 4 Column 2", bgColor: "bg-white" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? banners.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = currentIndex === banners.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section>
            <div className="relative w-full mx-auto">
            <div className="overflow-hidden relative h-64" style={{ height: '700px' }}>
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'} ${index === (currentIndex - 1 + banners.length) % banners.length ? '-translate-x-full' : ''}`}
                        style={{ display: index === currentIndex || index === (currentIndex - 1 + banners.length) % banners.length || index === (currentIndex + 1) % banners.length ? 'block' : 'none' }}
                    >
                        <div className={`w-full h-full flex flex-col sm:flex-row items-center justify-center ${banner.bgColor} text-2xl p-4`}>
                            <div className="w-full sm:w-1/2 p-2 text-dark">
                                <h1>{banner.content1}</h1>
                            </div>
                            <div className="w-full sm:w-1/2 p-2 text-center">
                                <img src="https://r.prcdn.co/res/en-us/g3416/t453408066/2/images/facelift-landing-hero-en@2x.webp" alt="Banner Image" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-dark-600 text-white px-4 py-2 rounded-r-lg focus:outline-none"
            >
                Prev
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-dark-600 text-white px-4 py-2 rounded-l-lg focus:outline-none"
            >
                Next
            </button>
        </div>
        </section>
    );
};

export default Featured_slide;
