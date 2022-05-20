/*----------------------------------*/ LIVE SESSION (2022.01.13)
/*----------------------------------*/ Exo
const clemence = {
    name: "TAN",
    favoriteJob: "Web Dev",
    married: true,
    extraInfo: function(){
        console.log("piano, books");
    }
}
clemence.extraInfo(); // piano, books

/*----------------------------------*/ Exo
const clemence = {
    name: "TAN",
    favoriteJob: "Web Dev",
    married: true,
    favoriteFruits: ["apple","pear","kiwi"],
    extraInfo: function(){
        console.log("piano, books");
    },
    favoriteFoods: { // here's an object, so (:)
        sweet: "appel pie",
        savory: "KFC"
    }
}
console.log(clemence.favoriteFoods.savory); // KFC

/*----------------------------------*/ Exo
// Create a function that takes an object argument sizes (contains width, length, height keys) 
// and returns the volume of the box.
const box1 = {
    width:2,
    height:8,
    length:10
}
function volume(box){
    return volumeTotal = box.width*box.height*box.length;
}
console.log(volume(box1)); // 160

/*----------------------------------*/ Exo 
// Create a function that takes an object as an argument and returns a string with facts about the city. 
// ‘name,population,continent’  
// sample: London has a population of 9M and is in Europe
const city1 = {
    name: "Tokyo",
    population: "13 millions",
    continent: "Asia"
}
function showCity(city){
    return showCityAspect = city.name + " has a population of " + city.population + " and is in " + city.continent;
}
console.log(showCity(city1)); 
console.log(`${city1.name} has a population of ${city1.population} and is in ${city1.continent}`);
// Tokyo has a population of 13 millions and is in Asia 
// Tokyo has a population of 13 millions and is in Asia 

/*----------------------------------*/ SWITCH (à voir)

const color = "blue";
switch(color){
    case "pink":
    console.log("nice");
    break; // if true, the code STOPs
    case "purple":
    console.log("ok");
    break;
    case "red":
    console.log("bad");
    break;
    default:
    console.log("any color"); // output this
} 

/*----------------------------------*/
const city1 = {
    name: "Tokyo",
    population: "13 millions",
    continent: "Asia"
}

function showCity(city1) {
	switch (city1.continent === "Asia") {
	  case "Asia": console.log("It is too far");
	    break;
	  case "Europe": console.log("It is close");
	    break;
	  case "Australia": console.log("Down under");
	    break;
	  default: console.log("Unknown place");
	};
}
console.log(showCity(city1.continent)); // Unknown place