import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Page from './components/Page'
import Home from './screens/Home';
import Person from './screens/Person';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="content">
            <Route exact path="/" render={props => <Page {...props} component={Home} title="Home" />} />
            <Route path="/person/:username" render={props => <Page {...props} component={Person} title="Person" />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
