import React from 'react';
import './App.css';
import Axios from 'axios';
import UserCard from './Components/userCard.js';
import Styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import LinkAcc from './Components/followerAndFollowing.js';
import Repos from './Components/repos.js'



const Button = Styled.h1`
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
    followers: [],
    user: 'kiamco',
    repos: []
  }

  getGitApiData = (first, second, third, fourth) => {
    Axios.all([Axios.get(first),
    Axios.get(second),
    Axios.get(third),
    Axios.get(fourth)
    ])
      .then(Axios.spread((first, second, third, fourth) => {
        this.setState({
          userInfo: first.data,
          following: second.data,
          followers: third.data,
          repos: fourth.data
        })
        console.log(this.state);
      }))

  }

  componentDidMount() {
    this.getGitApiData(`https://api.github.com/users/${this.state.user}`,
      `https://api.github.com/users/${this.state.user}/following`,
      `https://api.github.com/users/${this.state.user}/followers`,
      `https://api.github.com/users/${this.state.user}/repos`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      this.setState({ userInfo: this.state.user });
      this.getGitApiData(`https://api.github.com/users/${this.state.user}`,
        `https://api.github.com/users/${this.state.user}/following`,
        `https://api.github.com/users/${this.state.user}/followers`);
    }
  }

  getUser = (otherUser) => {
    this.setState({ user: otherUser });
  }

  render() {
    return (
      <div className='App'>
        <UserCard
          avatar={this.state.userInfo.avatar_url}
          name={this.state.userInfo.name}
          repos={this.state.userInfo.public_repos}
          followers={this.state.userInfo.followers}
          following={this.state.userInfo.following}
        />

        <div className='button-links'>
          <NavLink to='/repos'>
            <Button>Repos</Button>
          </NavLink>
          <NavLink to='/followers'>
            <Button>Followers</Button>
          </NavLink>
          <NavLink to='/following'>
            <Button>Following</Button>
          </NavLink>
        </div>

        <Route exact path='/repos' component={(props) => <Repos {...props} repoData={this.state.repos} />} />
        <Route exact path='/followers' component={(props) => <LinkAcc {...props} followers={this.state.followers} getNewUser={this.getUser} />} />
        <Route exact path='/following' component={(props) => <LinkAcc {...props} followers={this.state.following} getNewUser={this.getUser} />} />
      </div>

    )
  }
}

export default App;
