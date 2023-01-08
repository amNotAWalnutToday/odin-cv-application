import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { preview, info } = this.props
        let name;
        if(info) name = `${info.firstName} ${info.lastName}`

        return(
            <header className={preview ? 'preview' : undefined}>
                <h1>{preview ? name : 'CV Builder'}</h1>
            </header>
        );
    }
}

export default Header;