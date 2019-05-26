import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTwitch, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { IconButton } from './iconButton';

const twitchIcon = <FontAwesomeIcon icon={ faTwitch } />;
const twitterIcon = <FontAwesomeIcon icon={ faTwitter } />;
const instagramIcon = <FontAwesomeIcon icon={ faInstagram } />;
const emailIcon = <FontAwesomeIcon icon={ faEnvelope } />;

export const LinkIconRow = () => (
    <div id="link-icon-row">
        <IconButton url="https://twitch.tv/leeeennyy" icon={ twitchIcon } openInNewTab />
        <IconButton url="https://twitter.com/leeeennyy" icon={ twitterIcon } openInNewTab />
        <IconButton url="https://instagram.com/leeeennyy" icon={ instagramIcon } openInNewTab />
        <IconButton url="mailto:leeeennyy@gmail.com" icon={ emailIcon } />
    </div>
);