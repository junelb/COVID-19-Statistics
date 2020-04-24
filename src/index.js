import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { BrowserRouter as Router, Route } from 'react-router';
// import { Router, Route, Switch } from 'react-router';

// TODO: Test codes only delete them soon
// import CovidStatsAll from './components/CovidStats/CovidStatsAll.js';
// import CovidStatsCountries from './components/CovidStats/CovidStatsCountries.js';

// CSS imports
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';

// import '@fortawesome/react-fontawesome';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<Router>
	    <Route exact path="/" component={CovidStatsAll} />
			<Route path="/all" component={CovidStatsAll} />
		 	<Route path="/countries" component={CovidStatsCountries} />
	 	</Router>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
