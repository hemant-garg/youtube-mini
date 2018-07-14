import React from 'react';
import './videolistitem.css';
const VideoListItem = ({video, onClickVideo}) => {
	const Url = video.snippet.thumbnails.high.url;
	// console.log(video)
    return (
        <div onClick={() => onClickVideo(video)} className='videolistitem'>
        	<img 
        	src={Url} 
        	alt="comedy" width="200" className="thumbnail"
        	/>
        	<div className="video-title" >
	        	<div> {video.snippet.title}</div>
	        	<p className="channel">{video.snippet.channelTitle}</p>
        	</div>
        </div>
    );
};


export default VideoListItem;
