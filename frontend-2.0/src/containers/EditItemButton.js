import React, { Component } from 'react';
import { editItem } from '../actions/itemActions';
import { fetchLists } from '../actions/listsActions';
import { connect } from 'react-redux';

class EditItemButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {
                content: '',
                list_id: ''
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            item: {
                content: e.target.value,
                list_id: this.props.id
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // editItem(this.state.item)
        // .then(json => this.props.fetchLists(json))
        // .then(this.setState({
        //     item: {
        //         content: '',
        //         list_id: ''
        //     }
        // }))
    }

    render() {
        return (
            <div className="button-holder">
                <button  type="button" id={this.props.id} 
                className="edit-item-button" onClick={ e => this.handleClick(e) }>Edit</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchLists: () => dispatch(fetchLists())
    }
}
  
export default connect(null, mapDispatchToProps)(EditItemButton);