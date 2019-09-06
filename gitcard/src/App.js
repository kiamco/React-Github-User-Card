import React from 'react';
import './App.css';
import Axios from 'axios';


class App extends React.Component{

  state = {
    userInfo: []
  }

  getGitApiData = (api) => {
    Axios.get(api)
    .then(res => {
      this.setState({userInfo: res.data})
    })
    .catch(err => err)
  }

  componentDidMount(){
    this.getGitApiData('https://api.github.com/users/kiamco');
  }

  render(){
    return(
      <div className='App'>
        <h1>hello</h1>
      </div>
    )
  }
}

export default App;
