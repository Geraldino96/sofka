const SaturnV = new Rocket({
    name: "Saturn V",
    weight: "2900 Ton",
    thrust: "3500 Ton",
});
console.log(SaturnV.rocketLaunch())
function myTimeout() {
    console.log("Preparing first stage separation");
}
setTimeout(myTimeout, 2000);
function myTimeout() {
    console.log("Preparing second stage separation");
}
setTimeout(myTimeout, 3000);
function myTimeout1() {
    console.log(SaturnV.rocketLanding());
}
setTimeout(myTimeout1, 7000);