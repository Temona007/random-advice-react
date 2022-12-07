import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    advice: ''
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(advice);
        this.setState({ advice: advice});
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  

  render() {
    const { advice } = this.state;

    const buttonClickHandler = (event) => {
      event.preventDefault();
      this.fetchAdvice();
    }

    return (
      <div className="app">
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button onClick={buttonClickHandler} className='button'>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
