import React from 'react';
import './App.css';
import Axios from 'axios';
import UserCard from './Components/userCard.js'
import Styled from 'styled-components';
import LinkAcc from './Components/followerAndFollowing.js'
import { Route, NavLink } from 'react-router-dom';


const Button = Styled.button`
  background: #333;
  border: 2px solid #333;
  margin: 10px;
  color: white;
  transition:1s;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  &:hover{
    background: #6cc644;
    cursor: pointer;
  }
  `


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
        <div className='button-links'>
          <Navlink to='/followers'>
            <Button>Followers</Button>
          </Navlink>
          <Button>Following</Button>
        </div>

        <Route exact path='/followers' component={(props) => <LinkAcc {...props} followers={this.state.followers} />} />
      </div>

    )
  }
}

export default App;
