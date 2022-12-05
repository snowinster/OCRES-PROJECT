
// import Inflation2 from './component/Inflation';

import Nav from './Nav';

import React, { Component } from "react";

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





class Home extends Component {


    state = {
        country1: "EUR",
        country2: "GBP",
        Symbol: "AMZN",
        CurrentGraphSet: 1
    };

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

    SetGraph(index) {

        var CurrentGraphSet = index;
        this.setState({ CurrentGraphSet });
        console.log(CurrentGraphSet);
    }


    render() {
        const { country1 } = this.state;
        const { country2 } = this.state;
        const { Symbol } = this.state;


        return (


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



        );
    }
}

export default Home;


