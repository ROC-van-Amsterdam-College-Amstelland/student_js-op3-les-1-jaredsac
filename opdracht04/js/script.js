var stop = "rood";
var maybe = "oranje";
var go = "groen";

window.onload = function(){
    document.getElementById("light-top").innerHTML = stop;
    document.getElementById("light-middle").innerHTML = maybe;
    document.getElementById("light-bottom").innerHTML = go;
}

function zetRoodLichtAan(){
    if(document.getElementById("light-top").style.backgroundColor == "gray"){
        document.getElementById("light-top").style.backgroundColor = "red";
    }
    else{
        document.getElementById("light-top").style.backgroundColor = "gray";
    }
}

function zetOranjeLichtAan(){
    document.getElementById("light-middle").style.backgroundColor = "orange";
}

function zetGroenLichtAan(){
    document.getElementById("light-bottom").style.backgroundColor = "green";
}
