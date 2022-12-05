import React, { Component } from 'react';
import Nav2 from './Nav2';
import "./Widget.css";

class Test extends Component {
    render() {
        return (
            <div>
                <Nav2 />

                <div class="selectdiv">
                    <h1 class="title_under_nav">Company Stock</h1>
                    <div class="select">
                        <select name="format" id="format">
                            <option selected disabled>Choose Stock </option>
                            <option value="AMZN">Amazon</option>
                            <option value="APPL">Apple</option>
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


                </div>
                <button class="SetUpGraph" onClick={() => this.callAPI()}>Stock</button>
            </div>

        );
    }
}

export default Test;
