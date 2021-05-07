import React, { Component } from 'react';
import { addList } from '../actions/listActions';

class AddList extends Component {
    constructor() {
        super();
        this.state = {
          list: {
              title: ''
          }
        };
      }

    handleChange = e => {
        this.setState({
            list: {
                title: e.target.value
            }
        })
    }

    handleSubmit = e => {
        // e.preventDefault();
        addList(this.state.list)
    }

    render() {
        return (
            <div className="new-list-container">
                <form onSubmit={ e => this.handleSubmit(e) }>
                    <input type="text" onChange={this.handleChange} value={this.state.list.title}></input>
                    <input type="submit" value="Add List"></input>
                </form>
            </div>
        );
    }
}

export default AddList;