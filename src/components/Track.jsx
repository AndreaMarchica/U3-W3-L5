import { Card } from "react-bootstrap";

const Track = ({ track, changeTrack, trackSelected }) => (
  <Card className="d-flex flex-column">
    <Card.Body
      className="d-flex flex-column align-items-center"
      style={{ cursor: "pointer" }}
      onClick={() => changeTrack(track)}
    >
      <div className="mb-2">
        <img
          className="track-image"
          src={track.album.cover_big}
          alt="track cover"
        />
      </div>
      <div className="text-center">
        <Card.Text className="fw-bold">{track.title}</Card.Text>
      </div>
    </Card.Body>
  </Card>
);

export default Track;
