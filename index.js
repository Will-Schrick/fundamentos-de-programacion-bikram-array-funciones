//fundamentos-de-programacion-bikram-array-funciones

// Arrays #1-4
let arrayVacio  = [];
let arrayNumeros   = [0,1,2,3,4,5,6,7,8,9];
let arrayNumerosPares = [0,2,4,6,8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//Funciones #5-9
function suma (a,b) {
    return a+b;
   }
//console.log(suma(3, 5));  

function potenciacion (a, b) {
    return a ** b;  
}
//console.log(potenciacion(2, 3));


function separarPalabras(str) {
    return str.split(' ')  // this splits by spacese
}
console.log(separarPalabras('Hola que tal?'));
console.log(separarPalabras('The Bridge for life'));
console.log(separarPalabras('A ver como separas esto'));

//
const repetirString  =(str,a) => {
    return str.repeat(a);
}

//console.log(repeatString('hello',5));

const esPrimo = (num) => {
    if (num<=1) {
        console.log("Not a Prime #.");
    } 
    else if (num === 2) {
        console.log("Two is a Prime Numer. It's the only even Prime # =).");    
    }
         else if (num %2 === 0) {
        console.log("Even # and not prime.");
    }      
    else console.log("Prime #");
}; 
//esPrimo(7);

//Mezclando arrays y funciones  10-14
function ordenarArray(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}
//console.log(ordenarArray([9, 3, 20, 1]))

function obtenerPares  (arr) {
      return arr.filter(function(a ) {   // in one line:  let getEven = numbers.filter(num => num % 2 === 0);
        return a %2 === 0;
    });
}
//console.log(getEven([9, 3, 20, 1]))
// one line method:  const getEven = (arr) => arr.filter(a => a % 2 === 0);
/*  Explanation:

    const getEven = (arr) => ...: This defines the function getEven using the arrow function syntax.
    arr.filter(a => a % 2 === 0): The filter() method uses an arrow function to check if each element a is even (i.e., a % 2 === 0).
 a => a % 2 === 0:

This is an arrow function. Let's break this down further:

    a: This is the parameter of the arrow function. It represents each individual element of the array as the filter() method loops through it.

    a % 2 === 0:
        This is the condition that checks if a is even.
        The % is the modulus operator, which gives the remainder when a is divided by 2.
        If a % 2 is 0, it means that a is evenly divisible by 2 (i.e., it's an even number).
        If this condition is true, the arrow function returns true, and filter() includes the element in the new array. If it’s false, the element is excluded.
    */

// #13
    const pintarArray  = function(arr){
        return '[' + arr.join(',') +']';  //this takes the brackets and makes it also part fo the string per the instructions. 
    }
//    console.log(pintarArray([5, 6, 7, 8]));

//14

const ArrayMapi  = function(arr, function1) {
   const array = [];
   for (let i=0; i <arr.length; i++) {
    array.push(function1(arr[i]));    
   }
   return array;
}
    //here is a function that would triple the number--- function1
    function function1(num) {
        return num * 3;  // Multiply the number by 3
    }


    const eliminarDuplicados = function (arr) {
        const nonDups= [];
        for (let i=0; i < arr.length; i++) {
            if (nonDups.indexOf(arr[i])=== -1) {     //This line checks if the current element (arr[i]) is already present in the nonDups array.
                                        //nonDups.indexOf() is a method that checks if a value exists in the array nonDups and returns the position (index) of that value.
                 nonDups.push(arr[i]);
            }
        }
    return nonDups;
    }
//console.log(eliminarDuplicados([1, 2, 3, 2, 1, 4, 5, 4]));  



//Iteraciones 🏰 proyecto 🏰
//Arrays
//15-18
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ["Hola", "Mundo"];
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
const arrayDeArrays = [[756, "nombre"], [225, "apellido"], [298, "direccion"]];

//Funciones
//19-22
function multip(a, b) {
    return a * b;  
}

function division (a, b) {
    return a / b;  
}

const esPar = (num) => {
//function esPar(a, b) {
    return num % 2 == 0
}     
console.log(esPar(3));

//

const subtract1 = (a,b) =>  a - b;

const arrayFunctions = [suma, subtract1, multip];

console.log(arrayFunctions[0](5, 3));

//Mezclando arrays y funciones
//23-26

const ordenarArray2 = (array) => {
    return array.sort((a,b) => b-a);   // note for me... When b - a is positive, it means b is larger than a, so b should come first.
}

const obtenerImpares = (array) => {
    return array.filter(isodd);

    function isOdd(num) {                            
        return num % 2 !== 0;
    }

}

//or... we could use this structure also..
//    const getOdd = (array) => {
 //   return array.filter(num => num % 2 !== 0);      //num % 2 !== 0: This checks if a number is odd. If the remainder when dividing by 2 is not 0, the number is odd.
//   }
/*Arrow Function (num => num % 2 !== 0): This is a shorthand way to write a function in JavaScript.

    num =>: This is the arrow function that takes one argument (num).
    num % 2 !== 0: This is the expression that checks if the number is odd. If the remainder when dividing num by 2 is not 0, the number is odd.

array.filter(...): This method filters the array by keeping only the elements that satisfy the condition defined in the arrow function (num % 2 !== 0).
*/


//
const sumarArray  = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumarArray ([1, 2, 3]));

const multiplicarArray  = function (array) {
    let mulipleTotal = 1;  // this has to be 1 --- otherwise -- when I multiple later it will be zero...  it must start at 1 to get it going. Makes sense. 
    for (let i = 0; i < array.length; i++) {
        mulipleTotal *= array[i];
    }
    return mulipleTotal;
}
console.log(multiplicarArray([2, 3,4]));


//FIN