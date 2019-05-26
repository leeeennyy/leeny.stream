import React from 'react';

interface VideoBackgroundProps {
    url: string;
    onVideoEnded: Function;
}

export class VideoBackground extends React.Component<VideoBackgroundProps> {
    videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props: VideoBackgroundProps) {
        super(props);
        this.videoRef = React.createRef();
    }
    
    componentDidUpdate(prevProps: Readonly<VideoBackgroundProps>) {
        if (prevProps.url !== this.props.url && this.videoRef.current) {
            this.videoRef.current.load();
            this.videoRef.current.play();
        }
    }

    render() {
        return (
            <video id="background-video" onEnded={() => this.props.onVideoEnded()} ref={this.videoRef} preload="auto" autoPlay muted>
                <source src={this.props.url} />
            </video>
        )
    }
}