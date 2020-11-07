(function (){
    let circuit = document.getElementById("circuit");
    let powerOn = document.getElementById("energize");
    let powerOff = document.getElementById("de-energize");
    let circuitSwitch = document.getElementById("switch");
    let switchUse = 0;
    let powerFlowing;
    powerOn.addEventListener("click", function(){
        powerFlowing = true;
        console.log("turning power on");
        checkFlow();
    });
    powerOff.addEventListener("click", function (){
        powerFlowing = false;
        console.log("turning power off");
        checkFlow();
    });
    circuitSwitch.addEventListener("click", function (){
        switchUse++;
        if(switchUse % 2 !== 0){
            powerFlowing = false;
        }else if(switchUse % 2 === 0){
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
})();