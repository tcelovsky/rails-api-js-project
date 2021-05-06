import React, { Component } from 'react';

class ListItem extends Component {

    render() {
        return (
            <div className="list-item">
                {console.log(this.props.item)}
            </div>
        )
    }
}

export default ListItem;