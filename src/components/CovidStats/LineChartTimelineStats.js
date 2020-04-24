import React from 'react';

import { Line } from 'react-chartjs-2'

class LineChartTimelineStats extends React.PureComponent {
	
	render() {
		const { country, errorTimeLine, resultTimeLine } = this.props;

		/*var data2 = {
		  labels: ['2020-01-22', '2020-01-25'],
		  datasets: [
		    {
		      label: 'Cases',
		      fill: false,
		      borderWidth: 1.5,
		      borderAlign: 'center',
		      borderColor: 'rgba(54, 162, 235, 1)',
		      hoverBackgroundColor: 'rgba(54, 162, 235, 1)',
		      backgroundColor: 'rgba(54, 162, 235, 0.9)',
		      data: [
			      {
					    x: '2020-01-22',
					    y: 10
						},
						{
					    x: 15,
					    y: 15
						}
					]
		    },
		    {
		      label: 'Deaths',
		      // Line only
		      // lineTension: 0.5,
		      // Line only or used
		      fill: false,
		      borderWidth: 1.5,
		      borderAlign: 'center',
		      borderColor: 'rgba(255, 120, 142, 1)',
		      hoverBackgroundColor: 'rgba(255, 120, 142, 1)',
		      backgroundColor: 'rgba(255, 120, 142, 0.9)',
		      // Bar only
		      // legend:{
        //     display:true,
        //     position:'right'
        //   },
		      data: [
			      {
					    x: '2020-01-22',
					    y: 15
						},
						{
					    x: 30,
					    y: 30
						}
					]
		    },
		    {
		      label: 'Recovered',
		      fill: false,
		      borderWidth: 1.5,
		      borderAlign: 'center',
		      borderColor: 'rgba(92, 184, 92, 1)',
		      hoverBackgroundColor: 'rgba(92, 184, 92, 1)',
		      backgroundColor: 'rgba(92, 184, 92, 0.9)',
		      data: [
			      {
					    y: 3
						},
						{
					    y: 7
						}
					]
		    }
		  ]
		};*/

		var data = {
		  labels: [],
		  datasets: []
		};

		if (errorTimeLine || country == 'Global') {
			data = {
			  labels: [],
			  datasets: []
			};
		}

		var arrayTimelineDate = new Array();
		// var arrayTimelineCases = new Array();

		/*resultTimeLine.map(data => (
			// data.map(timeline => (
			// 	arrayTimelineDate.push(timeline[0].date)
   //  	))
    	data['labels'].push(arrayTimelineDate)
    ));*/

		// console.log(arrayTimelineDate);

		// arrayTimelineCases.push(timeline[0].cases)
    // 

    // data.labels.push(arrayTimelineDate);
    // data.datasets[0].data[0].y.push(arrayTimelineCases);

    // data['labels'].push({ "country":row.country,"cases":row.cases,"deaths":row.deaths,"recovered":row.recovered })
		// objData["data"].push

		return (
			<div className="">
			<Line data={data}
				options={{
          title:{
            display:true,
            // text:'Global Case Distribution',
            fontSize:18
          },
          legend:{
            display:true,
            position:'bottom',
            // circumference: 5
          },
          tooltips: {
				    callbacks: {
				      label: function(toolTipItem, data) {
				        let value = data.datasets[0].data[toolTipItem.index].y
				        return " "+value.toLocaleString()
				      },
				      title: function(toolTipItem, data) {
				        return data.labels[toolTipItem[0].index];
				      }
				    },
				    bodyFontSize: 13
				  }
        }}
			/>
			</div>
		);
	}

}

export default LineChartTimelineStats;