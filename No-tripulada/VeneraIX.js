const Ship = require("../Clases/ship");
const VeneraIX = new Ship({
    name: "Venera IX",
    planet: "Venus",
    activity: "1975 - 1975",
});

console.log(VeneraIX.shipLaunch());
function myTimeout() {
    console.log("Preparing first stage separation");
}
setTimeout(myTimeout, 3000);
function myTimeout1() {
    console.log(VeneraIX.shipLanding());
}
setTimeout(myTimeout1, 7000);
