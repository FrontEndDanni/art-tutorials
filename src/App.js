import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import './App.css'; 

const App = () => {
  const [videos, setVideos] = useState([]);

  const handleSearch = async (term) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: term,
        type: 'video',
        key:  process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
    setVideos(response.data.items);
  };

  return (
    <div className="App">
      <h1>Virtual Art Classes</h1>
      <SearchBar onSearch={handleSearch} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
