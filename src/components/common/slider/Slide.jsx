import React from 'react';
import Slider from 'react-slick';
import './Slider.css'

export const Slide = ({sliderData}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <section className="slider d-flex">
      <div className="container ">
        <div className="slider-image">
          <Slider {...settings}>
            {sliderData.map((item) => (
              <div key={item.id} className="hover-text-one">
                <figure className="effect-text-one">
                  <img src={item.img} alt="" />
                  <figcaption>
                    <p>{item.text}</p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
