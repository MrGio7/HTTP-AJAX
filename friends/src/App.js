import React from 'react';
import './App.css';
import axios from 'axios';

import FriendContainer from './components/friends/FriendContainer';
import Navigation from './components/Navigation/Navigation';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      friends: []
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
      <Navigation />
      <FriendContainer friends={this.state.friends} />
    </div>
  );
}
}

export default App;
