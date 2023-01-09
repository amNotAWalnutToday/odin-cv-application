import React, { Component } from 'react';
import FormInput from './FormInput';

class Experience extends Component {
    infoMap() {
        return this.props.experience.map((item, i) => {
            return <div key={i}>
                        <div>
                            <p>{item.startDate} - {item.endDate}</p>
                            <p>{item.position}</p>
                        </div>
                        <div>
                            <p>{item.company}</p>
                            <p>{item.extraInfo}</p>
                        </div>
                    </div>
        });
    }

    render() {
        const { preview, handleInput, handleAdd } = this.props
        return(
            <div id="experience">
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
                    <button type="button" onClick={handleAdd}>Add</button>
                </form>
                }
            </div>
        );
    }
}

export default Experience;
