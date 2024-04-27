//hoisting is important to ensure the order of execution of code

//var firstName = "george"; 

function userName(fname){
    console.log(fname);
}

userName(firstName);

//var firstName = "george"; if its declared after it will not understand and print the name with VAR

//However with Let it allows to variables to be hoist

//variable hoisting 

console.log(x); //undefined as only the variable is hoisted and not the value
var x = 5;

console.log(x); // 5 

foo();//Iam foo - it hoist the function and executes

function foo()
{
    console.log("Iam foo")
}


bar(); // TypeError as bar is declared as var and not function EX 3 here bar is hoisted as variable and not function 

var bar = func(){
    console.log("bar open")
}



//With let 

/*
console.log(z); // Reference error  cannot access z before intiallization  as it gets intiallised only at the line of code while using let 
Let  z = 5;
*/


