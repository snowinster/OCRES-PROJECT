const express = require('express');
const { Inflation } = require('../models/Schemas.js');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

router.get('/Inflation_Get_Data', async (req, res) => {

    const inflation = Schemas.Inflation;

    try {
        const data = await inflation.find().lean();
        // console.log(data[1].value); 
        // il faudrai trier  le tableau en fonction des dates ici (mais mis en string dans database pour simplifier et manque de temps). Les infos rajouter dans le graph seront ajouté au debut.
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ success: false });
    }

});


router.post('/addInflation2', async (req, res) => {


    const inflation_data = req.body.inflation_data;
    const inflation_date = req.body.inflation_date;
    const country_name = req.body.country_name;

    console.log();
    console.log('vous avez ajouter l element :');

    console.log(inflation_data);
    console.log(inflation_date);
    console.log(country_name);


    const new_inflation_data = new Schemas.Inflation({
        value: inflation_data,
        date: inflation_date,
        country: country_name
    },
        {
            versionKey: false // mettre a faux, mongoose mais sa version sinon dans la database et c'est relou
        });


    try {
        new_inflation_data.save((err, new_inflation_data_Results) => {
            if (err) res.end('Error to save');
            res.redirect('/addInflation2');
            res.end();
        });
    } catch (err) {
        console.log(err);
        res.redirect('/addInflation2');
        res.end();
    }

});


router.post('/delete', async (req, res) => {


    const inflation = Schemas.Inflation;
    const inflation_data = req.body.inflation_data;
    const inflation_date = req.body.inflation_date;
    const country_name = req.body.country_name;

    console.log();
    console.log('vous avez supprimer l element :');
    console.log(inflation_data);
    console.log(inflation_date);
    console.log(country_name);

    // id = '638b5f2cbd730d648c143858';

    id = await inflation.findOne({ date: req.body.inflation_date, value: req.body.inflation_data, country: req.body.country_name }).exec();


    inflation.findByIdAndDelete(id)
        .then(data => {
            console.log(data)
            res.send("deleted")
        })
        .catch(err => {
            console.log(err)
        })


});



// To use this, run the backend server, then go to URL: localhost: 3001 to add inflation data

router.get('/addInflation', async (req, res) => {
    const inflation_data = { value: '4.9', date: '30-10-2002', country: 'US' };
    const new_inflation_data = new Schemas.Inflation(inflation_data);

    try {
        await new_inflation_data.save(async (err, newUserResult) => {
            console.log('inflation data added!');
            res.end('inflation data added!');
        });
    } catch (err) {
        console.log(err);
        res.end('inflation data not added');
    }
});


module.exports = router;

// https://www.youtube.com/watch?v=Oa0pMn0tvU4&t=606s&ab_channel=CodrKai