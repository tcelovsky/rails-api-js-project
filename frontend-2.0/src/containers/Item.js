import React, { Component } from 'react';
import DeleteItemButton from './DeleteItemButton';
import EditItemButton from '../components/EditItemButton';
import { editItem } from '../actions/itemActions';
import { connect } from 'react-redux';

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {
                content: this.props.item.content,
                id: this.props.item.id,
                list_id: this.props.item.list_id
            },
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
            updatedItem: {
                content: e.target.value,
                id: this.state.item.id,
                list_id: this.state.item.list_id
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editItem(this.state.updatedItem)
        this.setState({
            item: {
                content: this.state.updatedItem.content,
                id: this.state.updatedItem.id,
                list_id: this.state.updatedItem.list_id
            },
            updatedItem: {
                content: '',
                id: '',
                list_id: ''
            },
            isEditable: false
        })
    }

    render() {
        if (this.state.isEditable) {
            return (
                <div className="edit-item-container">
                    <form>
                        <input type="text" onChange={this.handleChange} defaultValue={this.state.item.content}></input>
                        <input type="submit" value="Save" onClick={e => this.handleSubmit(e)}></input>
                    </form>
                </div>
            )
        } else {
            return (
                <li className="list-item" id={this.state.item.id}>{this.state.item.content}
                    <div className="buttons-container">
                        <DeleteItemButton id={this.state.item.id} />
                        <EditItemButton isEditable={this.isEditable} />
                    </div>
                </li>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        items: state.item
    }
}

const mapDispatchToProps = dispatch => {
    return {
      editItem: updatedItem => dispatch(editItem(updatedItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);