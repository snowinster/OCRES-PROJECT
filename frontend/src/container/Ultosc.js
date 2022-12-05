import React, { Component } from 'react';
import "./container.css";
import Widget2Radialbar from "../component/Widget2Radialbar";

class Ultosc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ultosc: [],
            Ultosc_Date: [],
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


    callAPI() {

        const API_KEY = "DH1T9CHRMIV88OE6"; //https://www.alphavantage.co/support/#api-key  //à changé tous les 500 appels par jours version gratutie car version gratuites mais 5 par minutes
        var StockSymbol = this.props.Symbol; //bonne methode pour flexibility

        var Ultosc = [];
        var Ultosc_Date = [];


        fetch('https://www.alphavantage.co/query?function=ULTOSC&symbol=' + StockSymbol + '&interval=daily&apikey=' + API_KEY) //compact retourne les 100 derniers jours
            .then(response => response.json())
            .then(data => {

                console.log(data);
                for (var key in data['Technical Analysis: ULTOSC']) {
                    Ultosc.push(data['Technical Analysis: ULTOSC'][key]['ULTOSC']);
                    Ultosc_Date.push(key);
                }
                // console.log(Ultosc);
                // console.log(Ultosc_Date);

                this.setState({ Ultosc });
                this.setState({ Ultosc_Date });

            })

    };


    componentDidMount() {
        this.callAPI();
    }

    render() {

        const { Ultosc } = this.state;
        const { Ultosc_Date } = this.state;
        var Ultosc1 = Ultosc[0];
        var Ultosc2 = Ultosc[1];
        var SymbolVar = this.props.Symbol;
        // console.log(Ultosc1);
        // console.log(Ultosc2);

        return (

            <div>
                {/* <button onClick={() => this.callAPI()}>Stock</button> */}
                <Widget2Radialbar SymbolVar={SymbolVar} Ultosc={Ultosc} Ultosc1={Ultosc1} Ultosc2={Ultosc2} Ultosc_Date={Ultosc_Date} />
            </div>
        );
    }
}

export default Ultosc;
