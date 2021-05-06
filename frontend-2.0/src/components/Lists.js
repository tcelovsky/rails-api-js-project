import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListCard from './ListCard';

class Lists extends Component {

    generateLists = () => {
        return this.props.lists.map(list => 
            <ListCard key={list.id} list={list} />
        )
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