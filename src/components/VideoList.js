import React from "react";
import { Container } from '@material-ui/core';
import Video from "./Video";

const VideoList = ({ data, onVideoSelected }) => {
  return (
    <Container className="video-list" maxWidth= "sm">
    {/* <div className="video-list"> */}
      <Container maxWidth= "sm" style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Videos List
        </h3>
        <Video data={data} onVideoSelected={onVideoSelected} />
      </Container>
    {/* </div> */}
    </Container>
  );
};

export default VideoList;