/*----------------------------*/ Savings Calculator
https://dev.getmimo.com/project/1780?week=5&track=50&course=1780&chapter=11755&lesson=1
// Now that we know how to write functions and write decision-making JavaScript code, 
// let's use our knowledge to programmatically calculate discounts at a bargain store. 
// This store uses item prices as codes for discounts. For example, 
// all items priced with .95 cents might receive a 40% discount.

// The program you write will take in the list of prices, 
// determine whether the customer is spending more than $50 (therefore earning themselves additional item discounts), 
// and then calculate the discounted total. 
// The program will incorporate log statements along the way to help visualize its logic.




// 1) Within the function body, declare a variable named total and set its value equal to 0.
// 2) Next, write a for loop to iterate from 0 to the length of the receipt array. Use i as the counter variable.
// 3) Next, update the total variable during each for loop iteration by adding a new receipt.
// At each iteration of the for loop, use the i counter to access an item in the receipt array 
// and add it to the total variable.
// 4) Finally, after the for loop, write an if-else statement that returns true if the total is greater than $50 
// and false otherwise.

var receipt = [7.99, 8.67, 8.50, 9.83, 10.45, 6.95, 7.67, 2.35, 4.99, 4.67, 3.86];
function getCents(price) {
	var splitPrice = price.toString().split(".");
  return splitPrice[1];
}

function getsDiscount() {
  var total = 0;
  for(var i=0; i<receipt.length; i++){
    total += receipt[i];
  }
  if (total>50){
    return true;
  } else {
    return false;
  }
}

// Declare the function findDiscount(). The function should take in a single parameter: price.
// Declare a variable named cents. Use the provided getCents() function 
// to store the number of cents of the price in the newly declared variable
function findDiscount(price){
  var cents = getCents(price);
  if (cents == 67){
    return 0.3;
    } else if (cents == 95){
      return 0.4;
    } else if (cents == 99){
      return 0.5;
    } else {
      return 0;
    }
}

// 1) Declare a function calculateTotal() that takes no parameters.
// At the top of the function, initialize two variables total and totalSavings to a value of 0.
// 2) Following the variable declarations, write a for loop that uses an iterator variable i 
// to iterate through the receipt items.
// Then, within the loop body, save the current iteration to a variable named originalPrice.
function calculateTotal() {
    var total = 0;
    var totalSavings = 0;
    for(var i = 0; i<receipt.length; i++){
      var originalPrice = receipt[i];
      if (getsDiscount()) {
        var discountRate = findDiscount(originalPrice);
        var savings = originalPrice * discountRate;
        totalSavings += savings;
        var discountedPrice = (originalPrice - savings);
        total += discountedPrice;
        if (discountRate !== 0) {
          console.log("Item " + i + " Savings: $" + savings.toFixed(2));
          }
        } else {
          total += originalPrice;
      }
    }
    console.log("Total Saved: $" + totalSavings.toFixed(2));
    console.log("Total Post-Discount: $" + total.toFixed(2));
  }
calculateTotal();

// Item 0 Savings: $4.00
// Item 0 Savings: $2.60
// Item 0 Savings: $2.78
// Item 0 Savings: $2.30
// Item 0 Savings: $2.50
// Item 0 Savings: $1.40
// Total Saved: $15.57
// Total Post-Discount: $60.36