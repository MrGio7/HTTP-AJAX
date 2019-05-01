import React from 'react';
import './NewFriendForm.css';

const NewFriendForm = props => {
    return(
        <div className='new-friend-form'>

            <h2>Add New Friend</h2>

            <form action=''>

                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={props.changeHandler}
                    value={props.friend.name}
                />
                
                <input
                    type='number'
                    name='age'
                    placeholder='age'
                    onChange={props.changeHandler}
                    value={props.friend.age}
                />

                <input
                    type='text'
                    name='email'
                    placeholder='email'
                    onChange={props.changeHandler}
                    value={props.friend.email}
                />

                <button onClick={props.addNewItem} className='btn' >ADD FRIEND</button>

            </form>

        </div>
    )
}

export default NewFriendForm;