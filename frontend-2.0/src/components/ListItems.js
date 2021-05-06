import React, { Component } from 'react';

class ListItems extends Component {

    render() {
        return (
            <div className="list-item">
                {console.log(this.props.items)}
            </div>
        )
    }
}

export default ListItems;