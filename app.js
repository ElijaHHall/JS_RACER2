
const sonic = document.getElementById("sonic");
const shadow = document.getElementById("shadow");
let margValue = 0;

document.addEventListener("keydown", (event) => {
    // console.log(e.keyCode)
    console.log("Button is pushed");
});

let racetrack = document.getElementById('racetrack');

function race(e) {
    
    if(e.keyCode == 39){
        margValue += 30;
        sonic.style.marginLeft = margValue + ('px');
        if (margValue >= 1000){
            alert("Sonic wins! Refresh to Play Again");
        }
    }

    if(e.keyCode == 80){
        margValue += 30;
        shadow.style.marginLeft = margValue + ('px');
        if(margValue >= 1000){
            alert("Shadow wins! Refresh to Play Again");
        }
    }
};


document.onkeydown = race;