import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

export const About = () => {
  return (
    <section className="about about-bg d-flex">
      <span className="about-greeting">Welcome to The Restaurant </span>
      <div className="about-greeting_links d-flex">
        <Link to="/aboutUs">
          <span className="button button--cart d-flex">О НАС</span>
        </Link>
        <Link to="/menu">
          <span className="button button--cart d-flex">СДЕЛАТЬ ЗАКАЗ</span>
        </Link>
      </div>
    </section>
  );
};
