var stop = "rood";
var maybe = "oranje";
var go = "groen";

// var roodLichtStaatAan = false;
// var oranjeLichtStaatAan = false;
// var groenLichtStaatAan = false;

var lichtUit = "dimgray";
var lichtRood = "darkred";
var lichtOranje = "darkorange";
var lichtGroen = "darkgreen";

var strStoplichtABoven = "left-light-top";
var strStoplichtAMidden = "left-light-middle";
var strStoplichtAOnder = "left-light-bottom";

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

//STOPLICHT B
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

//STOPLICHT A
function zetStoplichtAOp(sKleur){
    if(sKleur == "rood"){
        document.getElementById(strStoplichtABoven).style.backgroundColor = lichtRood;
        document.getElementById(strStoplichtAMidden).style.backgroundColor = lichtUit;
        document.getElementById(strStoplichtAOnder).style.backgroundColor = lichtUit;
        verkeerMagRijdenStoplichtB(true);
    }
    else if(sKleur == "oranje"){
        //JOUW CODE HIER
    }
    else{
        //JOUW CODE HIER
    }
}


//OUDE CODE
function toggleRoodLicht(){
    if(roodLichtStaatAan == false){
        document.getElementById("left-light-top").style.backgroundColor = lichtRood;
        document.getElementById("left-light-middle").style.backgroundColor = lichtUit;
        document.getElementById("left-light-bottom").style.backgroundColor = lichtUit;
        roodLichtStaatAan = true;
        verkeerMagRijdenStoplichtB(true);
    }
    else{
        document.getElementById("left-light-top").style.backgroundColor = "gray";
        roodLichtStaatAan = false;
        verkeerMagRijdenStoplichtB(false);
    }
}

function toggleOranjeLicht(){
    if(oranjeLichtStaatAan == false){
        document.getElementById("left-light-top").style.backgroundColor = lichtUit;
        document.getElementById("left-light-middle").style.backgroundColor = lichtOranje;
        document.getElementById("left-light-bottom").style.backgroundColor = lichtUit;
        oranjeLichtStaatAan = true;
    }
    else{
        document.getElementById("left-light-middle").style.backgroundColor = "gray";
        oranjeLichtStaatAan = false;        
    }
}

function toggleGroenLicht(){
    if(groenLichtStaatAan == false){
        document.getElementById("left-light-top").style.backgroundColor = lichtUit;
        document.getElementById("left-light-middle").style.backgroundColor = lichtUit;
        document.getElementById("left-light-bottom").style.backgroundColor = lichtGroen;
        groenLichtStaatAan = true;
        verkeerMagRijdenStoplichtB(false);
    }
    else{
        document.getElementById("left-light-bottom").style.backgroundColor = "gray";
        groenLichtStaatAan = false;
        verkeerMagRijdenStoplichtB(true);
    }
}
