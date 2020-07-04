import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {connect} from 'react-redux';
import {setSearchField, requestRobots} from '../actions.js';
import ErrorBoundary from '../components/ErrorBoundary';
import '../containers/App.css';

const mapStatetoProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onSearchChange: (event) => {dispatch(setSearchField(event.target.value))},
    onRequestRobots: () => dispatch(requestRobots())
  }
}


class App extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }


  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredrobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
    <h1 className="tc">Loading</h1> :
    (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox SearchChange={ onSearchChange }/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ filteredrobots } />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
