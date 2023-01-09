import React, { Component } from 'react';
import FormInput from './FormInput';

class Education extends Component {
    render() {
        const { handleInput, handleAdd } = this.props;

        return(
            <div>
                <form action="">
                    <legend>Education</legend>
                    <FormInput 
                        label="University"
                        id="university"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="Course"
                        id="course"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="Start Date"
                        id="start-date-edu"
                        type="date"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="End Date"
                        id="end-date-edu"
                        type="date"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="About Course"
                        id="extra-info-edu"
                        handleInput={handleInput}
                    />
                    <button 
                        type="button"
                        onClick={() => handleAdd('education')}
                    >
                        Add
                    </button>
                </form>
            </div>
        );
    }
};

export default Education;
