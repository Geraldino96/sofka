const ISS = new Ship({
    name: "International Space Station",
    weight: "420 Ton",
    activity: "1998 - Act",
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