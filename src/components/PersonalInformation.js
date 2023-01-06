import React, { Component } from 'react';
import FormInput from './formInput';

class PersonalInformation extends Component {
    render() {
        return(
            <div>
                <form action="">
                    <legend>Personal Information</legend>
                    <FormInput label="First Name" id="first-name" />
                    <FormInput label="Last Name" id="last-name" />
                    <FormInput label="Birth Date" id="birth-date" type="date" />
                    <FormInput label="Address" id="address" />
                    <FormInput label="Email" id="email" type="email" />
                    <FormInput label="Phone Number" id="phone-number" />
                    <FormInput label="About Yourself" id="description" />
                </form>
            </div>
        );
    }
}

export default PersonalInformation;