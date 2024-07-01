// if-else statement
let age = 25;
if(age>=18){
    console.log("can vote");
}
else{
    console.log("cannot vote");
}

// if else if statement 
 let hour = 24;
 if(hour<18){
    console.log("Good day");
 }
 else if(hour<19){
    console.log("Good morning");
 }
 else{
    console.log("good afternoon");
 }

 // nested if 
 let number =5;

 let age3 =14;
 if(number==1){
    console.log("A");
 }
 else if (number==2){
    if(age3<18){
        console.log("cannot vote");
    }
    console.log("B");
}
else if(number == 5){
    console.log("C")
}
else{
    console.log("F");
}

// switch  statement

let num = 5;
switch(num){
    case 1: console.log("A");
    break;
    case 2: console.log("B");
    break;
    case 3: console.log("C");
    break;
    case 4: console.log("D");
    break;
     case 5: console.log("E");
     break;
    default: console.log("F");

}



