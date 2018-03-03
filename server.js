const TradeInfo = require('./static/TradeInfoClass.js');

// Instantiate trade:
let tradeInfo = new TradeInfo();


function test(){
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

    console.log(JSON.stringify(tradeInfo)); 
}

test()