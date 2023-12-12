
// 24 ****************************************************************************************
// 23 ****************************************************************************************
// 22 ****************************************************************************************
// 21 ****************************************************************************************


// 20 ****************************************************************************************
// For loop - repeat a code in certain amount of time
/*
for(counter = 1; counter <=10; counter+=1){
    console.log(counter);
}
*/
/*
for(i= 10 ; i >=0 ; i-=1)
{
    console.log(i)
}
*/
// 19 ****************************************************************************************
// Do while loop - do something then check the condition repeat if condition is true
/*
let username;
do{
    username = window.prompt("Enter your name ");
} while(username == "" || username == null )

console.log("hello", username);
*/
// 18 ****************************************************************************************
// While loop
/*
let username = "";

while( username == "" || username == null )
{
username = window.prompt("Enter Your name ");
}
console.log("Hello", username );
*/

/*
// infinite loop

while(1 == 1){
    console.log("I am stuck in a infinite loop !! ");
}
*/

// 17 ****************************************************************************************
//Logical operator && for and || or ! not equal to 
/*
let temp = 15;
let sunny = true;

if(temp >=0 && temp <=30 && sunny){
    console.log("Weather is GOOD !!")
}
else{
    console.log("weather is BAD !!")
}
*/
/*
let temp = -15;

if(temp >=0 || temp <=30 ){
    console.log("Weather is Good !!")
}
else{
    console.log("Weather is Good !!")
}
*/

/*
let temp = 15;
let sunny = true;

if(!(temp > 10)){
    console.log("Weather is Bad !")
}
else{
    console.log("Weather is bad !")
}
*/

// 16 ****************************************************************************************
// Switch statements
/*
let grade = "A+";

switch(grade){

    case "AA":
        console.log("Excelent !!");
        break;
    case "A+":
        console.log("Very goood !");
        break;
    case "A":
        console.log("Good");
        break;
    default :
        console.log("Not Defined ..")
}
*/
/*
let grade = 89;

switch(true){
    case grade >= 90:
        console.log("Excellent !!");
        break;
    case grade >= 80:
        console.log("Very Good !");
        break;
    case grade >=70:
        console.log("Good .");
        break;
    default:
        console.log("Undefined ..")

}
*/

// 15 ***************************************************************************************
//Simple programme with HTML for checkbox and radiobuton using cheked properties
/*
document.getElementById("submit").onclick = function(){

    const ChkBox = document.getElementById("myChkBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterBtn = document.getElementById("mastercardBtn");
    const rupayBtn = document.getElementById("rupayBtn");


    if( ChkBox.checked){
            console.log("You are Subscribed")
    }
    else{
            console.log("you are NOT Sunscribed")
    }

    if( visaBtn.checked){
        console.log("You are paying with Visa card")
    }
    else if(masterBtn.checked){
        console.log("You are paying with Master casrd")
    }
    else if(rupayBtn.checked){
        console.log("You are paying with makein india Rupay card")
    }
    else{console.log("you have not selected any payment options")}
    
}
*/
// 14 ****************************************************************************************
//if statement 
/*
let age = 21;

if (age <= 0 ){
    console.log("invalid age")
}
else if(age >= 60){
    console.log("you are a Senior citizen")
}
else if( age >= 18){
    console.log("You are an adult")
}
else{
    console.log("You are a child ")
}
*/
// Boolean
/*
let online = true;

if(online){
    console.log("you are online")
}
else{console.log("you are ofline")}
*/

// 13 ****************************************************************************************
//  method chaining = calling one method after another in one continous line
/*
let username = "sibam";

let firstletter = username.charAt(0).toUpperCase().trim();
console.log(firstletter);
*/

// 12 ****************************************************************************************
// slice() extract a section of a string and returns it as a new string with out modifying the original string
/*
// let fullName = "Bro code";
let fullName = "Sibam Paul";
let firstName, lastName;

// firstName = fullName.slice(0, 3);
// lastName = fullName.slice(4)

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
*/

// 11 ****************************************************************************************
/*
// usefull string properties & methids
let username = "Bro Code";
let phoneno = "123-456-789";
// console.log(username.length);
// console.log(username.charAt(0));
// console.log(username.indexOf("o"));
// console.log(username.lastIndexOf("o"));

username = username.trim();
username = username.toUpperCase();
// username = username.toLowerCase();

console.log(username);
phoneno = phoneno.replaceAll("-","/");
console.log(phoneno);
*/

// 10 ****************************************************************************************
/*
let x, y, z;

document.getElementById("rollBtn").onclick = function(){

    x = Math.floor(Math.random() * 6 );
    y = Math.floor(Math.random() * 6 );
    z = Math.floor(Math.random() * 6 );

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}
*/

// let x = Math.floor(Math.random() * 6 + 1);
// console.log(x);

// 9 ****************************************************************************************
// Counter Programme
/*
let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("counter").innerHTML = count; 
}
document.getElementById("increaseBtn").onclick = function(){

    count += 1;
    document.getElementById("counter").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){

    count = 0;
    document.getElementById("counter").innerHTML = count;
}
*/

// 8 ****************************************************************************************
// Hypotenuse of a triangle
//with HTML
/*
let a, b, c;

document.getElementById("submitBtn").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);
    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById('clabel').innerHTML = 'Side C : ' + c;


}
*/
//without HTML
/*
a = window.prompt("Enter Side a ");
a = Number(a);

b = window.prompt("Enter Side b");
b = Number(b);

c = Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2));

console.log(c);
*/


// 7 ****************************************************************************************
// Math Functions
/*
// let x = 3.14;
// or,
let x = Math.PI;

let y = 5;
let z = 9;
let max, min;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);
max = Math.max(x,y,z);
min = Math.min(x,y,z);

console.log(x);
console.log(max);
console.log(min);
*/

// 6 ****************************************************************************************
// const = a variable that value can't be changed
/*
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("enter radius");
radius = Number(radius);

PI = 20.456; // will give you error const can't be change 

circumference = 2 * PI * radius ;

console.log("circumference = ", circumference);
*/

// 5 ****************************************************************************************
//type conversion = changes the data type str, bum , bool

// let age = window.prompt("how old are you ?");
// age +=1; //wrong input concat the number 
/*
age = Number(age);
age +=1;

console.log("Happy birthday you are ", age , "years old now");
*/

/*
let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean(""); //space consider as false any value is true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

// 4 ****************************************************************************************
//how to accespt user input 

// easyway using window prompt
// let username = window.prompt(' user name ?');
// console.log(username);

// difficult way
// let username;

// document.getElementById("mybutton").onclick = function(){
//     username = document.getElementById("user").value;
//     console.log(username);
//     document.getElementById("mylabel").innerHTML = "Hello " + username;
// }

// 3 ****************************************************************************************
// operator

// let number = 20;
// number = number + 2;
// number = number - 2;
// number = number * 2;
// number = number / 2;
// number = number % 3;

// aurmented assignment opeartor

// number += 2;
// number -= 2;
// number *= 2;
// number /= 2;
// number %= 2;  //syntax error

// console.log(number);

/*
operator precedence
1. parenthesis ()
2. exponents
3. multiplication & division
4. addition and subtraction
*/

// let result = 1 + 4 * ( 3 + 2 )
// console.log(result)

// 2****************************************************************************************

// method of declaring a variable 
// 1. Declearing ( var, let, const)
// 2. assignment (= assignment operator)

// let fname = "sibam";  //strings
// let age = 29;         // numbers  
// let student = true;   // booleans

// console.log('Hello',fname);
// console.log('u are', age ,'years old');
// console.log('enroled',student);

// document.getElementById("p1").innerHTML = "hello " + fname;
// document.getElementById("p2").innerHTML = 'you are ' + age + ' years old';
// document.getElementById("p3").innerHTML = 'enrolled ' + student

// 1****************************************************************************************

// console.log("I like dal bhat allur dom");
// window.alert("Hello Sibam ");

//this is a comment 
/*
multi 
Line 
comment 
*/

