import React from 'react';
import './App.css';

import {Route, NavLink} from 'react-router-dom';
import axios from 'axios';

import FriendContainer from './components/friends/FriendContainer';
import NewFriendForm from './components/friends/NewFriendForm';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      friends: [],
      friend: {
        name:'',
        age: null,
        email:''
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then( res => {
        this.setState({friends: res.data})
      })

      .catch( err => {
        console.log(err)
      })


    
  }

  render(){
  return (
    <div className="App">
      <div className='nav-links'>
        <NavLink exact to='/' >Friend List</NavLink>
        <NavLink exact to='/new-friend' >Add New Friend</NavLink>
      </div>
        <Route exact path='/' render={ props => (
          <FriendContainer 
            {...props}
            friends={this.state.friends} />)} 
        />

        <Route exact path='/new-friend' render={props =>(
            <NewFriendForm
              {...props}
            />
          )}
        />
    </div>
  );
}
}

export default App;
