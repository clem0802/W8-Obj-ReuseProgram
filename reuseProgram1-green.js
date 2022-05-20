/*----------------------------------*/ (REUSABLE PROGRAMS)
/*----------------------------------*/
// functions are blocks of code
// nested instructions are surrounded by braces 
// and have extra space on the left side
// the space on the left is called INDENTATION
function displayMessage(message){
    console.log(message);
}
displayMessage("Approved"); // Approved


/*----------------------------------*/
// wrapping "if" statements inside functions helps us organize and reuse our code
// now we can use the same "if" statement with a function call
function isRentingAge(age){
    if(age >= 21){
        console.log("Approved");
    }
}
isRentingAge(26); // Approved


/*----------------------------------*/
// instructions outside of nested code blocks still get executed
// even if the code inside the conditional statement gets skipped
function isRentingAge(age) {
    if (age >= 21) {
     console.log("Approved");
    }
    console.log("Check Complete");
   }
   
   isRentingAge(20); // Chec, Complete


/*----------------------------------*/
function displayAlarm(time){
    if(time === "7:00"){
        console.log("Waky waky");
    }
}
displayAlarm("7:00"); // Waky waky


/*----------------------------------*/
function isLying(boolean) {
    console.log("Welcome to the Lie Detector 3000");
    if (boolean === false) {
     console.log("He's lying");
    }
}
isLying(false);
// Welcome to the Lie Detector 3000
// He's lying


/*----------------------------------*/
// display both messages in the console
function isLying(boolean) {
    if (boolean === true) {
     console.log("He's not lying");
    }
    console.log("Done");
}
isLying(true);
// He's not lying
// Done


/*----------------------------------*/
// skip the instruction inside the "if" statement
function getTaxedSalary(salary) {
    if (salary > 2100) {
     salary = salary - 500;
    }
    return salary;
}

var income = getTaxedSalary(2100);
console.log(income); // 2100


/*----------------------------------*/
function applySeniorDiscount(age) {
    if (age >= 65) {
     console.log(age + " year old has 50% OFF");
    }
}
applySeniorDiscount(18);
applySeniorDiscount(67);
// 67 year old has 50% OFF


/*----------------------------------*/
function isGreater(a, b) {
    if (a > b) {
     console.log(a + " is greater than " + b);
    }
}
isGreater(13, 10);
// 13 is greater than 10


/*----------------------------------*/
function checkPassword(word) {
    if (word === "12345") {
     console.log("Logging in");
    } else {
     console.log("Wrong password");
    }
}
checkPassword("swordfish"); // Wrong password


/*----------------------------------*/
function multiplyByTen(number) {
    return number * 10;      
}

var result = multiplyByTen(29);
console.log(result); // 290


/*----------------------------------*/
// here the age is between 18 and 65, the full price is charged
function getDiscount(age) {
    if (age <= 18) {
     return "50% OFF";
    } else if (age >= 65) {
     return "30%";
    }
     return "Full price";              
}
var discount = getDiscount("25");
console.log(discount); // Full price


/*----------------------------------*/
// We learned loops repeat the instructions inside their braces. 
// Make this code display numbers from 0 to 4.
for(var i=0; i<5; i++){
    console.log(i);
} // 0  1  2  3  4  

function displayNumbers(message){
    for(var i=1; i<=3; i++){
        console.log(i + message);
    }
}
displayNumbers(" puppy");
displayNumbers(" kitty");
// 1 puppy
// 2 puppy
// 3 puppy
// 1 kitty
// 2 kitty
// 3 kitty


/*----------------------------------*/
// To change what a loop displays, we use parameters to do things 
// like adding a string right after the counter variable.
function displayNumbers(message){
    for(var i=0; i<10; i++){
        console.log(i + message);
    }
}
displayNumbers(" ginger beers on the wall");
// 0 ginger beers on the wall
// 1 ginger beers on the wall
// 2 ginger beers on the wall
// 3 ginger beers on the wall
// 4 ginger beers on the wall
// 5 ginger beers on the wall
// 6 ginger beers on the wall
// 7 ginger beers on the wall
// 8 ginger beers on the wall
// 9 ginger beers on the wall


/*----------------------------------*/
// Since for loops are blocks of code, 
// we add them to functions the same way we add if statements, between braces and indented.
function drawVerticalLine(){
    for(var i=0; i<3; i++){
        console.log("|");
    }
}
drawVerticalLine();
//  |
//  |
//  |


/*----------------------------------*/
// We can use parameters to mark the endpoint of a loop. 
// Code the times parameter inside the loop condition.
function drawVerticalLine(times){
    for(var i=0; i<times; i++){
        console.log("|");
    }
}
drawVerticalLine(5);
//  |
//  |
//  |
//  |
//  |


/*----------------------------------*/
// To control where a loop starts, we use a parameter to set the counter variable's value. 
// This code displays the days left in a month.
function displayDaysLeft(day){
    for(var i=day; i<31; i++){
        console.log(i);
    }
}
drawVerticalLine(26);
// 26
// 27
// 28
// 29
// 30
// 31


/*----------------------------------*/
// We can use parameters to set both the start and end values. 
// This code only displays numbers in between the values we passed to the function.
function displayInterval(start, end){
    for(var i=start; i<end; i++){
        console.log(i);
    }
}
displayInterval(26, 30);
// 26
// 27
// 28
// 29


/*----------------------------------*/
function displaySign(sign, times){
    for(var i=0; i<times; i++){
        console.log(sign);
    }
}
displaySign("#", 3);
// #
// #
// # 

/*----------------------------------*/
// Let's learn how to use functions to go over arrays and manipulate their values whenever we want, 
// like when we click a button.
// Run the code below that checks whether the value 66 exists in the grades array using a function.
let grades = [91, 66, 77, 84, 66];
let search = 66;

function searchGrade(grades, search) {
 for (var i = 0; i < grades.length; i++) {
  if (grades[i] == search) {
   console.log("The grade exists!");
   break;
  }
 }
}
searchGrade(grades, search); // The grade exists!

/*----------------------------------*/
// We can also use multiple arrays with a function to perform a specific action, 
// such as finding common array elements.
// Let's find common elements in two arrays by passing them to the compareArrays function.
let one = [91, 66, 77, 84, 68];
let two = [81, 66, 78, 88, 98];
function compareArrays(one, two){
    for(let i=0; i<one.length; i++){
        if(one[i]===two[i]){
            console.log("Common element:", one[i]);
        }
    }
    return false;
}
compareArrays(one, two); // Common element: 66

/*----------------------------------*/
// To calculate discount values based on different discounts, 
// pass both prices and discounts arrays to getValues().
let prices = [99, 129, 149];
let discounts = [0.1, 0.2, 0.25];
function getValues(prices, discounts){
    var values = [];
    for (var i=0; i<prices.length; i++){
        values[i] = prices[i] * discounts[i];
    }
    console.log(values);
}
getValues(prices, discounts); // [9.9, 25.8, 37.25]