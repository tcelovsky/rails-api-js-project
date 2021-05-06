import React, { Component } from 'react';

class ListItem extends Component {

    render() {
        return (
            <ul className="list-items">
                <li className="list-item">{this.props.content}</li>
            </ul>
        )
    }
}

export default ListItem;