import { GET_TRACKS } from "../actions";

const initialState = {
  tracks: [], // questo array ospiterà i libri risultanti dalla fetch effettuata su /food-books
};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state,
        tracks: action.payload, // un array pieno di libri!
      };

    default:
      return state;
  }
};

export default tracksReducer;
