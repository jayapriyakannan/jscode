//declare array

let browserName=[];
console.log(typeof browserName);

browserName = ['chrome','edge','safari'];
console.log(browserName);

//to get no of elements of array

console.log(browserName.length);

console.log(browserName[0]);
console.log(browserName[1]);
console.log(browserName[2]);
console.log(browserName[4]); // undefined

browserName[3] = 'opera';
browserName[4] = 'firefox';
console.log(browserName[4]);   

//add the element at the last index using push()
browserName.push('Chromium');
console.log(browserName);

//remove the element at the last index using pop()
browserName.pop();
console.log(browserName);

//add the element at the first index using unshift()
browserName.unshift('Chromium');
console.log(browserName);

//remove the element at the first index using shift()
browserName.shift();
console.log(browserName);



//replace the element at the any specific index
browserName[0]='webkit';
console.log(browserName);

//remove specific indexed element using splice
browserName.splice(1,2);
console.log(browserName);


//convert array to string 
//let browsers = browserName.join("=>");
let browsers = browserName.join();
console.log(browsers);
let browserValues = browsers.split("=>");
console.log(browserValues);


let num = [2,3,6,1,5,4];
num.sort();
console.log(num);

let a1 = [1,2,3,4];
let a2 = [5,6,7,8]
// the triple dots ...arrayname is called spreadsyntax which copy the array into another array 
//let a2 = [...a1,5,6,7,8];
console.log(a2);

let merge = a1.concat(a2);
console.log(merge);

//heterogenous array 

let mixedArray = [1,2,3,'edge','chrome',true,[1,2,3,4],2.5,...a1]
console.log(mixedArray.length);
console.log(mixedArray[6][3]);

