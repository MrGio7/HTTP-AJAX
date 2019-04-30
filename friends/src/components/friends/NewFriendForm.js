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
                />

                <input
                    type='number'
                    name='age'
                    placeholder='age'
                />

                <input
                    type='text'
                    name='email'
                    placeholder='email'
                />

                <button className='btn' >ADD FRIEND</button>

            </form>

        </div>
    )
}

export default NewFriendForm;