//--------------Diwali-------------

function diwali(){
    console.log("happy diwali")
}
diwali();
diwali();
diwali();


//--------------SUM-------------

function sum(){
    var a = 10;
    var b = 20;
    console.log(a+b);
}
sum();


//---------------SUM2--------------
//---------parameterized function-----------------
function sum2(a,b){
    console.log(a+b)
}
sum2(10,40)

//------------NaN-------------------

// function kaju_lalla(a,b){
//     console.log(a+b)
//     console.log(typeof(a+b))
// }

// kaju_lalla(250)


//-----------Default parameterized function--------------

// function kaju_lalla(a,b=60){
//     console.log(a+b)
// }

// kaju_lalla(250)


//--------------------overwrite parameter-------------------
// function kaju_lalla(a=60,b){
//     console.log(a+b)
// }

// kaju_lalla(250)


//----------------------------------------------------

function kaju_lalla(a = 60,b=100){
    console.log(a+b)
}

kaju_lalla(250,30);
kaju_lalla();


//------------------Undefined-----------------------------

function sam(a){
    let kaju;
    console.log(kaju)
    console.log(a+kaju)
}
sam(30)

// --------------------undefined & null----------------------

//-----------case -1 js khud undefine dega--------------------
let kaju = null;
console.log(kaju);

//--------------case -2 ham undefined de rahe jo ki nhi karna hai-------------------------
let kaju2 = undefined;
console.log(kaju2);

//---------------case -3 => OBJECT---------------
let kaaju = null;
console.log(kaaju);
console.log(typeof(kaaju))