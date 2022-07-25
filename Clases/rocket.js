class Rocket {
  constructor({
    name,
    weight,
    thrust,
    activity,
    fuel,
    planet,
  }) {
    this.planet = planet;
    this.name = name;
    this.weight = weight;
    this.thrust = thrust;
    this.activity = activity;
    this.fuel = fuel;
  }
  getInfo() {
    return {
      name: this.name,
    };
  }

  rocketLaunch() {
    console.log("Ignition sequence start")
    console.log(`${this.name}, ignition!`)
    console.log("Preparing first stage separation")
    console.log("Preparing second stage separation");
  }

  rocketLanding() {
    console.log(`${this.name}, Landing successful!`)
  };

};

module.exports = Rocket;