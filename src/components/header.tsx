import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../App.css';

interface HeaderProps {
    username: string;
    twitterUrl: string;
    youtubeUrl: string;
    emailAddress: string;
}

export default class Header extends React.Component<HeaderProps> {
    public render() {
        return (
            <header className="header">
                <h1>{ this.props.username }</h1>
                <ul>
                    <li><a href={ this.props.twitterUrl }><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                    <li><a href={ this.props.youtubeUrl }><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a></li>
                    <li><a href={ this.props.emailAddress }><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></li>
                </ul>
            </header>
        );
    }
}