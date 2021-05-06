import React, { Component } from 'react';

class ListTitle extends Component {

    render() {
        return (
            <div className="list-title">
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default ListTitle;