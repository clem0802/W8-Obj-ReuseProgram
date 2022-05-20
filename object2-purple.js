/*----------------------------------*/
// add a line to call the "microwavve" object's method "heat"
var microwave = {
    brand : "Samsung",
    heat : function(){
     console.log("Now heating your food.");
    }
};
console.log(microwave.heat()); //

/*----------------------------------*/ RETURN
var microwave = {
    brand: "Samsung",
    isOn: function(){
        return true;
    }
};

/*----------------------------------*/ THIS (inside the object's METHOD)
var microwave = {
    brand: "Samsung",
    on: true,
    isOn: function(){
        return this.on;
    }
};

/*----------------------------------*/
var employee = {
    name : "Jim Halpert",
    title : "Salesman",
    displayTitle : function(){
     console.log(this.title);
    }
   };
   
   console.log(employee.displayTitle()); // Salesman

/*----------------------------------*/
var apartment = {
    number : 404,
    location : "unknown",
    display : function () {
        this.number = 200;
        console.log(this.number); // 200
    }
};
   
apartment.display();
console.log("apartment location: " + apartment.location); // apartment location: unknown

/*----------------------------------*/
var tajMahal = {
    cuisine: "Indian",
    takeout: false
   };
   tajMahal.starRating = 4.5; // value added outside of the object
   console.log(tajMahal.starRating);

/*----------------------------------*/ (6/10)
// Create a variable called inPreferred, which checks if preferredCuisines includes the cuisine value for tajMahal.
// Hint: use the .includes() method on preferredCuisines, which will return true if the specified value is in it.
var tajMahal = {
cuisine: "Indian",
takeout: false,
starRating: 4.5
};

var preferredCuisines = ["Chinese", "Italian", "Turkish"];
var inPreferred = preferredCuisines.includes(tajMahal.cuisine); //
console.log(inPreferred); // false

/*----------------------------------*/ (7/10)
// Add a method called fullName . The method should return a string made out of the first name, 
// followed by a space ( " " ) and the second name (Amanda Jimenez in our example).
var employee = {
    firstName: "Amanda",
    secondName: "Jimenez",
    fullName: function(){
      return this.firstName + " " + this.secondName;
    }
}
console.log(employee.fullName());

/*----------------------------------*/ (8/10)
// 1) Add a method called email which returns a string which is the result of the username() method 
// followed by @company.com (ajimenez@company.com in our example).
// 2) Use .toLowerCase() when calling the username() method to make all letters lowercase.
// 3) Display the result of calling the email() method of the employee object.
var employee = {
    firstName: "Amanda",
    secondName: "Jimenez",
    fullName: function() {
        return this.firstName + " " + this.secondName;
    },
    username: function() {
        return this.firstName[0] + this.secondName;
    },
    email: function() {
        return this.username().toLowerCase() + "@company.com"; //
    }
}
console.log(employee.email()); // ()

/*----------------------------------*/ (9/10)
// 1) Add a method called totalCost, which takes two arguments, called adultCost and childCost, 
// and returns the sum of party.adults * adultCost and party.children() * childCost.
// 2) Display the result of calling this method of the party object.
var party = {
    guests: 12,
    adults: 8,
    children: function () {
        return this.guests - this.adults
    },
    totalCost: function (adultCost, childCost) {
        return (this.adults * adultCost) + (this.children() * childCost)
    }
};
console.log(party.totalCost(10, 7)) // 108

/*----------------------------------*/ (10/10)
// Take a look at the eligible() function. Its purpose is to return true if volume is less than or equal to a maxVolume. 
// Let's transform that function into an object method.
// 1) Add a method to parcel called volume, which returns the value of length * width * depth for the object.
// 2) Transform the eligible function into a method with the same name inside of the parcel object. 
//    The method should only have one parameter maxVolume and should call this.volume() to get the volume.
// 3) console.log() the result of a call to the eligible method of parcel, using a value of 100 for maxVolume.
var parcel = {
    length: 100,
    width: 80,
    depth: 30,
    volume: function(){
      return this.length * this.width * this.depth;
    },
    eligible: function(maxVolume){
     if (this.volume() <= maxVolume) {
       return true;
     } else {
       return false;
     }
    }
};
   
   // function eligible(length, width, depth, maxVolume) {
   //  volume =length * width * depth;
   //  if (this.volume() <= maxVolume) {
   //   return true;
   //  } else {
   //   return false;
   //  }
   // }
   
console.log(parcel.eligible(100));