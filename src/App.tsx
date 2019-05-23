import React from 'react';
import './App.css';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <div>
        <Header username="leeeennyy" twitterUrl="https://twitter.com/leeeennyy" youtubeUrl="youtubeyo" emailAddress="myemailaddress" />
        <div id="background">
          <div id="background-sheer" />
          <video className="background-video" loop autoPlay muted>
            <source src="https://clips-media-assets2.twitch.tv/AT-cm%7C320082885.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

    </div>
  );
}

export default App;
