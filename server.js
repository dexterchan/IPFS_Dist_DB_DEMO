var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");

app.use(bodyParser.json({ type: 'application/json' }));

const TradeInfo = require('./static/TradeInfoClass.js');
const TradeRandomizer = require('./trade/TradeRandomizer.js');
const DbNodePackage = require('./ipfsnode/DbNode.js');
const argv = require('minimist')(process.argv.slice(2));

let DbNodeClass = new DbNodePackage();


if(argv.address === undefined ){
    console.log("Running as first node")
}else{
    console.log("Running with address:")
    console.log(argv.address)
}

function connectDB(){
    if(argv.address === undefined){
        DbNodeClass.registerMasterNode();
    }else{
        DbNodeClass.connectMasterNode(argv.address);
    }
}



app.get('/randomTrade', function (req, res) {
    let tradeRandom = new TradeRandomizer();

    t = tradeRandom.tradeCreation();
    console.log(JSON.stringify(t)); 
    strTrade=JSON.stringify(t);
    keyid = t.genKey();

    await db.put(keyid, strTrade);

 })

function test(){
    let tradeRandom = new TradeRandomizer();

    t = tradeRandom.tradeCreation();
    console.log(JSON.stringify(t)); 
    return JSON.stringify(t);
}

connectDB();