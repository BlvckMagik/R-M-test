import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getCharactersData,
  getFilteredCharactersData,
} from '../../store/actions';
import {
  charactersListSelector,
  pageNumberSelector,
} from '../../store/selectors';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharactersInfo.scss';

const CharactersInfo = ({
  getCharactersData,
  getFilteredCharactersData,
  pagesNuber,
  charactersList = [],
}) => {
  const [currentPage, changePage] = useState(1);
  const [filter, changeFilter] = useState(null);
  const [filterVal, changeFilterVal] = useState(null);
  const [isModalOpen, changeIsModalOpen] = useState(false);

  useEffect(() => {
    if (filter === null) getCharactersData(currentPage || 1);
    else getFilteredCharactersData(currentPage, filter, filterVal);
  }, [
    currentPage,
    filter,
    filterVal,
    getCharactersData,
    getFilteredCharactersData,
  ]);

  const openCloseModal = () => {
    changeIsModalOpen(isModalOpen ? false : true);
  };

  const onFilterBtnClick = (newFilter, value) => {
    changeFilter(newFilter);
    changeFilterVal(value);
    changePage(1);
    getFilteredCharactersData(currentPage, newFilter, value);
    openCloseModal();
  };

  const modal = (
    <div className='modal'>
      <span onClick={() => openCloseModal()} className='modal__close-btn'>
        +
      </span>
      <div className='modal__label'>Gender:</div>
      <div className='modal__container'>
        <button
          onClick={() => onFilterBtnClick('gender', 'male')}
          className='modal__btn'
        >
          Male
        </button>
        <button
          onClick={() => onFilterBtnClick('gender', 'female')}
          className='modal__btn'
        >
          Female
        </button>
        <button
          onClick={() => onFilterBtnClick('gender', 'genderless')}
          className='modal__btn'
        >
          Genderless
        </button>
        <button
          onClick={() => onFilterBtnClick('gender', 'unknown')}
          className='modal__btn'
        >
          Unknown
        </button>
      </div>
      <div className='modal__label'>Status:</div>
      <div className='modal__container'>
        <button
          onClick={() => onFilterBtnClick('status', 'alive')}
          className='modal__btn'
        >
          Alive
        </button>
        <button
          onClick={() => onFilterBtnClick('status', 'dead')}
          className='modal__btn'
        >
          Dead
        </button>
        <button
          onClick={() => onFilterBtnClick('status', 'unknown')}
          className='modal__btn'
        >
          Unknown
        </button>
      </div>
      <div className='modal__label'>Species:</div>
      <div className='modal__container'>
        <button
          onClick={() => onFilterBtnClick('species', 'human')}
          className='modal__btn'
        >
          Human
        </button>
        <button
          onClick={() => onFilterBtnClick('species', 'humanoid')}
          className='modal__btn'
        >
          Humanoid
        </button>
        <button
          onClick={() => onFilterBtnClick('species', 'alien')}
          className='modal__btn'
        >
          Alien
        </button>
        <button
          onClick={() => onFilterBtnClick('species', 'unknown')}
          className='modal__btn'
        >
          Unknown
        </button>
      </div>
      <button
        onClick={() => {
          changeFilter(null);
          changePage(1);
          getCharactersData(currentPage || 1);
          openCloseModal();
        }}
        className='modal__btn'
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <section className='section'>
      {isModalOpen ? modal : null}
      <button className='section__btn' onClick={() => openCloseModal()}>
        Filters
      </button>
      <div className='characters'>
        {charactersList.map(character => (
          <CharacterCard key={character.id} characterData={character} />
        ))}
      </div>
      <div>
        <div className='change-page'>
          {currentPage === 1 ? (
            <button className='change-page__btn' disabled>
              -
            </button>
          ) : (
            <button
              className='change-page__btn'
              onClick={() => changePage(currentPage - 1)}
            >
              -
            </button>
          )}

          <span className='change-page__page'>{currentPage}</span>
          {pagesNuber === currentPage ? (
            <button className='change-page__btn' disabled>
              +
            </button>
          ) : (
            <button
              className='change-page__btn'
              onClick={() => changePage(currentPage + 1)}
            >
              +
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

const mapState = state => {
  return {
    charactersList: charactersListSelector(state),
    pagesNuber: pageNumberSelector(state),
  };
};

const mapDispatch = {
  getCharactersData,
  getFilteredCharactersData,
};

export default connect(mapState, mapDispatch)(CharactersInfo);
