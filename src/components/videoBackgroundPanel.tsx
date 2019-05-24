import React, { useState } from 'react';
import '../App.css';

export interface VideoBackgroundPanelProps {
    videoUrls: string[];
}

interface VideoBackgroundProps {
    url: string;
    onVideoEnded: Function;
}

interface VideoBackgroundPanelState {
    videoIndex: number;
}

export class VideoBackground extends React.Component<VideoBackgroundProps> {
    videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props: VideoBackgroundProps) {
        super(props);
        this.videoRef = React.createRef();
    }
    
    componentDidUpdate() {
        if (this.videoRef.current)
            this.videoRef.current.load();
    }

    render() {
        return (
            <video id="background-video" className="background-video" onEnded={() => this.props.onVideoEnded()} ref={this.videoRef} autoPlay muted>
                <source src={this.props.url} />
            </video>
        )
    }
}

export class VideoBackgroundPanel extends React.Component<VideoBackgroundPanelProps, VideoBackgroundPanelState> {
    constructor(props: VideoBackgroundPanelProps) {
        super(props);

        this.state = {
            videoIndex: 0
        }
    }

    onVideoEnded(): void {
        const numberOfVideos = this.props.videoUrls.length - 1;

        if (this.state.videoIndex === numberOfVideos) {
            this.setState({ videoIndex: 0 });
        } else {
            this.setState((prevState) => ({ videoIndex: prevState.videoIndex + 1 }));
        }
    };

    render() {
        return (
            <div id="background">
                <div id="background-sheer" />
                <VideoBackground url={this.props.videoUrls[this.state.videoIndex]} onVideoEnded={this.onVideoEnded} />
            </div>
        );
    }
}

// export const VideoBackground = (props: VideoBackgroundProps) => (
//     <video id="background-video" className="background-video" onEnded={() => props.onVideoEnded()} autoPlay muted>
//         <source src={props.url} />
//     </video>
// )


// export const VideoBackgroundPanel = (props: VideoBackgroundPanelProps) => {
//     const [videoIndex, setVideoIndex] = useState(0);
//     const numberOfVideos = props.videoUrls.length - 1;

//     function onVideoEnded() {
//         if (videoIndex === numberOfVideos) {
//             setVideoIndex(0);
//         } else {
//             setVideoIndex(videoIndex + 1);
//         }
//     };

//     return (
//         <div id="background">
//             <div id="background-sheer" />
//             [<VideoBackground url={props.videoUrls[videoIndex]} onVideoEnded={onVideoEnded} key={videoIndex} />]
//         </div>
//     );
// }