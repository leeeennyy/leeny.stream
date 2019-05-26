import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export interface HeaderProps {
    username: string;
    twitterUrl: string;
    youtubeUrl: string;
    emailAddress: string;
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => (
    <header className="header">
        <h1>{ props.username }</h1>
        <ul>
            <li><a href={ props.twitterUrl }><FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon></a></li>
            <li><a href={ props.youtubeUrl }><FontAwesomeIcon icon={ faYoutube }></FontAwesomeIcon></a></li>
            <li><a href={ props.emailAddress }><FontAwesomeIcon icon={ faEnvelope }></FontAwesomeIcon></a></li>
        </ul>
    </header>
);