type Person = {
    name:string;
    age:number,
    isStudent:boolean,
    address:{city:string, country:string}
} 

let person1: Person = {
    name: `wali_onar`,
    age: 47,
    isStudent:true,
    address:{
        city:"`karachi",
        country: "pakistan"
    }
}

let person2: Person = {
    name: `ali_onar`,
    age: 47,
    isStudent:true,
    address:{
        city:"`karachi",
        country: "pakistan"
    }
}
let person3: Person = {
    name: `kali_onar`,
    age: 47,
    isStudent:true,
    address:{
        city:"`karachi",
        country: "pakistan"
    }
}
let person4: Person = {
    name: `Khan ababa`,
    age: 47,
    isStudent:true,
    address:{
        city:"`New yORK",
        country: "USA"
    }
}

let person5: Person = {
    name: `Abdul Rasheed`,
    age: 64,
    isStudent:true,
    address:{
        city:"`Dhaka",
        country: "India"
    }
}
let person6: Person = {
    name: `Abdul Qadir`,
    age: 87,
    isStudent:false,
    address:{
        city:"`Lahore",
        country: "Pakistan"
    }
}

//  console.log(person1, person2, person3, person4, person5, person6 );
    console.log(person1.age, person3, person4.name, person4.age);