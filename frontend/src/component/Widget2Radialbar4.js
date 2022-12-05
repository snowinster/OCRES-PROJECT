import React from "react";
//import React, {useState, useEffect, useCallback} from 'react';
import ReactApexChart from 'react-apexcharts';
import "./Widget.css";

class Widget2Radialbar4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [this.props.Trix1, this.props.Trix2],
       //tout marche noramalement avec mais probleme de derniere element sur l element donc j ecris les valeurs manuellement uniquement pour ce widget (valeur du jours)
      // series: [49, 52],
      options: {
        chart: {
          height: 200,
          width: 380,
          type: 'radialBar',
        },
        plotOptions: {


          radialBar: {


            dataLabels: {
              name: {
                fontSize: '22px',

              },

              value: {
                fontSize: '16px',
                color: '#0FB7BF',

              },

              total: {
                show: true,
                fontSize: '16px',
                label: "AMZN",
                color: '#0FB7BF',
                formatter: function (w) {

                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return "TRIX"
                }
              }
            }
          }
        },

        fill: {
          colors: ['#0C898F', '#0C898F']
        },
        labels: ['Trix today', 'Trix yesterday'],
      },


    };
  }

  componentDidUpdate(props) {
    if (props.Trix1 !== this.props.Trix1 || props.Trix2 !== this.props.Trix2 || props.Trix !== this.props.Trix) {
      this.setState({
        series: [this.props.Trix1, this.props.Trix2],
        //tout marche noramalement avec mais probleme de derniere element sur l element

      })
    }
  }




  render() {

    return (

      <div id="RadialBar">
        {/* <p>coucou</p> */}

        <div id="chart">
          {/* <div> blalbla</div> */}
          <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200} width={380} />
          {/*width 450 */}
        </div>

      </div>

    );
  }
}


export default Widget2Radialbar4;