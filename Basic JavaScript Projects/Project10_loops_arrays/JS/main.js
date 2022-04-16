function array_function(){         //naming the function
    var Cat_Picture=[];                     //assigning variables
    Cat_Picture[0] = "sleeping";            //creating objects
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
 document.getElementById("Array").innerHTML="In this picture, the cat is "+
 Cat_Picture[2]+ ".";      //displaying dsired array
}

function constant_function(){      //naming the function
        const Musical_Ins = {type:"guitar", brand:"Fender", color:"black"};
        Musical_Ins.color = "blue";
        Musical_Ins.price= "$900";
        document.getElementById("Constant").innerHTML= "The cost of the "+
        Musical_Ins.type+ " was "+ Musical_Ins.price;
}

function let_function(){     //naming the function
    var x = 08;              //assigning variables
    {
    let x= 24;
    document.getElementById("let1").innerHTML= "<br>"+ x;
    }
    document.getElementById("let2").innerHTML= "<br>"+ x;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content ="";
var Y;
function for_Loop(){          //naming the function
    for (Y = 0;Y < Instruments.length;Y++) {
        Content += Instruments[Y] +"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function while_Loop(){      //naming the function
let text = "";               //assigning let
let i = 0;
while (i < 10) {
  text += "<br>" + i;
  i++;
}
document.getElementById("while").innerHTML = text;
}