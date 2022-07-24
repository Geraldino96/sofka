class SpaceShip {
    constructor(
        type,
        weight,
        thrust,
    ) {
        this.type = type;
        this.weight = weight;
        this.thrust = thrust;
    }
}
//Definiendo clases
class Rocket extends SpaceShip {
    constructor(
        props,
        activity,
        fuel,
        ) {
        super(props);
        this.activity = activity;
        this.fuel = fuel;
    }

    
    rocketLaunch() {
        console.log("Ignition sequence start");
        return `${this.type}, ignition!`
    }

    rocketLanding() {
        console.log("Prepare for landing");
        return `${this.type}, lading succssesful!`
    }
}

const saturnV =  new Rocket("Rocket type", 2900, 3500, "1990 - 2000", "Kerosene") 
console.log(saturnV.rocketLaunch())
function myTimeout() {
    console.log(saturnV.rocketLanding())
}
setTimeout(myTimeout, 10000);

