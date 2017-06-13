import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Parties from './Parties';
import Theatres from './Theatres';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


const Single = ({ match }) => (
  <h1>{match.params.id}</h1>
);

ReactDOM.render(

  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/parties" component={Parties} />
      <Route path="/theatres" component={Theatres} />
    </Switch>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
