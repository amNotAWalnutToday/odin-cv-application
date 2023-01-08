import React, { Component } from 'react';
import PersonalInformation from './PersonalInformation';

class Preview extends Component {
    render() {
        const { info } = this.props

        return(
            <div>
                <PersonalInformation preview={'true'} info={info} />
            </div>
        );
    }
}

export default Preview;
