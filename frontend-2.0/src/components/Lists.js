import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListCard from './ListCard';
import AddList from './AddList';

class Lists extends Component {

    generateLists = () => {
        return this.props.lists.map(list => 
            <Link key={list.id} to={`/lists/${list.id}`}>
                {<ListCard key={list.id} list={list} />}
            </Link>
        )
    }

    render() {
        return (
            <main>
                <AddList />
                <div id="lists-container">
                    {this.generateLists()}
                </div>
            </main>
        )
    }
}

export default Lists;