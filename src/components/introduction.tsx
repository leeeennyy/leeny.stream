import React from 'react';
import { LinkIconRow } from './linkIconRow';

export const Introduction: React.FunctionComponent = () => (
    <div id="introduction-container">
    <h1>LEENY</h1>
    <div>
      <p>Hey there!</p>
      <p>
        I am Alena.
        I am a developer by day, and stream live on Twitch in the evenings.
        My main game is Overwatch, but you'll see me stream a variety of multi/singleplayer games, art, music, and programming.
      </p>
      <LinkIconRow />
    </div>
  </div>
);