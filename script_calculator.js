let button = document.getElementsByClassName("button");

function myFunction(n){
    document.getElementById("display").innerHTML += n;
}

function addButton(){
    document.getElementById("display").innerHTML += "+";
}

function subtractButton(){
    document.getElementById("display").innerHTML += "-";
}

function multiplyButton(){
    document.getElementById("display").innerHTML += "*";
}

function divideButton(){
    document.getElementById("display").innerHTML += "/";
}

function percentButton(){
    document.getElementById("display").innerHTML += "%";
}

function dotButton(){
    document.getElementById("display").innerHTML += ".";
}

function allClearButton(){
    document.getElementById("display").innerHTML = "";
}

function deleteButton(){
    var text = document.getElementById("display").innerHTML;
    var n = text.length;
    document.getElementById("display").innerHTML = text.substring(0, n-1);
}

function conjugateButton(){
    var text = document.getElementById("display").innerHTML;
    var n = text.length;
    if(text.charAt(0) == "-"){
        document.getElementById("display").innerHTML = text.substring(1, n);
    } else {
        document.getElementById("display").innerHTML = "-" + document.getElementById("display").innerHTML; 
    }
}

function equalButton(){
    document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML);
}

function themeButton(){
    if(document.getElementById("theme").innerHTML == "Light"){
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundImage = "url('image.jpg')";
    document.getElementById("theme").innerHTML = "Dark";
    document.getElementById("heading").style.color = "rgb(40, 100, 100)";
    document.getElementById("display").style.backgroundColor = "rgb(240, 248, 262)";
    document.getElementById("display").style.color = "black";

    let navButtons = document.querySelectorAll(".navButton");
        navButtons.forEach(navButton => {
        navButton.style.backgroundColor = 'rgb(250, 250, 250)';
        navButton.style.color = "rgb(62,61,116)";
        navButton.style.opacity = "0.8";
        });

    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
    button.style.backgroundColor = 'rgba(226,222,230,255)';
    button.style.color = "black";
    });

    let specials = document.querySelectorAll(".special");
    specials.forEach(special => {
    special.style.backgroundColor = 'rgb(212,211,266)';
    special.style.color = "rgb(62,61,116)";
    });

    let topButtons = document.querySelectorAll(".topButton");
    topButtons.forEach(topButton => {
    topButton.style.backgroundColor = 'rgb(276, 192, 215)';
    topButton.style.color = "rgb(126, 42, 65)";
    });


    } else{
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundImage = "";
        document.getElementById("theme").innerHTML = "Light";
        document.getElementById("heading").style.color = "#a0a0a0";
        document.getElementById("display").style.backgroundColor = "#313131";
        document.getElementById("display").style.color = "white";

        let navButtons = document.querySelectorAll(".navButton");
        navButtons.forEach(navButton => {
        navButton.style.backgroundColor = 'rgb(140, 140, 140)';
        navButton.style.color = "white";
        });

        let buttons = document.querySelectorAll(".button");
        buttons.forEach(button => {
        button.style.backgroundColor = '#313131';
        button.style.color = "white";
        });

        let specials = document.querySelectorAll(".special");
        specials.forEach(special => {
        special.style.backgroundColor = 'rgb(246, 153, 6)';
        special.style.color = "white";
        });

        let topButtons = document.querySelectorAll(".topButton");
        topButtons.forEach(topButton => {
        topButton.style.backgroundColor = '#a0a0a0';
        topButton.style.color = "white";
        });

    }
}