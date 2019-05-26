import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../styles/app.scss';

export interface HeaderProps {
    username: string;
    twitterUrl: string;
    youtubeUrl: string;
    emailAddress: string;
}

// export const Header1: React.FunctionComponent<HeaderProps> = props => (
//     <header className="header">
//         <h1>{ props.username }</h1>
//         <ul>
//             <li><a href={ props.twitterUrl }><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
//             <li><a href={ props.youtubeUrl }><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a></li>
//             <li><a href={ props.emailAddress }><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></li>
//         </ul>
//     </header>
// );

export const Header = (headerProps:HeaderProps) => (
    <header className="header">
        <h1>{ headerProps.username }</h1>
        <ul>
            <li><a href={ headerProps.twitterUrl }><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
            <li><a href={ headerProps.youtubeUrl }><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a></li>
            <li><a href={ headerProps.emailAddress }><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></li>
        </ul>
    </header>
);

Header.propTypes = {

}


// export default class Header extends React.Component<HeaderProps> {
//     public render() {
//         return (
//             <header className="header">
//                 <h1>{ this.props.username }</h1>
//                 <ul>
//                     <li><a href={ this.props.twitterUrl }><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
//                     <li><a href={ this.props.youtubeUrl }><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a></li>
//                     <li><a href={ this.props.emailAddress }><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></li>
//                 </ul>
//             </header>
//         );
//     }
// }