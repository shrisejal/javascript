console.log("Hello World");

let firstNumber = 42;
console.log(firstNumber);

let floatNumber =10.20;
console.log(floatNumber);
// String 
let singleQuotestr = 'Hello , World';
console.log(singleQuotestr);

let doubleQuoter ="Hello, World";
console.log(doubleQuoter);
 let text = `world`;
 let templateLitralstring=`Hello, ${text}`;
 console.log(templateLitralstring);

let multiLineString ="This is line One \n It is Line two";
console.log(multiLineString);

// let firstName = "Sejal";
// let lastName ="Shrivastava";
// console.log(firstName + "  " +lastName);

let escapeExample = "Hello , \"world\"";
console.log(escapeExample);
// boolean
let isjavascriptdifficult= true;
let isjavaboring = false;
console.log(isjavascriptdifficult);
console.log(isjavaboring);

// variables
 const account = 12344;
 let accountEmail = "Sejal@gmail.com";
 var accountPassword =78787878;
 

//  account = 23345; constant value
 accountEmail = "himani@gmail.com";
 accountPassword = 24343534;
  console.table([account, accountEmail,accountPassword]);
   let age = 18;
   console.log  (typeof age);

// undefined
 let accountName;
 console.log(accountName);
 console.log(typeof accountName);

 // Null 
 let Name = null
 console.log(typeof Name);

 // symbol
 let number1 = Symbol('12')
 let number2 = Symbol('12')
 console.log(number1 === number2)

 // Bigint 
 let bigIntNumber = BigInt(2435465867978);
 let anotherBigIntNumber = 747838345837587387458375;
 console.log(bigIntNumber)
 console.log(anotherBigIntNumber)

 // Object
 let Person = {
    firstName:'Sejal',
    address:'Vaishali',
    city: 'jaipur',
    };
    console.table([Person.firstName, Person.lastName,Person.city]);
    console.log("My name is " +  Person.firstName + " and I live in " + Person.city);

    // Array
    let numbers = [10,20,30,40,50];
    console.log(numbers[0]);
    console.log(numbers[1]);
     
    let fruits= ["Mango", "Orange"];
    console.log(fruits[0]);

    let mixedArray = [10,20,"english", "Hindi", 2.4 ,4.4];
    console.log(mixedArray[3]);
    console.log(mixedArray[4]);
    
    // function Declaration

      function add(a , b){
        return a+b;
      }

    // Function Expression

    let subtract = function(a, b){
        return a - b;
    };
    console.log(subtract(5,3));
    console.log(add(6,7));
    
    // Date
     let currentDate = new Date();
    console.log(currentDate);
     










 
 


 
