const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const mongoService = require('./services/mongoTest')
const LdxSmart = require('./services/ldxSmart');

app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, token');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
    if (req.method == 'OPTIONS') {
      res.send(200); /让options请求快速返回/
    }
    else {
      next();
    }
  });
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
app.get('/ls/getShowPageConfig', function(req, res) {
    let ldxSmartObj = new LdxSmart(req, res);
    ldxSmartObj.getShowPageConfig();
});

app.get('/ls/getEditPageConfig', function(req, res) {
    let ldxSmartObj = new LdxSmart(req, res);
    ldxSmartObj.getEditPageConfig();
});

// --- LDX Smart Part End ---
app.listen(3000, function(){
    console.log('Service listening on port 3000');
});

