import React from "react";
//import React, {useState, useEffect, useCallback} from 'react';
// import ReactApexChart from 'react-apexcharts';
import "./Widget.css";

class Widget4DisplayFinancial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Roc1: this.props.Roc1,
            Trange1: this.props.Trange1,
            MOM1: this.props.MOM1,
        };
    }


    componentDidUpdate(props) {

        if (props.Roc1 !== this.props.Roc1) {
            this.setState({
                Roc1: this.props.Roc1,
            })
        }

        if (props.Trange1 !== this.props.Trange1) {
            this.setState({
                Trange1: this.props.Trange1,
            })
        }

        if (props.MOM1 !== this.props.MOM1) {
            this.setState({
                MOM1: this.props.MOM1,
            })
        }

    }


    render() {
        const { Roc1 } = this.state;
        const { Trange1 } = this.state;
        const { MOM1 } = this.state;

        // var content = parseFloat(this.props.inflation[0]).toFixed(3).toString() + "%";
        var content1 = "ROC : measures the percentage change between the current price and previous ones : " + String(Roc1);

        var content2 = "TR : The True Range function used in the calculation of many indicators (Welles Wilder DX) : " + String(Trange1);

        var content3 = "MOM : Momentrum indicators used to determine the strength or weakness of a stock's price " + String(MOM1);

        return (
            <div id="chart_mult_component">

                <div id="ChartFinance">
                    {/* <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} /> */}
                    <p>{content1}</p>
                </div>

                <div id="ChartFinance">
                    {/* <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} /> */}
                    <p>{content2}</p>
                </div>

                <div id="ChartFinance">
                    {/* <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} /> */}
                    <p>{content3}</p>
                </div>

            </div>


        );
    }
}

export default Widget4DisplayFinancial;