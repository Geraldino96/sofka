const Rocket = require("../Clases/rocket");
const FalconIX = new Rocket({
    name: "Falcon IX",
    activity: "2010 - Act",
    fuel: "rosene + liquid Oxygen",
});
console.log(FalconIX.rocketLaunch())
function myTimeout() {
    console.log("Preparing first stage separation")
}
setTimeout(myTimeout, 3000);
function myTimeout1() {
    console.log(FalconIX.rocketLanding());
}
setTimeout(myTimeout1, 7000);