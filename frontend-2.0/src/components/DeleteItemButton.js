import React, { Component } from 'react';
import { deleteItem } from '../actions/itemActions';

class DeleteItemButton extends Component {
    handleClick = e => {
        e.preventDefault();
        const id = e.target.id
        deleteItem(id)
        .then(e.target.parentElement.parentElement.remove())
    }

    render() {
        return (
            <div className="button-holder">
                <button  type="button" id={this.props.id} 
                className="delete-item-button" onClick={ e => this.handleClick(e) }>
                    x
                </button>
            </div>
        );
    }
}

export default DeleteItemButton;