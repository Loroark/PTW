var obecnyGracz = 1;
function zmienGracza(){
    if(obecnyGracz == 1){
        document.getElementById("p1").style.fontWeight = "bold";
        document.getElementById("p1").style.color = "red";
        document.getElementById("p2").style.fontWeight = "normal";
        document.getElementById("p2").style.color = "black";
    }else{
        document.getElementById("p2").style.fontWeight = "bold";
        document.getElementById("p2").style.color = "red";
        document.getElementById("p1").style.fontWeight = "normal";
        document.getElementById("p1").style.color = "black";
    }
}
zmienGracza();
var komorki = document.getElementsByTagName("td");
var win1 = 0;
var win2 = 0;
var draw = 0;
document.getElementById("w1").innerHTML = win1;
document.getElementById("w2").innerHTML = win2;
document.getElementById("r").innerHTML = draw;
function sprawdz(){
    if(komorki[1].class == komorki[2].class && komorki[1].class == komorki[3].class)
        if(komorki[1].class == "circle"){
            alert("Gracz 1 wygrał");
            win1++;
            document.getElementById("w1").innerHtml = win1;
        }else{
            alert("Gracz 2 wygrał");
            win2++;
            document.getElementById("w2").innerHtml = win2;
        }
}


for (var i = 0; i < komorki.length; i++) {
    komorki[i].onclick = function() {
        if(this.class != "circle" && this.class != "cross"){
            if(obecnyGracz == 1){
                this.className = "circle";
                obecnyGracz = 2;
                zmienGracza();
            }
            else{
                this.className = "cross";
                obecnyGracz = 1;
                zmienGracza();
            }
        }
    }
} 