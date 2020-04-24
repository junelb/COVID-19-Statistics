import React from 'react';
// import logo from './logo.svg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import moment from 'moment/min/moment.min.js'; // This work too
// import moment from 'moment';

// import Temp from './components/Temp/Temp.js'

import { CircularProgress } from '@material-ui/core';
// import { CircularProgress, Typography } from '@material-ui/core';

class CardsGlobalStats extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      result: []
    };
    // this.state = {username: '',password: ''};

    // this.handleChangeUsername = this.handleChangeUsername.bind(this);
    // this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    
    // this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
	}

	/*handleChangeUsername(event) {
		this.setState({username: event.target.value});
	}

	handleSubmitLogin(event) {
    alert('A name was submitted: ' + this.state.username);
    event.preventDefault();
	}*/

	setGlobalCasesFromChild = (globalCases) => {
		// App method
    this.props.setGlobalCasesFromChild(globalCases);
  }

	setGlobalDeathsFromChild = (globalDeaths) => {
		// App method
    this.props.setGlobalDeathsFromChild(globalDeaths);
  }

	setGlobalRecoveredFromChild = (globalDeaths) => {
		// App method
    this.props.setGlobalRecoveredFromChild(globalDeaths);
  }

	fetchGlobalStats = () => {
		fetch("http://api.coronastatistics.live/all")
    // fetch("http://localhost/covid-19-api/all.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            /*items: result.items*/
            result: result
          }, function() {
          	this.setGlobalCasesFromChild(result.cases);
          	this.setGlobalDeathsFromChild(result.deaths);
          	this.setGlobalRecoveredFromChild(result.recovered);
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
	}

	componentDidMount() {
    this.fetchGlobalStats();
  }

	render() {
	  const { error, isLoaded, result } = this.state;
	  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      // return <div>Loading...</div>;
      return <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />;
    } else {
      return (
      	<div className="CardsGlobalStats">

      		<div className="d-sm-flex align-items-center justify-content-between mb-4">
				    <h1 className="h3 mb-0 text-gray-800">Global Statistics</h1>
					</div>
	        <div className="row">
	        {/*<!-- Total Case Card -->*/}
				    <div className="col-12 col-xl-4 col-md-12 mb-4">
				        <div className="card border-left-primary shadow h-100 py-2">
				            <div className="card-body">
				                <div className="row no-gutters align-items-center">
				                    <div className="col mr-2">
				                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Cases</div>
				                        <div className="h5 mb-0 font-weight-bold text-gray-800" id="cases">{result.cases.toLocaleString()}</div>
				                    </div>
				                    <div className="col-auto">
				                        <i className="fas fa-hospital fa-2x text-gray-300"></i>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>

				    {/*<!-- Total Deaths Card -->*/}
				    <div className="col-12 col-xl-4 col-md-12 mb-4">
				        <div className="card border-left-danger shadow h-100 py-2">
				            <div className="card-body">
				                <div className="row no-gutters align-items-center">
				                    <div className="col mr-2">
				                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Total Deaths</div>
				                        <div className="h5 mb-0 font-weight-bold text-gray-800" id="deaths">{result.deaths.toLocaleString()}</div>
				                    </div>
				                    <div className="col-auto">
				                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>

						{/*<!-- Total Recovered Card -->*/}
				    <div className="col-12 col-xl-4 col-md-12 mb-4">
				        <div className="card border-left-success shadow h-100 py-2">
				            <div className="card-body">
				                <div className="row no-gutters align-items-center">
				                    <div className="col mr-2">
				                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total Recovered</div>
				                        <div className="h5 mb-0 font-weight-bold text-gray-800" id="recovered">{result.recovered.toLocaleString()}</div>
				                    </div>
				                    <div className="col-auto">
				                        <i className="fas fa-stethoscope fa-2x text-gray-300"></i>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				    
				</div>
						
			</div>
      );
    }
	}

}

/*const deathStyle = {
	color: 'rgba(255, 120, 142, 1)'
}
const deathCardBorderLeftColorStyle = {
	borderLeftColor: 'rgba(255, 120, 142, 1)',
	color: 'rgba(255, 120, 142, 1)'
}*/
// style={deathCardBorderLeftColorStyle}

export default CardsGlobalStats;
