import React from 'react';
// import React, { Component } from 'react';

// import logo from './logo.svg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import moment from 'moment/min/moment.min.js'; // This work too
// import moment from 'moment';

// import Temp from './components/Temp/Temp.js'

// import { BrowserRouter, Route, Link } from "react-router-dom";

import { CircularProgress } from '@material-ui/core';
// import { CircularProgress, Typography } from '@material-ui/core';

// import { MDBDataTable } from 'mdbreact';
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

import MaterialTable from 'material-table'

// import BootstrapTable from 'reactjs-bootstrap-table';
// require('bootstrap/dist/css/bootstrap.css');

// import { SvgIconProps } from '@material-ui/core/SvgIcon';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import SortArrow from '@material-ui/icons/Sort';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Clear from '@material-ui/icons/Clear';

class TableCountries extends React.Component {
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
    // this.handleClick = this.handleClick.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    // this.handleSelectChange = this.handleSelectChange.bind(this);

    this.setActiveView = this.setActiveView.bind(this);
    this.setCountry = this.setCountry.bind(this);
    this.fetchCountriesTable = this.fetchCountriesTable.bind(this);
	}

	/*handleChangeUsername(event) {
		this.setState({username: event.target.value});
	}
	
	handleSubmitLogin(event) {
    alert('A name was submitted: ' + this.state.username);
    event.preventDefault();
	}*/

	/*handleClick(event, rowData) {
    // alert('Clicked');
    alert(rowData[0]);
    
    // event.preventDefault();
	}*/
	
	// handleRowClick = (event, rowData) => {
	handleRowClick(event, rowData) {
		// TODO: Delete this code soon
		// this.setState({ country: rowData['country'] });
		// event.preventDefault();
		// event.stopPropagation();

		// this.setActiveView('global');
		this.setActiveView('country');
		this.setCountry(rowData['country']==='Global'||rowData['country']==='global'?'global':rowData['country']);

		// this.fetchCountryStats('country', rowData['country']);

		// alert(rowData['country']);

		
		

    // let rslts = this.state.results;
    // const index = rslts.indexOf(rowData);
    // rslts[index].tableData.checked = !rslts[index].tableData.checked;
    // this.setState({ results: rslts }, () => {
    //   this.handleSelectChange(event, rowData);
    // });
  };

  // handleSelectChange = (event, rowData) => {
  //   console.log("[fired]::handleSelectionChange", rowData);
  // };

  sort_by_key_asc = (array, key) => {
  // sort_by_key = function(array, key) {
		return array.sort(function(a, b) {
			var x = a[key]; var y = b[key];
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
	}

	sort_by_key_desc = (array, key) => {
		return array.sort(function(a, b) {
			var x = a[key]; var y = b[key];
			return ((x > y) ? -1 : ((x > y) ? 1 : 0));
		});
	}

	// setActiveView = (activeView) => {
	setActiveView(activeView) {
    // App method
    this.props.setActiveView(activeView);
  }

  // setCountry = (selectedCountry) => {
  setCountry(selectedCountry) {
    // App method
    this.props.setCountry(selectedCountry);
    // this.props.fetchCountryStats();
  }

    // setCountry = (selectedCountry) => {
  /*fetchCountryStats(activeView, selectedCountry) {
    // App method
    this.props.fetchCountryStats(activeView, selectedCountry);
    // this.props.fetchCountryStats();
  }*/

	// fetchCountriesTable = () => {
	fetchCountriesTable() {
		fetch("http://api.coronastatistics.live/countries")
    // fetch("http://localhost/covid-19-api/countries.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            /*items: result.items*/
            result: result
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
    this.fetchCountriesTable();
  }

	render() {
		const { globalCases, globalDeaths, globalRecovered } = this.props;

		// Used in MDBDataTable
		/*var data = {
	    columns: [
	      {
	        label: 'Country',
	        field: 'country',
	        sort: 'asc'
	        // width: 150
	      },
	      {
	        label: 'Cases',
	        field: 'cases',
	        sort: 'asc'
	      },
	      {
	        label: 'Deaths',
	        field: 'deaths',
	        sort: 'asc'
	      },
	      {
	        label: 'Recovered',
	        field: 'recovered',
	        sort: 'asc'
	      }
	    ],
	    rows: [
	    			// {
        //       country: 'value column 1',
        //       cases: 'value column 1a',
        //       deaths: 'value column 1b',
        //       recovered: 'value column 2c',
        //       clickEvent: () => this.handleClick({country: 'value column 1'})
        //     },
        //     {
        //       country: 'value column 2',
        //       cases: 'value column 2a',
        //       deaths: 'value column 2b',
        //       recovered: 'value column 1c',
        //       clickEvent: () => this.handleClick({country: 'value column 2'})
        //     }
            ]
	  };*/

	  // Used in MaterialTable
	  var columns2 = [
      { title: 'Country', field: 'country'/*,
      	customSort: (a, b) => a.name.length - b.name.length*/
    	},
      { title: 'Cases', field: 'cases', type: 'numeric' },
      { title: 'Deaths', field: 'deaths', type: 'numeric' },
      { title: 'Recovered', field: 'recovered', type: 'numeric' }
  	];

  	// Used in MaterialTable
	  var data2 = [
    	// { country: 'Global', cases: globalCases.toLocaleString(), deaths: globalDeaths.toLocaleString(), recovered: globalRecovered.toLocaleString() }
  	];

  		  // var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';
		// var obj = JSON.parse(data);
		// obj['theTeam'].push({"teamId":"4","status":"pending"});

    // data = JSON.stringify(obj);

    // console.log(data);

	  const { error, isLoaded, result } = this.state;

	  // Used in MDBDataTable
		/*result.map(row => (
	  	data['rows'].push({ "country":row.country,"cases":row.cases,"deaths":row.deaths,"recovered":row.recovered })
	  	// data['rows'].push({"country":row.country,"cases":row.cases,"deaths":row.deaths,"recovered":row.recovered+"<MDBBtn color=\"purple\" size=\"sm\">Button</MDBBtn>"})
    ));*/

		// Used in MaterialTable
		data2.push({ "country":'Global',"cases":globalCases.toLocaleString(),"deaths":globalDeaths.toLocaleString(),"recovered":globalRecovered.toLocaleString(),"cases_sort":globalCases })

		// Used in MaterialTable
    result.map(row => (
	  	data2.push({ "country":row.country,"cases":row.cases.toLocaleString(),"deaths":row.deaths.toLocaleString(),"recovered":row.recovered == null ? 0 : row.recovered.toLocaleString(),"cases_sort":row.cases })
    ));

    data2 = this.sort_by_key_desc(data2, 'cases_sort');

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      // return <div>Loading...</div>;
      return <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />;
    } else {
      return (
      	<div className="row">
			    <div className="col-md-12">
		        <div className="card shadow mb-4">
	            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Affected Countries</h6>
	            </div>
	            <div className="card-body">
                <div className="table-responsive">
					      	{/*<MDBDataTable
					      		// responsive
					      		// scrollY
      							// maxHeight="70vh"
							      // small
							      paging={false}
							      // striped
							      // bordered
							      hover
							      data={data}
							      order={['cases', 'desc']}>
							    </MDBDataTable>*/}
					    		{/*<MDBTable scrollY maxHeight="70vh" searching={true}
					    			// scrollX
					    			// searching={true}
					    			// order={['cases', 'desc']}
					    		>
									  <MDBTableHead columns={data.columns} />
									  <MDBTableBody rows={data.rows} />
									</MDBTable>*/}
									<MaterialTable
										title=""
					          columns={columns2}
					          data={data2}
					          options={{
								      sorting: true
								    }}
					          icons={{
						          Check: () => <Check />,
						          DetailPanel: () => <ChevronRight />,
						          Export: () => <SaveAlt />,
						          Filter: () => <FilterList />,
						          FirstPage: () => <FirstPage />,
						          LastPage: () => <LastPage />,
						          NextPage: () => <ChevronRight />,
						          PreviousPage: () => <ChevronLeft />,
						          Search: () => <Search />,
						          SortArrow: () => <SortArrow />,
						          ThirdStateCheck: () => <Remove />,
						          ViewColumn: () => <ViewColumn />,
						          ResetSearch: () => <Clear />,
						        }}
						        onRowClick={this.handleRowClick}
					        />
								</div>
	            </div>
	        	</div>
	    		</div>
	    	</div>
      );
    }
	}

}

export default TableCountries;
