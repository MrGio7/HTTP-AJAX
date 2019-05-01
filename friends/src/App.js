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
        age: undefined,
        email:''
      }
    }
  }

  changeHandler = ev => {
    this.setState({
      friend:{
        ...this.state.friend,
        [ev.target.name]: ev.target.value
      }
    })
  }

  addNewItem = () => {
    axios
    .post('http://localhost:5000/friends', this.state.friend)
    .then(res =>{
      this.setState({friends: res.data})
    })
    .catch(err => console.log(err))
  }

  deleteFriend = (ev, id) => {
    ev.preventDefault();
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({friends: res.data})
    })
    .catch( err => {
      console.log(err)
    })
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
            friends={this.state.friends} 
            deleteFriend={this.deleteFriend}
          />
          )} 
        />

        <Route exact path='/new-friend' render={props =>(
            <NewFriendForm
              {...props}
              changeHandler={this.changeHandler}
              friend={this.state.friend}
              addNewItem={this.addNewItem}
            />
          )}
        />
    </div>
  );
}
}

export default App;
