import React, { Component } from 'react';
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';
import Education from './Education';

class Form extends Component {
    render() {
        const { handleInput, handleAdd } = this.props;

        return(
            <div id="form">
                <PersonalInformation 
                    handleInput={handleInput} 
                />
                <Experience 
                    handleInput={handleInput}
                    handleAdd={handleAdd}
                />
                <Education 
                    handleInput={handleInput}
                    handleAdd={handleAdd}
                />
            </div>
        );
    }
}

export default Form;
