import React, { Component } from 'react';

class ListItem extends Component {

    render() {
        return (
            <ul className="list-items">
                <li className="list-item" id={this.props.item.id}>{this.props.item.content}</li>
            </ul>
        )
    }
}

export default ListItem;