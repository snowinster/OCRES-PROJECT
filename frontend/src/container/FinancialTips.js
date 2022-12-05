import React, { Component } from 'react';
import "./container.css";
import Widget4DisplayFinancial from "../component/Widget4DisplayFinancial";


class FinancialTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Roc: [],
            Trange: [],
            MOM: [],
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

        var Roc = [];
        var Trange = [];
        var MOM = [];

        fetch('https://www.alphavantage.co/query?function=ROC&symbol=' + StockSymbol + '&interval=weekly&time_period=10&series_type=close&apikey=' + API_KEY) //compact retourne les 100 derniers jours
            .then(response => response.json())
            .then(data => {

                console.log(data);
                for (var key in data['Technical Analysis: ROC']) {
                    Roc.push(data['Technical Analysis: ROC'][key]['ROC']);

                }

                this.setState({ Roc });

            })

        fetch('https://www.alphavantage.co/query?function=MOM&symbol=' + StockSymbol + '&interval=daily&time_period=10&series_type=close&apikey=' + API_KEY) //compact retourne les 100 derniers jours
            .then(response => response.json())
            .then(data => {

                console.log(data);
                for (var key in data['Technical Analysis: MOM']) {
                    MOM.push(data['Technical Analysis: MOM'][key]['MOM']);

                }

                this.setState({ MOM });

            })

        fetch('https://www.alphavantage.co/query?function=TRANGE&symbol=' + StockSymbol + '&interval=daily&apikey=' + API_KEY) //compact retourne les 100 derniers jours
            .then(response => response.json())
            .then(data => {

                console.log(data);
                for (var key in data['Technical Analysis: TRANGE']) {
                    Trange.push(data['Technical Analysis: TRANGE'][key]['TRANGE']);

                }

                this.setState({ Trange });

            })

    };


    componentDidMount() {
        this.callAPI();
    }

    render() {

        const { Roc } = this.state;
        const { Trange } = this.state;
        const { MOM } = this.state;

        var SymbolVar = this.props.Symbol;
        var Roc2 = Roc.reverse();
        var Roc1 = Roc2[0];
        var Trange1 = Trange[0];
        var MOM1 = MOM[0];


        return (

            <div>
                {/* <button onClick={() => this.callAPI()}>Stock</button> */}
                <Widget4DisplayFinancial SymbolVar={SymbolVar} Roc={Roc} Roc1={Roc1} Trange={Trange} Trange1={Trange1} MOM={MOM} MOM1={MOM1} />
            </div>
        );
    }
}

export default FinancialTips;


