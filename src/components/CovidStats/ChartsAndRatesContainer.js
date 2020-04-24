import React from 'react';

import DoughnutChartStats from './DoughnutChartStats.js';
import LineChartTimelineStats from './LineChartTimelineStats.js';
import RecoveryDeathRateStats from './RecoveryDeathRateStats.js';
// import BubbleChartTimelineStats from './BubbleChartTimelineStats.js';

class ChartsAndRatesContainer extends React.PureComponent {
  /*constructor(props) {
  super(props);
  }*/

  render() {
    const { country, cases, deaths, recovered, error, errorTimeLine, resultTimeLine } = this.props;
  
    return (
      <div className="ChartsAndRatesContainer">

        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="card shadow mb-4">
                  {/*<!-- Card Header - Dropdown -->*/}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">{country=='Global'||country=='global'?'Global':country} Cases Distribution</h6>
                  </div>
                  {/*<!-- Doughnut Card -->*/}
                  <div className="card-body">
                    <DoughnutChartStats country={country=='Global'||country=='global'?'Global':country} cases={cases} deaths={deaths} recovered={recovered} error={error} />
                  </div>
                </div>
              </div>
            </div>
              
            {/*<!-- Recovery/Death Rate Card -->*/}
            <RecoveryDeathRateStats recoveryRate={(recovered/cases)*100} deathRate={(deaths/cases)*100} />

          </div>
          <div className="col-md-8">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">{country=='Global'||country=='global'?'Global':country} Infections history</h6>
              </div>
              <div className="card-body p5-">
                                                         
                {/*<!-- LineChart Card -->*/}
                <LineChartTimelineStats country={country=='Global'||country=='global'?'Global':country} errorTimeLine={errorTimeLine} resultTimeLine={resultTimeLine} />
                {/*<BubbleChartTimelineStats />*/}

                <div className="alert alert-warning mt-3" role="alert">
                  Note: Best Viewed in desktop or Mobile Landscape Orientation
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  } // render()

}

export default ChartsAndRatesContainer;
