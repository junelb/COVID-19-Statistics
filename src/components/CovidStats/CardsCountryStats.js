import React from 'react';
// import logo from './logo.svg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import moment from 'moment/min/moment.min.js'; // This work too
// import moment from 'moment';

// import Temp from './components/Temp/Temp.js'

// import { CircularProgress } from '@material-ui/core';
// import { CircularProgress, Typography } from '@material-ui/core';

class CardsCountryStats extends React.PureComponent {
	constructor(props) {
    super(props);
    // this.state = {};

    this.handleClickBackToGlobalStats = this.handleClickBackToGlobalStats.bind(this);
	}

	handleClickBackToGlobalStats(event) {
		this.setActiveView('global');
	}

	// setActiveView = (activeView) => {
	setActiveView(activeView) {
    // App method
    this.props.setActiveView(activeView);
  }

  // TODO: Delete this function soon
  // doNotRoundOff(number) {
  doNotRoundOff = (number) => {
		var output = number.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
		// return number.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

		return output;

		/*return array.sort(function(a, b) {
			var x = a[key]; var y = b[key];
			return ((x > y) ? -1 : ((x > y) ? 1 : 0));
		});*/
	}

	/*componentDidMount() {
		// const { country, result, globalCases, globalDeaths, error, worldCasesShare } = this.props;
		// var temp = this.doNotRoundOff((new Number(this.props.result.cases) / new Number(this.props.globalCases)) * 100);
		// var temp = this.doNotRoundOff((this.props.result.cases / this.props.globalCases) * 100);
		// alert(this.props.country);

		// this.setState({ worldCasesShare: this.doNotRoundOff(this.props.result.cases.toNumber()) });
	}

	componentWillReceiveProps(nextProps) {
	  alert(this.props.country); 
	}*/

	render() {
		const { country, result, globalCases, globalDeaths, error } = this.props; // , isLoaded

    if (!country) {
      return <div></div>;
    } else {
    /*if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      // return <div>Loading...</div>;
      return <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />;
    } else {*/
      return (
      	<div className="CardsCountryStats">

      		<div className="d-sm-flex align-items-center justify-content-between mb-4">
				    <h1 className="h3 mb-0 text-gray-800">{country==='Global'||country==='global'?'Global':country} Statistics</h1>
					</div>
	        <div className="row">

	        {/*<!-- Total Cases Card -->*/}
				    <div className="col-xl-3 col-md-6 mb-4">
				        <div className="card border-left-primary shadow h-100 py-2">
				            <div className="card-body">
				                <div className="row no-gutters align-items-center">
				                    <div className="col mr-2">
				                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Cases ({country})</div>
				                        <div className="h5 mb-0 font-weight-bold text-gray-800">{error ? '' : new Number(result.cases).toLocaleString()}</div>
				                    </div>
				                    <div className="col-auto">
				                    	<div className="row">
				                    		<div className="col-auto">
				                        	<small className="text-primary">{error ? '' : Math.floor((new Number(result.cases / globalCases) * 100)).toLocaleString() + '% worldwide'}</small>
				                        </div>
		                       		</div>
		                       		<div className="row">
				                        <div className="col-auto">
				                        	<small className="text-primary">{error ? '' : '+' + new Number(result.todayCases).toLocaleString() + ' today'}</small>
				                    		</div>
				                    	</div>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>

				    {/*<!-- Total Deaths Card -->*/}
				    <div className="col-xl-3 col-md-6 mb-4">
				        <div className="card border-left-danger shadow h-100 py-2">
				            <div className="card-body">
				                <div className="row no-gutters align-items-center">
				                    <div className="col mr-2">
			                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Total Deaths ({country})</div>
			                        <div className="h5 mb-0 font-weight-bold text-gray-800">{error ? '' : new Number(result.deaths).toLocaleString()}</div>
				                    </div>
				                    <div className="col-auto">
				                    	<div className="row">
				                    		<div className="col-auto">
			                        		<small className="text-danger">{error ? '' : Math.floor((new Number(result.deaths / globalDeaths) * 100)).toLocaleString() + '% worldwide'}</small>
			                   				</div>
		                       		</div>
		                       		<div className="row">
				                    		<div className="col-auto">
			                        		<small className="text-danger">{error ? '' : '+' + new Number(result.todayDeaths).toLocaleString() + ' today'}</small>
			                   				</div>
		                       		</div>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>

				  {/*<!-- Total Recovered Card -->*/}
				    <div className="col-xl-3 col-md-6 mb-4">
				        <div className="card border-left-success shadow h-100 py-2">
				            <div className="card-body">
				                <div className="row no-gutters align-items-center">
				                    <div className="col mr-2">
				                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total Recovered ({country})</div>
				                        <div className="h5 mb-0 font-weight-bold text-gray-800">{error ? '' : new Number(result.recovered).toLocaleString()}</div>
				                    </div>
				                    <div className="col-auto">
				                        <small className="text-success">{error ? '' : new Number(result.active).toLocaleString() + ' active'}</small>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>

				    {/*<!-- Critical Card -->*/}
				    <div className="col-xl-3 col-md-6 mb-4">
				        <div className="card border-left-warning shadow h-100 py-2">
				            <div className="card-body">
				                <div className="row no-gutters align-items-center">
				                    <div className="col mr-2">
				                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Critical ({country})</div>
				                        <div className="h5 mb-0 font-weight-bold text-gray-800">{error ? '' : new Number(result.critical).toLocaleString()}</div>
				                    </div>
				                    <div className="col-auto">
				                        <small className="text-warning">{error ? '' : new Number(result.casesPerOneMillion).toLocaleString() + '  cases / million'}</small>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>

				    {/*<div className="col-xl-1 col-md-1 mb-1">
					    <button className="btn-primary" onClick={this.handleClickBackToGlobalStats}>BACK</button>
						</div>*/}
					</div>

				</div>
      );
    } // if (!this.props.country)
	} // render()

}

export default CardsCountryStats;
