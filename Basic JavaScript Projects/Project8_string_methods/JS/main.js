function full_sentence() {              //naming function 
    var part_1="I love ";               //assigning variables
    var part_2="learning  ";
    var part_3="Javascript ";
    var part_4="Programming.";
    var whole_sentence = part_1.concat (part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;    //returning value to the variable           
}

function slice_Method(){
    var Sentence="Push your Basic JavaScript Projects folder containing your Project8_string_methods folder.";
    var Section=Sentence.slice(10,27);
    document.getElementById("Slice").innerHTML=Section;
}

function Uppercase_Method(){
    var word="uppercase";
    var upper=word.toUpperCase();
    document.getElementById("upper").innerHTML=upper;
}

function Number_Method(){
    var x = 123;
    document.getElementById("number").innerHTML=x.toString();
}

function precision_Method(){
    var y = 12323.2544545;
    document.getElementById("Precision").innerHTML=y.toPrecision(10);
}
