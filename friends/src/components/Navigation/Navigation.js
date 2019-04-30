import React from 'react';
import './Navigation.css';

const Navigation = props => {
    return(
        <div className='navigation-bar'>
            <ul>
                <li>Friends List</li>
                <li>Add New Friend</li>
            </ul>
        </div>
    )
}

export default Navigation;