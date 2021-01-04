import React from 'react';
import './App.css';
import Characters from './containers/Characters';
import Team from './containers/Team';
import { render } from '@testing-library/react';

class App extends React.Component {

  state = {
    team: []
  }

  clickHandler = (character) => {
    // figure out how to pass that character to Team
    let copiedArray = [character, ...this.state.team]
    this.setState(() => ({ team: copiedArray }))
  }

  loginHandler = (userInfo) => {
    console.log("logging in", userInfo)
    fetch("https://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({user: userInfo})
    })
    .then(r => r.json())
    .then(data => {
      console.log("token:", data.token)
    })
  }
  render() {

    return (
      <div className="App">
        <Team characters={this.state.team} />
        <Characters clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;