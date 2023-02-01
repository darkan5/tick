let player = "x" ;

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p4 = document.getElementById("p4");




p1.addEventListener("click",clickField);
p2.addEventListener("click",clickField);
p4.addEventListener("click",clickField);


function clickField(e){
    e.target.innerHTML = player ;
    if(player == "x"){
        player = "o" ;
    } else {
        player = "x"
    }
console.log("działa");
}

