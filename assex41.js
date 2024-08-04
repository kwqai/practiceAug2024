"use strict";
/*

Excercise #41:
==============

Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.

*/
//  ============== STARTS FROM HERE ===============================================================
/*

// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
const magician_names: string[] = ['Shahrukh', 'David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call the function to show magicians
show_magicians(magician_names);

*/
//  ==============  ENDS HERE   =====================================================================
/*

// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    magician_names.forEach(magician => console.log(magician));
        
    }

// Array of magician's names
const magician_names: string[] = ['ballayballay', 'David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call the function to show magicians
show_magicians(magician_names);

*/
//  ====================== OUT PUT ================================================
/*

List of Magicians:
Shahrukh
David Copperfield
Harry Houdini
Penn Jillette
Teller


*/
// ============ EX 42   ================================================
/*

Excercise #41:
==============


Great Magicians: Start with a copy of your program from Exercise 40.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.


*/
//  ============== STARTS FROM HERE ===============================================================
/*

// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    magician_names.forEach(magicians => console.log(magicians));
    
}

// Function to modify the array of magicians
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    magicians.forEach(magician => {
        great_magicians.push(`the Great ${magician}`)
    });
    return great_magicians;
}

// Array of magician's names
const magician_names: string[] = ['Shabaab', 'Dr. Shakeel', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Modify the array of magicians
const great_magicians: string[] = make_great(magician_names);

// Call the function to show magicians
show_magicians(great_magicians);

//  ==============  ENDS HERE   =====================================================================

*?


//  ====================== OUT PUT ================================================



/*

List of Magicians:
the Great Shahrukh
the Great David Copperfield
the Great Harry Houdini
the Great Penn Jillette
the Great Teller

*/
// ============ EX 42   ================================================
/*


Excercise #43:
==============


Unchanged Magicians: Start with your work from Exercise 41.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and
store it in a separate array.
Call show_magicians() with each array to show that
you have one array of the original names and
one array with the Great added to each magician’s name.


*/
//  ============== STARTS FROM HERE ===============================================================
// Function to show magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Function to modify a copy of the array of magicians
function make_great(magicians) {
    const great_magicians = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
// Array of magician's names
const magician_names = ['Shahrukh', 'David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Modify a copy of the array of magicians
const great_magicians = make_great([...magician_names]); // Creating a copy of the array using spread operator
// Call the function to show magicians with original names
show_magicians(magician_names);
console.log(""); // Adding a blank line for separation
// Call the function to show magicians with the Great added to each name
show_magicians(great_magicians);
//  ==============  ENDS HERE   =====================================================================
//  ====================== OUT PUT ================================================
/*

Shahrukh
David Copperfield
Harry Houdini
Penn Jillette
Teller

List of Magicians:
the Great Shahrukh
the Great David Copperfield
the Great Harry Houdini
the Great Penn Jillette
the Great Teller

*/
