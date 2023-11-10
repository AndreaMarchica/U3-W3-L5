import TrackList from "./TrackList";
import { useState, useEffect } from "react";
// import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTracksAction } from "../redux/actions";
import { Container } from "react-bootstrap";

const MainContent = () => {
  const [trackSelected, setTrackSelected] = useState(null);

  const dispatch = useDispatch();
  const tracksFromReduxStore = useSelector((state) => state.tracks.tracks);

  useEffect(() => {
    dispatch(getTracksAction());
  }, []);

  const changeTrack = (track) => setTrackSelected(track);
  return (
    <Container>
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex mt-3">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div id="searchResults">
              <h2 className="mb-5">Search Results</h2>
              {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"> */}
              <TrackList
                trackSelected={trackSelected}
                changeTrack={changeTrack}
                tracks={tracksFromReduxStore}
              />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="rock">
              <h2>Rock Classics</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="hiphop">
              <h2>#HipHop</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default MainContent;
