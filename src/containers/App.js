import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import '../containers/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      SearchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }


  onSearchChange = (event) => {
    this.setState({ SearchField: event.target.value });
  }

  render() {
    const { robots, SearchField } = this.state;
    const filteredrobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(SearchField.toLowerCase());
    })
    return !robots.length ?
    <h1 className="tc">Loading</h1> :
    (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox SearchChange={ this.onSearchChange }/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ filteredrobots } />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
