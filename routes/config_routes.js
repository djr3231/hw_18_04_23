const indexR = require("./index");
const usersR = require("./users");
const covidR = require( "./covid");
const countriesR = require("./countries")
const carsR = require("./cars");

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/covid" , covidR);
  app.use("/countries" , countriesR)
  app.use("/cars" , carsR);
}