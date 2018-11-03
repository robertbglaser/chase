




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


//Question #2

function spellIt(baseNumber) {
    const baseNumberString = baseNumber.toString();  
    const baseLength = (baseNumberString.length);
    console.log("XX " + baseNumberString[1]);
    console.log("the value of baseNumber is = " + baseNumber + " and has a length of " + baseLength);
    
 var returnValue;

        switch(baseLength){
            case 1:  //ones 
            console.log("ones");
            //call ones funcction
            break;
            case 2: //tens 
            console.log("tens");
                //call tens function 
            break;
            case 3: //hundreds
            console.log("hundreds");
        //    call ones function
         //   returnValue += //return value from ones function + "hundred";
            //  call tens function
         //   returnValue += //return value from tens function
            break;
            case 4: //thousands
            console.log("thousands");
        //    call ones function
         //   returnValue += //return value from ones function + "hundred";
            //  call tens function
         //   returnValue += //return value from tens function
            break;
            case 5: //ten-thousands
            console.log("ten-thousands");
        //    call ones function
         //   returnValue += //return value from ones function + "hundred";
            //  call tens function
         //   returnValue += //return value from tens function
            break
            case 6: //hundred thousands
            console.log("hundred-thousands");
        //    call ones function
         //   returnValue += //return value from ones function + "hundred";
            //  call tens function
         //   returnValue += //return value from tens function
            break
            case 7: //millions
            console.log("millions");
        //    call ones function
         //   returnValue += //return value from ones function + "hundred";
            //  call tens function
         //   returnValue += //return value from tens function
            break
            case 8: //ten million
            console.log("tem-million");
        //    call ones function
         //   returnValue += //return value from ones function + "hundred";
            //  call tens function
         //   returnValue += //return value from tens function
            break;
            
            default: //hundred millions
            break;
        }
        return returnValue;
       
}  
var basenumber = 123;
//console.log("XXX "+basenumber.length);

var textIt = spellIt(1234);

   // console.log(textIt);

