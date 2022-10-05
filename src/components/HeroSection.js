import React from 'react';
import CustomImage from './CustomImage';
const HeroSection = () => {
    const images=[
        "/images/gallery/img1.jpg",
        "/images/gallery/img2.webp",
        "/images/gallery/img3.jpg",
        "/images/gallery/img4.webp",
        "/images/gallery/img5.jpg",
        "/images/gallery/img6.jpg",
        "/images/gallery/img7.jpg",
        "/images/gallery/img8.jpeg",
        "/images/gallery/img9.jpg",
    ]
    return (
        <div className='section hero'>
            <div className='col typography'>
                <h1 className='title'>What Are We About</h1>
                <p className='info'>
                    Lorem ipsum dolor sit amet,nsectetur adipisicing elit, sed do eiusmod
                    tempor ut labore et dolore magna aliqua. tempor ut labore et dolore magna aliqua.tempor ut labore et dolore magna aliqua.
                </p>
                <button className='btn'>explore now</button>
            </div>
            <div className='col gallery'>
                {
                    images.map((src,index)=>(
                        <CustomImage key={index} imgSrc={src} pt={"90%"}/>
                    ))
                }
                
            </div>
        </div>
    );
};

export default HeroSection;