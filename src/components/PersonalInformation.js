import React, { Component } from 'react';
import FormInput from './FormInput';

class PersonalInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hoverImage: false
        };
        this.hoverImage = this.hoverImage.bind(this);
    }

    infoMap() {
        const infoProps = [];
        for(const section in this.props.info){
            const exceptions = [
                section !== 'firstName',
                section !== 'lastName',
                section !== 'description',
                section !== 'birthDate'
            ];
            if(exceptions.every(Boolean)){
                infoProps.push(this.props.info[section]);
            } else if(!exceptions[3]) {
                infoProps.push(this.props.info[section]);
            }
        }
        return infoProps.map((item, i) => {
            return <div key={i}>
                    <h3>{this.convertProperty(i)}</h3>
                    <p>{item}</p>
                    <hr />
                </div>
        })
    }

    convertProperty(prop) {
        let result;
        switch(prop){
            case 0:
                result = 'Birth Date' ;
                break;
            case 1:
                result = 'Location';
                break;
            case 2:
                result = 'Email';
                break;
            case 3:
                result = 'Phone';
                break;
            default:
                return;
        }
        return result;
    }

    hoverImage() {
        let state = this.state.hoverImage;
        if(state) state = false;
        else state = true;
        this.setState({hoverImage: state});
    }

    render() {
        const { handleInput, preview } = this.props;

        return(
            <div id={preview ? 'preview-sidebar' : undefined}>
                { preview
                ?<div id="preview-info">
                    <div 
                        className="fake-img-bg"
                        onMouseEnter={this.hoverImage}
                        onMouseLeave={this.hoverImage} 
                    >
                        <div className="fake-img">
                        </div>
                        <p className="fake-text">{this.state.hoverImage ? 'Upload Image' : ''}</p>
                    </div>
                    {this.infoMap()}
                </div>

                :<form id="personal-information" action="">
                    <legend>Personal Information</legend>
                    <div>
                        <div>
                            <FormInput
                                label="First Name"
                                id="first-name"
                                handleInput={handleInput}
                            />
                            <FormInput
                                label="Last Name"
                                id="last-name"
                                handleInput={handleInput}
                            />
                            <FormInput
                                label="Birth Date"
                                id="birth-date"
                                type="date"
                                handleInput={handleInput}
                            />
                        </div>
                        <div>
                            <FormInput
                                label="Location"
                                id="location"
                                handleInput={handleInput}
                            />
                            <FormInput
                                label="Email"
                                id="email"
                                type="email"
                                handleInput={handleInput}
                            />
                            <FormInput
                                label="Phone Number"
                                id="phone-number"
                                type="tel"
                                handleInput={handleInput}
                            />
                        </div>
                    </div>
                    <FormInput 
                        label="About Yourself" 
                        id="description"
                        handleInput={handleInput}
                    />
                </form>
                }
            </div>
        );
    }
}

export default PersonalInformation;