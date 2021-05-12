import React, { Component } from 'react';
import ListTitle from './ListTitle';
import Items from './Items';
import DeleteListButton from '../containers/DeleteListButton';
import AddItem from '../containers/AddItem';
import EditListButton from './EditListButton';
import { editList } from '../actions/listActions';
import { fetchLists } from '../actions/listsActions';
import { connect } from 'react-redux';

class ListCard extends Component {
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
            list: {
                title: e.target.value,
                id: this.props.list.id
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        editList(this.state.list)
        .then(json => this.props.fetchLists(json))
        .then(this.setState({
            isEditable: false
        }))
    }

    render() {
        if (this.state.isEditable) {
            return (
                <div className="list-card" id={this.props.list.id}>
                <div className="edit-list-container">
                <form>
                    <input type="text" onChange={this.handleChange} defaultValue={this.props.list.title}></input>
                    <input type="submit" value="Save" onClick={e => this.handleSubmit(e)}></input>
                </form>
                </div>
                <Items items={this.props.list.list_items}/>
                <AddItem id={this.props.list.id}/>
                </div>
            )
        } else {
            return (
                <div className="list-card" id={this.props.list.id}>
                    <div className="buttons-container">
                        <DeleteListButton id={this.props.list.id}/>
                        <EditListButton isEditable={this.isEditable}/>
                    </div>
                    <ListTitle title={this.props.list.title}/>
                    <Items items={this.props.list.list_items}/>
                    <AddItem id={this.props.list.id}/>
                </div>
            )
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchLists: () => dispatch(fetchLists())
    }
}
  
export default connect(null, mapDispatchToProps)(ListCard);