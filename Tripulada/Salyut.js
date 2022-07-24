const Salyut = new Ship({
    name: "Salyut",
    weight: "19.8 Ton",
    activity: "1982 - 1991",
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