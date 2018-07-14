import React from 'react';
import VideoListItem from '../VideoListItem/VideoListItem';
import './videolist.css';

const VideoList = ({videos, onClickVideo}) => {
	if(videos){
		const VideoList = videos.map( video => {
			return <VideoListItem onClickVideo={onClickVideo} video={video} key={video.etag} />
		})
	    return (
	        <div className='videolist'>
	        	{VideoList}
	        </div>
	    );
	}
	else{
		return <div>List</div>
	}
	
};

export default VideoList;
