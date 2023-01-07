import React, { Component } from 'react';
import Header from './components/Header';
import PersonalInformation from './components/PersonalInformation';

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
  }

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
