import React from 'react';
import './OurMenuPage.css';
import searchIcon from '../common/image/search-normal 1.svg';
import Categories from './categories/Categories';
import Sort from './sort/Sort';
import { useState, useMemo } from 'react';
import Pagination from '../common/pagination/Pagination';
import { Modal } from '../common/modal/Modal';
import Card from '../main/oftenOrder/Card';

const OurMenuPage = ({
  db,
  setDb,
  onAddData,
  modalId,
  activeModal,
  setActiveModal,
  onModalClick,
}) => {
  const [selectedType, setSelectedType] = useState({ type: 'rating' });
  const [searchQuary, setSearchQuary] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage] = useState(4);

  const lastPage = currentPage * prevPage;
  const firstPage = lastPage - prevPage;
  const currentMenuPage = db.slice(firstPage, lastPage);

  const sortTypes = [
    { name: 'популярности', type: 'rating' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' },
  ];

  const sortedData = useMemo(() => {
    console.log('Функция отработала');
    if (selectedType) {
      return [...currentMenuPage].sort((a, b) =>
        a[selectedType.type].localeCompare(b[selectedType.type]),
      );
    }
    return currentMenuPage;
  }, [selectedType, currentMenuPage]);

  const sortedSearchedData = useMemo(() => {
    return sortedData.filter((el) => el.name.toLowerCase().includes(searchQuary));
  }, [sortedData, searchQuary]);

  const onSortData = (type) => {
    setSelectedType(type);
    setDb(sortedData);
  };

  return (
    <div className="wrapper">
      <main>
        <section className="about about-menu-bg d-flex">
          <span className="about-greeting">Our menu</span>
        </section>
        <section className="search-block">
          <div className="container d-flex">
            <Categories db={db} setDb={setDb} />
            <Sort
              sortTypes={sortTypes}
              onSortData={onSortData}
              activeSortType={selectedType.type}
            />
            <div className="search d-flex">
              <input
                type="text"
                placeholder="Начать поиск"
                value={searchQuary}
                onChange={(e) => setSearchQuary(e.target.value)}
              />
              <img src={searchIcon} alt="" />
            </div>
          </div>
        </section>
        <section className="often-order">
          <div className="container d-flex">
            <div className="often-order__cards d-flex">
              {sortedSearchedData.map((el) => (
                <Card
                  onModalClick={onModalClick}
                  onAddData={onAddData}
                  key={el.id}
                  modalId={modalId}
                  activeModal={activeModal}
                  setActiveModal={setActiveModal}
                  item={el}
                  index={el.id}
                  {...el}
                />
              ))}
            </div>
            <Pagination
              setCurrentPage={setCurrentPage}
              prevPage={prevPage}
              totalPages={db.length}
            />
            <Modal
              onAddData={onAddData}
              modalId={modalId}
              activeModal={activeModal}
              setActiveModal={setActiveModal}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurMenuPage;
