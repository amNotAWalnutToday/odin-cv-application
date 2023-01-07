import React, { Component } from 'react';
import PersonalInformation from './PersonalInformation';

class Form extends Component {
    render() {
        const { handleInput } = this.props;

        return(
            <div>
                <PersonalInformation handleInput={handleInput} />
            </div>
        );
    }
}

export default Form;
