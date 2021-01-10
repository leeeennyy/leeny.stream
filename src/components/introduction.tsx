import React from 'react';
import { LinkIconRow } from './linkIconRow';

export const Introduction: React.FunctionComponent = () => (
  <div id="introduction-container">
    <div id="text-description">
      <h1>LEENY</h1>
      <div>
        <p>Hey there!</p>
        <p>
          My name is Alena (Leeny). 
          I am a developer by day, and I stream a variety of multi/singleplayer games and art in the evening.
        </p>
        <p>
          I look forward to seeing you on stream!
        </p>
        <LinkIconRow />
      </div>
    </div>
    <div id="intro-image">
      <img src="nobg-grin-1200.png" />
    </div>
  </div>
);