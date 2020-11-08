(function (){
    let circuit = document.getElementById("circuit");
    let powerOn = document.getElementById("energize");
    let powerOff = document.getElementById("de-energize");
    let circuitSwitch = document.getElementById("switch");
    let bulb = document.getElementById("offBulb");
    let switchUse = 0;
    let powerFlowing;
    circuitSwitch.disabled = true;
    powerOn.addEventListener("click", function(){
        circuitSwitch.disabled = false;
        powerFlowing = true;
        console.log("turning power on");
        checkFlow();
    });
    powerOff.addEventListener("click", function (){
        circuitSwitch.disabled = true;
        powerFlowing = false;
        switchUse = 0;
        console.log("turning power off");
        checkFlow();
    });
    circuitSwitch.addEventListener("click", function (){
        switchUse++;
        if (switchUse % 2 !== 0) {
            powerFlowing = false;
        } else if (switchUse % 2 === 0) {
            powerFlowing = true;
        }
        checkFlow();
    });
    function checkFlow() {
        if (powerFlowing) {
            console.log("power is on");
            circuit.style.borderColor = "yellow";
        } else if (!powerFlowing) {
            circuit.style.borderColor = "#6a6a6a";
            console.log("power is off");
        }
    }


    var dragged;

    /* events fired on the draggable target */
    document.addEventListener("drag", function(event) {

    }, false);

    document.addEventListener("dragstart", function(event) {
        // store a ref. on the dragged elem
        dragged = event.target;
        // make it half transparent
        event.target.style.opacity = .5;
    }, false);

    document.addEventListener("dragend", function(event) {
        // reset the transparency
        event.target.style.opacity = "";
    }, false);

    /* events fired on the drop targets */
    document.addEventListener("dragover", function(event) {
        // prevent default to allow drop
        event.preventDefault();
    }, false);

    document.addEventListener("dragenter", function(event) {
        // highlight potential drop target when the draggable element enters it
        if (event.target.className === "loadSpot") {
            event.target.style.background = "yellow";
        }

    }, false);

    document.addEventListener("drop", function(event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged elem to the selected drop target
        if(powerFlowing){
            if (event.target.className === "loadSpot") {
                event.target.style.background = "";
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
                bulb.src = "../img/bulbOn.png"
            }
        } else {
            if (event.target.className === "loadSpot") {
                event.target.style.background = "";
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
            }
        }
    }, false);


})();