import React from 'react';
import './videolistitem.css';
const VideoListItem = ({video, onClickVideo}) => {
	
    if(video)
        {
            const Url = video.snippet.thumbnails.high.url;
             // console.log(video)
            return (
                <div onClick={() => onClickVideo(video)} className='videolistitem'>
                    <div className="thumbnail">
                        <img src={Url} alt="comedy"/>
                    </div>
                    <div className="video-title" >
                        <div> {video.snippet.title}</div>
                        <p className="channel">{video.snippet.channelTitle}</p>
                    </div>
                </div>
            );
	   }
    else{
        return <div className="loading">Loading..</div>
    }
   
};


export default VideoListItem;
