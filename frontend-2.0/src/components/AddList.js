import React, { Component } from 'react';

class AddList extends Component {

    render() {
        return (
            <div className="new-list-container">
                <form>
                    <input type="text"></input>
                    <input type="submit" value="Add List"></input>
                </form>
            </div>
        );
    }
}

export default AddList;