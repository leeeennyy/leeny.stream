import React from 'react';
import './App.css';
import { Header } from './components/header';
import { VideoBackgroundPanel } from './components/videoBackgroundPanel';

const App: React.FC = () => {
  const videoUrls = [
      "https://clips-media-assets2.twitch.tv/228340281.mp4",
      "https://clips-media-assets2.twitch.tv/224622285.mp4"
  ];

  return (
    <div>
        <Header username="leeeennyy" twitterUrl="https://twitter.com/leeeennyy" youtubeUrl="youtubeyo" emailAddress="myemailaddress" />
        <VideoBackgroundPanel videoUrls={videoUrls}/>
    </div>
  );
}

export default App;
