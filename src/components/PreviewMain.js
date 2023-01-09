import React, { Component } from 'react';
import Experience from './Experience';

class PreviewMain extends Component {
    render() {
        const { experience } = this.props;

        return(
            <div id="preview-main" className="preview">
                <h1 className="preview header">Profile</h1>
                <p className="preview profile">{this.props.info.description}</p>
                <hr />
                <h1 className="preview header">Experience</h1>
                <Experience preview="true" experience={experience}/>
                <hr />
                <h1 className="preview header">Education</h1>
            </div>
        );
    }
}

export default PreviewMain;
