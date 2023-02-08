import React from 'react';
import { useState } from 'react';
import SortLabelSvg from '../../common/svg/SortLabelSvg';

const Sort = ({ sortTypes, onSortData, activeSortType }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const activeLabel = sortTypes.find((el) => el.type === activeSortType).name;

  const onVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const onSelectedSort = (index) => {
    if (onSortData) {
      onSortData(index);
    }
    onVisiblePopup(index);
  };
  return (
    <div>
      <div className="sort">
        <div onClick={onVisiblePopup} className="sort__label">
          <SortLabelSvg />
          <b>Сортировка по:</b>
          <span>{activeLabel}</span>
        </div>
        {visiblePopup && (
          <div className="sort__popup">
            <ul>
              {sortTypes.map((item, index) => (
                <li
                  key={index}
                  className={activeSortType === index ? 'active' : ''}
                  onClick={() => onSelectedSort(item)}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
