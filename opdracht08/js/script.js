var stop = "rood";
var maybe = "oranje";
var go = "groen";

var roodLichtStaatAan = false;
var oranjeLichtStaatAan = false;
var groenLichtStaatAan = false;

var lichtUit = "gray";
var lichtRood = "red";
var lichtOranje = "orange";
var lichtGroen = "green";

window.onload = function(){
    document.getElementById("left-light-top").innerHTML = stop;
    document.getElementById("left-light-middle").innerHTML = maybe;
    document.getElementById("left-light-bottom").innerHTML = go;

    document.getElementById("right-light-top").innerHTML = stop;
    document.getElementById("right-light-middle").innerHTML = maybe;
    document.getElementById("right-light-bottom").innerHTML = go;

    document.getElementById("left-stoplight-label").innerHTML = "A";
    document.getElementById("right-stoplight-label").innerHTML = "B";
}

function verkeerMagRijdenStoplichtB(booleanVerkeerMagRijden){
    if(booleanVerkeerMagRijden == true){
        document.getElementById("right-light-bottom").style.backgroundColor = lichtGroen;
        document.getElementById("right-light-top").style.backgroundColor = lichtUit;
    }
    else{
        document.getElementById("right-light-bottom").style.backgroundColor = lichtUit;
        document.getElementById("right-light-top").style.backgroundColor = lichtRood;
    }
}

function toggleRoodLicht(){
    if(roodLichtStaatAan == false){
        document.getElementById("left-light-top").style.backgroundColor = lichtRood;
        //JOUW CODE HIER
        roodLichtStaatAan = true;
        verkeerMagRijdenStoplichtB(true);
    }
    else{
        document.getElementById("left-light-top").style.backgroundColor = lichtUit;
        roodLichtStaatAan = false;
        verkeerMagRijdenStoplichtB(false);
    }
}

function toggleOranjeLicht(){
    if(oranjeLichtStaatAan == false){
        document.getElementById("left-light-middle").style.backgroundColor = "orange";
        //JOUW CODE HIER
        oranjeLichtStaatAan = true;
    }
    else{
        document.getElementById("left-light-middle").style.backgroundColor = "gray";
        oranjeLichtStaatAan = false;
    }
}

function toggleGroenLicht(){
    if(groenLichtStaatAan == false){
        document.getElementById("left-light-bottom").style.backgroundColor = "green";
        //JOUW CODE HIER
        groenLichtStaatAan = true;
        verkeerMagRijdenStoplichtB(false);
    }
    else{
        document.getElementById("left-light-bottom").style.backgroundColor = "gray";
        groenLichtStaatAan = false;
        verkeerMagRijdenStoplichtB(true);
    }
}
