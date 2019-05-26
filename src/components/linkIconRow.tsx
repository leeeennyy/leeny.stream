import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTwitch, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { IconButton } from './iconButton';


export const LinkIconRow = () => (
    <div id="link-icon-row">
        <IconButton url="https://twitch.tv/leeeennyy" icon={<FontAwesomeIcon icon={faTwitch}/>} openInNewTab />
        <IconButton url="https://twitter.com/leeeennyy" icon={<FontAwesomeIcon icon={faTwitter}/>} openInNewTab />
        <IconButton url="https://instagram.com/leeeennyy" icon={<FontAwesomeIcon icon={faInstagram}/>} openInNewTab />
        <IconButton url="mailto:leeeennyy@gmail.com" icon={<FontAwesomeIcon icon={faEnvelope}/>} />
    </div>
);