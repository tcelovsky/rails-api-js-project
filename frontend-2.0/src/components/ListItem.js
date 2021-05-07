import React, { Component } from 'react';
import DeleteItemButton from './DeleteItemButton';

class ListItem extends Component {

    render() {
        return (
            <li className="list-item" id={this.props.item.id}>{this.props.item.content}
            <DeleteItemButton />
            </li>
        )
    }
}

export default ListItem;