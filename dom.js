const test = document.getElementById("test");

test.innerText ="My name is Ajia Abdulhamid";

// creating new elements
const newItem =document.createElement("h1")
const headingTitle=document.createTextNode("This is a new element");

newItem.appendChild(headingTitle);

const printToDom =document.getElementById("newElement");
printToDom.appendChild(newItem);

// creating fav dish
const dish = document.createElement("h2")
const dishName = document.createTextNode("Gurusa")

dish.appendChild(dishName);

const newDish = document.getElementById("favDish")
newDish.appendChild(dish);

// creating fav pet
const pet = document.createElement("h3")
const petName =document.createTextNode("Cat")
pet.appendChild(petName);
const newPet =document.getElementById("favpets")
newPet.appendChild(pet)

//creating fav color
const color = document.createElement("h4")
const colorName =document.createTextNode("Purple")
color.appendChild(colorName)
const Newcolor =document.getElementById("favcolors")
Newcolor.appendChild(color)