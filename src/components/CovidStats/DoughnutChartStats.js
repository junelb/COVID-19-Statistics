import React from 'react';

import { Doughnut } from 'react-chartjs-2'
// import { Doughnut, Pie } from 'react-chartjs-2'

class DoughnutChartStats extends React.PureComponent {
	render() {
		// const { data } = this.state;
		const { cases, deaths, recovered, error } = this.props;

		var data = {
		  labels: ['Cases', 'Deaths', 'Recovered'],
		  datasets: [
		    {
		      // label: 'Global Case Distribution',
		      // Line only
		      // lineTension: 0.5,
		      borderWidth: 1.5,
		      borderAlign: 'center',
		      borderColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            // 'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            // 'rgba(255, 255, 255, 1)',
            // 'rgba(255, 255, 255, 1)'
		      ],
		      hoverBackgroundColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 120, 142, 1)',
            // 'rgba(255, 206, 86, 1)',
            'rgba(92, 184, 92, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)'
          ],
		      backgroundColor: [
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 120, 142, 0.9)',
            // 'rgba(255, 206, 86, 0.9)',
            'rgba(92, 184, 92, 0.9)',
            // 'rgba(153, 102, 255, 0.9)',
            // 'rgba(255, 159, 64, 0.9)'
		      ],
		      // Bar, tested on Doughnut
		      /*legend:{
            display:true,
            position:'right'
          },*/
		      data: [cases, deaths, recovered]
		    }
		  ]
		};

		if (error) {
			data = {
		  labels: ['Cases', 'Deaths', 'Recovered'],
			  datasets: [
			    {
			      borderWidth: 1.5,
			      borderAlign: 'center',
			      borderColor: [
	            'rgba(255, 255, 255, 1)',
	            'rgba(255, 255, 255, 1)',
	            'rgba(255, 255, 255, 1)',
			      ],
			      hoverBackgroundColor: [
	            'rgba(54, 162, 235, 1)',
	            'rgba(255, 120, 142, 1)',
	            'rgba(75, 192, 192, 1)',
	          ],
			      backgroundColor: [
	            'rgba(54, 162, 235, 0.9)',
	            'rgba(255, 120, 142, 0.9)',
	            'rgba(75, 192, 192, 0.9)',
			      ],
			      data: []
			    }
			  ]
			};
		}

		/*console.log("Log starts...");
		console.log(data);*/

		// var datasets = data['datasets'];
		/*var datasets = data.datasets[0];

		var arrayGlobalStats = new Array(globalCases, globalDeaths, globalRecovered); 
		var arrayGlobalStats2 = [globalCases, globalDeaths, globalRecovered]; 

		var objData = new Object();
		// dataTemp['data'].push(arrayGlobalStats);
		// datasets.push(dateTemp);

		// objData["data"].push(arrayGlobalStats);
		
		// datasets[0].data.push({ globalCases, globalDeaths, globalRecovered });
		// data.datasets[0].data.push(arrayGlobalStats);

		// datasets.data.push(arrayGlobalStats);

		data.datasets[0].data.push(arrayGlobalStats2);*/

		return (
			<Doughnut data={data}
				options={{
          title:{
            display:false,
            // text:'Global Case Distribution',
            fontSize:18
          },
          legend:{
            display:true,
            position:'right'
          },
          tooltips: {
				    callbacks: {
				      label: function(toolTipItem, data) {
				        let value = data.datasets[0].data[toolTipItem.index]
				        return " "+value.toLocaleString()
				      },
				      title: function(toolTipItem, data) {
				        return data.labels[toolTipItem[0].index];
				      }
				    },
				    bodyFontSize: 13
				  },
				  responsive: true,
          // maintainAspectRatio : true,
          cutoutPercentage: 75,
        }}
			/>
		);
	}

}

export default DoughnutChartStats;