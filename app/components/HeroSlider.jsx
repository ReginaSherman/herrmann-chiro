"use client";
import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import Image from "next/image";
// register Swiper custom elements
register();
import "../styles/globals.scss";

import slide1 from "public/Hero Slider/HeroSlide1.jpg";
import slide2 from "public/Hero Slider/HeroSlide2.jpg";
import slide3 from "public/Hero Slider/HeroSlide3.jpg";
import slide4 from "public/Hero Slider/HeroSlide4.jpg";

export default function HeroSlider() {
  const swiperElRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Adjust this value based on your desired behavior
      }
    }

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  return (
    <>
      <swiper-container
        className="slide-container"
        ref={swiperElRef}
        slides-per-view={slidesPerView}
        navigation="false"
        pagination="false"
        autoplay="true"
      >
        <swiper-slide>
          <Image className="slide-img" src={slide1} alt="alt" />
        </swiper-slide>
        <swiper-slide>
          <Image className="slide-img" src={slide2} alt="alt" />
        </swiper-slide>
        <swiper-slide>
          <Image className="slide-img" src={slide3} alt="alt" />
        </swiper-slide>
        <swiper-slide>
          <Image className="slide-img" src={slide4} alt="alt" />
        </swiper-slide>
      </swiper-container>
    </>
  );
}
