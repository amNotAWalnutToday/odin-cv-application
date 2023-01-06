import React, { Component } from 'react';

class FormInput extends Component {
    render() {
        const { label, id, type } = this.props;

        return(
            <div>
                <label htmlFor={id}>{label}</label>
                <input 
                    id={id}
                    type={type ? type : 'text'}
                    placeholder={label} 
                />
            </div>
        );
    }
}

export default FormInput;