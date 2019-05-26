import React from 'react';
import { VideoBackground } from './videoBackground';

interface VideoBackgroundPanelProps {
    videoUrls: string[];
}

interface VideoBackgroundPanelState {
    videoIndex: number;
}

export class VideoBackgroundPanel extends React.Component<VideoBackgroundPanelProps, VideoBackgroundPanelState> {
    constructor(props: VideoBackgroundPanelProps) {
        super(props);
        this.state = { videoIndex: 0 };
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
                <VideoBackground url={ this.props.videoUrls[this.state.videoIndex] } onVideoEnded={ this.onVideoEnded.bind(this) } />
            </div>
        );
    }
}