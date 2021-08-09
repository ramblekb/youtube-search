import React from "react";
import { Container } from 'react-bootstrap';

const Videoplayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <div className= "container">
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", marginTop: '10%' }}>
        Video Result
      </p>
      </div>
    );
  }
  return (
    <Container fluid className="video-player">
      <iframe
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </Container>
  );
};

export default Videoplayer;