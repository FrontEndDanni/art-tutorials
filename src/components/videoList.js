import React from 'react';
import './VideoList.css';

const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <a
          key={video.id.videoId}
          href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="video-item"
        >
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          <div className="video-info">
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default VideoList;