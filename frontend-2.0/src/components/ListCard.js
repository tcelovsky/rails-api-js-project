import React, { Component } from 'react';

class ListCard extends Component {
    
    render() {
        return (
            <div className="list-card" id={this.props.list.id}>
            </div>
        )
    }
}

export default ListCard;