import React from "react";
//import React, {useState, useEffect, useCallback} from 'react';
import ReactApexChart from 'react-apexcharts';
import "./Widget.css";

class Widget2Radialbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [this.props.Ultosc1, this.props.Ultosc2],
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
                  return "ULTOSC"
                }
              }
            }
          }
        },
        fill: {
          colors: ['#0C898F']
        },
        labels: ['Today', 'Yesterday'],
      },


    };
  }

  componentDidUpdate(props) {
    if (props.Ultosc1 !== this.props.Ultosc1 || props.Ultosc2 !== this.props.Ultosc2 || props.Ultosc !== this.props.Ultosc) {
      this.setState({
        series: [this.props.Ultosc1, this.props.Ultosc2],

        // options: {
        //   chart: {
        //     height: 300,
        //     type: 'radialBar',
        //   },
        //   plotOptions: {
        //     radialBar: {
        //       dataLabels: {
        //         name: {
        //           fontSize: '22px',
        //         },
        //         value: {
        //           fontSize: '16px',
        //         },
        //         total: {
        //           show: true,
        //           label: parseFloat(this.props.Ultosc1).toFixed(3).toString() - parseFloat(this.props.Ultosc2).toFixed(3).toString() + '%',
        //           formatter: function (w) {

        //             return "Ultosc gap"
        //           }
        //         }
        //       }
        //     }
        //   },
        //   labels: ['Ultosc today', 'Ultosc yesterday'],
        // }

      })
    }
  }



  render() {

    return (

      <div id="RadialBar">
        {/* <p>coucou</p> */}

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200} width={380} />
        </div>

      </div>

    );
  }
}


export default Widget2Radialbar;