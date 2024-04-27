 
 let number = -1
 
 function checkNumberType(num)
 {

    if (num > 0) {
        return "Greater than zero";
      } 
      else if (num < 0) 
      {
        return "Lesser than zero";
      } 
      else {
        return "equal to zero";
      }

 }

 let output = checkNumberType(number);
 console.log(output);

