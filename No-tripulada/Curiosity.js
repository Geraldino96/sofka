const Curiosity = new Ship({
    name: "Curiosity",
    planet: "Mars",
    thrust: "336,73 Kg",
});
console.log(Curiosity.shipLaunch())
function myTimeout() {
    console.log("Preparing first stage separation")
}
setTimeout(myTimeout, 3000);
function myTimeout1() {
    console.log(Curiosity.shipLanding());
}
setTimeout(myTimeout1, 7000);