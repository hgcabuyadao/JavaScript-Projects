

function my_Function() {      //name of function
    document.getElementById("Test").innerHTML = 0/0;    
    }

function my_Function1() {      //name of function
document.getElementById("Test1").innerHTML = isNaN('009');      //not a number
}
      

function my_Function2() {           //name of function
document.getElementById("Test2").innerHTML = isNaN('text');     //not a number
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = !(8>3);        //not operator
    }



document.write(2E310);                  //infinity
document.write ("<br>");                //new line
document.write(-2E310);                 //negative infinity
document.write ("<br>");
document.write(10>0);                   //operator
document.write ("<br>");
document.write(10<0);                   //operator
document.write ("<br>");
console.log(2+2);                       //cosole.log
document.write("10"+5);
document.write ("<br>");
document.write(10==10);                 //comparison
document.write ("<br>");
document.write(1==10);                  //comparison
document.write ("<br>");


x=10;
y=10;
document.write(x===y);                     //comparison


document.write ("<br>");

s=10;
t="10";
document.write(s===t);                 //comparison    

document.write ("<br>");
document.write (5>2&&10>4);             //and operator
document.write ("<br>");        
document.write (5>10||10>4);           //or operator     



