const Ship = require("../main.js");
const Skylab = new Ship({
    name: "Skylab",
    weight: "77 Ton",
    activity: "1973 - 1979",
});
console.log(Skylab.shipLaunch())
function myTimeout() {
    console.log("Preparing first stage separation")
}
setTimeout(myTimeout, 3000);
function myTimeout1() {
    console.log(Skylab.shipLanding());
}
setTimeout(myTimeout1, 7000);