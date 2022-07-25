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
      function myTimeout0() {
        console.log("Preparing first stage separation")
      }
      setTimeout(myTimeout0, 2000);
      function myTimeout1() {
        console.log("Preparing second stage separation");
      }
      setTimeout(myTimeout1, 3000);
    }
  
    rocketLanding() {
      function myTimeout2() {
        console.log(`Landing successful!`)
      }
      setTimeout(myTimeout2, 5000);
  
    };
  
  };
  
  module.exports = Rocket;