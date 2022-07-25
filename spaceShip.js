const mongoose = require('mongoose');

const spaceShipSchema = new mongoose.Schema({
  name: String,
  weight: String,
  thrust: String,
  activity: String,
  fuel: String,
  planet: String,
}
);

const SpaceShip = mongoose.model('SpaceShip-Test', spaceShipSchema);
module.exports = SpaceShip;
