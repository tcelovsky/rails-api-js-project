import React, { Component } from 'react';

class ListItem extends Component {

    render() {
        return (
            <li className="list-item" id={this.props.item.id}>{this.props.item.content}</li>
        )
    }
}

export default ListItem;