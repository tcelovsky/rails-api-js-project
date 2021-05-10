import React, { Component } from 'react';
import { addList } from '../actions/listActions';
import { fetchLists } from '../actions/listsActions';
import { connect } from 'react-redux';

class AddList extends Component {
    constructor() {
        super();
        this.state = {
          list: {
              title: ''
          }
        };
      }

    handleChange = e => {
        this.setState({
            list: {
                title: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        addList(this.state.list)
        .then(json => this.props.fetchLists(json))
        .then(this.setState({
            list: {
                title: ''
            }
        }))
    }

    render() {
        return (
            <div className="add-list-container">
                <form onSubmit={ e => this.handleSubmit(e) }>
                    <input type="text" onChange={this.handleChange} value={this.state.list.title}></input>
                    <input type="submit" value="Add List"></input>
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
  
export default connect(null, mapDispatchToProps)(AddList);
// export default AddList;