const { stringify } = require("querystring");


let username = 'george'; //literal - stack memory
console.log(typeof username);

let user = new String('geo');//new String - heap memory it brings the typeof as an object -memory will be used unneccesarily
console.log(typeof user);

// username. gives methods because Js convertst the string as object and makes methods available


//Methods

console.log(username.length);
console.log(user.length);

//Escape character \ 
let productPrice = "The discount price is \"200\"";
console.log(productPrice);
let deal = 'Today\'s Deals';
console.log(deal);

//backtick(` `)  accepts both single or double quotes and need not be escaped with \
let deals = `Today 's deal is "50%"`;
console.log(deals);

let price = 500;
console.log(`Price is ${price}`);

let browserName = 'Safari';
console.log(browserName.length);
//first character charAt(0);
console.log(browserName.charAt(0));
//last character of a string in varibale var.charAt(var.length-1)
console.log(browserName.charAt(browserName.length-1));
//index position of a character in variable  = var.indexof('a')
console.log(browserName.indexOf('r'));
//splitting each character of the variable with "" 
console.log(browserName.split(""));
let msg = "Learning Javascript String"
//splitting each word of the variable " "
console.log(msg.split(" "));

//Get a sequence of characters from the string with slice ( starting character position , ending position)

let substring = msg.slice(10,12);
console.log(substring);

//check presence of characters with 'includes'  -this is casesensitve and returns true or false
let present = msg.includes('String')
console.log(present);

//To change characters to uppercase
console.log(browserName.toUpperCase());

//To change characters to lowercase
console.log(msg.toLowerCase());

console.log(msg);

let msg1 = "   Radha  "
//removes spaces front and back 
console.log(msg1);
console.log(msg1.trim());
console.log(msg1.trimStart());
console.log(msg1.trimEnd());

let pdtPrice = 'price = 1200';
console.log(pdtPrice.slice(8));
//GIVE SLICE ONE NUMBER MORE THAN ACTUALLY PRESENT CHARACTERS
let fixedprice  = pdtPrice.slice(8,13);
console.log(fixedprice);
//appends to 1200 as string
console.log(fixedprice + 20);

//converting string to number 
let value =parseInt(fixedprice);
console.log(value+12);


let fname='vidya';
let chars = fname.split("");
console.log(chars);


//loop in reverse
for (i =chars.length-1; i>=0; i-- )
{
    console.log(chars[i]);
}

