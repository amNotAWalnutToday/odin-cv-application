import Experience from './Experience';
import Education from './Education';

const PreviewMain = ( {info, experience, education} ) => {
    const removeMap = (e) => {
        e.target.parentNode.parentNode.remove();
    }

    return(
        <div id="preview-main" className="preview">
            <h1 className="preview header">Profile</h1>
            <p className="preview profile">{info.description}</p>
            <hr />
            <h1 className="preview header">Experience</h1>
            <Experience 
                preview="true"
                experience={experience}
                removeMap={removeMap}
            />
            <hr />
            <h1 className="preview header">Education</h1>
            <Education 
                preview="true"
                education={education} 
                removeMap={removeMap}
            />
        </div>
    );
}

export default PreviewMain;
