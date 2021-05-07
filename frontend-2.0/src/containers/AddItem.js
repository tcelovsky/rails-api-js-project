import React, { Component } from 'react';
import { addItem } from '../actions/itemActions';

class AddItem extends Component {
    constructor() {
        super();
        this.state = {
          item: {
              content: '',
              list_id: ''
          }
        };
      }

    handleChange = e => {
        this.setState({
            item: {
                content: e.target.value,
                list_id: this.props.id
            }
        })
    }

    handleSubmit = e => {
        // e.preventDefault();
        addItem(this.state.item)
    }

    render() {
        return (
            <div className="add-item-container">
                <form>
                    <input type="text" onChange={this.handleChange} value={this.state.item.content}></input>
                    <input type="submit" value="Add Item" onClick={e => this.handleSubmit(e)}></input>
                </form>
            </div>
        );
    }
}

export default AddItem;