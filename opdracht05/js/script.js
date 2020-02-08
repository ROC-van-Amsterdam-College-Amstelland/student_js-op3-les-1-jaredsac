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

    if(oranjeLichtStaatAan == false){
        document.getElementById("light-middle").style.backgroundColor = "orange";
        oranjeLichtStaatAan = true;
    }
    else{
        document.getElementById("light-middle").style.backgroundColor = "gray";
        oranjeLichtStaatAan = false;
    }
}

function toggleGroenLicht(){
    if(groenLichtStaatAan == false){
        document.getElementById("light-bottom").style.backgroundColor = "green";
        groenLichtStaatAan = true;
    }
    else{
        document.getElementById("light-bottom").style.backgroundColor = "gray";
        groenLichtStaatAan = false;
    }
    
}
