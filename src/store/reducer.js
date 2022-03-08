import { CHARACTERS_DATA_RECIEVED, EPISODES_DATA_RECIEVED } from './actions.js';

const initData = {
  charactersData: [],
  episodesData: [],
  filterText: '',
};

const reduser = (state = initData, action) => {
  switch (action.type) {
    case CHARACTERS_DATA_RECIEVED:
      return {
        ...state,
        charactersData: action.payload,
      };

    case EPISODES_DATA_RECIEVED:
      return {
        ...state,
        episodesData: action.payload,
      };

    default:
      return state;
  }
};

export default reduser;
