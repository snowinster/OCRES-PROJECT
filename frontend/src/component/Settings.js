import React, { Component } from 'react';
import Nav from './Nav';
import "./Widget.css";
// import StockSet from "../container/StockSet";
import ConvertSet from "../container/ConvertSet";


import Convert from "../container/Convert";
import Stock from "../container/Stock";

import Inflation from "../container/Inflation";
import InflaDB from "../container/InflaDB";

import FinancialTips from "../container/FinancialTips";

// ---------------------indicateurs financiers-----------------------

import Adxr from "../container/Adxr";
import Dx from "../container/Dx";
import Ultosc from "../container/Ultosc";
import Trix from "../container/Trix";


// import Widget5MongoDB from "../component/Widget5MongoDB";
// import Widget2RadialbarTest from "../component/Widget2RadialbarTest";


import '../App.css';
//on aurait juste du envoyer <home Symbol ={Symbol}..../> avec les nouveaux params de symbol et etc en state de home mais bon manque de temps


class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            convert: null,
            ConvertY: [],
            country1: "EUR",
            country2: "GBP",
            Symbol: "AMZN"

        };
    }

    handleChange1 = event => {
        this.setState({
            country1: event.target.value,
        });
    };

    handleChange2 = event => {
        this.setState({
            country2: event.target.value,
        });
    };

    handleChange3 = event => {
        this.setState({
            Symbol: event.target.value,
        });
    };

    callAPI() {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "yE0vtadipeqVRoWDADW2knPj5wMGZCI2");  //zeGDtaHaWslPsIVbI2G3klH6EgTYPShE benji//val vHw5dS5414gNvB3WyclPZypNqKm7t9b5 //AJO9SAiHwYd3R2fk0zsdm9WOeaSLBXIx //GUFJMb9UK8uY4zWiAz5AV1TNxnzLZnzz //RXkbN1uuhUrnN9bhEPrEj7smnpwFb5kJ

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };


        var from = this.state.country1;

        fetch("https://api.apilayer.com/exchangerates_data/latest?base=" + from, requestOptions)
            .then(response => response.json())
            .then(result => //this.tab1.push(result.rates) 
            {

                // console.log(result.rates);
                const copy = result.rates;
                const ConvertY = [];
                //console.log(typeof (copy));

                for (var key in copy) {

                    ConvertY.push(key);
                    // console.log(key, ":", copy[key]);
                }
                // console.log("frf",ConvertY);

                this.setState({ ConvertY });
            })
            //.then(result => console.log(result.rates))
            .catch(error => console.log('error', error));
    }

    componentDidMount() {
        this.callAPI();
    }


    render() {

        const { ConvertY } = this.state;
        const { country1 } = this.state;
        const { country2 } = this.state;
        const { Symbol } = this.state;

        // console.log("cec",ConvertY);

        return (
            <div>
                {/* <Nav /> */}

                <div class="selectdiv">
                    <h1 class="title_under_nav">Company Symbol</h1>
                    <div class="select">
                        <select onChange={this.handleChange3} name="format" id="format">
                            <option selected disabled>Choose Symbol </option>
                            <option value="AMZN">AMZN</option>
                            <option value="AAPL">Apple</option>
                            <option value="CSCO">Cisco Systems</option>
                            <option value="DAI.DEX">Daimler AG</option>
                            <option value="GPV.TRV">Green Power</option>
                            <option value="IBM">IBM</option>
                            <option value="MSFT">Microsoft</option>
                            <option value="NVDA">NVIDIA Corp</option>
                            <option value="RELIANCE.BSE">Reliance</option>
                            <option value="TSCO.LON">Tesco</option>
                            <option value="TSLA">Tesla Inc</option>
                        </select>
                    </div>


                    <div className="App">

                        <div className="bootstrap-wrapper">

                            <div id="app-container1" className="app-container container">

                                <div className="row">

                                    <div id="Dashboard1" className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">

                                        <h2>Financial dashboard</h2>


                                    </div>

                                    <div id="Dashboard" className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">

                                        <h2>DASHBOARD</h2>
                                        <p id="welcome">Welcome to your dashboard</p>

                                    </div>

                                </div>

                                <div className="row">

                                    <div id="PanelBar" className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">

                                        <h3 id="Panel-Title">Panel Bar </h3>

                                        {/* <ul id="AllNav" className="navbar-nav ml-auto">
                                        <li className="nav-object" onClick={() => this.SetGraph(0)}> Accueil</li>
                                        <li className="nav-object" onClick={() => this.SetGraph(1)}>Graph 1</li>
                                        <li className="nav-object" onClick={() => this.SetGraph(2)}>Graph 2</li>
                                        <li className="nav-object" onClick={() => this.SetGraph(3)}>Graph 3</li>
                                        <li className="nav-object" onClick={() => this.SetGraph(4)}>Graph 4</li>
                                        <li className="nav-object" onClick={() => this.SetGraph(5)}>Graph 5</li>
                                    </ul> */}

                                        <Nav />


                                    </div>


                                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">



                                        <div className="row">
                                            <div id="chartcontainer1" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">

                                                <div id="Ultosc">

                                                    {/* <input type="text" name="Symbol" value={Symbol} onChange={this.handleChange3} /> */}
                                                    <Ultosc Symbol={Symbol} />


                                                </div>


                                            </div>

                                            <div id="chartcontainer2" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">

                                                <div id="Adxr">
                                                    {/* <input type="text" name="Symbol" value={Symbol} onChange={this.handleChange3} /> */}
                                                    <Adxr Symbol={Symbol} />


                                                </div>

                                            </div>


                                            <div id="chartcontainer3" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">

                                                <div id="Dx">
                                                    {/* <input type="text" name="Symbol" value={Symbol} onChange={this.handleChange3} /> */}
                                                    <Dx Symbol={Symbol} />


                                                </div>

                                            </div>

                                            <div id="chartcontainer4" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">

                                                <div id="radial3">

                                                    <Trix Symbol={Symbol} />

                                                </div>

                                            </div>


                                        </div>

                                        <div className="row">

                                            <div id="chartcontainer5" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">

                                                <div id="Convert">

                                                    {/* <div className {CurrentGraphSet === 1 ? ' contenu active-contenu' : 'contenu'}>
                        <input type="text" name="Ville" value={country1} onChange={this.handleChange1} />
                        <input type="text" name="Ville" value={country2} onChange={this.handleChange2} />
                      </div>  */}

                                                    <Convert country1={country1} country2={country2} />

                                                </div>

                                            </div>


                                            <div id="chartcontainer6" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">

                                                <div id="Inflation">

                                                    {/* <input type="text" name="Symbol" value={Symbol} onChange={this.handleChange3} /> */}
                                                    <Inflation></Inflation>
                                                </div>

                                            </div>

                                            <div id="chartcontainer7" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-3">

                                                <div id="FinancialTips">

                                                    <FinancialTips Symbol={Symbol} />

                                                </div>

                                            </div>

                                        </div>

                                        <div className="row">
                                            <div id="chartcontainer8" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">

                                                <div id="Stock">

                                                    {/* <input type="text" name="Symbol" value={Symbol} onChange={this.handleChange3} /> */}

                                                    <Stock Symbol={Symbol} />

                                                </div>


                                            </div>

                                            <div id="chartcontainer9" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">

                                                <div id="MongoDB">
                                                    {/* <Widget5MongoDB></Widget5MongoDB> */}

                                                    <InflaDB />
                                                </div>

                                            </div>


                                        </div>



                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>


                    {/* <StockSet Symbol={Symbol} /> */}


                    <h1 class="title_under_nav">Currency</h1>

                    <div id="convert12">
                        <div class="select">
                            <select onChange={this.handleChange1} name="format" id="format">
                                <option selected disabled>Choose Currency </option>
                                <option value={ConvertY[0]}>{ConvertY[0]}</option>
                                <option value={ConvertY[1]}>{ConvertY[1]}</option>
                                <option value={ConvertY[2]}>{ConvertY[2]}</option>
                                <option value={ConvertY[3]}>{ConvertY[3]}</option>
                                <option value={ConvertY[4]}>{ConvertY[4]}</option>
                                <option value={ConvertY[5]}>{ConvertY[5]}</option>
                                <option value={ConvertY[6]}>{ConvertY[6]}</option>
                                <option value={ConvertY[7]}>{ConvertY[7]}</option>
                                <option value={ConvertY[8]}>{ConvertY[8]}</option>
                                <option value={ConvertY[10]}>{ConvertY[10]}</option>
                                <option value={ConvertY[46]}>{ConvertY[49]}</option>
                                <option value={ConvertY[150]}>{ConvertY[150]}</option>
                            </select>

                        </div>

                        <div class="select">
                            <select onChange={this.handleChange2} name="format" id="format">
                                <option selected disabled>Choose Currency 2 </option>
                                <option value={ConvertY[0]}>{ConvertY[0]}</option>
                                <option value={ConvertY[1]}>{ConvertY[1]}</option>
                                <option value={ConvertY[2]}>{ConvertY[2]}</option>
                                <option value={ConvertY[3]}>{ConvertY[3]}</option>
                                <option value={ConvertY[4]}>{ConvertY[4]}</option>
                                <option value={ConvertY[5]}>{ConvertY[5]}</option>
                                <option value={ConvertY[6]}>{ConvertY[6]}</option>
                                <option value={ConvertY[7]}>{ConvertY[7]}</option>
                                <option value={ConvertY[8]}>{ConvertY[8]}</option>
                                <option value={ConvertY[10]}>{ConvertY[10]}</option>
                                <option value={ConvertY[46]}>{ConvertY[49]}</option>
                                <option value={ConvertY[150]}>{ConvertY[150]}</option>
                            </select>

                        </div>

                    </div>



                    {/* <input type="text" name="Symbol" value={Symbol} onChange={this.handleChange3} />
                    <input type="text" name="Ville" value={country1} onChange={this.handleChange1} />
                    <input type="text" name="Ville" value={country2} onChange={this.handleChange2} /> */}

                    {/* <div class="Invisible_Home">
                        <Home Symbol={'IBM'} country1={country1} country2={country2} />
                    </div> */}

                    {/* <input type="text" name="Symbol" value={Symbol} onChange={this.handleChange3} /> */}



                    {/* <div>
                        <input type="text" name="Ville" value={country1} onChange={this.handleChange1} />
                        <input type="text" name="Ville" value={country2} onChange={this.handleChange2} />
                    </div> */}

                    <ConvertSet country1={country1} country2={country2} />

                </div>
                {/* <button class="SetUpGraph" onClick={() => console.log(this.country1)}>Apply Settings</button> */}
            </div>


        );
    }
}



export default Settings;
