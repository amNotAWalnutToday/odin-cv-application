import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Preview from './components/Preview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /*Input Holders*/
      personalInfo: {
        firstName: 'Default',
        lastName: 'Default',
        birthDate: '2005-1-1',
        location: 'Default, Default',
        email: 'Default@default.default',
        phoneNum: '555-555-5555',
        description: 'This is a default paragraph that is definitely not the same',
      },

      experienceInput: {
        company: 'Software inc',
        position: 'Software Engineer',
        startDate: '01/01/2021',
        endDate: '01/01/2023',
        extraInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
      },

      educationInput: {
        university: 'The University',
        course: 'Computer Science',
        startDate: '01/01/2017',
        endDate: '01/01/2020',
        extraInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },

      /*info holders*/
      experience: [
        {
          /*Template*/
          company: 'Software inc',
          position: 'Software Engineer',
          startDate: '01/01/2021',
          endDate: '01/01/2023',
          extraInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
    this.handleAdd = this.handleAdd.bind(this); 
  }

  handleInput(e, id, type) {
    let info;
    let exp;
    let education;
    if(type === 'personal') {
      info = this.handlePersonalInfo(e,id);
      this.setState({personalInfo: info});
    } else if(type === 'experience') {
      exp = this.handleExperienceInput(e, id);
      this.setState({experienceInput: exp});
    } else if(type === 'education') {
      education = this.handleEducationInput(e, id);
      this.setState({educationInput: education})
    }
  }

  handlePersonalInfo(e,id) {
    const info = {...this.state.personalInfo};
    switch(id) {
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
    return info;
  }

  handleExperienceInput(e, id) {
    const info = {...this.state.experienceInput};
    switch(id) {
      case 'company':
        info.company = e.target.value;
        break;
      case 'position':
        info.position = e.target.value;
        break;
      case 'start-date':
        info.startDate = e.target.value;
        break;
      case 'end-date':
        info.endDate = e.target.value;
        break;
      case 'extra-info':
        info.extraInfo = e.target.value;
        break;
      default:
        return;
    }
    return info
  }

  handleEducationInput(e, id) {
    const info = {...this.state.educationInput};
    switch(id) {
      case 'university':
        info.university = e.target.value;
        break;
      case 'course':
        info.course = e.target.value;
        break;
      case 'start-date-edu':
        info.startDate = e.target.value;
        break;
      case 'end-date-edu':
        info.endDate = e.target.value;
        break;
      case 'extra-info-edu':
        info.extraInfo = e.target.value;
        break;
      default:
        return;
    }
    return info;
  }

  handleAdd(type) {
    if(type === 'experience'){
      const experience = [...this.state.experience];
      experience.push(this.state.experienceInput);
      this.setState({experience: experience});
    } else if(type === 'education') {
      const education = [...this.state.education];
      education.push(this.state.educationInput);
      this.setState({education: education});
    }
  }

  render(){
    return (
      <div id="container">
        <Header />
        <Form 
          handleInput={this.handleInput} 
          handleAdd={this.handleAdd}
        />
        <Preview 
          info={this.state.personalInfo}
          experience={this.state.experience}
        />
      </div>
    );
  }
}

export default App;
