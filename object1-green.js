/*-------------------------------------*/
2022.01.11 (OBJECTS)


/*-------------------------------------*/
var dog = {
    name: "Bo",
    bark: function(){
     console.log("woof woof!");
    }
   };
   dog.bark(); // woof woof!


/*-------------------------------------*/
var dog = {
name : "Bo",
bark : function(word){
  return "woof woof, " + word;
}
};
console.log(dog.bark("hungry")); // woof woof hungry


/*-------------------------------------*/
var phone = {
brand : "Apple",
number : "555-555-5555",
ring: function(){
    // method
  }            
};

/*-------------------------------------*/
var cat = {
    name: "Mittens",
    meow: function(){
        console.log("meow");
    }
}

/*-------------------------------------*/
var phone = {
brand : "Apple",
number : "555-555-5555",
ring : function(){
    console.log("ding ding ding!");
 }
};
phone.ring(); // ding ding ding

/*-------------------------------------*/
var phone = {
    brand : "Apple",
    number : "555-555-5555",
    call : function(phoneNumber){
     console.log("Calling " + phoneNumber);
  }
};
phone.call(); // Calling undefined

/*-------------------------------------*/
var myCereal = {
    name: "Trix",
    display: function(){
        console.log(this.name); // => myCereal.name
    }
}
myCereal.display(); // Trix

/*-------------------------------------*/
var myCereal = {
    name : "Trix",
    changeAndDisplay : function () {
     this.name = "Nuggies";                   
     console.log(this.name);
    }
};
myCereal.changeAndDisplay(); // Nuggies