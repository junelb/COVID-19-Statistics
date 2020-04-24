import React from 'react';

class RecoveryDeathRateStats extends React.PureComponent {
  /*constructor(props) {
  super(props);
  }*/

  render() {
    const { recoveryRate, deathRate } = this.props;
  
    return (
      <div className="RecoveryDeathRateStats">

        {/*<!-- Recovery Rate Card -->*/}
        <div className="row">
          <div className="col-6 col-xl-6 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Recovery Rate</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">{Math.floor(recoveryRate)} %</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/*<!-- Death Rate Card -->*/}
          <div className="col-6 col-xl-6 col-md-6 mb-4">
              <div className="card border-left-danger shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Death Rate</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">{Math.floor(deathRate)} %</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>   

      </div>
    );
  } // render()

}

export default RecoveryDeathRateStats;
