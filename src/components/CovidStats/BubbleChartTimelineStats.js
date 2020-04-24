import React from 'react';

import { Bubble } from 'react-chartjs-2'

import moment from 'moment';

class BubbleChartTimelineStats extends React.PureComponent {
	render() {
		// const { data } = this.state;
		// const { globalCases, globalDeaths, globalRecovered } = this.props;

		var data = {
		  // labels: ['2020-01-22', '2020-01-25'],
		  datasets: [
		    {
		      label: 'Cases',
		      // Line only
		      // lineTension: 0.5,
		      // Line only or used
		      fill: true,
		      borderWidth: 1.5,
		      borderAlign: 'center',
		      borderColor: 'rgba(54, 162, 235, 1)',
		      hoverBackgroundColor: 'rgba(54, 162, 235, 1)',
		      backgroundColor: 'rgba(54, 162, 235, 0.9)',
		      // Bar only
		      /*legend:{
            display:true,
            position:'right'
          },*/
		      data: [
			      {
					    x: 4,
					    y: 10,
					    r: 2
						},
						{
					    x: 8,
					    y: 15,
					    r: 2
						}
					]
		    },
		    {
		      label: 'Deaths',
		      // Line only
		      lineTension: 0.5,
		      // Line only or used
		      fill: true,
		      borderWidth: 1.5,
		      borderAlign: 'center',
		      borderColor: 'rgba(255, 120, 142, 1)',
		      hoverBackgroundColor: 'rgba(255, 120, 142, 1)',
		      backgroundColor: 'rgba(255, 120, 142, 0.9)',
		      // Bar only
		      /*legend:{
            display:true,
            position:'right'
          },*/
		      data: [
			      {
					    x: 4,
					    y: 19,
					    r: 2
						},
						{
					    x: 12,
					    y: 29,
					    r: 2
						}
					]
		    }
		  ]
		};

		return (
			<div className="">
			<Bubble data={data}
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
				        let x = data.datasets[0].data[toolTipItem.index].x
				        let y = data.datasets[0].data[toolTipItem.index].y
				        return " "+x.toLocaleString()+", "+y.toLocaleString()
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

export default BubbleChartTimelineStats;