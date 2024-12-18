import React, { useState, useEffect } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BannerSlide } from '../CarouselBannerSlide';
import { CarouselProps } from '@utils/interface';
import  './carousel.style.scss';
import CarouselPrevArrow from '@ui/atoms/SvgAtoms/CarouselPrevArrow';
import CarouselNextArrow from '@ui/atoms/SvgAtoms/CarouselNextArrow';

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = (index: number) => {
    setCurrentIndex(index);
  };
  // @ts-expect-error hasPrev will use in future
  const renderPrevArrow = (onClickHandler: () => void, hasPrev: boolean, label: string) => {
    const currentSlide = slides[currentIndex];
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className='custom-prev-arrow-black'
        aria-label={label}
      >  {currentSlide.bgColor.includes('bg-black') ? <CarouselPrevArrow  fillColor="#ffffff"/> : <CarouselPrevArrow  />}
      </button>
    );
  };
  // @ts-expect-error hasPrev will use in future
  const renderNextArrow = (onClickHandler: () => void, hasNext: boolean, label: string) => {
    const currentSlide = slides[currentIndex];
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className='custom-next-arrow-black'
        aria-label={label}
      >{currentSlide.bgColor.includes('bg-black') ? <CarouselNextArrow  fillColor="#ffffff"/> : <CarouselNextArrow  />}
      </button>
    );
  };

  useEffect(() => {
    const dotsContainer = document.querySelector('.control-dots');
    const dotElements = document.querySelectorAll('.control-dots li');
    const currentSlide = slides[currentIndex];

    if (dotsContainer) {
      if (currentSlide.bgColor.includes('bg-black')) {
        dotsContainer.classList.add('dot-black');
        dotsContainer.classList.remove('dot-other');
      } else if (currentSlide.bgColor.includes('bg-gray-100')) {
        dotsContainer.classList.add('dot-other');
        dotsContainer.classList.remove('dot-black');
      } else {
        dotsContainer.classList.remove('dot-black', 'dot-other');
      }
    }

    dotElements.forEach((dot) => {
      if (currentSlide.bgColor.includes('bg-black')) {
        dot.classList.add('dot-black');
        dot.classList.remove('dot-other');
      } else if (currentSlide.bgColor.includes('bg-gray-100')) {
        dot.classList.add('dot-other');
        dot.classList.remove('dot-black');
      } else {
        dot.classList.remove('dot-black', 'dot-other');
      }
    });
  }, [currentIndex, slides]);

  return (
    <div className='appCarousel'>
      <ReactCarousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="carousel-container"
        onChange={onChange}
        renderArrowPrev={renderPrevArrow}
        renderArrowNext={renderNextArrow}
      >
        {slides.map((slide, index) => (
          <BannerSlide
            key={index}
            imgSrc={slide.imgSrc}
            imgAlt={slide.imgAlt}
            heading={slide.heading}
            subheading={slide.subheading}
            buttonText={slide.buttonText}
            bgColor={slide.bgColor}
          />
        ))}
      </ReactCarousel>
    </div>
    
  );
};
