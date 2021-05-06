import '../styles/styles.css';
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/listActions';
import Lists from '../components/Lists';

class App extends Component {

  componentDidMount() {
    this.props.fetchLists()
  }
  
  render() {
    return (
        <div className="App">
          <Switch>
            <Lists lists={this.props.lists}/>
            {/* <Route exact path='/' render={() => <Link to={'/lists'}><Home /></Link>} /> */}
            {/* <Route path='/lists' render={routerProps =>
	            <Lists {...routerProps} lists={this.props.lists} />} /> */}
            {/* <Route path='/about' component={About} /> */}
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLists: () => dispatch(fetchLists())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);