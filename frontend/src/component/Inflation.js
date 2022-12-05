import React, { useState } from 'react';
// import React, { useEffect} from 'react';
import Nav from './Nav';
import "../container/container.css";
// import { redirect } from 'react-router-dom';


const Inflation = () => {
    const [inflation_data, setInflation_data] = useState('');
    const [inflation_date, setInflation_date] = useState('');
    const [country_name, setCountry_name] = useState('');


    // ------------------------- pour ajouter -------------------------

    const HandleAdding = (e) => {
        e.preventDefault();
        const data = { inflation_data, inflation_date, country_name };

        console.log(data);

        // -----ca marche-----

        // fetch('http://localhost:3001/addInflation')
        // .then( ()=>{
        //     console.log('Inflation ajouter à la database')
        // } )

        if (inflation_data !== "" && inflation_date !== "" && country_name !== "") {

            fetch('http://localhost:3001/addInflation2',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
            ).then(() => {
                console.log('Inflation ajouter à la database')
            })
            // return redirect("/");

        }
    }

    // ------------------------- pour suprimer -------------------------

    const HandleDelete = (e) => {
        e.preventDefault();
        const data = { inflation_data, inflation_date, country_name };

        console.log(data);

        if (inflation_data !== "" && inflation_date !== "" && country_name !== "") {

            fetch('http://localhost:3001/delete',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
            ).then(() => {
                console.log('Inflation supprimer de la database')
            })
            // return redirect("/");

        }
    }

    return (
        <section class="Section_Infla">
            <Nav />

            <div class="container-fluid">
                <h1 class="mt-5"> Add Inflation DB</h1>
                <form onSubmit={HandleAdding} className="form">

                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">

                            <input onChange={(e) => setInflation_data(e.target.value)} id="inflation_data" type="text" name="inflationInput" class="form-control" placeholder="Inflation rate" /> {/* data inflation rate  */}
                            <input onChange={(e) => setInflation_date(e.target.value)} id="inflation_date" type="text" name="inflation_Date_Input" class="form-control" placeholder="YY-MM-DD" /> {/* date ou l'inflation rate  a ete calculé*/}
                            <input onChange={(e) => setCountry_name(e.target.value)} id="country_name" type="text" name="country_name_Input" class="form-control" placeholder="Country" /> {/* pays ou l'inflation rate  a ete calculé*/}
                            <input type="submit" value="Send" class="submbit_button" />  {/* submit du form  */}

                        </div>
                    </div>
                </form>


            </div>



            <div class="container-fluid">
                <h1 class="mt-5">Delete Inflation DB</h1>
                <form onSubmit={HandleDelete} className="form">

                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">

                            <input onChange={(e) => setInflation_data(e.target.value)} id="inflation_data" type="text" name="inflationInput" class="form-control" placeholder="Inflation rate" /> {/* data inflation rate  */}
                            <input onChange={(e) => setInflation_date(e.target.value)} id="inflation_date" type="text" name="inflation_Date_Input" class="form-control" placeholder="YY-MM-DD" /> {/* date ou l'inflation rate  a ete calculé*/}
                            <input onChange={(e) => setCountry_name(e.target.value)} id="country_name" type="text" name="country_name_Input" class="form-control" placeholder="Country" /> {/* pays ou l'inflation rate  a ete calculé*/}
                            <input type="submit" value="Send" class="submbit_button" />  {/* submit du form  */}

                        </div>
                    </div>
                </form>


            </div>

            <div class="spacing"> </div>
        </section>
    );


}

export default Inflation;