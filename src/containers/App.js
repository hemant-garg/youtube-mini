import _ from 'lodash';
import React, { Component } from 'react';
import Logo from '../components/Logo/Logo'
import SearchBar from '../components/SearchBar/SearchBar';
import Nav from '../components/Nav/Nav';
import Main from '../components/Main/Main';
import MediaPlayer from '../components/MediaPlayer/MediaPlayer';
import VideoList from '../components/VideoList/VideoList';
import YTSearch from 'youtube-api-search'; 
import './App.css';

const API_KEY = 'AIzaSyCgx2npMzfqXLfdKqoFpvb0-YZ_GmSNnqM';



class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		}
		this.extractVideos('shape of you ed sheeran')
	}

	extractVideos = (term) => {
		YTSearch({key: API_KEY, term: term}, (videos) => {
		 this.setState({videos: videos, selectedVideo: videos[0]}) 
		});
	}
	onClickVideo = (video) => {
		this.setState({selectedVideo: video})
	}

  render() {
  	const videoSearch = _.debounce((term) => {this.extractVideos(term)}, 500);
  	const {videos, selectedVideo} = this.state;
    return (
      <div>
	      <Nav>
	        <Logo />
	        <SearchBar extractVideos = {videoSearch}/>
	      </Nav>
	      <Main>
	      	<MediaPlayer video= {selectedVideo}/>
	      	<VideoList onClickVideo={this.onClickVideo} videos={videos} />
      	  </Main>
      </div>
    );
  }
}

export default App;
