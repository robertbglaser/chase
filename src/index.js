




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
    const hundredString = "Hundred";
    const millionString = "Million";
    const thousandString = "Thousand";
    let returnValue = " ";
    let firstDigitString = "";
    console.log("the value of baseNumber is = " + baseNumber + " and has a length of " + baseLength);
    
 //var returnValue;

        switch(baseLength){
            case 1:  //ones 
            firstDigitString = searchOnes(baseNumber);
            returnValue += firstDigitString;
            break;
            
            case 2: //tens 
            let tenString = searchTens(baseNumberString[0]);
            returnValue += tenString;
            if (baseNumberString[1] > 0){
                let oneString = searchOnes(baseNumberString[1]);
                returnValue +=  oneString;
            }
            break;
            case 3: //hundreds
            firstDigitString = searchOnes(baseNumberString[0]);
            returnValue += (firstDigitString + hundredString);
            //returnValue += hundredString;
            if (baseNumberString[1] > 0) {   //search for tens value
                let returnTensString = searchTens(baseNumberString[1]);
                returnValue +=  returnTensString;
            }
            if (baseNumberString[2 ] > 0) {   //search for ones value
                let returnOnesString = searchOnes(baseNumberString[2]);
                returnValue +=  returnOnesString;
            }
           
            break;
            case 4: //thousands
            console.log("thousands");
            firstDigitString = searchOnes(baseNumberString[0]);
            returnValue += (firstDigitString+thousandString)
            if (baseNumberString[1] > 0){
                firstDigitString = searchOnes(baseNumberString[1]);
                returnValue += (firstDigitString + hundredString);
            }
            if (baseNumberString[2] > 0){
                firstDigitString = searchTens(baseNumberString[2]);
                returnValue += (firstDigitString);
            }
            if (baseNumberString[3] > 0){
                firstDigitString = searchOnes(baseNumberString[3]);
                returnValue += (firstDigitString);
            }
            break;
            case 5: //ten-thousands
            firstDigitString = searchTens(baseNumberString[0]); //ten-thousand
            returnValue += (firstDigitString+thousandString)
            if (baseNumberString[1] > 0){    // thousand
                firstDigitString = searchOnes(baseNumberString[1]);
                returnValue += (firstDigitString + thousandString);
            }
            if (baseNumberString[2] > 0){   //hundreds
                firstDigitString = searchOnes(baseNumberString[2]);
                returnValue += (firstDigitString + hundredString);
            }
            
            if (baseNumberString[3] > 0){
                firstDigitString = searchTens(baseNumberString[3]);
                returnValue += (firstDigitString);
            }
            if (baseNumberString[4] > 0){
                firstDigitString = searchOnes(baseNumberString[4]);
                returnValue += (firstDigitString);
            }
            break
            case 6: //hundred thousands
        
            firstDigitString = searchOnes(baseNumberString[0]); //Hundred-thousand
            returnValue += (firstDigitString + hundredString + thousandString);

            if (baseNumberString[1] > 0){    // ten thousand
                firstDigitString = searchTens(baseNumberString[1]);
                returnValue += (firstDigitString + thousandString);
            }
            if (baseNumberString[2] > 0){   //thousands
                firstDigitString = searchOnes(baseNumberString[2]);
                returnValue += (firstDigitString + thousandString);
            }
            
            if (baseNumberString[3] > 0){ //hundreds
                firstDigitString = searchOnes(baseNumberString[3]);
                returnValue += (firstDigitString + hundredString);
            }
            if (baseNumberString[4] > 0){ //tens
                firstDigitString = searchTens(baseNumberString[4]);
                returnValue += (firstDigitString);
            }
            if (baseNumberString[5] > 0){ //ones
                firstDigitString = searchOnes(baseNumberString[4]);
                returnValue += (firstDigitString);
            }
            break
            case 7: //millions
            console.log("millions");
            firstDigitString = searchOnes(baseNumberString[0]); //million
            returnValue += (firstDigitString + millionString);

            if (baseNumberString[1] > 0){    // hundred thousand
                firstDigitString = searchOnes(baseNumberString[1]);
                returnValue += (firstDigitString +hundredString +thousandString);
            }
            if (baseNumberString[2] > 0){   // tenthousands
                firstDigitString = searchTens(baseNumberString[2]);
                returnValue += (firstDigitString + thousandString);
            }
            
            if (baseNumberString[3] > 0){ //thousand
                firstDigitString = searchOnes(baseNumberString[3]);
                returnValue += (firstDigitString + thousandString);
            }
            if (baseNumberString[4] > 0){ //hundreds
                firstDigitString = searchOnes(baseNumberString[4]);
                returnValue += (firstDigitString + hundredString);
            }
            if (baseNumberString[5] > 0){ //tens
                firstDigitString = searchTens(baseNumberString[4]);
                returnValue += (firstDigitString);
            }
            if (baseNumberString[6] > 0){ //tens
                firstDigitString = searchOnes(baseNumberString[4]);
                returnValue += (firstDigitString);
            }
        
            break
            case 8: //ten million
            console.log("ten-million");
            firstDigitString = searchTens(baseNumberString[0]); //ten million
            returnValue += (firstDigitString + millionString);

            if (baseNumberString[1] > 0){    // one million
                firstDigitString = searchOnes(baseNumberString[1]);
                returnValue += (firstDigitString +millionString);
            }
            if (baseNumberString[2] > 0){   // hundred thousand
                firstDigitString = searchOnes(baseNumberString[2]);
                returnValue += (firstDigitString + hundredString +thousandString);
            }
            
            if (baseNumberString[3] > 0){ // ten thousand
                firstDigitString = searchTens(baseNumberString[3]);
                returnValue += (firstDigitString + thousandString);
            }
            if (baseNumberString[4] > 0){ //thousand
                firstDigitString = searchOnes(baseNumberString[4]);
                returnValue += (firstDigitString + thousandString);
            }
            if (baseNumberString[5] > 0){ //hundreds
                firstDigitString = searchOnes(baseNumberString[4]);
                returnValue += (firstDigitString + hundredString);
            }
            if (baseNumberString[6] > 0){ //tens
                firstDigitString = searchTens(baseNumberString[4]);
                returnValue += (firstDigitString);
            }
            if (baseNumberString[7] > 0){ //Ones
                firstDigitString = searchOnes(baseNumberString[4]);
                returnValue += (firstDigitString);
            }
        
        
            break;
            
            default: //hundred millions
            break;
        }
        return (returnValue + "Dollars");

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

var textIt = spellIt(41000000);

   console.log(textIt);

