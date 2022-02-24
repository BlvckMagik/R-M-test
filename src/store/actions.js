import { fetchCharactersData, fetchFilteredCharactersData } from '../gateway';

export const CHARACTERS_DATA_RECIEVED = 'CHARACTERS_DATA_RECIEVED';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';

export const charactersDataRecieved = charactersData => {
  return {
    type: CHARACTERS_DATA_RECIEVED,
    payload: charactersData,
  };
};

export const searchFlights = filterText => {
  return {
    type: SEARCH_FLIGHTS,
    payload: filterText,
  };
};

export const getCharactersData = currentPage => {
  return function (dispatch) {
    fetchCharactersData(currentPage).then(charactersData =>
      dispatch(charactersDataRecieved(charactersData))
    );
  };
};

export const getFilteredCharactersData = (
  currentPage,
  filterKey,
  filterValue
) => {
  return function (dispatch) {
    fetchFilteredCharactersData(currentPage, filterKey, filterValue).then(
      charactersData => dispatch(charactersDataRecieved(charactersData))
    );
  };
};
