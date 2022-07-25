const Ship = require("../Clases/ship");
const VeneraIV = new Ship({
    name: "Venera IV",
    planet: "Venus",
    activity: "1967 - 1967",
});
console.log(VeneraIV.shipLaunch())
function myTimeout() {
    console.log("Preparing first stage separation")
}
setTimeout(myTimeout, 3000);
function myTimeout1() {
    console.log(VeneraIV.shipLanding());
}
setTimeout(myTimeout1, 7000);