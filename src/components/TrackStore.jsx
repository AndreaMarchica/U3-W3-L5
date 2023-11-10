import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import TrackList from "./TrackList";
// import BookDetail from "./BookDetail";
import { useDispatch, useSelector } from "react-redux";
import { getTracksAction } from "../redux/actions";

const TrackStore = () => {
  // const [books, setBooks] = useState([])
  const [trackSelected, setTrackSelected] = useState(null);

  const dispatch = useDispatch();
  const tracksFromReduxStore = useSelector((state) => state.tracks.tracks);

  useEffect(() => {
    dispatch(getTracksAction());
  }, []);

  const changeTrack = (track) => setTrackSelected(track);

  return (
    <Row className="center-row">
      <Col lg={4}>
        <TrackList
          trackSelected={trackSelected}
          changeTrack={changeTrack}
          tracks={tracksFromReduxStore}
          // i libri continuavano ad arrivare dallo stato di BookStore, che era un array vuoto!
          // ora dobbiamo farli pervenire a BookList tramite il redux store
        />
      </Col>
      <Col lg={8}>{/* <BookDetail trackSelected={trackSelected} /> */}</Col>
    </Row>
  );
};

export default TrackStore;
