import React, { Component } from 'react';
import FormInput from './FormInput';

class Education extends Component {
    infoMap() {
        return this.props.education.map((item, i) => {
            return <div className="preview education" key={i}>
                        <div>
                            <p className="date">{item.startDate} - {item.endDate}</p>
                            <h3 className="position">{item.course}</h3>
                            <button 
                                onClick={(e) => this.props.removeMap(e)}
                            >
                                Remove
                            </button>
                        </div>
                        <div>
                            <h3>{item.university}</h3>
                            <p className="description">{item.extraInfo}</p>
                        </div>
                    </div>
        });
    }

    render() {
        const { handleInput, handleAdd, preview } = this.props;

        return(
            <div>
                {preview 
                ? <div>
                    {this.infoMap()}
                </div>

                :<form action="">
                    <legend>Education</legend>
                    <FormInput 
                        label="University"
                        id="university"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="Course"
                        id="course"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="Start Date"
                        id="start-date-edu"
                        type="date"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="End Date"
                        id="end-date-edu"
                        type="date"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="About Course"
                        id="extra-info-edu"
                        handleInput={handleInput}
                    />
                    <button 
                        type="button"
                        onClick={() => handleAdd('education')}
                    >
                        Add
                    </button>
                </form>
                }
            </div>
        );
    }
};

export default Education;
