const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoService = require('./services/mongoTest')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.get('/', function(req, res){
    res.send('Welcome to my Service');
});

app.get('/connect', function(req, res) {
    // console.log(req);
    const result = new mongoService();
    const aaa = result.init();
    console.log(aaa);
    return res.status(200).json({
        status: 'success',
        result: aaa
    });
});

app.listen(3000, function(){
    console.log('Service listening on port 3000');
});
