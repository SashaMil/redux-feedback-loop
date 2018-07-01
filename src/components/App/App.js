import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css';

// Components
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Confirmation from '../Confirmation/Confirmation';
import Admin from '../Admin/Admin';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
              <Route exact path='/' component={Feeling}/>
              <Route exact path='/understanding' component={Understanding}/>
              <Route exact path='/support' component={Support}/>
              <Route exact path='/comment' component={Comment}/>
              <Route exact path='/confirmation' component={Confirmation}/>
              <Route exact path='/admin' component={Admin}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
