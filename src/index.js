




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
//    console.log("XX " + baseNumberString[1]);
    const hundredString = "hundred";
    const millionString = "million";
    const thousandString = "thousand";
    let returnValue = " ";
    console.log("the value of baseNumber is = " + baseNumber + " and has a length of " + baseLength);
    
 //var returnValue;

        switch(baseLength){
            case 1:  //ones 
            console.log("ones");
            let oneString = searchOnes(baseNumber);
            returnValue += oneString;
            break;
            case 2: //tens 
            
            console.log("before the 10's call " + baseNumber);
            let tenString = searchTens(baseNumberString[0]);
            returnValue += tenString;
            if (baseNumberString[1] > 0){
                let oneString = searchOnes(baseNumberString[1]);
                returnValue +=  oneString;
            }
        
            break;
            case 3: //hundreds
            console.log("hundreds");
        //    call ones function
            returnValue += /*return value from ones function */ hundredString;
            //  call tens function
         //   returnValue += //return value from tens function
            break;
            case 4: //thousands
            console.log("thousands");
            returnValue += /*return value from ones function*/  thousandString;
        //    call ones function
            returnValue += /*return value from ones function*/  hundredString;
            //  call tens function
         //   returnValue += //return value from tens function
            break;
            case 5: //ten-thousands
            console.log("ten-thousands");
             //  call tens function
              //  call  function
        //    call ones function
           returnValue += /*return value from ones function */  thousandString;
           
            returnValue += /*return value from ones function*/  hundredString;
         //   returnValue += //return value from tens function
            break
            case 6: //hundred thousands
            console.log("hundred-thousands");
        //    call ones function
                returnValue += /*return value from ones function*/  hundredString;
            //  call tens functionds
         //   returnValue += //return value from tens function
            break
            case 7: //millions
            console.log("millions");
        //    call ones function
            returnValue += /*return value from ones function*/  millionString;
            returnValue += /*return value from ones function */  thousandString;
            returnValue += /*return value from ones function*/  hundredString;
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
            console.log("**the retun value is = ** " + returnValue);
        return returnValue;

        function searchOnes (searchNumber){
        let searchNumberNum = parseInt(searchNumber,10);
        const onesValues = ["One", "Two", "Three", "Four",  "Five", "Six","Seven", "Eight","Nine"];
        let searchResult = onesValues[searchNumberNum -1]; 
        return searchResult;

     
}

function searchTens (searchNumber){
    let searchNumberNum = parseInt(searchNumber,10);
    const tensValues = ["Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
     let tensResult = tensValues[searchNumberNum -1];  
    return tensResult;
}
       
}  

//var basenumber = 123;
//console.log("XXX "+basenumber.length);

var textIt = spellIt(32);

   // console.log(textIt);

