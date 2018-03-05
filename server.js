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
    }
}

function test(){
    let tradeRandom = new TradeRandomizer();

    t = tradeRandom.tradeCreation();
    /*
    // Instantiate trade:
    let tradeInfo = new TradeInfo();

    tradeInfo.Location1="London";
    tradeInfo.Location2="HongKong";
    tradeInfo.party1="clientLdn";
    tradeInfo.party2="clientHK";
    tradeInfo.TradeId="000001";
    tradeInfo.TradeVersion=1;
    tradeInfo.TimeStamp=new Date().getTime();
    tradeInfo.Direction="sell";
    tradeInfo.Security="ABCD";
    tradeInfo.quantity=1000000000;
    tradeInfo.price=99.2;

    tradeInfo.sayHello();
    */


    console.log(JSON.stringify(t)); 
}

connectDB();