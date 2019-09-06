import React from 'react';
import './App.css';
import Axios from 'axios';
import UserCard from './Components/userCard.js'

class App extends React.Component {

  state = {
    userInfo: [],
    following: [],
    followers: []
  }

  getGitApiData = (first, second, third) => {
    Axios.all([Axios.get(first), 
              Axios.get(second), 
              Axios.get(third)])
      .then(Axios.spread((first, second, third) => {
        this.setState({ userInfo: first.data, following: second.data, followers: third.data })
        console.log(this.state);
      }))

  }

  componentDidMount() {
    this.getGitApiData('https://api.github.com/users/kiamco', 
                       "https://api.github.com/users/kiamco/following",
                       'https://api.github.com/users/kiamco/followers');
  }

  render() {
    return (
      <div className='App'>
        <UserCard
          avatar={this.state.userInfo.avatar_url}
          name={this.state.userInfo.name}
          repos={this.state.userInfo.public_repos}
          followers={this.state.userInfo.followers}
          following={this.state.following}
          getGitApiData={this.getGitApiData} />
        <button>Followers</button>
        <button>Following</button>
      </div>

      
    )
  }
}

export default App;
