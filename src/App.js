import React from 'react';
// import logo from './logo.svg';
import './App.css';

import CardsGlobalStats from './components/CovidStats/CardsGlobalStats.js';
import CardsCountryStats from './components/CovidStats/CardsCountryStats.js';
import TableCountries from './components/CovidStats/TableCountries.js';

import ChartsAndRatesContainer from './components/CovidStats/ChartsAndRatesContainer.js';

// import { BrowserRouter, Route, Link } from "react-router-dom";

// import { CircularProgress } from '@material-ui/core';
// import { CircularProgress, Typography } from '@material-ui/core';
	
// function App() {
class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      resultCountry: [],
      errorTimeLine: null,
      isLoadedTimeLine: false,
      resultTimeLine: [],
      activeView: 'global',
      country: 'Global',
      globalCases : 0,
      globalDeaths : 0,
      globalRecovered : 0,
      countryCases : 0,
      countryDeaths : 0,
      countryRecovered : 0
    };

    // this.setActiveView = this.setActiveView.bind(this);
    this.setCountry = this.setCountry.bind(this);
    // this.fetchCountryStats = this.fetchCountryStats.bind(this);
  }

  setActiveView = (activeView) => {
  // setActiveView(activeView) {
    this.setState({ activeView: activeView });
  }

  setCountry = (selectedCountry) => {
  // setCountry(selectedCountry) {
    // this.setState({country: selectedCountry});

    this.setState({ country: selectedCountry=='Global'||selectedCountry=='global'?'Global':selectedCountry }, function() {
    // this.setState({ country: selectedCountry }, () => {
	    this.fetchCountryStats();
      this.fetchTimelineStats();
	  });

	  // this.fetchCountryStats(selectedCountry);
  }

  // Global setter functions
  setGlobalCasesFromChild = (globalCases) => {
    this.setState({globalCases: globalCases});
  }
  setGlobalDeathsFromChild = (globalDeaths) => {
    this.setState({globalDeaths: globalDeaths});
  }
  setGlobalRecoveredFromChild = (globalRecovered) => {
    this.setState({globalRecovered: globalRecovered});
  }

  // Country setter functions
  /*setCountryCasesFromChild = (countryCases) => {
    this.setState({countryCases: countryCases});
  }
  setCountryDeathsFromChild = (countryDeaths) => {
    this.setState({countryDeaths: countryDeaths});
  }
  setCountryRecoveredFromChild = (countryRecovered) => {
    this.setState({countryRecovered: countryRecovered});
  }*/

  // fetchCountryStats = (activeView, selectedCountry) => {
  // fetchCountryStats(activeView, selectedCountry) {
  fetchCountryStats() {
  	// alert("DEBUG: App->country = "+this.state.country);

  	fetch("http://api.coronastatistics.live/countries/"+(this.state.country=='Global'||this.state.country=='global'?'':this.state.country))
    // fetch("http://localhost/covid-19-api/countries"+(this.state.country=='Global'||this.state.country=='global'?'':'_'+this.state.country)+".php")
    // fetch("http://localhost/covid-19-api/country_USA.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            resultCountry: result,
            error: false
          }, function() {
          	// console.log(result);
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

      // alert(this.state.country + " Junel");
  }

  fetchTimelineStats = () => {
    fetch("http://api.coronastatistics.live/timeline/"+(this.state.country=='Global'||this.state.country=='global'?'global':this.state.country))
    // fetch("http://localhost/covid-19-api/timeline_"+(this.state.country=='Global'||this.state.country=='global'?'global':this.state.country)+".php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoadedTimeLine: true,
            resultTimeLine: result
          }, function() {
            // console.log(result);
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoadedTimeLine: true,
            errorTimeLine: error
          });
        }
      )
  }

  /*componentDidMount() {
    // this.fetchCountryStats();
  }*/

  /*shouldComponentUpdate() {
  	// setTimeout(function(){
			// this.fetchCountryStats();
		// }.bind(this), 2000);
  }*/

  /*componentDidUpdate() {
    this.fetchCountryStats();
  }*/

  /*UNSAFE_componentWillMount() {
  	this.forceUpdate();
  }*/

  /*componentWillUnmount() {
  }*/

  // Only use this on child components that set the parent-passed props as child-state
  // This is not recommended as anti-pattern or not unidirectional
  /*componentWillReceiveProps(nextProps) {
	  this.setState({ temp: nextProps.temp });  
	}*/

  render () { // This method does not exist if using function App() {} instead of class App...
  	const { error, isLoaded, resultCountry, errorTimeLine, isLoadedTimeLine, resultTimeLine, activeView, country, globalCases, globalDeaths, globalRecovered } = this.state;
  	
  	/*if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      // return <div>Loading...</div>;
      return <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />;
    } else {*/
		  return (
		  	<div>
		  	{/*<html lang="en">
				<head>
					<title>Corona Virus Statistics</title>
				  <meta charSet="utf-8" />
				  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				  <meta name="description" content="" />
				  <meta name="author" content="" />
				</head>
				<body id="page-top">
					<CardsGlobalStats />
				</body>
				</html>*/}

					{/*<!-- Page Wrapper -->*/}
				  <div id="wrapper">

				    {/*<!-- Content Wrapper -->*/}
				    <div id="content-wrapper" className="d-flex flex-column">

				      {/*<!-- Main Content -->*/}
				      <div id="content">

				        {/*<!-- Topbar -->*/}
				        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
				            <div className="navbar-brand"><a href="/">Corona Virus Statistics</a></div>
				        </nav>
				        {/*<!-- End of Topbar -->*/}

				        {/*<!-- Begin Page Content -->*/}
				        <div className="container-fluid">

								{/*<Link to="/">dfddf</Link>*/}
                {/*&& country == ''*/}
								{/*this.state.activeView == 'Global' ? <CardsGlobalStats /> : <CardsCountryStats country={country} result={resultCountry} setActiveView={this.setActiveView} />*/}
								<CardsGlobalStats setGlobalCasesFromChild={this.setGlobalCasesFromChild} setGlobalDeathsFromChild={this.setGlobalDeathsFromChild} setGlobalRecoveredFromChild={this.setGlobalRecoveredFromChild} />

								{country !== 'Global' && country !== 'global' ? <CardsCountryStats country={country} result={resultCountry} globalCases={globalCases} globalDeaths={globalDeaths} error={error} /> : ''}
                {country === 'Global' ? <ChartsAndRatesContainer country={country} cases={globalCases} deaths={globalDeaths} recovered={globalRecovered} error={error} errorTimeLine={errorTimeLine} resultTimeLine={resultTimeLine} /> : <ChartsAndRatesContainer country={country} cases={resultCountry.cases} deaths={resultCountry.deaths} recovered={resultCountry.recovered} error={error} errorTimeLine={errorTimeLine} resultTimeLine={resultTimeLine} />}

                {/*<LineChartGlobalTimelineStats globalCases={globalCases} globalDeaths={globalDeaths} globalRecovered={globalRecovered} />*/}
								<TableCountries activeView={activeView} setActiveView={this.setActiveView} country={country} setCountry={this.setCountry} globalCases={globalCases} globalDeaths={globalDeaths} globalRecovered={globalRecovered} />{/* fetchCountryStats={this.fetchCountryStats}*/}

								</div>
				        {/*<!-- /.container-fluid -->*/}

					      </div>
					      {/*<!-- End of Main Content -->*/}

					      {/*<!-- Footer -->*/}
					      <footer className="sticky-footer bg-white">
					        <div className="container my-auto">
					          <div className="copyright text-center my-auto">
					            <span>Copyright &copy; Banayag Software 2020. Layout inspired from <a href="https://corona.neilsalazar.info/" target="_blank" rel="noopener noreferrer">NeilSalazar.info</a></span>
					          </div>
					        </div>
					      </footer>
					      {/*<!-- End of Footer -->*/}

					    </div>
					    {/*<!-- End of Content Wrapper -->*/}

					  </div>
					  {/*<!-- End of Page Wrapper -->*/}

					  {/*<!-- Scroll to Top Button-->*/}
					  <a className="scroll-to-top rounded" href="#page-top">
					    <i className="fas fa-angle-up"></i>
					  </a>
				</div>
		  );
	  // } // if (error)
	} // render()
}

export default App;
