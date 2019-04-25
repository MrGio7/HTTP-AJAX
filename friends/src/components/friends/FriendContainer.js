import React from 'react';

import FriendList from './FriendList';

const FriendContainer = props =>{
    return(
        <div>
            {props.friends.map( friend => <FriendList key={friend.id} friend={friend} />)}
        </div>
    )
}

export default FriendContainer;