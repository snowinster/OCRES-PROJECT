import React from "react";
//import React, {useState, useEffect, useCallback} from 'react';
import ReactApexChart from 'react-apexcharts';
//import Convert from "../container/index";
import "./Widget.css";

class Widget1Graph extends React.Component {

    constructor(props) {
        super(props);

        this.state = {


            series: [{
                name: 'Stock',
                data: this.props.StockY
                //data:[10,20,30,40,50,60,70] // marche parfaitement, donc probleme de refresh avec props
                //data: [this.props.StockY[0],this.props.StockY[10],this.props.StockY[20],this.props.StockY[30],this.props.StockY[40],this.props.StockY[50],this.props.StockY[60]]

            }],

            options: {
                chart: {
                    height: 296,
                    width: 810,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                
                title: {
                    text: 'Stock - Variation over time in euros',
                    align: 'left',

                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#FFFFFF'
                    },

                },

                colors: ['#0C898F'],


                // fill: {
                //     type: "gradient",
                //     gradient: {
                //         shadeIntensity: 1,
                //         opacityFrom: 0.8,
                //         opacityTo: 1,
                //         stops: [0, 90, 100]
                //     }
                // },

                stroke: {
                    curve: 'smooth'
                },

                grid: {
                    show: false
                },
                xaxis: {
                    type: 'datetime', //datetime
                    categories: this.props.StockX, //ca devrait etre mieux
                    //categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                    //categories :[this.props.StockX[0],this.props.StockX[10],this.props.StockX[20],this.props.StockX[30],this.props.StockX[40],this.props.StockX[50],this.props.StockX[60]]
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





    AfficherX() {

        var AxeX = [];

        for (var i = 0; i < this.props.StockX.length; i++) {
            console.log(this.props.StockX[i]);
            AxeX[i] = this.props.StockX[i];
        }

    }

    AfficherY() {

        var AxeY = [];

        for (var i = 0; i < this.props.StockY.length; i++) {
            console.log(this.props.StockY[i]);
            AxeY[i] = this.props.StockY[i];
        }

    }

    componentDidUpdate(props) {
        if (props.StockY !== this.props.StockY) {
            this.setState({
                series: [
                    // {data: this.props.StockY }
                    { ...this.state.series[0], data: this.props.StockY }
                ]
            })
        }

        // if(props.StockX !== this.props.StockX) {
        //     this.setState({ xaxis: {categories: this.props.StockX, type: 'datetime' }})
        // }

        if (props.StockX !== this.props.StockX) {
            this.setState({
                options: {
                    xaxis: {
                        type: 'datetime', //datetime
                        categories: this.props.StockX
                    }
                }
            })
        }
    }
    info() {
        console.log("coucou2");
    }


    render() {

        return (
            <div>

                {/* <button onClick={() => this.AfficherX()}>testX</button>
                <button onClick={() => this.AfficherY()}>testY</button> */}

                <div id="graphique">
                    <div id="chart" onClick={() => this.info()}>
                        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={296} width={820} />
                    </div>
                </div>

            </div>

        );
    }
}

export default Widget1Graph;