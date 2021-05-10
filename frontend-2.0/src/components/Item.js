import React, { Component } from 'react';
import DeleteItemButton from '../containers/DeleteItemButton';

class Item extends Component {

    render() {
        return (
            <li className="list-item" id={this.props.item.id}>{this.props.item.content}
            <DeleteItemButton id={this.props.item.id}/>
            </li>
        )
    }
}

export default Item;