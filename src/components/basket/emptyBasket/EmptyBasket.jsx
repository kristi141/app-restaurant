import React from 'react';
import './EmptyBasket.css';
import emptyBasketIcon from '../../common/image/emptyBusketSvg.svg';
import { useNavigate } from 'react-router-dom';

const EmptyBasket = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="wrapper">
      <main>
        <div className="empty-wrapper">
          <h1>Корзина пустая 😕</h1>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
            главную страницу.
          </p>
          <img src={emptyBasketIcon} alt="" />
          <button onClick={goBack} className="button button--black">
            Вернуться назад
          </button>
        </div>
      </main>
    </div>
  );
};

export default EmptyBasket;
