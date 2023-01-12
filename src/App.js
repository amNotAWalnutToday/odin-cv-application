import React, {  useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Preview from './components/Preview';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Thefirst',
    lastName: 'Andlast',
    birthDate: '01/01/2005',
    location: 'Default, Default',
    email: 'Default@default.com',
    phoneNum: '555-555-5555',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
  });

  const [experienceInput, setExperienceInput] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    extraInfo: '',
  });

  const [educationInput, setEducationInput] = useState({
    university: '',
    course: '',
    startDate: '',
    endDate: '',
    extraInfo: '',
  });

  const [experience, setExperience] = useState([
    {
      /*Template*/
      company: 'Software inc',
      position: 'Software Engineer',
      startDate: '01/01/2021',
      endDate: '01/01/2023',
      extraInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ]);

  const [education, setEducation] = useState([
    {
      /*Template*/
      university: 'The University',
      course: 'Computer Science',
      startDate: '01/01/2017',
      endDate: '01/01/2020',
      extraInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ]);

  const convertDate = (date) => {
    return date.split('-').reverse().join('/');
  }

  const handleInput = (e, id, type) => {
    let info;
    let exp;
    let education;
    if(type === 'personal') {
      info = handlePersonalInfo(e,id);
      setPersonalInfo(info);
    } else if(type === 'experience') {
      exp = handleExperienceInput(e, id);
      setExperienceInput(exp);
    } else if(type === 'education') {
      education = handleEducationInput(e, id);
      setEducationInput(education);
    }
  }

  const handlePersonalInfo = (e, id) => {
    const info = {...personalInfo};
    switch(id) {
      case 'first-name':
        info.firstName = e.target.value;
        break;
      case 'last-name':
        info.lastName = e.target.value;
        break;
      case 'birth-date':
        info.birthDate = convertDate(e.target.value);
        break;
      case 'location':
        info.location = e.target.value;
        break;
      case 'email':
        info.email = e.target.value;
        break;
      case 'phone-number':
        info.phoneNum = e.target.value;
        break;
      case 'description':
        info.description = e.target.value;
        break;
      default:
        return;
    }
    return info;
  }

  const handleExperienceInput = (e, id) => {
    const info = {...experienceInput};
    switch(id) {
      case 'company':
        info.company = e.target.value;
        break;
      case 'position':
        info.position = e.target.value;
        break;
      case 'start-date':
        info.startDate = convertDate(e.target.value);
        break;
      case 'end-date':
        info.endDate = convertDate(e.target.value);
        break;
      case 'extra-info':
        info.extraInfo = e.target.value;
        break;
      default:
        return;
    }
    return info
  }

  const handleEducationInput = (e, id) => {
    const info = {...educationInput};
    switch(id) {
      case 'university':
        info.university = e.target.value;
        break;
      case 'course':
        info.course = e.target.value;
        break;
      case 'start-date-edu':
        info.startDate = convertDate(e.target.value);
        break;
      case 'end-date-edu':
        info.endDate = convertDate(e.target.value);
        break;
      case 'extra-info-edu':
        info.extraInfo = e.target.value;
        break;
      default:
        return;
    }
    return info;
  }

  const handleAdd = (type) => {
    if(type === 'experience'){
      const exp = [...experience];
      exp.push(experienceInput);
      setExperience(exp);
    } else if(type === 'education') {
      const edu = [...education];
      edu.push(educationInput);
      setEducation(edu);
    }
  }

  return(
    <div id="container">
      <Header />
      <Form 
        handleInput={handleInput} 
        handleAdd={handleAdd}
      />
      <Preview 
        info={personalInfo}
        experience={experience}
        education={education}
      />
    </div>
  )
}

export default App;
