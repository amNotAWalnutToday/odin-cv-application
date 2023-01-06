import React, { Component } from 'react';
import Header from './components/Header';
import PersonalInformation from './components/PersonalInformation';

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <PersonalInformation />
      </div>
    );
  }
}

export default App;
