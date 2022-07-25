class Ship {
  constructor({
    name,
    weight,
    thrust,
    activity,
    fuel,
    planet,
  }) {
    this.name = name;
    this.weight = weight;
    this.thrust = thrust;
    this.activity = activity;
    this.fuel = fuel;
    this.planet = planet;
  }
  shipLaunch() {
    console.log("Ignition sequence start")
    console.log(`${this.name}, ignition!`)
    console.log("Preparing first stage separation")
    console.log("Preparing second stage separation");
  }

  shipLanding() {
    console.log(`${this.name}, landing successful!`)
  }
};
module.exports = Ship;
