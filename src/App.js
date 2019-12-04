import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    }
  }

  render(){
    return (
      <div className='App'>
        <SearchBar 
          searchTerm={this.state.searchTerm}
          filterOption={this.state.searchTerm}/>
        <FilterableList 
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOptions}
          files={this.props.files} />
      </div>
    );
  }
}

export default App;