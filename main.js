import { SaturnV } from "./Rocket/SaturnV";

//Definiento clase principal
class SpaceShip {
    constructor({
        name,
        weight,
        thrust,
        fuel,
    }) {
        this.name = name;
        this.weight = weight;
        this.thrust = thrust;
        this.fuel = fuel;
    }
}
//Definiendo clases
class Rocket extends SpaceShip {
    constructor(
        props,
        planet,
        ) {
        super(props);
        this.planet = planet;
    }
    rocketLaunch() {
        console.log("Ignition sequence start");
        return `${this.name}, ignition!`
    }
    rocketLanding() {
        return `${this.name}, lading successesful!`
    }
}
class Ship extends SpaceShip {
    constructor(
        props,
        activity,
        fuel,
        ) {
        super(props);
        this.activity = activity;
        this.fuel = fuel;
    }
    shipLaunch() {
        console.log("Ignition sequence start");
        return `${this.name}, ignition!`
    }
    shipLanding() {
        return `${this.name}, lading successesful!`
    }
}
