export const GET_TRACKS = "GET_TRACKS";

export const getTracksAction = () => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel recupero delle canzoni");
        }
      })
      .then((tracks) => {
        console.log(tracks.data);
        dispatch({
          type: GET_TRACKS,
          payload: tracks.data,
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
};
