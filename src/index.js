import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {HashRouter as Router} from 'react-router-dom';
import SiteLayout from './layout/site-layout'
// import registerServiceWorker from './registerServiceWorker'; // don't have this because didn't use create-react-app but could be worth looking into as apparently it helps with accessibility due to slow connections

const App = (props) => (
  <Router>
    <SiteLayout />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
