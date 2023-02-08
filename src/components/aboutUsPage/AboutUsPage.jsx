import React from 'react';
import './AboutUsPage.css';
import aboutFirstImg from '../common/image/about-page-firstPic.png';
import aboutSecondImg from '../common/image/about-page-firstPic.png';

const AboutUsPage = () => {
  return (
    <div class="wrapper">
      <main>
        <section class="about d-flex">
          <span class="about-greeting">About us</span>
        </section>
        <section class="about-info">
          <div class="container">
            <div class="about-info_top d-flex">
              <img src={aboutFirstImg} alt="" />
              <div>
                <span>Идея создания</span>
                <p>
                  Dreams, he found himself transformed in his bed into a horrible vermin. He lay on
                  his armour-like back, and if he lifted his head a little .
                </p>
                <p>
                  Humblebrag la croix, pok pok aesthetic fam flexitarian wayfarers health goth
                  sustainable try-hard brooklyn authentic live-edge. Showed a lady fitted out with a
                  fur hat and fur boa who sat upright, raising a heavy fur muff thatcovered the
                  whole of her lower arm towards the viewer.
                </p>
              </div>
            </div>
            <div class="about-info_bottom d-flex">
              <img src={aboutSecondImg} alt="" />
              <div>
                <span>Основатель</span>
                <p>
                  Dreams, he found himself transformed in his bed into a horrible vermin. He lay on
                  his armour-like back, and if he lifted his head a little .
                </p>
                <p>
                  Humblebrag la croix, pok pok aesthetic fam flexitarian wayfarers health goth
                  sustainable try-hard brooklyn authentic live-edge. Showed a lady fitted out with a
                  fur hat and fur boa who sat upright, raising a heavy fur muff thatcovered the
                  whole of her lower arm towards the viewer.
                </p>
              </div>
            </div>
            <div className='about-info_top d-flex'>
              <iframe
                width="50%"
                height="400"
                src="https://www.youtube.com/embed/GlrxcuEDyF8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
              <div>
                <span>Промо видео</span>
                <p>
                  Dreams, he found himself transformed in his bed into a horrible vermin. He lay on
                  his armour-like back, and if he lifted his head a little .
                </p>
                <p>
                  Humblebrag la croix, pok pok aesthetic fam flexitarian wayfarers health goth
                  sustainable try-hard brooklyn authentic live-edge. Showed a lady fitted out with a
                  fur hat and fur boa who sat upright, raising a heavy fur muff thatcovered the
                  whole of her lower arm towards the viewer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;
