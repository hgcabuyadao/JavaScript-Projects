function addition_function() {
    var addition= 2+2;
    document.getElementById("add").innerHTML = "2+2=" + addition;          //Addition function
}

function subtraction_function() {
    var subtraction= 2-2;
    document.getElementById("sub").innerHTML = "2-2=" + subtraction;    //Subtraction function
}

function multiply_function() {
    var multiply= 2*2;
    document.getElementById("multi").innerHTML = "2*2=" + multiply;  // Multiplication function
}

function modulus() {
    var mod= 2%2;
    document.getElementById("modu").innerHTML = " " + mod;      //Modulus function
}

function increment() {
var x=2;
x++;
document.getElementById("incre").innerHTML = x;                 //increment function
}

function decre() {
    var y=2;
    y--;
    document.getElementById("decre").innerHTML = y;             //decrement function
    }
    

function random() {
    var number=(Math.random()); 
    document.getElementById("random").innerHTML = number;           //random numbe function
        }
        
