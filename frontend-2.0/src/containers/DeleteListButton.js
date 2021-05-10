import React, { Component } from 'react';
import { deleteList } from '../actions/listActions';
import { fetchLists } from '../actions/listsActions';
import { connect } from 'react-redux';

class DeleteListButton extends Component {
    handleClick = e => {
        e.preventDefault();
        const id = e.target.id
        deleteList(id)
        .then(json => this.props.fetchLists(json))
    }

    render() {
        return (
            <div className="button-holder">
                <button  type="button" id={this.props.id} className="delete-list-button" onClick={ e => this.handleClick(e) }>
                    x
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchLists: () => dispatch(fetchLists())
    }
}
  
export default connect(null, mapDispatchToProps)(DeleteListButton);