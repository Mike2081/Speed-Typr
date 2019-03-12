import React, { Component } from 'react';
import Start from './Start'
import '../Styles/App.css';
import Page from './Page'
import How from './How'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path={'/page'} exact component={ () => <Page />}  />
              <Route path={'/start'} exact component={() => <Start />} />
              <Route path={'/how-to-play'} exact component={() => <How />} />
              <Route path={'/'} exact render={() => <Redirect to='/start'/>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
