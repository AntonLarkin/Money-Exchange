// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
   var rezult={};
  var H=50, Q=25, D=10, N=5, P=1;
if(currency<=0){
  return rezult;
}
if(currency>=10000){
  rezult.error="You are rich, my friend! We don't have so much coins for exchange"
  return rezult;

}
 var Hrez=Math.floor(currency/50);
 var Qrez=Math.floor((currency-50*Hrez)/25);
 var Drez=Math.floor(((currency-50*Hrez)-25*Qrez)/10);
 var Nrez=Math.floor((((currency-50*Hrez)-25*Qrez)-10*Drez)/5);
 var Prez=Math.floor(((((currency-50*Hrez)-25*Qrez)-10*Drez)-5*Nrez)/1);


  rezult.H=Hrez;
  rezult.Q=Qrez;
  rezult.D=Drez;
  rezult.N=Nrez;
  rezult.P=Prez;

 if(rezult.H==0) {delete rezult.H;}
 if(rezult.Q==0) {delete rezult.Q;}
 if(rezult.D==0) {delete rezult.D;}
 if(rezult.N==0) {delete rezult.N;}
 if(rezult.P==0) {delete rezult.P;}

  return rezult;

}

