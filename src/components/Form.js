import React, { Component } from 'react';
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';

class Form extends Component {
    render() {
        const { handleInput, handleAdd, info } = this.props;

        return(
            <div id="form">
                <PersonalInformation info={info} handleInput={handleInput} />
                <Experience 
                    info={info}
                    handleInput={handleInput}
                    handleAdd={handleAdd}
                />
            </div>
        );
    }
}

export default Form;
