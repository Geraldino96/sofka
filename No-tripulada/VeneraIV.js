const VeneraIV = new Ship({
    name: "Venera IV",
    planet: "Venus",
    activity: "1967 - 1967",
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