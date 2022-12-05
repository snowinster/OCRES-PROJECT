import React, { Component } from "react";
import "./container.css";
import Widget2Radialbar2 from "../component/Widget2Radialbar2";


// alphavantage.co
// https://www.youtube.com/watch?v=T26V1aSEtJE&ab_channel=SimonSuh

class Adxr extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Adxr: [],
            Symbol: this.props.Symbol
            // Adxr_date: []
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
    }

    callAPI() {

        const API_KEY = "DH1T9CHRMIV88OE6"; //https://www.alphavantage.co/support/#api-key  //à changé tous les 500 appels par jours version gratutie car version gratuites mais 5 par minutes

        var StockSymbol = this.props.Symbol;
        var Adxr = [];
        // var Adxr_date = [];

        fetch('https://www.alphavantage.co/query?function=ADXR&symbol=' + StockSymbol + '&interval=daily&time_period=10&apikey=' + API_KEY) //This API returns technical analysis ADXR


            .then(response => response.json())
            .then(data => {
                console.log(data);

                for (var key in data['Technical Analysis: ADXR']) {

                    Adxr.push(parseFloat(data['Technical Analysis: ADXR'][key]['ADXR']).toFixed(2));
                    // Adxr_date.push(data['Technical Analysis: ADXR'][key])

                }

                // console.log(Adxr);
                // console.log(Adxr_date);


                this.setState({ Adxr });
                // this.setState({ Adxr_date });

            })

    };


    render() {

        const { Adxr } = this.state;
        //const { Adxr_date } = this.state;
        var SymbolItem = this.props.Symbol;

        var Adxr_last = Adxr[0];
        var Adxr_yesterday = Adxr[1];
        // console.log(Adxr_last);



        return (
            <div>
                {/* <button onClick={() => this.callAPI()}>Adxr</button> */}
                <Widget2Radialbar2 Adxr_yesterday={Adxr_yesterday} Adxr_last={Adxr_last} Adxr={Adxr} SymbolItem={SymbolItem} />

            </div>
        );
    }

}

export default Adxr;