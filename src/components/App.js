import React from 'react';
import Search from './Search'
import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <Header/>
        </div>
        <div className='row'>
          <Search/>
        </div>
      </div>
    );
  }
}

export default App;
