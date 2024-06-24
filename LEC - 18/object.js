// let person = {
//     //properties -> key:value
//     naam : "kaju",
//     age : 1,
//     fav_color : "red"
// }
// console.log(person)
// //dot notation
// console.log(person.age) //1

// -----------------------------------

let person = {
    name: "kaju",
    umar : 1,
    fav_color : "laala",
    wishDiwali : function kismish(){
        console.log("appy diwali")
    }
}

console.log(person.name);
// console.log(person.wishDiwali); //wrong
console.log(person.wishDiwali()); //right
console.log(person.kismish()); //WRONG UNDEFINED