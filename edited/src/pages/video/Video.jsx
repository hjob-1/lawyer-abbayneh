import React, { useEffect, useState } from "react";
import "./video.css";
import axios from "axios";
const Video = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://www.server.abbaylaw.com/api/videos"
      );

      setVideos(data);
      console.log(data);
      setLoading(false);
    };
    fetch();
  }, []);
  console.log(videos);

  return (
    <div className="video_page">
      <h2>videos</h2>

      <div className="video_container">
        <div className="flex_items">
          <div className="flex_item">
            {loading
              ? "loading"
              : videos.map((video) => (
                  <div className="flex_displays" key={video.video_id}>
                    <h3>{video.video_title}</h3>
                    <iframe
                      width="300"
                      height="250"
                      src={`https://www.youtube.com/embed/${video.video_src}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowfullscreen
                    ></iframe>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
