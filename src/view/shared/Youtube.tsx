import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

function Youtube(props) {
  const { link } = props;

  var urls = [link];

  var i,
    r,
    rx =
      /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  let videoId = "";
  for (i = 0; i < urls.length; ++i) {
    r = urls[i].match(rx);
    videoId = r[1];
  }

  const opts = {
    height: "240",
    width: "349",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}

export default Youtube;
