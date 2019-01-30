/* 
var 
    - is used to declare a value to a variable, 
    - whose value can be changed during the execution of the script
    - example: var javascriptIsFun = true;
    - has global scope / lexical scope
    - is hoisted
*/


/* 
let 
    - is used to declare a value to a variable, 
    - whose value can be changed during the execution of the script
    - example: let javascriptIsFun = true;
    - has block scope
    - is not hoisted
*/


/*
const
    - is used to declare a value to a variable, 
    - whose value cannot be changed during the execution of the script
    - example:  const javascriptIsFun = true;
    - has block scope 
    - is not hoisted
*/

/*
hoisting
    - the process of moving all declaration to the top of the lexical scope before execution by the javascript compiler
*/

var firstName = "Umesh";
function userDetails(displayLastName, changeFirstName, showMiddleName){
    const middleName = "Middle Name";

    if(displayLastName) {
        let lastName = "Kribanandan";
        const age = 38;
        // if displayLastName is true it will display both firstName and lastName
        // firstName has global scope 
        console.log(firstName + " " +lastName); 
    }

    if(changeFirstName){
        firstName = "Pavithra";
        let lastName = "Parthiban";
        // if changeFirstName is true it will display both firstName and lastName
        // firstName will be updated to "Pavithra"
        // lastName - new lastName which is in this if block 
        console.log(firstName + " " +lastName); 
    }

    if(showMiddleName){
        // this will display updated global variable
        console.log(firstName ); 

        // this will display updated global variable + const middle name
        console.log(firstName + " " + middleName ); 

        // this will error as lastName is declared in if condition and not hoisted
       // console.log(firstName + " " + middleName + " " +lastName);  
    }

    console.log(middleName); // this will console middleName as const is at the top 
    console.log(age);// this will error as age is declared in if condition and not hoisted
    console.log(lastName); // this will error as lastName is declared in if condition and not hoisted
}
userDetails(true, true, true);
userDetails(false, false, false);