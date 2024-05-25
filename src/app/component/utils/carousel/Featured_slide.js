"use client"
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './style.module.css'; // Pastikan menyesuaikan dengan nama file CSS Anda

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Featured_slide = () => {
    const banners = [
        { id: 1, content1: "the carousel component Column 1", content2: "Banner 1 Column 2", bgColor: "bg-white", img: "https://t.prcdn.co/img?file=9go82024052000000000001001&page=1&width=360&retina=2" },
        { id: 2, content1: "the carousel component Column 2", content2: "Banner 2 Column 2", bgColor: "bg-red", img: "https://t.prcdn.co/img?file=9gr22023090100000000001001&page=1&width=480&retina=2" },
        { id: 3, content1: "the carousel component Column 3", content2: "Banner 3 Column 2", bgColor: "bg-green", img: "https://t.prcdn.co/img?file=9kw22020021100000000001001&page=1&width=480&retina=2" },
        { id: 4, content1: "the carousel component Column 4", content2: "Banner 4 Column 2", bgColor: "bg-yellow", img: "https://t.prcdn.co/img?file=93482024050500000000001001&page=1&width=480&retina=2" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChangeIndex = (index) => {
        setCurrentIndex(index);
    };

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? banners.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = currentIndex === banners.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className={`relative w-full mx-auto ${styles.featuredSlide} ${styles.hideOnDesktop}`}>
            <div className={`relative w-full mx-auto ${styles.featuredSlide}`}>
                <AutoPlaySwipeableViews
                    index={currentIndex}
                    onChangeIndex={handleChangeIndex}
                    enableMouseEvents
                    interval={4000} // Ganti dengan interval auto play yang diinginkan (dalam milidetik)
                >
                    {banners.map((banner, index) => (
                        <div key={banner.id} className={`${styles.slide} ${banner.bgColor}`}>
                            <div className={`w-full h-full flex flex-col sm:flex-row items-center justify-center text-2xl p-4`}>
                                <div className="w-full sm:w-1/2 p-2 text-dark">
                                    <h5>{banner.content1}</h5>
                                    <p className='text-sm'>best seller - RP.135.000 </p>
                                    <span className='text-red-500 text-sm'>diskon 55%</span>
                                    
                                </div>
                                <div className="w-full sm:w-1/2 p-2 text-center">
                                    <img src={banner.img} alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                {/* <button onClick={prevSlide} className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-dark-600 text-dark px-4 py-2 rounded-r-lg focus:outline-none`}>Prev</button>
                <button onClick={nextSlide} className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-dark-600 text-dark px-4 py-2 rounded-l-lg focus:outline-none`}>Next</button> */}
            </div>
        </section>
    );
};

export default Featured_slide;
