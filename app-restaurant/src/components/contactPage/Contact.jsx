import React from 'react';
import './Contact.css';
import fb from '../common/image/facebook 1.svg'
import google from '../common/image/google 1.svg'
import insta from '../common/image/Group 63.svg'
import twit from '../common/image/twit.svg'
import mail from '../common/image/mail.svg'
import phone from '../common/image/phone.svg'
import geo from '../common/image/geo.png'

const Contact = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <section className="about d-flex">
          <span className="about-greeting">Contact us</span>
          <div className="social-network">
            <img src={fb} alt="" />
            <img src={google} alt="" />
            <img src={insta} alt="" />
            <img src={twit}alt="" />
          </div>
        </section>
        <section className="contact-info">
          <div className="container">
            <h3>Информация</h3>
            <p>
              Humblebrag la croix, pok pok aesthetic fam flexitarian wayfarers health goth
              sustainable try-hard brooklyn authentic live-edge. Muff that covered the whole of her
              lower arm towards the viewer.
            </p>
            <div className="contact-info__address d-flex">
              <div className="d-flex">
                <img src={mail} alt="" />
                <div>
                  <p>Address</p>
                  <p>121 King Street Melbourne VIC 3000</p>
                </div>
              </div>
              <div className="d-flex">
                <img src={phone} alt="" />
                <div>
                  <p>Phone</p>
                  <p>
                    <a href="tel:+996551 00 00 00">0 551 00 00 00</a>
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <img src={geo} alt="" />
                <div>
                  <p>Email</p>
                  <p>
                    <a href="mailto:arykov.azat.kg@gmail.com">email@gmail.com</a>{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="map">
              <iframe
                title="This is a unique title"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11696.552555433744!2d74.60490565!3d42.86992839999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1672747465140!5m2!1sru!2skg"
                height="450"
                // style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
