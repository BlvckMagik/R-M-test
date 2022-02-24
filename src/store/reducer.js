import { CHARACTERS_DATA_RECIEVED } from './actions.js';

const initData = {
  charactersData: [],
  filterText: '',
};

const reduser = (state = initData, action) => {
  switch (action.type) {
    case CHARACTERS_DATA_RECIEVED:
      return {
        ...state,
        charactersData: action.payload,
      };

    default:
      return state;
  }
};

export default reduser;
