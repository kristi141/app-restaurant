import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-description container d-flex">
        <h3>Сделано с любовью</h3>
        <p>
          Fusce suscipit lorem a nibh finibus, id tristique augue ultricies. Etiam efficitur in sem
          ac dapibus. Duis molestie ullamcorper ullamcorper. Aliquam porttitor orci ac neque auctor
          sagittis. Quisque facilisis ornare lacinia. In vestibulum est id consectetur vehicula.
          Donec at tristique urna. Sed dapibus nisi arcu, et pharetra diam cursus ac. Phasellus sed
          lorem condimentum, luctus erat ut, tempor elit. Proin cursus neque in massa posuere
          hendrerit.
        </p>
      </div>
      <div className="hero-slogan">
        <div className="container d-flex">
          <span className="about-greeting">НАШ ДЕВИЗ</span>
          <p>МЫ НЕ ПРОСТО ДЕЛАЕМ ПИЦЦУ, МЫ ДЕЛАЕМ ВАС СЧАСТЛИВЫМИ!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
