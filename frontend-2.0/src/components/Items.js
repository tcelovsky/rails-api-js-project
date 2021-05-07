import React, { Component } from 'react';
import Item from './Item';

class Items extends Component {

    generateListItems = () => {
        return this.props.items.map(item => 
            <Item key={item.id} item={item} />
        )
    }

    render() {
        return (
            <ul className="list-items-container">
                {this.generateListItems()}
            </ul>
        )
    }
}

export default Items;