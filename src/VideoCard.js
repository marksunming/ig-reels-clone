import React, { useRef, useState } from 'react'
import './VideoCard.css'
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';

function VideoCard({ channel, avatarSrc, song, url, likes, shares }) {
    const videoRef = useRef(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const onVideoPress = () => {
        if(isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        } else {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }

    return (
        <div className='videoCard'>
            <VideoHeader />
            <video 
                ref={videoRef}
                src={url}
                alt='IG reel video'
                className='videoCard__player'
                loop
                onClick={onVideoPress}
            />
            <VideoFooter channel={channel} avatarSrc={avatarSrc} song={song} likes={likes} shares={shares} />
        </div>
    )
}

export default VideoCard
