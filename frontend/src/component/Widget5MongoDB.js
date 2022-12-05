import React from "react";
//import React, {useState, useEffect, useCallback} from 'react';
import ReactApexChart from 'react-apexcharts';
import "./Widget.css";

class Widget5MongoDB extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [
                // {
                //     name: 'series2',
                //     data: [3, 4, 8, 5, 4, 10]
                // }, 
                {
                    name: 'series1',
                    data: this.props.infla_data
                }
            ],
            options: {
                chart: {
                    height: 296,
                    width: 820,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },

                title: {
                    text: 'Inflation - Variation over time',
                    align: 'left',

                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#FFFFFF'
                    },

                },


                colors: ['#0C898F'],

                grid: {
                    show: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'date',
                    categories: this.props.infla_date,

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

                tooltip: {
                    x: {
                        format: 'dd/MM/yy'
                    },
                },
            },


        };
    }



    componentDidUpdate(props) {
        if (props.infla_data !== this.props.infla_data) {
            this.setState({
                series: [
                    // {data: this.props.infla_data }
                    { ...this.state.series[0], data: this.props.infla_data }
                    // a rajouter autres pays infla
                ]
            })
        }

        if (props.infla_date !== this.props.infla_date) {
            this.setState({
                options: {
                    xaxis: {
                        type: 'date', //datetime
                        categories: this.props.infla_date
                    },

                }
            })
        }
    }

    render() {
        return (
            <div>
                <div id="MongoDB_chart">

                    <div id="chart">
                        <ReactApexChart options={this.state.options} series={this.state.series} type="area" width={820} height={296} />
                    </div>

                </div>

            </div>
        );
    }
}

export default Widget5MongoDB;
