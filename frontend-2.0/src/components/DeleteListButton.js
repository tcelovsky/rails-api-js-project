import React, { Component } from 'react';
import { deleteList } from '../actions/listActions';

class DeleteListButton extends Component {
    handleClick = e => {
        e.preventDefault();
        const id = e.target.id
        deleteList(id)
        .then(e.target.parentElement.parentElement.parentElement.remove())
    }

    render() {
        return (
            <div className="button-holder">
                <button  type="button" id={this.props.id} className="delete-list-button" onClick={ e => this.handleClick(e) }>
                    x
                </button>
            </div>
        );
    }
}

export default DeleteListButton;