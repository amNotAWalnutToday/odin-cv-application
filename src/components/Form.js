import React, { Component } from 'react';
import PersonalInformation from './PersonalInformation';

class Form extends Component {
    render() {
        const { handleInput, info } = this.props;

        return(
            <div id="form">
                <PersonalInformation info={info} handleInput={handleInput} />
            </div>
        );
    }
}

export default Form;
