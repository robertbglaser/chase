




//Question #1

function maxRangeSum(tradingRangeStart, tradingRangeEnd, tradingResults){
    var adjStart = (tradingRangeStart - 1);
    var numTradingDays = tradingRangeEnd  - adjStart;
    
    var results = tradingResults.splice(adjStart, numTradingDays);
    const sum = results.reduce((total, amount) => total + amount); 
    if (sum > 0 ){
        console.log("The gain for the period is " + sum);
    }
    else {
        console.log("There is no gain for the period " + 0);
    } 
   
}
 var trandingRangeStart = 4;
 var trandingRangeEnd = 8;
 var tradingResults = [7, -3, -10, 4, 2, 8, -2, 4, -5, 2 ];
maxRangeSum(trandingRangeStart, trandingRangeEnd, tradingResults);