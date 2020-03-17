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
    if(booleanVerkeerMagRijden == 'groen'){
        document.getElementById("right-light-bottom").style.backgroundColor = lichtGroen;
        document.getElementById("right-light-middle").style.backgroundColor = lichtUit;
        document.getElementById("right-light-top").style.backgroundColor = lichtUit;
        
    }
    else if(booleanVerkeerMagRijden == 'oranje'){
        document.getElementById("right-light-middle").style.backgroundColor = lichtOranje;
        document.getElementById("right-light-top").style.backgroundColor = lichtUit;
    }
    else{
        document.getElementById("right-light-bottom").style.backgroundColor = lichtUit;
        document.getElementById("right-light-middle").style.backgroundColor = lichtUit;
        document.getElementById("right-light-top").style.backgroundColor = lichtRood;
    }
}

//STOPLICHT A
function zetStoplichtAOp(sKleur){
    if(sKleur == "rood"){
        document.getElementById(strStoplichtABoven).style.backgroundColor = lichtRood;
        document.getElementById(strStoplichtAMidden).style.backgroundColor = lichtUit;
        document.getElementById(strStoplichtAOnder).style.backgroundColor = lichtUit;
        window.setTimeout(zetStoplichtAOp, 3000, "groen");
        verkeerMagRijdenStoplichtB('groen');
    }
    else if(sKleur == "oranje"){
        document.getElementById(strStoplichtABoven).style.backgroundColor = lichtUit;
        document.getElementById(strStoplichtAMidden).style.backgroundColor = lichtOranje;
        document.getElementById(strStoplichtAOnder).style.backgroundColor = lichtUit;
        window.setTimeout(zetStoplichtAOp, 2000, "rood");
        verkeerMagRijdenStoplichtB('oranje');
       
       
    }
    else{
        document.getElementById(strStoplichtABoven).style.backgroundColor = lichtUit;
        document.getElementById(strStoplichtAMidden).style.backgroundColor = lichtUit;
        document.getElementById(strStoplichtAOnder).style.backgroundColor = lichtGroen;
        window.setTimeout(zetStoplichtAOp, 2000, "oranje");
        verkeerMagRijdenStoplichtB('rood');
    }
}