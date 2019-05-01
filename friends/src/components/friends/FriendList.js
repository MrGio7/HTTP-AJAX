import React from 'react';
import './FriendList.css';

class FriendList extends React.Component {
    constructor(props){
        super(props)
        
        
        this.state = {
            name: this.props.friend.name,
            age: this.props.friend.age,
            email: this.props.friend.email
        }
    }

    render(){
        return(
            <div className='friend-list'>

                <button 
                    className='remove-btn' 
                    onClick={ev => {
                        this.props.deleteFriend(ev, this.props.friend.id);
                    }}
                >
                    X
                </button>

                <div className='name'>
                    <strong>Name:</strong> {this.state.name} 
                </div>
                
                <div className='age'>
                    <strong>Age:</strong> {this.state.age}
                </div>

                <div className='email'>
                    <strong>email:</strong> {this.state.email}
                </div>

            </div>
        )
    }
}

export default FriendList;