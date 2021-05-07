import React, { Component } from 'react';
import ListTitle from './ListTitle';
import ListItems from './ListItems';
import DeleteListButton from './DeleteListButton';

class ListCard extends Component {
    
    render() {
        return (
            <div className="list-card" id={this.props.list.id}>
                <DeleteListButton id={this.props.list.id}/>
                <ListTitle title={this.props.list.title}/>
                <ListItems items={this.props.list.list_items}/>
            </div>
        )
    }
}

export default ListCard;