import React from "react";
//import React, {useState, useEffect, useCallback} from 'react';
import ReactApexChart from 'react-apexcharts';
import "./Widget.css";

class Widget2LineInflation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "Inflation",
        data: [this.props.inflation[58], this.props.inflation[59], this.props.inflation[60], this.props.inflation[61]]
        //data: this.props.inflation //marche pour toutes les vals mais graph peu lisible

      }],
      options: {
        chart: {
          height: 227,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },

        colors: ['#0C898F'],

        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Inflation - US Consumer Prices',
          align: 'left',

          style: {
            fontSize:  '16px',
            fontWeight:  'bold',
            color:  '#FFFFFF'
          },

  

        },
        // grid: {
        //   row: {
        //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //     opacity: 0.5
        //   },
        // },
        xaxis: {
          type: 'date',
          categories: [this.props.inflation_date[58], this.props.inflation_date[59], this.props.inflation_date[60], this.props.inflation_date[61]],
          // categories: this.props.inflation_date, //marche pour toutes les vals mais graph peu lisible

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


      },


    };
  }


  componentDidUpdate(props) {
    if (props.inflation !== this.props.inflation) {
      this.setState({
        series: [
          // {data: this.props.StockY }
          {
            // ...this.state.series[0], data: this.props.inflation
             data: [this.props.inflation[58], this.props.inflation[59], this.props.inflation[60], this.props.inflation[61]]
          }
        ]
      })
    }


    if (props.inflation_date !== this.props.inflation_date) {
      this.setState({
        options: {
          xaxis: {
            type: 'date',
             categories: [this.props.inflation_date[58], this.props.inflation_date[59], this.props.inflation_date[60], this.props.inflation_date[61]]
            // categories: this.props.inflation_date //marche pour toutes les valeurs mais ilisible 
          }
        }
      })
    }
  }



  render() {

    return (

      <div id="LineInflation">
        {/* <p>coucou</p> */}

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={227} width={530} />
        </div>

      </div>

    );
  }
}


export default Widget2LineInflation;