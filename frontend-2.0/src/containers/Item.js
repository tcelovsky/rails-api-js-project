import React, { Component } from 'react';
import DeleteItemButton from './DeleteItemButton';
import EditItemButton from '../components/EditItemButton';
import { editItem } from '../actions/itemActions';
import { fetchLists } from '../actions/listsActions';
import { connect } from 'react-redux';

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditable: false
        }
    }

    isEditable = () => {
        this.setState({
            isEditable: true
        })
    }

    handleChange = (e) => {
        this.setState({
            item: {
                content: e.target.value,
                id: this.props.item.id,
                list_id: this.props.item.list_id
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        editItem(this.state.item)
        .then(json => this.props.fetchLists(json))
        .then(this.setState({
            isEditable: false
        }))
    }

    render() {
        if (this.state.isEditable) {
            return (
                <div className="edit-item-container">
                <form>
                    <input type="text" onChange={this.handleChange} defaultValue={this.props.item.content}></input>
                    <input type="submit" value="Save" onClick={e => this.handleSubmit(e)}></input>
                </form>
                </div>
            )
        } else {
            return (
                <li className="list-item" id={this.props.item.id}>{this.props.item.content}
                <div className="buttons-container">
                    <DeleteItemButton id={this.props.item.id}/>
                    <EditItemButton isEditable={this.isEditable}/>
                </div>
                </li>
            )
        }
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchLists: () => dispatch(fetchLists())
    }
}
  
export default connect(null, mapDispatchToProps)(Item);