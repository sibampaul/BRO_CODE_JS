// 16 ****************************************************************************************
// 15 ****************************************************************************************
// 14 ****************************************************************************************


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

