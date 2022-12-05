import React, { Component } from "react";
import "./container.css";
import Widget5MongoDB from "../component/Widget5MongoDB";


// header("Access-Control-Allow-Origin: *");

// alphavantage.co
// https://www.youtube.com/watch?v=T26V1aSEtJE&ab_channel=SimonSuh

class InflaDB extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infla_data: [],
            infla_date: []
        };
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

        //const API_KEY = "Z35MTIGSOKDZSEZ9"; //https://www.alphavantage.co/support/#api-key  //à changé tous les 500 appels par jours version gratutie car version gratuites mais 5 par minutes
        // var StockSymbol = 'IBM';
        //var StockSymbol = this.props.Symbol; //bonne methode pour flexibility
        var infla_data = [];
        var infla_date = [];


        fetch('http://localhost:3001/Inflation_Get_Data') //
            .then(response => response.json())
            .then(data => {
                console.log(data);

                for (var key in data) {
                    infla_data.push(data[key]['value']);
                    infla_date.push(data[key]['date']);
                }
                // console.log(infla_data);
                // console.log(infla_date);


                infla_date =infla_date.reverse();
                infla_data =infla_data.reverse();

                this.setState({ infla_data });
                this.setState({ infla_date });
            })

    };


    render() {
        const { infla_data } = this.state;
        const { infla_date } = this.state;

        return (
            <div>

                {/* <button onClick={() => this.callAPI()}>Stock</button> */}
                <Widget5MongoDB infla_data={infla_data} infla_date={infla_date} />

            </div>
        );
    }

}

export default InflaDB;