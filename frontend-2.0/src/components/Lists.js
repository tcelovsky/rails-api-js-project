import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lists extends Component {

    generateLists = () => {
        console.log("generating lists")
        // return this.props.lists.map(list => 
        //     <Link key={list.id} to={`/lists/${list.id}`}>
        //         {<ListCard key={list.id} list={list} />}
        //     </Link>
        // )
    }

    render() {
        return (
            <div id="lists-container">
                {this.generateLists()}
            </div>
        )
    }
}

export default Lists;