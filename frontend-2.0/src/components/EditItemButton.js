import React, { Component } from 'react';
import { TiPencil } from 'react-icons/ti';

class EditItemButton extends Component {

    render() {
        return (
            <button type="button" className="edit-item-button" onClick={this.props.isEditable}>
                <TiPencil />
            </button>
        )
    }
}

export default EditItemButton;