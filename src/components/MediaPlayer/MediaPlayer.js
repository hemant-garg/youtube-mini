import React from 'react';
import './mediaplayer.css';
const MediaPlayer = ({video}) => {

	if(video){
		const URL = `https://www.youtube.com/embed/${video.id.videoId}`;
		return (
	        <div id='mediaplayer' className='mediaplayer'>
	        	<iframe title='comedy' className='iframe'
	        	 src={URL} 
	        	 frameBorder="0" allow="autoplay; encrypted-media" 
	        	 allowFullScreen>
	        	 </iframe>
	        	 <div className="media-description">
		        	 <div className="main-title">
			        	 <h3>{video.snippet.title}</h3>
			        	 <div className="main-channel">{video.snippet.channelTitle}</div>
		        	 </div>
		        	 <hr />
		        	 <p>{video.snippet.description}</p>
	        	 </div>
	        </div>
    	);
	}
	else{
		return <h3 style={{marginLeft: '3rem'}}>Loading...</h3>
	}
    
};

export default MediaPlayer;
