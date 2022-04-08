if (new Date().getHours() < 18) {               //if statement
    document.getElementById("Greeting").innerHTML = "Good day!"; //assigning ID
}



var x = 10;                     //var declaration global
function Add_numbers_1(){       //naming function
    document.write(20 + x + "<br>");    //display 
}
function Add_numbers_2(){
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();



function Add_numbers_3(){               //naming function
    var y = 20;                     //var declaration local
    console.log(20 + y + "<br>");       //debugging on dev tool
}
function Add_numbers_4(){
    console.log(y + 100);           //debugging on dev tool
}
Add_numbers_3();
Add_numbers_4();