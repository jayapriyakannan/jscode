 let a =5 ;
 let b = 6;

 function sum()
 {
    let add = a + b;
    if(add>10)
    {
        return add
    }
    else
    {
        return "check inputs"
    }
 }

 console.log(sum());

 //let answer = sum();
 //console.log(answer);

 let brow = "chrome"

 function browserName()
 {
    switch(brow)
    {
    case "chrome":
        return "Chrome browser"

    case "safari":
        return "Safari browser"
    default:
        return "Launch Edge"

 }
}

let value = browserName();
console.log(value);
