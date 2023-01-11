import React, { Component } from 'react';
import Experience from './Experience';
import Education from './Education';

class PreviewMain extends Component {
    removeMap(e) {
        e.target.parentNode.parentNode.remove();
    } 

    render() {
        const { experience, education } = this.props;

        return(
            <div id="preview-main" className="preview">
                <h1 className="preview header">Profile</h1>
                <p className="preview profile">{this.props.info.description}</p>
                <hr />
                <h1 className="preview header">Experience</h1>
                <Experience 
                    preview="true"
                    experience={experience}
                    removeMap={this.removeMap}
                />
                <hr />
                <h1 className="preview header">Education</h1>
                <Education 
                    preview="true"
                    education={education} 
                    removeMap={this.removeMap}
                />
            </div>
        );
    }
}

export default PreviewMain;
