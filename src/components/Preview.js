import Header from './Header';
import PersonalInformation from './PersonalInformation';
import PreviewMain from './PreviewMain'

const Preview = ( {info, experience, education} ) => {
    return(
        <div id="preview">
            <Header 
                preview="true"
                info={info} 
            />
            <PersonalInformation 
                preview='true' 
                info={info} 
            />
            <PreviewMain
                info={info}
                experience={experience} 
                education={education}
            />
        </div>
    );
}

export default Preview;
