



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
        margValue += 60;
        sonic.style.marginLeft = margValue + ('px');
        if (margValue >= 800){
            alert("Sonic wins!");
        }
    }
    if(e.keyCode == 80){
        margValue += 60;
        shadow.style.marginLeft = margValue + ('px');
        if(margValue >= 800){
            alert("Shadow wins!");
        }
    }
};


document.onkeydown = race;