import React from 'react';
import './App.css';
import Axios from 'axios';
import UserCard from './Components/userCard.js'

class App extends React.Component{

  state = {
    userInfo: []
  }

  getGitApiData = (api) => {
    Axios.get(api)
    .then(res => {
      this.setState({userInfo: res.data})
      console.log(this.state)
    })
    .catch(err => err)
  }

  componentDidMount(){
    this.getGitApiData('https://api.github.com/users/kiamco');
  }

  render(){
    return(
      <div className='App'>
        <UserCard 
          avatar={this.state.userInfo.avatar_url}
          name={this.state.userInfo.name}
          getGitApiData={this.getGitApiData} />
      </div>
    )
  }
}

export default App;
