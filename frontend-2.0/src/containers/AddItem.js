import React, { Component } from 'react';
import { addItem } from '../actions/itemActions';

class AddItem extends Component {
    constructor() {
        super();
        this.state = {
          item: {
              content: ''
          }
        };
      }

    handleChange = e => {
        this.setState({
            item: {
                content: e.target.value
            }
        })
    }

    handleSubmit = e => {
        // e.preventDefault();
        addList(this.state.item)
    }

    render() {
        return (
            <div className="add-item-container">
                <form onSubmit={ e => this.handleSubmit(e) }>
                    <input type="text" onChange={this.handleChange} value={this.state.item.content}></input>
                    <input type="submit" value="Add Item"></input>
                </form>
            </div>
        );
    }
}

export default AddItem;