import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        birthDate: '',
        location: '',
        email: '',
        phoneNum: '',
        description: '',
      },

      experience: [
        {
          /*Template*/
          company: 'Software inc',
          position: 'Software engineer',
          startDate: '01/01/2021',
          endDate: '01/01/2023',
          extraInfo: 'N/A',
        },
      ],

      education: [
        {
          /*Template*/
          university: 'The University',
          course: 'Computer Science',
          startDate: '01/01/2017',
          endDate: '01/01/2020',
          extraInfo: 'N/A',
        },
      ],
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e,id) {
    const info = {...this.state.personalInfo};
    switch(id){
      case 'first-name':
        info.firstName = e.target.value
        break;
      case 'last-name':
        info.lastName = e.target.value
        break;
      case 'birth-date':
        info.birthDate = e.target.value
        break;
      case 'location':
        info.location = e.target.value
        break;
      case 'email':
        info.email = e.target.value
        break;
      case 'phone-number':
        info.phoneNum = e.target.value
        break;
      case 'description':
        info.description = e.target.value
        break;
      default:
        return;
    }
    this.setState({
      personalInfo: info,
    })
  }

  render(){
    return (
      <div>
        <Header />
        <Form handleInput={this.handleInput} />
      </div>
    );
  }
}

export default App;
