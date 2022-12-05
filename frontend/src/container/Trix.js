import React, { Component } from 'react';
import "./container.css";
import Widget2Radialbar4 from "../component/Widget2Radialbar4";

class Trix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Trix: [],
            Trix_Date: [],
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

        var Trix = [];
        var Trix_Date = [];

        fetch('https://www.alphavantage.co/query?function=TRIX&symbol=' + StockSymbol + '&interval=daily&time_period=10&series_type=close&apikey=' + API_KEY) //compact retourne les 100 derniers jours
            .then(response => response.json())
            .then(data => {

                console.log(data);
                for (var key in data['Technical Analysis: TRIX']) {
                    Trix.push(data['Technical Analysis: TRIX'][key]['TRIX']);
                    Trix_Date.push(key);
                }
                // console.log(Trix);
                // console.log(Trix_Date);

                this.setState({ Trix });
                this.setState({ Trix_Date });

            })

    };


    componentDidMount() {
        this.callAPI();
    }

    render() {

        const { Trix } = this.state;
        const { Trix_Date } = this.state;

      


        var SymbolVar = this.props.Symbol;

        var Trix1 = Math.abs(Trix[0]) * 100;
        var Trix2 = Math.abs(Trix[1]) * 100;


        // console.log(Trix);
        // console.log(Trix1);
        // console.log(Trix2);

        return (

            <div>
                {/* <button onClick={() => this.callAPI()}>Stock</button> */}
                <Widget2Radialbar4 SymbolVar={SymbolVar} Trix={Trix} Trix1={Trix1} Trix2={Trix2} Trix_Date={Trix_Date} />
            </div>
        );
    }
}

export default Trix;
