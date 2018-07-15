import React from 'react';
import './searchbar.css';

const SearchBar = ({extractVideos}) => {
    return (
        <div className='searchbar'>
        	<input type='search' onChange={(e) => extractVideos(e.target.value)} className='search-input' placeholder='Search Youtube Videos....'/>
        </div>
    );
}

export default SearchBar;

