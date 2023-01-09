import React, { Component } from 'react';
import Experience from './Experience';

class PreviewMain extends Component {
    render() {
        const { experience } = this.props;

        return(
            <div id="preview-main" className="preview">
                <h1>Profile</h1>
                <p>{this.props.info.description}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <hr />
                <h1>Experience</h1>
                <Experience preview="true" experience={experience}/>
                <hr />
                <h1>Education</h1>
            </div>
        );
    }
}

export default PreviewMain;
