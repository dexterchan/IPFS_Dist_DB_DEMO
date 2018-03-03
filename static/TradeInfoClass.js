
var dateFormat = require('dateformat');

class TradeInfo {
    constructor() {
      this.Location1="A";
      this.Location2="B";
      this.party1="A1";
      this.party2="B1";
      this.TradeId="000000";
      this.TradeVersion=1;
      this.TimeStamp="20180101 00:00:00:00";
      this.Direction="sell";
      this.Security="ABC";
      this.quantity=0;
      this.price=0.00;
    }
    
    sayHello() {
      console.log('Hello, trade is ' + this.TradeId + ', I have security: ' + this.Security+" on "+
        dateFormat(this.TimeStamp, "yyyymmdd-HH:MM:ss.l"));
    }
    

  }
  
module.exports = TradeInfo;