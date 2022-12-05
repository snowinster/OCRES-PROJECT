import React from "react";
//import React, {useState, useEffect, useCallback} from 'react';
import ReactApexChart from 'react-apexcharts';
import "./Widget.css";

class Widget3Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [parseFloat(this.props.ConvertX[46]).toFixed(3), parseFloat(this.props.ConvertX[49]).toFixed(3), parseFloat(this.props.ConvertX[150]).toFixed(3), parseFloat(this.props.ConvertX[10]).toFixed(3), parseFloat(this.props.ConvertX[0]).toFixed(3)]
      }],
      options: {
        chart: {
          height: 227,
          width: 670,
          type: 'bar',
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },

        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        grid: {
          show: false
        },
        title: {
          text: 'Convert - Converting different currencies',
          align: 'left',

          style: {
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#FFFFFF'
          },

      },

      


        xaxis: {

          categories: [this.props.ConvertX[46], this.props.ConvertX[49], this.props.ConvertX[150], this.props.ConvertX[10], this.props.ConvertX[0]],


          labels: {
            style: {

              colors: '#FFFFFF',
              fontSize: '12px'
            },

          }
        },

        yaxis: {

          labels: {

            style: {
              colors: '#FFFFFF',
              fontSize: '12px'
            },

          }

        },

        fill: {
          colors: ['#042729', '#084D50', '#0C898F', '#0FB7BF', '#10BFC7']
        },
      },


    };
  }


  componentDidUpdate(props) {
    if (props.ConvertY !== this.props.ConvertY) {
      this.setState({
        series: [
          // {data: this.props.StockY }
          { ...this.state.series[0], data: [parseFloat(this.props.ConvertX[46]).toFixed(3), parseFloat(this.props.ConvertX[49]).toFixed(3), parseFloat(this.props.ConvertX[150]).toFixed(3), parseFloat(this.props.ConvertX[10]).toFixed(3), parseFloat(this.props.ConvertX[0]).toFixed(3)] }
        ]
      })
    }

    if (props.ConvertX !== this.props.ConvertX) {
      this.setState({
        options: {
          xaxis: {
            categories: [this.props.ConvertY[46], this.props.ConvertY[49], this.props.ConvertY[150], this.props.ConvertY[10], this.props.ConvertY[0]]
          }
        }
      })
    }
  }



  render() {
    return (

      <div id="column">
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={227} width={670} />
        </div>
      </div>

    );
  }
}

export default Widget3Column;