const TradeInfo = require('../static/TradeInfoClass.js');


class TradeRandomizer{

    constructor() {
    }
    tradeCreation() {
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
        return tradeInfo;
    }

    

}

module.exports = TradeRandomizer;