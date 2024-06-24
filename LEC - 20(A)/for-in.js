let obj = {
    naam : "kaaju",
    age : 3,
    fname : "baadam"
}

for(let i in obj){
    console.log(i);//return keys in object
    console.log(obj[i]);//return full object item
}

console.log(obj.naam);
//console.log(obj[naam]);
console.log(obj["naam"]);//should be store in string to access it