import React, { Component } from "react";
import "./container.css";
import Widget2Radialbar3 from "../component/Widget2Radialbar3";


// alphavantage.co
// https://www.youtube.com/watch?v=T26V1aSEtJE&ab_channel=SimonSuh

class Dx extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Dx: [],
            // Dx_date: []
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
    }

    callAPI() {

        const API_KEY = "DH1T9CHRMIV88OE6"; //https://www.alphavantage.co/support/#api-key  //à changé tous les 500 appels par jours version gratutie car version gratuites mais 5 par minutes

        var StockSymbol = this.props.Symbol;
        var Dx = [];
        // var Dx_date = [];

        fetch('https://www.alphavantage.co/query?function=DX&symbol=' + StockSymbol + '&interval=daily&time_period=10&apikey=' + API_KEY) //This API returns technical analysis Dx


            .then(response => response.json())
            .then(data => {
                console.log(data);

                for (var key in data['Technical Analysis: DX']) {

                    Dx.push(parseFloat(data['Technical Analysis: DX'][key]['DX']).toFixed(2));
                    // Adxr_date.push(data['Technical Analysis: ADXR'][key])

                }

                // console.log(Dx);
                // console.log(Dx_date);


                this.setState({ Dx });
                // this.setState({ Dx_date });

            })

    };


    render() {

        const { Dx } = this.state;
        //const { Dx_date } = this.state;
        var SymbolItem = this.props.Symbol;

        var Dx_last = this.state.Dx[0];
        var Dx_yesterday = this.state.Dx[1];
        // console.log(Dx_last);



        return (
            <div>
                {/* <button onClick={() => this.callAPI()}>Dx</button> */}
                <Widget2Radialbar3 Dx_yesterday={Dx_yesterday} Dx_last={Dx_last} Dx={Dx} SymbolItem={SymbolItem} />

            </div>
        );
    }

}

export default Dx;