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

                <div className='remove-btn'>
                    <h4>X</h4>
                </div>

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