const Rocket = require("../Clases/rocket");

const Energy = new Rocket({
    name: "Energy",
    weight: "2400 Ton",
    thrust: "3060 Ton",
});
console.log(Energy.rocketLaunch())
function myTimeout() {
    console.log("Preparing first stage separation")
}
setTimeout(myTimeout, 3000);
function myTimeout1() {
    console.log(Energy.rocketLanding());
}
setTimeout(myTimeout1, 7000);