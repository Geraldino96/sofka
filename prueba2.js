//Definiento clase principal
class SpaceShip {
    constructor({
        name,
        weight,
        thrust,
    }) {
        this.name = name;
        this.weight = weight;
        this.thrust = thrust;
    }
}
//Definiendo clases
class Rocket extends SpaceShip {
    constructor(
        props,
        planet,
        fuel,) {
        super(props);
        this.planet = planet;
        this.fuel = fuel;
    }
    rocketLaunch() {
        console.log("Ignition sequence start");
        return `${this.name}, ignition!`
    }
    rocketLanding() {
        return `${this.name}, lading succssesful!`
    }
}
class Ship extends SpaceShip {
    constructor(props) {
        super(props);
        this.activity = activity;
        this.fuel = fuel;
    }
    rocketLaunch() {
        console.log("Ignition sequence start");
        return `${this.name}, ignition!`
    }
    rocketLanding() {
        return `${this.name}, lading successesful!`
    }
}

//Objetos Rocket

const SaturnV = new Rocket({
    name: "Saturn V",
    weight: "2900 Ton",
    thrust: "3500 Ton",
});
console.log(SaturnV.rocketLaunch())

function myTimeout() {
    console.log("Prepare for landing");
}
setTimeout(myTimeout, 3000);

function myTimeout1() {
    console.log(SaturnV.rocketLanding());
}
setTimeout(myTimeout1, 7000);