import React, { Component } from 'react';

class FormInput extends Component {
    render() {
        const { label, id, type, handleInput } = this.props;

        return(
            <div>
                <label htmlFor={id}>{label}</label>
                <input 
                    id={id}
                    type={type ? type : 'text'}
                    pattern={id === 'phone-number' ? "[0-9]{10,11}" : undefined}
                    placeholder={label}
                    onChange={(e) => handleInput(e,id)}
                />
            </div>
        );
    }
}

export default FormInput;