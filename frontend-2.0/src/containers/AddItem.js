import React, { Component } from 'react';
import { addItem } from '../actions/itemActions';
import { fetchLists } from '../actions/listsActions';
import { connect } from 'react-redux';

class AddItem extends Component {
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
        addItem(this.state.item)
        .then(json => this.props.fetchLists(json))
        .then(this.setState({
            item: {
                content: '',
                list_id: ''
            }
        }))
    }

    render() {
        return (
            <div className="add-item-container">
                <form>
                    <input type="text" onChange={this.handleChange} value={this.state.item.content}></input>
                    <input type="submit" value="Add Item" onClick={e => this.handleSubmit(e)}></input>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchLists: () => dispatch(fetchLists())
    }
}
  
export default connect(null, mapDispatchToProps)(AddItem);