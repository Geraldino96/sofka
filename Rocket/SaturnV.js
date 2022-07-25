const Rocket = require("../Clases/rocket");

const SaturnV = new Rocket({
    name: "Saturn V",
    weight: "2900 Ton",
    thrust: "3500 Ton",
});
console.log(SaturnV.getInfo());

console.log(SaturnV.rocketLaunch());
function myTimeout() {
    console.log("Preparing first stage separation");
}
setTimeout(myTimeout, 2000);
function myTimeout1() {
    console.log("Preparing second stage separation");
}
setTimeout(myTimeout1, 3000);
function myTimeout2() {
    console.log(SaturnV.rocketLanding());
}
setTimeout(myTimeout2, 7000);