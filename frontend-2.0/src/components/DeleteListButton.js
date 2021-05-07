import React, { Component } from 'react';
import { deleteList } from '../actions/listActions';

class DeleteListButton extends Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
        // const id = e.target.id
        // deleteList(id)
        // .then(e.target.parentElement.parentElement.remove())
    }

    render() {
        return (
            <div className="delete-list-button">
                <form onSubmit={ e => this.handleSubmit(e) }>
                    <input type="submit" value="x"></input>
                </form>
            </div>
        );
    }
}

export default DeleteListButton;