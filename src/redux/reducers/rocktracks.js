import { GET_ROCK_TRACKS } from "../actions";

const initialState = {
  tracks: [],
};

const rockTracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK_TRACKS:
      return {
        ...state,
        tracks: action.payload,
      };

    default:
      return state;
  }
};

export default rockTracksReducer;
