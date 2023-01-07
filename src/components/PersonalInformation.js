import React, { Component } from 'react';
import FormInput from './FormInput';

class PersonalInformation extends Component {
    render() {
        const { handleInput } = this.props;
        return(
            <div>
                <form action="">
                    <legend>Personal Information</legend>
                    <FormInput 
                        label="First Name" 
                        id="first-name"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="Last Name" 
                        id="last-name"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="Birth Date" 
                        id="birth-date" 
                        type="date"
                        handleInput={handleInput} 
                    />
                    <FormInput 
                        label="Location" 
                        id="location"
                        handleInput={handleInput} 
                    />
                    <FormInput 
                        label="Email" 
                        id="email" 
                        type="email"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="Phone Number" 
                        id="phone-number"
                        type="tel"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="About Yourself" 
                        id="description"
                        handleInput={handleInput}
                    />
                </form>
            </div>
        );
    }
}

export default PersonalInformation;