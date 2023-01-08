import React, { Component } from 'react';
import Header from './Header';
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';

class Preview extends Component {
    render() {
        const { info } = this.props

        return(
            <div id="preview">
                <Header preview="true" info={info} />
                <PersonalInformation preview='true' info={info} />
                <Experience />
            </div>
        );
    }
}

export default Preview;
