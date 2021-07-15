const express = require("express");
const FuncionariosController = require("./controllers/FuncionariosController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("getting workers...");
});

routes.get("/funcionarios", FuncionariosController.index);
routes.get("/funcionarios/:id", FuncionariosController.findById);
routes.post("/funcionarios", FuncionariosController.store);
routes.delete("/funcionarios/:id", FuncionariosController.delete);
routes.put("/funcionarios/", FuncionariosController.update);

/* routes.post("/", (req, res) => {
  res.send("posting workers...");
});
routes.put("/", (req, res) => {
  res.send("putting workers...");
});

routes.delete("/", (req, res) => {
  res.send("deleting workers...");
}); */

module.exports = routes;
