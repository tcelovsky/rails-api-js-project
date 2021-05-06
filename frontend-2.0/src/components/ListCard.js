import React, { Component } from 'react';
import ListTitle from './ListTitle';
import ListItem from './ListItem';

class ListCard extends Component {
    
    render() {
        return (
            <div className="list-card" id={this.props.list.id}>
                <ListTitle title={this.props.list.title}/>
                <ListItem items={this.props.list.list_items}/>
            </div>
        )
    }
}

export default ListCard;