import React, { Component } from 'react';
import FormInput from './FormInput';

class Experience extends Component {
    infoMap() {
        return this.props.experience.map((item, i) => {
            return <div className="preview experience" key={i}>
                        <div>
                            <p className="date">{item.startDate} - {item.endDate}</p>
                            <h3 className="position">{item.position}</h3>
                        </div>
                        <div>
                            <h3>{item.company}</h3>
                            <p className="description">{item.extraInfo}</p>
                        </div>
                    </div>
        });
    }

    render() {
        const { preview, handleInput, handleAdd } = this.props
        return(
            <div id={preview ? 'preview-experience' : "experience"}>
                {preview 
                ?<div>
                    {this.infoMap()}
                </div>

                :<form action="">
                    <legend>Experience</legend>
                    <FormInput 
                        label="Company"
                        id="company"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="Position"
                        id="position"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="Start Date"
                        id="start-date"
                        type="date"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="End Date"
                        id="end-date"
                        type="date"
                        handleInput={handleInput}
                    />
                    <FormInput 
                        label="About Experience"
                        id="extra-info"
                        handleInput={handleInput}
                    />
                    <button 
                        type="button"
                        onClick={() => handleAdd('experience')}
                    >
                        Add
                    </button>
                </form>
                }
            </div>
        );
    }
}

export default Experience;
