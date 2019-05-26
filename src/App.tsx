import React from 'react';
import './styles/app.scss';
import { VideoBackgroundPanel } from './components/videoBackgroundPanel';
import { LinkIconRow } from './components/linkIconRow';

const App: React.FC = () => {
  const videoUrls = [
      "https://clips-media-assets2.twitch.tv/228340281.mp4",
      "https://clips-media-assets2.twitch.tv/224622285.mp4"
  ];

  return (
    <div>
        <VideoBackgroundPanel videoUrls={videoUrls}/>
        <div id="introduction-container">
          <h1>LEENY</h1>
          <div>
            <p>Hey there!</p>
            <p>
              I am Alena (leeeennyy / leeny).
              I work as a developer by day, and stream live on Twitch in the evenings.
              My main game is Overwatch, but you'll see me stream a variety of multi/singleplayer games, art, music, and programming.
            </p>
            <LinkIconRow />
          </div>
        </div>
    </div>
  );
}

export default App;
