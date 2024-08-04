"use strict";
// Spread and REST OPERATORS (...). TO SPLIT / COPY/ EXPAND  ARRAY OR OBJECT:
//===========================================================================
// Spread and REST OPERATORS (...). TO SPLIT / COPY/ EXPAND  ARRAY:
//=================================================================
/*

let list = ["Audi", "Honda", "BMW", "Suzuki", "Cultux", "Corolla", "Mistubishi", "Liana"];
//let newList = [...list, "Ferrari"];

// TO SPREAD AFTER FERRARI.
let newList = ["Ferrari", ...list];
console.log(newList);

*/
// Spread and REST OPERATORS (...). TO SPLIT / COPY/ EXPAND OBJECT:
//=================================================================
/*

    let person = {
        name: "Hashmi", // Propertt 1
        age: 25,         // Propertt 2
        Qualification: "Diploma"

    }
        let newperson = {
        ...person,
         city: "karachi" // Propertt 3
    }
        console.log(newperson);

*/
// REST OPERATORS (...). TO SPLIT / COPY/ EXPAND OBJECT:- FLEXIBILITY
//===================================================================
/*

function hello(...all){
    console.log(all);

}
 hello(1, 2, 3 ,4, 5, 6, 7, 8, 9, 10);

*/
//  WITHOUT USING LOOP:
//  ==================
/*

function handleEvent(...details) {
    console.log("Event Details:");
    console.log("---------------");
    console.log(...details); // Using spread operator to print all details
    console.log("---------------");
}

handleEvent(
    "Conference",
    "March 10, 2024",
    "Karachi Baadshah City",
    "Guest speakers",
    "Networking session",
    "Menu",
    "something else"
);

*/
// USING LOOP:
// ===========
// Define a function to handle event details
function handleEvent(...details) {
    console.log("Event Details:");
    console.log("---------------");
    for (let i = 0; i < details.length; i++) {
        console.log(`- ${details[i]}`);
    }
    console.log("---------------");
}
// Call the function with event details
handleEvent("Conference", // Event name
"March 15, 2024", // Date
"iSLAMABASD City", // Venue
"Guest speakers", // Special attractions
"Networking session" // Additional activities
);
