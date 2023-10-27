"use client";
import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import Image from "next/image";
// register Swiper custom elements
register();
import "../styles/globals.scss";

import slide1 from "public/Hero Slider/HeroSlide1.png";
import slide2 from "public/Hero Slider/HeroSlide2.png";
import slide3 from "public/Hero Slider/HeroSlide3.png";
import slide4 from "public/Hero Slider/HeroSlide4.png";
import mobileSlide1 from "public/Hero Slider/Mobile/HeroSlide1.png";
import mobileSlide2 from "public/Hero Slider/Mobile/HeroSlide2.png";
import mobileSlide3 from "public/Hero Slider/Mobile/HeroSlide3.png";
import mobileSlide4 from "public/Hero Slider/Mobile/HeroSlide4.png";

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
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {});
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
          <Image className="slide-img mbl-only" src={mobileSlide1} alt="alt" />
        </swiper-slide>
        <swiper-slide>
          <Image className="slide-img" src={slide2} alt="alt" />
          <Image className="slide-img mbl-only" src={mobileSlide2} alt="alt" />
        </swiper-slide>
        <swiper-slide>
          <Image className="slide-img" src={slide3} alt="alt" />
          <Image className="slide-img mbl-only" src={mobileSlide3} alt="alt" />
        </swiper-slide>
        <swiper-slide>
          <Image className="slide-img" src={slide4} alt="alt" />
          <Image className="slide-img mbl-only" src={mobileSlide4} alt="alt" />
        </swiper-slide>
      </swiper-container>
    </>
  );
}
