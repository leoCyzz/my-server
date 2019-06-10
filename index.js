const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
// const mongoService = require('./services/mongoTest')
const LdxSmart = require('./services/ldxSmart');
const WeChat = require('./services/weChat');
const IDA = require('./services/ida');
const KdbundWechat = require('./services/kdbund');
const ZWCloud = require('./services/cloud');
const NineCoast = require('./services/ninecoast');

// app.use(cors({origin: 'http://localhost:4200'}));

app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, token');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials','true');

    if (req.method == 'OPTIONS') {
      res.sendStatus(200); // 让options请求快速返回
    }
    else {
      next();
    }
  });

// var allowCors = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, token');
//     res.header('Access-Control-Allow-Credentials','true');
//     next();
//   };
//   app.use(allowCors);//使用跨域中间件

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.get('/', function(req, res){
    res.send('Welcome to my Service');
});

// --- LDX Smart Part Start ---
    app.get('/ls/getTranslations', function(req, res) {
        let ldxSmartObj = new LdxSmart(req, res);
        ldxSmartObj.getTranslations();
    });

    app.get('/ls/getTableList', function(req, res) {
        let ldxSmartObj = new LdxSmart(req, res);
        ldxSmartObj.getTableList();
    });

    app.get('/ls/getLocalActionList', function(req, res) {
        let ldxSmartObj = new LdxSmart(req, res);
        ldxSmartObj.getLocalActionList();
    });

    app.get('/ls/getPageList', function(req, res) {
        let ldxSmartObj = new LdxSmart(req, res);
        ldxSmartObj.getPageList();
    });

    app.get('/ls/getMenuData', function(req, res) {
        let ldxSmartObj = new LdxSmart(req, res);
        ldxSmartObj.getMenuData();
    });

    app.post('/ls/login', function(req, res) {
        let ldxSmartObj = new LdxSmart(req, res);
        ldxSmartObj.login();
    });

    app.get('/ls/getShowPageInfo', function(req, res) {
        let ldxSmartObj = new LdxSmart(req, res);
        ldxSmartObj.getShowPageInfo();
    });

    app.get('/ls/getEditPageInfo', function(req, res) {
        let ldxSmartObj = new LdxSmart(req, res);
        ldxSmartObj.getEditPageInfo();
    });

    app.get('/ls/getAsyncTest', function(req, res) {
        let ldxSmartObj = new LdxSmart(req, res);
        ldxSmartObj.getAsyncTest();
    });

    app.post('/ls/testAsyncAction', function(req, res) {
        let ldxSmartObj = new LdxSmart(req, res);
        ldxSmartObj.testAsyncAction();
    });

// --- LDX Smart Part End ---

// --- WeChat Test Part Start ---
app.get('/lw/getTrackInfo',function(req, res){
    let weChatObj = new WeChat(req,res);
    weChatObj.getTrackInfo();
});

app.get('/lw/getCompanyList',function(req, res){
    let weChatObj = new WeChat(req,res);
    weChatObj.getCompanyList();
});

app.get('/lw/login', function(req, res) {
    let weChatObj = new WeChat(req,res);
    weChatObj.login();
});

app.get('/lw/wechatLogin', function(req, res) {
    let weChatObj = new WeChat(req,res);
    weChatObj.wechatLogin();
});

app.get('/lw/estimate', function(req, res) {
    let weChatObj = new WeChat(req,res);
    weChatObj.estimate();
});

app.get('/lw/queryName', function(req, res) {
    let weChatObj = new WeChat(req,res);
    weChatObj.queryName();
});

app.post('/lw/submitSuggestion', function(req, res) {
    let weChatObj = new WeChat(req,res);
    weChatObj.submitSuggestion();
});

app.get('/lw/getRecordingList', function(req, res) {
    let weChatObj = new WeChat(req,res);
    weChatObj.getRecordingList();
});

app.get('/lw/getPackageDetail', function(req, res) {
    let weChatObj = new WeChat(req,res);
    weChatObj.getPackageDetail();
});

app.get('/lw/getRecordInfo', function(req, res) {
    let weChatObj = new WeChat(req,res);
    weChatObj.getRecordInfo();
});

app.post('/lw/phoneBind', function(req, res) {
    let weChatObj = new WeChat(req,res);
    weChatObj.phoneBind();
});

app.post('/lw/companyBind', function(req, res) {
    let weChatObj = new WeChat(req,res);
    weChatObj.companyBind();
});

app.post('/lw/emailBind', function(req, res) {
    let weChatObj = new WeChat(req,res);
    weChatObj.emailBind();
});

// ---WeChat Test Part End---

// --- IDA Part Start ---
app.get('/ida/getIDAInfo',function(req, res){
    let idaObj = new IDA(req,res);
    idaObj.getIDAInfo();
});
// --- IDA Part End ---

// --- kdbund wechat Part Start ---
app.get('/kw/getCompanyList',function(req, res){
    let kwObj = new KdbundWechat(req,res);
    kwObj.getCompanyList();
});

app.get('/kw/queryTrackInfo',function(req, res){
    let kwObj = new KdbundWechat(req,res);
    kwObj.queryTrackInfo();
});
app.get('/kw/login',function(req, res){
    let kwObj = new KdbundWechat(req,res);
    kwObj.login();
});

// --- kdbund wechat Part End ---

// --- zw Cloud Part Start ---
app.get('/zwc/getExpressCompanyInfo',function(req, res){
    let zwc = new ZWCloud(req,res);
    zwc.getExpressCompanyInfo();
});
app.get('/zwc/getExpressDelivery',function(req, res){
    let zwc = new ZWCloud(req,res);
    zwc.getExpressDelivery();
});
// --- zw Cloud wechat Part End ---

// --- NineCoast Part Start ---
app.get('/nc/*', function(req, res) {
    const actionName = req.params[0];
    if (actionName) {
        let ncObj = new NineCoast(req, res);
        ncObj.doAction(actionName);
    }
    
});

app.post('/nc/*', function(req, res) {
    const actionName = req.params[0];
    if (actionName) {
        let ncObj = new NineCoast(req, res);
        ncObj.doAction(actionName);
    }
    
});

// --- NineCoast Part End ---

app.listen(3000, function(){
    console.log('Service listening on port 3000');
});


app.get('/ncapp/assets/images/*', function(req, res) {
    // console.log(__dirname);
    const url = req.url.substring(6);
    // console.log(url);
    res.sendFile(__dirname + url)
});
