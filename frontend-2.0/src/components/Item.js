import React, { Component } from 'react';
import DeleteItemButton from '../containers/DeleteItemButton';
import EditItemButton from '../containers/EditItemButton';

class Item extends Component {

    render() {
        return (
            <li className="list-item" id={this.props.item.id}>{this.props.item.content}
            <DeleteItemButton id={this.props.item.id}/>
            <EditItemButton id={this.props.item.id}/>
            </li>
        )
    }
}

export default Item;