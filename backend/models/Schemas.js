const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//realisation pour un schema : notre table Inflation

const InflationSchema = new Schema(
    {
        //id auto created
        value: { type: String, required: true },
        date: { type: String, required: true },
        country: { type: String, required: true }
    },
    {
        versionKey: false // mettre a faux, mongoose mais sa version sinon dans la database et c'est relou
    });

const Inflation = mongoose.model('Inflation', InflationSchema, 'InflationData'); //name, schema, table database name
const mySchemas = { 'Inflation': Inflation }; //utile si on utilise plusieurs tables

module.exports = mySchemas;

