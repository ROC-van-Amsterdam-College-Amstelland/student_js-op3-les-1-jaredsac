var stop = "rood";
var maybe = "oranje";
var go = "groen";

var roodLichtStaatAan = false;
var oranjeLichtStaatAan = false;
var groenLichtStaatAan = false;

window.onload = function(){
    document.getElementById("light-top").innerHTML = stop;
    document.getElementById("light-middle").innerHTML = maybe;
    document.getElementById("light-bottom").innerHTML = go;
}

function toggleRoodLicht(){
    if(roodLichtStaatAan == false){
        document.getElementById("light-top").style.backgroundColor = "red";
        roodLichtStaatAan = true;
    }
    else{
        document.getElementById("light-top").style.backgroundColor = "gray";
        roodLichtStaatAan = false;
    }
}

function toggleOranjeLicht(){
    if(document.getElementById("light-middle").style.backgroundColor == "gray"){
        document.getElementById("light-middle").style.backgroundColor = "orange"
    }
    else{
        document.getElementById("light-middle").style.backgroundColor = "gray";
    }
}

function toggleGroenLicht(){
    if(document.getElementById("light-bottom").style.backgroundColor == "gray"){
        document.getElementById("light-bottom").style.backgroundColor = "green";
    }
    else{
        document.getElementById("light-bottom").style.backgroundColor = "gray";
    }
    
}
