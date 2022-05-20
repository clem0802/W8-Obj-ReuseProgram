/*------------------------------------*/
function applySeniorDiscount(age) {
    if (age >= 65) {
     return "You get 20% off";
    } else {
     return "Please pay full price";
    }
   }
var discount = applySeniorDiscount(70);
console.log(discount); // You get 20% off


/*------------------------------------*/
function increaseByTen(number) {
    return "Let's increase " + number + " by ten."
    return number + 10;
    }
var result = increaseByTen(29);
console.log(result);
// Let's increase 29 by ten. => only the FIRST return statement is executed, then STOP


/*------------------------------------*/
function getDiscount(age) {
    if (age <= 10) {
     return "25% OFF";
    } else if (age >= 55) {
     return "30% OFF";
    }
    return "Full price";
   }
var result = getDiscount("11");
console.log(result); // Full price


/*------------------------------------*/ HOURS
function displayHours(start, end){
    for(var i=start; i<=end; i++){
        console.log(i + ":00");
    }
}
displayHours(1,24);
// 1:00
// 2:00
// 3:00
// 4:00
// 5:00
// 6:00
// 7:00
// 8:00
// 9:00
// 10:00
// 11:00
// 12:00
// 13:00
// 14:00
// 15:00
// 16:00
// 17:00
// 18:00
// 19:00
// 20:00
// 21:00
// 22:00
// 23:00
// 24:00


/*------------------------------------*/
function countTimes() {
    console.log("How many times must I tell you?")
    for (var i = 2; i <= 20; i++) {
     console.log(i + " times?");
    }
   }
countTimes()
// How many times must I tell you?
// 2 times?
// 3 times?
// 4 times?
// 5 times?
// 6 times?
// 7 times?
// 8 times?
// 9 times?
// 10 times?
// 11 times?
// 12 times?
// 13 times?
// 14 times?
// 15 times?
// 16 times?
// 17 times?
// 18 times?
// 19 times?
// 20 times?


/*------------------------------------*/
// this code displays "the numbers 1 to 6 in increments of 0.5"
function displayNumbers(division) {
    for (var i = 2; i < 13; i++) {
     console.log(i / division);
    }
   }
displayNumbers(2);
// 1
// 1.5
// 2
// 2.5
// 3
// 3.5
// 4
// 4.5
// 5
// 5.5
// 6


/*------------------------------------*/ (Attention, differences !!)
function displayAlert(message) {
    for (var i = 0; i < 5; i++) {
     return message; //
    }
   }
displayAlert("I will practice Javascript");
// "I will practice Javascript"

/*--------*/
function displayAlert(message) {
    for (var i = 0; i < 5; i++) {
     console.log(message); //
    }
   }
displayAlert("I will practice Javascript");
// I will practice Javascript
// I will practice Javascript
// I will practice Javascript
// I will practice Javascript
// I will practice Javascript


/*------------------------------------*/
// What value will the getTotal function return?
let total = 0;

function getTotal(itemPrice, tax) {
 total = itemPrice + (itemPrice * tax);
 return total;
}
getTotal(100, 0.14); 
// 114


/*------------------------------------*/
// What will the double function print to the console?
let numbers = [2, 3, 5, 7, 11];

function double(array) {
 let results = [];
 for (let i = 0; i < array.length; i++) {
  results.push(array[i] * array[i]);
 }
 console.log(results);
}
double(numbers); 
// [4, 9, 25, 49, 121]


/*------------------------------------*/
// What value will the newNumbers variable have?
let newNumbers = [];

function multiply(arrayOne, arrayTwo) {
 let product;
 for (let i = 0; i < arrayOne.length; i++) {
  product = arrayOne[i] * arrayTwo[i];
  newNumbers.push(product);
 }
}
multiply([1,2,3,4], [5,6,7,8]);
console.log(newNumbers);
// [5, 12, 21, 32]


/*------------------------------------*/
// Add the "Ruby" language to the languages array using the addLanguage function.
let languages = ['JavaScript', 'Python', 'C++'];

function addLanguage(languages, language) {
 languages.push(language);
}
addLanguage(languages, "Ruby");
// ['JavaScript', 'Python', 'C++', 'Ruby']


/*------------------------------------*/
// Iterate over the numbers array and make sure each number inside is multiplied by 2.
function multiply(numbers){
    for(let i=0; i<numbers.length; i++){
        numbers[i]=numbers[i]*2;
    }
    console.log(numbers);
}
multiply([1,2,3]);
// [2, 4, 6]

/*--------*/
function multiply(numbers){
    for(let i=0; i<numbers.length; i++){
        numbers[i]=numbers[i]*2;
    }
}
multiply([1,2,3]);
console.log(numbers);
// [2, 3, 5, 7, 11]


/*------------------------------------*/
// Pass the fruits and the searchPhrase parameters 
// to the function to find if 'apples' exists in the fruit basket.
let fruits = ["apples", "bananas", "oranges"];
function searchFruits(fruits, searchPhrase) { //
    let foundFruit = fruits.find(fruit => fruit === searchPhrase); //
    if (foundFruit){
        console.log(searchPhrase + " exist in the fruit basket");
    }
    else {
        console.log("No such fruit exists in the fruit basket");
    }
}
searchFruits(fruits, "apples"); 
// apples exist in the fruit basket


/*------------------------------------*/
// Pass the tax and the itemsPrices to calculate and display the total, 
// which is the sum of all the numbers in the itemsPrices array.
let total = 0;
function calculateTotal(itemsPrices, tax){
    for(let i=0; i<itemsPrices.length; i++){
        total += itemsPrices[i];
    }
    total += total * tax;
    console.log(total);
}
calculateTotal([20,50,30], 0.14); // 114


/*------------------------------------*/
https://dev.getmimo.com/learn?week=5&track=50&course=1670&chapter=12236&lesson=3
// Display the numbers array using the printNumbers function.
function printNumbers(numbers) {
    console.log(numbers); //
   }
printNumbers([1, 2, 3]);


/*------------------------------------*/
let names = ['John', 'Adam', 'Sarah'];

function printEachName(names) {
 for (i=0; i<names.length; i++) {
  console.log(names[i]);
 }
}
printEachName(names);
// John
// Adam
// Sarah


/*------------------------------------*/
https://dev.getmimo.com/learn?week=5&track=50&course=1670&chapter=12236&lesson=7
// Multiply each item in the prices array by the corresponding item in the discount array 
// and add the product to the values array.
let prices = [100, 150, 200];
let discounts = [0.1, 0.2, 0.25];

function getValues(prices, discounts) {
 var values = [];
 for (var i = 0; i < prices.length; i++) {
  product = prices[i]*discounts[i];
  values.push(product);
 }
 console.log(values); // [10, 30, 50]
}
getValues(prices, discounts);


/*------------------------------------*/
https://dev.getmimo.com/learn?week=5&track=50&course=1670&chapter=12236&lesson=8
let numbers = [1, 2, 3, 4, 5];

function double(numbers) {
 for (let i = 0; i < numbers.length; i++) {
   numbers[i] *= 2; //
  console.log(numbers[i]); //
 }
}
double(numbers);
// 2
// 4
// 6
// 8
// 10


/*------------------------------------*/
function fuelCost(litres, costPerLitre){
    var totalCost = litres*costPerLitre;
    console.log(totalCost);
}
fuelCost(60, 1.44);


function milesToKm(miles){ // MILES TO KM
    var km = (miles/5)*8;
    return km;
}
console.log(milesToKm(70));


/*------------------------------------*/ (4/10)
var group = 4;
var total = 500;
var minimum = 150;

function stockCheck (groupSize, totalAvailable, minPerUser) {
 if (minPerUser > totalAvailable) { //
  return "Insufficient for one user";
 } else if (groupSize*minPerUser > totalAvailable) { //
   return "Insufficient for all users";
 } else {
  return "Sufficient for all users";
 }
}
console.log(stockCheck(group, total, minimum)); // Insufficent for all users


/*------------------------------------*/ (5/10)
https://dev.getmimo.com/challenge?week=5&track=50&course=1760&chapter=11686&lesson=1
attendees = ['John', 'Jane', 'Jemima'];
function sparePlaces(entries, capacity){
  var taken = entries.length;
  return capacity - taken;
}
console.log(sparePlaces(attendees, 8)); // 5


/*------------------------------------*/ (6/10)
https://dev.getmimo.com/challenge?week=5&track=50&course=1760&chapter=11704&lesson=1
var userDetails = {
    username: 'daniel88',
    password: 's3cr3t',
    credits: 100
};
   
var lastPurchase = 25;
function updateCredits (details, purchase) {
details.credits -= purchase;
return details;
}

userDetails = updateCredits(userDetails, lastPurchase)
console.log(userDetails.credits);


/*------------------------------------*/ (8/10)
https://dev.getmimo.com/challenge?week=5&track=50&course=1760&chapter=11696&lesson=1
// 1) Create a function called displayMembers, with two parameters, 
// called members (an array) and count (an integer).
// 2) Within the function, add a for loop which uses a counter variable i to iterate from the beginning of members, 
// and displays each name using console.log(), with the number of names to be displayed being equal to the value provided for count.
// 3) Call displayMembers() using membersList and 3 as the arguments.

membersList = ['Paul', 'Dan', 'Roman', 'Jessie', 'Rachel', 'Dominic']
function displayMembers(members, count) {
	for (var i = 0; i < count; i++) {
  console.log(members[i]);
  }
}
displayMembers(membersList, 3)
// Paul 
// Dan 
// Roman


/*------------------------------------*/ (9/10) MONETARY CONVERT
https://dev.getmimo.com/challenge?week=5&track=50&course=1760&chapter=11703&lesson=1
// 1) Define a function called convert, which has two parameters called value and fee.
// 2) Within the function, create a variable called gbpValue, which is equal to the result returned 
//    by calling usdToGbp with value as the argument, minus fee which we substract from the returned currency value.
// 3) Within the function, display gbpValue using console.log().
// 4) Call convert() with 100 and 2.5 as the arguments.

var usdGbp = 1.5
function usdToGbp (dollars) {
	return dollars / usdGbp
}

function convert (value, fee){
	var gbpValue = usdToGbp(value) - fee;
	console.log(gbpValue);
}
convert(100, 2.5);


/*------------------------------------*/
https://dev.getmimo.com/challenge?week=5&track=50&course=1760&chapter=11722&lesson=1
var windSpeed = 20;
var rainFall = 2;

function windRisk(wind) {
	return wind / 2.5
}

function rainRisk(rain) {
	return rain / 0.5
}

function isSafe(wind, rain) {
  	var risk = windRisk(wind) + rainRisk(rain)
    if (risk < 10) { //
    	return true;
    } else {
    return false;
    }    
}
console.log(isSafe(windSpeed, rainFall)); // false


/*------------------------------------*/
/*------------------------------------*/