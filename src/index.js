




//Question #1

function maxRangeSum(tradingRangeStart, tradingRangeEnd, tradingResults){
    var adjStart = (tradingRangeStart - 1);
    var numTradingDays = tradingRangeEnd  - adjStart;
    
    var results = tradingResults.splice(adjStart, numTradingDays);
    const sum = results.reduce((total, amount) => total + amount);

    console.log("******************** Test Question 1 results ***************************")

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
    let returnString = "";

    
 //var returnValue;

        switch(baseLength){
            case 1:  //ones 
            returnString = searchOnes(baseNumber);
            returnValue += returnString;
            break;
            
            case 2: //tens 
            if (baseNumberString[0] === "1"){  //check for
                returnString = searchTeens(baseNumberString[0]);
                returnValue +=  returnString;
            }
            else{   //check for 20, 30 etc
            returnString = searchTens(baseNumberString[0]);
            returnValue += returnString;
            if (baseNumberString[1] > "0"){  // check for ones
                returnString = searchOnes(baseNumberString[1]);
                returnValue +=  returnString;
            }
        }
            break;
            case 3: //hundreds
            returnString = searchOnes(baseNumberString[0]);
            returnValue += (returnString + hundredString);

            if (baseNumberString[1] === "1"){ //check for teens
                returnString = searchTeens(baseNumberString[1]);
                returnValue +=  returnString;
            }
            else{
            returnString = searchTens(baseNumberString[1]);
            returnValue += returnString;
            if (baseNumberString[2] > "0"){
                returnString = searchOnes(baseNumberString[2]);
                returnValue +=  returnString;
             }
            }
            break;
            case 4: //thousands
            returnString = searchOnes(baseNumberString[0]);
            returnValue += (returnString+thousandString)
            if (baseNumberString[1] > 0){  //hundreds
                returnString = searchOnes(baseNumberString[1]);
                returnValue += (returnString + hundredString);
            }
            if (baseNumberString[2] === "1"){  //check for teens
                returnString = searchTeens(baseNumberString[2]);
                returnValue +=  returnString;
            }
            else{   //check for 10, 20, 30 etc
                returnString = searchTens(baseNumberString[2]);
                returnValue += returnString;
                if (baseNumberString[3] > "0"){  // check for ones
                    returnString = searchOnes(baseNumberString[3]);
                    returnValue +=  returnString;
                }
            }
            break;
            case 5: //ten-thousands
            returnString = searchTens(baseNumberString[0]); //ten-thousand
            returnValue += (returnString+thousandString)
            if (baseNumberString[1] > 0){    // thousand
                returnString = searchOnes(baseNumberString[1]);
                returnValue += (returnString + thousandString);
            }
            if (baseNumberString[2] > 0){   //hundreds
                returnString = searchOnes(baseNumberString[2]);
                returnValue += (returnString + hundredString);
            }
            
            if (baseNumberString[3] === "1"){  //check for teens
                returnString = searchTeens(baseNumberString[3]);
                returnValue +=  returnString;
            }
            else{   //check for 10, 20, 30 etc
                returnString = searchTens(baseNumberString[3]);
                returnValue += returnString;
                if (baseNumberString[4] > "0"){  // check for ones
                    returnString = searchOnes(baseNumberString[4]);
                    returnValue +=  returnString;
                }
             }
            break
            case 6: //hundred thousands
        
            returnString = searchOnes(baseNumberString[0]); //Hundred-thousand
            returnValue += (returnString + hundredString + thousandString);

            if (baseNumberString[1] > 0){    // ten thousand
                returnString = searchTens(baseNumberString[1]);
                returnValue += (returnString + thousandString);
            }
            if (baseNumberString[2] > 0){   //thousands
                returnString = searchOnes(baseNumberString[2]);
                returnValue += (returnString + thousandString);
            }
            
            if (baseNumberString[3] > 0){ //hundreds
                returnString = searchOnes(baseNumberString[3]);
                returnValue += (returnString + hundredString);
            }
            if (baseNumberString[4] === "1"){  //check for teens
                returnString = searchTeens(baseNumberString[4]);
                returnValue +=  returnString;
            }
            else{   //check for 10, 20, 30 etc
            returnString = searchTens(baseNumberString[4]);
            returnValue += returnString;
            if (baseNumberString[5] > "0"){  // check for ones
                returnString = searchOnes(baseNumberString[5]);
                returnValue +=  returnString;
            }
            }
            break
            case 7: //millions
            returnString = searchOnes(baseNumberString[0]); //million
            returnValue += (returnString + millionString);

            if (baseNumberString[1] > 0){    // hundred thousand
                returnString = searchOnes(baseNumberString[1]);
                returnValue += (returnString +hundredString +thousandString);
            }
            if (baseNumberString[2] > 0){   // tenthousands
                returnString = searchTens(baseNumberString[2]);
                returnValue += (returnString + thousandString);
            }
            
            if (baseNumberString[3] > 0){ //thousand
                returnString = searchOnes(baseNumberString[3]);
                returnValue += (returnString + thousandString);
            }
            if (baseNumberString[4] > 0){ //hundreds
                returnString = searchOnes(baseNumberString[4]);
                returnValue += (returnString + hundredString);
            }
            if (baseNumberString[5] === "1"){  //check for teens
                returnString = searchTeens(baseNumberString[5]);
                returnValue +=  returnString;
            }
            else{   //check for 10, 20, 30 etc
            returnString = searchTens(baseNumberString[5]);
            returnValue += returnString;
            if (baseNumberString[6] > "0"){  // check for ones
                returnString = searchOnes(baseNumberString[6]);
                returnValue +=  returnString;
            }
            }
        
            break
            case 8: //ten million
            returnString = searchTens(baseNumberString[0]); //ten million
            returnValue += (returnString + millionString);

            if (baseNumberString[1] > 0){    // one million
                returnString = searchOnes(baseNumberString[1]);
                returnValue += (returnString +millionString);
            }
            if (baseNumberString[2] > 0){   // hundred thousand
                returnString = searchOnes(baseNumberString[2]);
                returnValue += (returnString + hundredString +thousandString);
            }
            
            if (baseNumberString[3] > 0){ // ten thousand
                returnString = searchTens(baseNumberString[3]);
                returnValue += (returnString + thousandString);
            }
            if (baseNumberString[4] > 0){ //thousand
                returnString = searchOnes(baseNumberString[4]);
                returnValue += (returnString + thousandString);
            }
            if (baseNumberString[5] > 0){ //hundreds
                returnString = searchOnes(baseNumberString[5]);
                returnValue += (returnString + hundredString);
            }
            if (baseNumberString[6] === "1"){  //check for teens
                returnString = searchTeens(baseNumberString[6]);
                returnValue +=  returnString;
            }
            else{   //check for 10, 20, 30 etc
            returnString = searchTens(baseNumberString[6]);
            returnValue += returnString;
            if (baseNumberString[7] > "0"){  // check for ones
                returnString = searchOnes(baseNumberString[7]);
                returnValue +=  returnString;
            }
            }
            break;
            
            default: //hundred millions
            returnString = searchOnes(baseNumberString[0]); //hundred million
            returnValue += (returnString + hundredString+millionString);

            if (baseNumberString[1] > 0){    // ten million
                returnString = searchTens(baseNumberString[1]);
                returnValue += (returnString +millionString);
            }
            if (baseNumberString[2] > 0){   // million
                returnString = searchOnes(baseNumberString[2]);
                returnValue += (returnString + millionString);
            }
            
            if (baseNumberString[3] > 0){ // hundred thousand
                returnString = searchOnes(baseNumberString[3]);
                returnValue += (returnString + hundredString+thousandString);
            }
            if (baseNumberString[4] > 0){ //ten thousand
                returnString = searchTens(baseNumberString[4]);
                returnValue += (returnString + thousandString);
            }
            if (baseNumberString[5] > 0){ //thousand
                returnString = searchOnes(baseNumberString[5]);
                returnValue += (returnString + thousandString);
            }
            if (baseNumberString[6] > 0){ //hundred
                returnString = searchOnes(baseNumberString[6]);
                returnValue += (returnString + hundredString);
            }
            if (baseNumberString[7] === "1"){  //check for teens
                returnString = searchTeens(baseNumberString[7]);
                returnValue +=  returnString;
            }
            else{   //check for 10, 20, 30 etc
            returnString = searchTens(baseNumberString[7]);
            returnValue += returnString;
            if (baseNumberString[8] > "0"){  // check for ones
                returnString = searchOnes(baseNumberString[8]);
                returnValue +=  returnString;
            }}
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

        function searchTeens (searchNumber){
            
            let searchNumberNum = parseInt(searchNumber,10);
            const teensValues = ["ten","eleven", "tweleve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ]
            let teensResult = teensValues[searchNumberNum -1];  
            return teensResult;
        }
       
}  

var testCase1 = 3;
var testCase2 = 466;
var testCase3 = 1234;
var testCase4 = 10;
var testCase5 = 21;

var textIt = spellIt(testCase4);
   console.log("******************** Test Question 2 results ***************************")
   console.log(textIt);

