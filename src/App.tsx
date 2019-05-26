import React from 'react';
import { VideoBackgroundPanel } from './components/videoBackgroundPanel';
import { Introduction } from './components/introduction';

import './styles/app.scss';

const App: React.FunctionComponent = () => {
  const videoUrls = [
      "https://clips-media-assets2.twitch.tv/228340281.mp4",
      "https://clips-media-assets2.twitch.tv/224622285.mp4"
  ];

  return (
    <div>
        <VideoBackgroundPanel videoUrls={videoUrls}/>
        <Introduction />
    </div>
  );
}

export default App;
