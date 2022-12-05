import React, { Component } from "react";
import "./container.css";
import Widget3Column from "../component/Widget3Column";

//import axios from "axios";
//import Day from "../component/Day";



class Convert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      convert: null,
      ConvertX: [],
      ConvertY: []

    };
  }

  callAPI() {

    var myHeaders = new Headers();
    myHeaders.append("apikey", "yE0vtadipeqVRoWDADW2knPj5wMGZCI2");//zeGDtaHaWslPsIVbI2G3klH6EgTYPShE // val vHw5dS5414gNvB3WyclPZypNqKm7t9b5 //AJO9SAiHwYd3R2fk0zsdm9WOeaSLBXIx //GUFJMb9UK8uY4zWiAz5AV1TNxnzLZnzz //RXkbN1uuhUrnN9bhEPrEj7smnpwFb5kJ

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    var from = this.props.country1;
    var to = this.props.country2;
    var amount = "1";



    fetch("https://api.apilayer.com/exchangerates_data/convert?to=" + to + "&from=" + from + "&amount=" + amount, requestOptions)
      .then(response => response.json())
      //.then(result => console.log(result)) // pour afficher toutes les datas
      .then(({ result }) => {
        console.log(result);
        const convert = result;
        this.setState({ convert });
      })
      .catch(error => console.log('error', error));
  };



  callAPI2() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "yE0vtadipeqVRoWDADW2knPj5wMGZCI2"); //vHw5dS5414gNvB3WyclPZypNqKm7t9b5 //zeGDtaHaWslPsIVbI2G3klH6EgTYPShE benji//val vHw5dS5414gNvB3WyclPZypNqKm7t9b5 //AJO9SAiHwYd3R2fk0zsdm9WOeaSLBXIx //GUFJMb9UK8uY4zWiAz5AV1TNxnzLZnzz //RXkbN1uuhUrnN9bhEPrEj7smnpwFb5kJ

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };


    var from = this.props.country1;

    fetch("https://api.apilayer.com/exchangerates_data/latest?base=" + from, requestOptions)
      .then(response => response.json())
      .then(result => //this.tab1.push(result.rates) 
      {

        console.log(result.rates);
        const copy = result.rates;
        const ConvertY = [];
        const ConvertX = [];

        //console.log(typeof (copy));

        for (var key in copy) {

          ConvertX.push(copy[key])
          ConvertY.push(key);
          // console.log(key, ":", copy[key]);
        }

        this.setState({ ConvertX });
        this.setState({ ConvertY });
      })
      //.then(result => console.log(result.rates))
      .catch(error => console.log('error', error));


  };
  componentDidMount() {
    this.callAPI2();
    // console.log('test1');
    // this.calltest();
  }


  render() {

    const { ConvertX } = this.state;
    const { ConvertY } = this.state;


    return (

      <div>

        {/* <button onClick={() => this.callAPI2()}>Convert</button> */}

        <Widget3Column ConvertX={ConvertX} ConvertY={ConvertY} />

        {/* <div id="ConvertOne">
          <button onClick={() => this.callAPI()}>Convert Thnks to api call</button>
          <p>conversion : {this.state.convert}</p>
        </div> */}
        {/* <p> affichage valeur {this.state.ConvertX} </p>
        <p> affichage devise {this.state.ConvertY} </p> */}

      </div>)
  };


}

export default Convert;
