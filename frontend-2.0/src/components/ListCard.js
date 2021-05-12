import React, { Component } from 'react';
import ListTitle from './ListTitle';
import Items from './Items';
import DeleteListButton from '../containers/DeleteListButton';
import AddItem from '../containers/AddItem';
import EditListButton from './EditListButton';

class ListCard extends Component {

    render() {
        return (
            <div className="list-card" id={this.props.list.id}>
                <EditListButton isEditable={this.isEditable}/>
                <DeleteListButton id={this.props.list.id}/>
                <ListTitle title={this.props.list.title}/>
                <Items items={this.props.list.list_items}/>
                <AddItem id={this.props.list.id}/>
            </div>
        )
    }
}

export default ListCard;