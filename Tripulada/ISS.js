const Ship = require("../main.js");
const ISS = new Ship({
    name: "International Space Station",
    weight: "420 Ton",
    activity: "1998 - Act",
});
console.log(ISS.shipLaunch());
function myTimeout() {
    console.log("Preparing first stage separation");
}
setTimeout(myTimeout, 3000);
function myTimeout1() {
    console.log(ISS.shipLanding());
}
setTimeout(myTimeout1, 7000);