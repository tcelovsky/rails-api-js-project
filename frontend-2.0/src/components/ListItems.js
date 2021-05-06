import React, { Component } from 'react';
import ListItem from './ListItem';

class ListItems extends Component {
    generateListItems = () => {
        return this.props.items.map(item => 
            <ListItem key={item.list_id} content={item.content} />
        )
    }

    render() {
        return (
            <div className="list-items-container">
                {this.generateListItems()}
            </div>
        )
    }
}

export default ListItems;