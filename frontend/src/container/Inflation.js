import React, { Component } from "react";
import "./container.css";
import Widget2LineInflation from "../component/Widget2LineInflation";


// alphavantage.co
// https://www.youtube.com/watch?v=T26V1aSEtJE&ab_channel=SimonSuh

class Inflation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inflation: [],
            inflation_date: [],
        };

    }

    componentDidMount() {
        this.callAPI();
    }

    callAPI() {

        const API_KEY = "DH1T9CHRMIV88OE6"; //https://www.alphavantage.co/support/#api-key  //à changé tous les 500 appels par jours version gratutie car version gratuites mais 5 par minutes


        var inflation = [];
        var inflation_date = [];

        fetch('https://www.alphavantage.co/query?function=INFLATION&apikey=' + API_KEY) //This API returns the annual inflation rates (consumer prices) of the United States.


            .then(response => response.json())
            .then(data => {
                console.log(data);

                for (var key in data['data']) {

                    inflation.push(parseFloat(data['data'][key]['value']).toFixed(2));
                    inflation_date.push(data['data'][key]['date'])

                }

                // console.log(inflatio);
                // console.log(inflation_date);

                inflation_date.reverse();


                this.setState({ inflation });
                this.setState({ inflation_date });

            })

    };


    render() {

        const { inflation } = this.state;
        const { inflation_date } = this.state;

        // console.log(inflation_date);



        return (
            <div>
                {/* <button onClick={() => this.callAPI()}>Inflation</button> */}

                <Widget2LineInflation inflation={inflation} inflation_date={inflation_date} />

            </div>
        );
    }

}

export default Inflation;