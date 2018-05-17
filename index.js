const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const mongoService = require('./services/mongoTest')
const LdxSmart = require('./services/ldxSmart');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.get('/', function(req, res){
    res.send('Welcome to my Service');
});

// --- LDX Smart Part Start ---
app.get('/ls/getMenuData', function(req, res) {
    let ldxSmartObj = new LdxSmart(req, res);
    ldxSmartObj.getMenuData();
});

app.post('/ls/login', function(req, res) {
    let ldxSmartObj = new LdxSmart(req, res);
    ldxSmartObj.login();
});

// --- LDX Smart Part End ---
app.listen(3000, function(){
    console.log('Service listening on port 3000');
});

