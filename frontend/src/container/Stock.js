import React, { Component } from "react";
import "./container.css";
import Widget1Graph from "../component/Widget1Graph";


// alphavantage.co
// https://www.youtube.com/watch?v=T26V1aSEtJE&ab_channel=SimonSuh

class Stock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            StockX: [],
            StockY: [],
            Symbol: this.props.Symbol
        };
    }

    componentDidUpdate(props) {
        if (props.Symbol !== this.props.Symbol) {
            this.setState({
                Symbol: this.props.Symbol,

            })
            this.callAPI();
        }
    }


    componentDidMount() {
        this.callAPI();
        // console.log('test1');
        // this.calltest();
    }

    // calltest(){
    //     console.log('test2');
    // }

    callAPI() {

        const API_KEY = "DH1T9CHRMIV88OE6"; //https://www.alphavantage.co/support/#api-key  //à changé tous les 500 appels par jours version gratutie car version gratuites mais 5 par minutes
        // var StockSymbol = 'IBM';
        var StockSymbol = this.props.Symbol; //bonne methode pour flexibility
        var StockX = [];
        var StockY = [];


        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + StockSymbol + '&outputsize=compact&apikey=' + API_KEY) //compact retourne les 100 derniers jours
            .then(response => response.json())
            .then(data => {
                console.log(data);

                for (var key in data['Time Series (Daily)']) {
                    StockX.push(key);
                    StockY.push(data['Time Series (Daily)'][key]['1. open']);
                }
                // console.log(StockX);
                // console.log(StockY);

                this.setState({ StockX });
                this.setState({ StockY });
            })

    };


    render() {
        const { StockX } = this.state;
        const { StockY } = this.state;
        return (
            <div>

                {/* <button onClick={() => this.callAPI()}>Stock</button> */}
                <Widget1Graph StockX={StockX} StockY={StockY} />

            </div>
        );
    }

}

export default Stock;