import React, { useState } from 'react';
import '../App.css';

export interface VideoBackgroundPanelProps {
    videoUrls: string[];
}

interface VideoBackgroundProps {
    url: string;
    onVideoEnded: Function;
}

export const VideoBackground = (props: VideoBackgroundProps) => (
    <video id="background-video" className="background-video" onEnded={() => props.onVideoEnded()} autoPlay muted>
        <source src={props.url} />
    </video>
)

// export class VideoBackground extends React.Component<VideoBackgroundProps> {
//     videoRef: React.RefObject<HTMLVideoElement>;

//     constructor(props: VideoBackgroundProps) {
//         super(props);
//         this.videoRef = React.createRef();
//     }
    
//     componentDidUpdate() {
//         if (this.videoRef.current)
//             this.videoRef.current.load();
//     }

//     render() {
//         return (
//             <video id="background-video" className="background-video" onEnded={() => this.props.onVideoEnded()} ref={this.videoRef} autoPlay muted>
//                 <source src={this.props.url} />
//             </video>
//         )
//     }
// }

interface VideoBackgroundPanelState {
    videoIndex: number;
}

// export class VideoBackgroundPanel extends React.Component<VideoBackgroundPanelProps, VideoBackgroundPanelState> {
//     constructor(props: VideoBackgroundPanelProps) {
//         super(props);

//         this.state = {
//             videoIndex: 0
//         }
//     }

//     onVideoEnded(): void {
//         const numberOfVideos = this.props.videoUrls.length - 1;

//         if (this.state.videoIndex === numberOfVideos) {
//             this.setState({ videoIndex: 0 });
//         } else {
//             this.setState((prevState) => ({ videoIndex: prevState.videoIndex + 1 }));
//         }
//     };

//     render() {
//         return (
//             <div id="background">
//                 <div id="background-sheer" />
//                 <VideoBackground url={this.props.videoUrls[this.state.videoIndex]} onVideoEnded={this.onVideoEnded} />
//             </div>
//         );
//     }
// }

export const VideoBackgroundPanel = (props: VideoBackgroundPanelProps) => {
    const [videoIndex, setVideoIndex] = useState(0);
    const numberOfVideos = props.videoUrls.length - 1;

    function onVideoEnded() {
        if (videoIndex === numberOfVideos) {
            setVideoIndex(0);
        } else {
            setVideoIndex(videoIndex + 1);
        }
    };

    return (
        <div id="background">
            <div id="background-sheer" />
            [<VideoBackground url={props.videoUrls[videoIndex]} onVideoEnded={onVideoEnded} key={videoIndex} />]
        </div>
    );
}


// export default class VideoBackgroundPanel extends React.Component<VideoBackgroundPanelProps> {
//     public render() {
//         return (
//             <div id="background">
//                 <div id="background-sheer" />
//                 <video className="background-video" controls autoPlay muted>
//                     <source src="https://clips-media-assets2.twitch.tv/228340281.mp4" />
//                     <source src="https://clips-media-assets2.twitch.tv/224622285.mp4" />
//                     <source src="https://clips-media-assets2.twitch.tv/172264888.mp4" />
//                     {/* <source src="https://clips-media-assets2.twitch.tv/vod-149413909-offset-1222.mp4" /> */}
//                     {/* <source src="https://clips-media-assets2.twitch.tv/AT-cm%7C320082885.mp4" /> */}
//                     Your browser does not support the video tag.
//                 </video>
//             </div>
//         );
//     }
// }