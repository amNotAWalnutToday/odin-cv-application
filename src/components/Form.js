import PersonalInformation from './PersonalInformation';
import Experience from './Experience';
import Education from './Education';

const Form = ( {handleInput, handleAdd} ) => {
    return (
        <div id="form">
            <PersonalInformation 
                handleInput={handleInput} 
            />
            <Experience 
                handleInput={handleInput}
                handleAdd={handleAdd}
            />
            <Education 
                handleInput={handleInput}
                handleAdd={handleAdd}
            />
        </div>
    );
}

export default Form;
