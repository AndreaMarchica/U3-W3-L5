import { Col, Row } from "react-bootstrap";
import Track from "./Track";

const TrackList = ({ tracks, changeTrack, trackSelected }) => {
  const tracksToShow = tracks.slice(0, 4);

  return (
    <Row className="">
      {Array.isArray(tracksToShow) && tracksToShow.length > 0 ? (
        tracksToShow.map((track) => (
          <Col className="col col-3" key={track.id}>
            <Track
              track={track}
              changeTrack={changeTrack}
              trackSelected={trackSelected}
            />
          </Col>
        ))
      ) : (
        <p>No tracks available</p>
      )}
    </Row>
  );
};

export default TrackList;
