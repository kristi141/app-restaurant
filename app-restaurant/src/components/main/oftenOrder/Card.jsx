import React from 'react';
import './OftenOrder.css';

const Card = ({ item, onModalClick }) => {
  return (
    <>
      <div onClick={() => onModalClick(item)} key={item.id} className="often-order__card d-flex">
        <div className="d-flex">
          <img className="modalImage" src={item.cardImg} alt="" />
          <h5>{item.name}</h5>
          <p>{item.text}</p>
        </div>
        <span>от {item.price} сом</span>
      </div>
    </>
  );
};

export default Card;
