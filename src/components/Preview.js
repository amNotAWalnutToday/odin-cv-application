import React, { Component } from 'react';
import Header from './Header';
import PersonalInformation from './PersonalInformation';
import PreviewMain from './PreviewMain'

class Preview extends Component {
    render() {
        const { info, experience } = this.props

        return(
            <div id="preview">
                <Header preview="true" info={info} />
                <PersonalInformation preview='true' info={info} />
                <PreviewMain info={info} experience={experience} />
            </div>
        );
    }
}

export default Preview;
