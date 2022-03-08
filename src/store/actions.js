import {
  fetchCharactersData,
  fetchFilteredCharactersData,
  fetchEpisodesData,
} from '../gateway';

export const CHARACTERS_DATA_RECIEVED = 'CHARACTERS_DATA_RECIEVED';
export const EPISODES_DATA_RECIEVED = 'EPISODES_DATA_RECIEVED';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';

export const charactersDataRecieved = charactersData => {
  return {
    type: CHARACTERS_DATA_RECIEVED,
    payload: charactersData,
  };
};

export const episodesDataRecieved = episodesData => {
  return {
    type: EPISODES_DATA_RECIEVED,
    payload: episodesData,
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

export const getEpisodesData = epName => {
  return function (dispatch) {
    fetchEpisodesData(epName).then(episodesData =>
      dispatch(episodesDataRecieved(episodesData))
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
