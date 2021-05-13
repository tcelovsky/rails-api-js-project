import React, { Component } from 'react';
import { TiPencil } from 'react-icons/ti';

class EditListButton extends Component {

    render() {
        return (
            <button type="button" className="edit-list-button" onClick={this.props.isEditable}>
                <TiPencil />
            </button>
        )
    }
}

export default EditListButton;