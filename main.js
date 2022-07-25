//Haciendo uso del modulador require llamo al paquete inquirer, la librería mongoose, y los archivos del proyecto que exporto desde otras carpetas
const inquirer = require('inquirer');
const mongoose = require('mongoose');
const Rocket = require('./rocket.js');
const Ship = require('./ship.js');
const SpaceShip = require('./spaceShip')
//Me conecto al cluster gratuito de Atlas
mongoose.connect('mongodb+srv://geraldino96:QLNDw9ghcpTq2Czg@cluster0.dmtvy.mongodb.net/spaceShip?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    //console.log('DB CONECTION SUCCESFUL'); para comprobar la conexión
  }).catch(e => {
    console.error(e);
  })
//Uso preguntas de inquirer para seleccionar la opción del menú
const questions = [
  {
    type: 'number',
    name: 'option',
    message: "Welcome to the menu.\nChoose a ship to look into its properties and launch it!\n1. Saturn V\n2. Energy\n3. FalconIX\n4. Curiosity\n5. VeneraIV\n6. VeneraIX\n7. ISS\n8. Salyut\n9. Skylab\n10. Create ship\n What's your option?",
  },
];
//Con la función res encapsulo el switch y le paso la opción seleccionado en "questions"
const res = async () => {
  const answer = await inquirer.prompt(questions);
  console.log(answer);

  switch (answer.option) {
    //En cada uno de los casos llamo a la nave del inventario seteado en la base de datos, luego haciendo uso de la clase Rocket o Ship, genero una instancia y ejecuto sus metodos
    case 1:

      const spaceships = await SpaceShip.find({ name: /^Saturn V/ });;
      console.log(spaceships);

      const SaturnV = new Rocket({
        name: "Saturn V",
        weight: "2900 Ton",
        thrust: "3500 Ton",
      });
      console.log(SaturnV.rocketLaunch(), SaturnV.rocketLanding());

      break;

    case 2:
      const spaceships1 = await SpaceShip.find({ name: /^Energy/ });
      console.log(spaceships1);

      const Energy = new Rocket({
        name: "Energy",
        weight: "2400 Ton",
        thrust: "3060 Ton",
      });
      console.log(Energy.rocketLaunch(), Energy.rocketLanding());

      break;
    case 3:
      const spaceships2 = await SpaceShip.find({ name: /^Falcon/ });
      console.log(spaceships2);
      const FalconIX = new Rocket({
        name: "Falcon IX",
        activity: "2010 - Act",
        fuel: "Kerosene + liquid Oxygen",
      });
      console.log(FalconIX.rocketLaunch(), FalconIX.rocketLanding())
      break;
    case 4:
      const spaceships3 = await SpaceShip.find({ name: /^Curiosity/ });
      console.log(spaceships3);
      const Curiosity = new Ship({
        name: "Curiosity",
        planet: "Mars",
        thrust: "336,73 Kg",
      });
      console.log(Curiosity.shipLaunch(), Curiosity.shipLanding())

      break;
    case 5:
      const spaceships4 = await SpaceShip.find({ name: /^Venera IV/ });
      console.log(spaceships4);
      const VeneraIV = new Ship({
        name: "Venera IV",
        planet: "Venus",
        activity: "1967 - 1967",
      });
      console.log(VeneraIV.shipLaunch(), VeneraIV.shipLanding())
      break;
    case 6:
      const spaceships5 = await SpaceShip.find({ name: /^Venera IX/ });
      console.log(spaceships5);
      const VeneraIX = new Ship({
        name: "Venera IX",
        planet: "Venus",
        activity: "1975 - 1975",
      });

      console.log(VeneraIX.shipLaunch(), VeneraIX.shipLanding())
      break;
    case 7:
      const spaceships6 = await SpaceShip.find({ name: /^International/ });
      console.log(spaceships6);
      const ISS = new Ship({
        name: "International Space Station",
        weight: "420 Ton",
        activity: "1998 - Act",
      });
      console.log(ISS.shipLaunch(), ISS.shipLanding())
      break;
    case 8:
      const spaceships7 = await SpaceShip.find({ name: /^Salyut/ });
      console.log(spaceships7);
      const Salyut = new Ship({
        name: "Salyut",
        weight: "19.8 Ton",
        activity: "1982 - 1991",
      });
      console.log(Salyut.shipLaunch(), Salyut.shipLanding())
      break;
    case 9:
      const spaceships8 = await SpaceShip.find({ name: /^Skylab/ });
      console.log(spaceships8);
      const Skylab = new Ship({
        name: "Skylab",
        weight: "77 Ton",
        activity: "1973 - 1979",
      });
      console.log(Skylab.shipLaunch(), Skylab.shipLanding())
      break;
      //En el caso 10, genero 3 preguntas para captar la entrada del usuario y le paso los valores a SpaceShip.create para agregar la nueva nave a la base de datos
    case 10:
      const questions1 = [
        {
          type: 'input',
          name: 'name',
          message: "Set a name for your ship!",
        }
      ];
      const questions2 = [
        {
          type: 'input',
          name: 'weight',
          message: "Weight?",
        }
      ];
      const questions3 = [
        {
          type: 'input',
          name: 'thrust',
          message: "Thrust?",
        }
      ];
      const res1 = async () => {
        const answer1 = await inquirer.prompt(questions1);
        const answer2 = await inquirer.prompt(questions2);
        const answer3 = await inquirer.prompt(questions3);
        console.log(answer1)
        console.log(answer2)
        console.log(answer3)
      }
      res1();
      const newDoc = await SpaceShip.create({
        name: `${questions1}`,
        weight: `${questions2}`,
        thrust: `${questions3}`,
      });
      break;
  }
}
res();