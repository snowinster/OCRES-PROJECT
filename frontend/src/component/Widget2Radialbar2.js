import React from "react";
import ReactApexChart from 'react-apexcharts';
import "./Widget.css";

class Widget2Radialbar2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [this.props.Adxr_last, this.props.Adxr_yesterday],
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
                  return "ADXR"
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
    if (props.Adxr_last !== this.props.Adxr_last || props.Adxr_yesterday !== this.props.Adxr_yesterday) {
      this.setState({
        series: [this.props.Adxr_last, this.props.Adxr_yesterday],

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


export default Widget2Radialbar2;