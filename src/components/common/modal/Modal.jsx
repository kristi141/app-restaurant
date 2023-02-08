import React, { useState } from 'react';
import './Modal.css';
import modalOne from '../../common/image/modal-t.svg';
import modalTwo from '../../common/image/modal-t1.svg';
import modalThree from '../../common/image/modal-t2.svg';
import modalFour from '../../common/image/modal-t3.svg';
import cn from 'classnames';

export const Modal = ({ activeModal, setActiveModal, modalId, onAddData }) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = ['20', '30', '40'];
  const availableTastes = [
    {
      id: 1,
      img: modalOne,
      name: 'Ветчина из цыпленка',
    },
    {
      id: 2,
      img: modalTwo,
      name: 'С холопенье',
    },
    {
      id: 3,
      img: modalThree,
      name: 'Больше сыра',
    },
    {
      id: 4,
      img: modalFour,
      name: 'С морепродуктами',
    },
  ];

  const [activeTypes, setActiveTypes] = useState(0);
  const [activeSizes, setActiveSizes] = useState(0);
  const [activeTastes, setActiveTastes] = useState(0);

  const selectedType = (index) => {
    setActiveTypes(index);
  };
  const selectedSize = (index) => {
    setActiveSizes(index);
  };
  const selectedTaste = (index) => {
    setActiveTastes(index);
  };
  const onAdd = () => {
    const addedData = {
      id: modalId.id,
      name: modalId.name,
      modalImage: modalId.modalImage,
      price: modalId.price,
      count: modalId.count,
      type: availableTypes[activeTypes],
      size: availableSizes[activeSizes],
      taste: availableTastes[activeTastes],
    };
    onAddData(addedData);
    setActiveModal(true);
  };
  return (
    <div
      className={activeModal ? 'modal-wrapper active' : 'modal-wrapper'}
      onClick={() => setActiveModal(true)}>
      <div className="modal d-flex" onClick={(e) => e.stopPropagation()}>
        <div className="d-flex">
          <div className="modal__image">
            <img src={modalId && modalId.modalImage} alt="" />
          </div>
          <div>
            <div className="modal-info d-flex">
              <h3 className="pizza-block__title">{modalId && modalId.name}</h3>
              <div className="pizza-block__selector">
                <ul>
                  {availableTypes.map((type, index) => (
                    <li
                      key={type.id}
                      onClick={() => selectedType(index)}
                      className={cn({
                        active: activeTypes === index,
                      })}>
                      {type}
                    </li>
                  ))}
                </ul>

                <ul>
                  {availableSizes.map((size, index) => (
                    <li
                      key={size.id}
                      onClick={() => selectedSize(index)}
                      className={cn({
                        active: activeSizes === index,
                      })}>
                      {size} см.
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="add-type-text">Добавьте по вкусу</p>
            <div className="modal-choose-type d-flex">
              {availableTastes.map((taste, index) => (
                <div key={taste.id} onClick={() => selectedTaste(index)}>
                  <div>
                    <img src={taste.img} alt="" />
                  </div>
                  <p>{taste.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="button modal-btn" onClick={onAdd}>
          Добавить
        </button>
      </div>
    </div>
  );
};

// export default Modal
