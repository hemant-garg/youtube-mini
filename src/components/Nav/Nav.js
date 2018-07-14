import React from 'react';
import './nav.css';

const Nav = (props) => {
    return (
       <div className='Nav'>
       	{ props.children }
       </div>
    );
};

export default Nav;
