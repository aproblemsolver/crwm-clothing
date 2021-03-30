import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import directoryData from './directory.data';
import './directory.style.scss';

class Directory extends Component {
    constructor () {
        super();
        this.state = {
            sections: directoryData
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;