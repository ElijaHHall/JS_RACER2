



let racer1=document.getElementById("racer1");
let racer2=document.getElementById("racer2");

let racerOne = 0;
let racerTwo = 0;

let road=document.getElementById('road');

function race(e){
    if(e.keyCode == 39){
        racerOne += 25;
        racer1.style.marginLeft = racerOne + ('px');
        if (racerOne >= 800){
            alert("racer one wins");
        }
    }
    if(e.keyCode == 80){
        racerTwo += 25;
        racer2.style.marginLeft = racerTwo + ('px');
        if(racerTwo >= 800){
            alert("racer two wins");
        }
    }
}


document.onkeydown = race;