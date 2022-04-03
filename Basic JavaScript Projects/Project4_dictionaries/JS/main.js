
function my_Dictionary() {       //function name
    var player = {                 //assigning variable
        Name: "Kobe Bryant",            //key and values
        Team: "Los Angeles Lakers",
        JerseyNumber: 8,
        Moniker: "Black Mamba"
    };
    delete player.Moniker;          //delete statement
    document.getElementById("Dictionary").innerHTML=player.Moniker;  //getting the value of MOniker
}