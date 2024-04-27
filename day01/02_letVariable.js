



//var - Declare any type of values - does  allows to redeclare the same variable again and again and reassign as well
//var  scopr is local to whole function but not to a specific block however Let declaration is confined only to the block 
var firstname = "priya";
console.log(firstname);

var firstname = "jaya" // possible 
console.log(firstname);

//let -Declare any type of value - does not allows to redeclare the same variable but allows reassigns - ES6
//Let scope confines to a specific block
//It allows variables to be hoisted however will get intialised only at the line of code if used earlier u will get reference error 


let fname = "priyanka"; //scope of fname is public 
console.log(fname);


//let firstname = "jayag" // not possible ----SyntaxError: Identifier 'firstname' has already been declared
//console.log(firstname);

//scope becomes local when created within function

let userName = "Shinru";

function printUser(userName)
{
    let userId = 12;
    let pswd = "abcd";
    if(userName.startsWith("shi"))
    {
        console.log("userName");
        console.log(userId);
        let lname = "kan";
        var fname = "jay";

    }else
    {
        console.log("check your input");
    }
    console.log(pswd);
    console.log(fname);
    //console.log(lname); ReferenceError: lname is not defined as the scope confines to the if block itself and not to the function

}

printUser(userName);

//const -declare any type of value but cannot change the values

const {userInfo}  = require("os");
const { start } = require("repl");
