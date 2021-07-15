const Funcionarios = require("../models/Funcionarios");

module.exports = {
  async index(req, res) {
    const funcionarios = await Funcionarios.findAll();
    return res.json(funcionarios);
  },

  async findById(req, res) {
    const { id } = req.params;
    const funcionarios = await Funcionarios.findAll({
      where: {
        id: id,
      },
    });
    return res.json(funcionarios);
  },

  async store(req, res) {
    const {
      nome,
      email,
      data_nascimento,
      data_admissao,
      setor,
      cargo,
      nivel,
      audit_data_insert,
    } = req.body;
    const funcionarios = await Funcionarios.create({
      nome,
      email,
      data_nascimento,
      data_admissao,
      setor,
      cargo,
      nivel,
      audit_data_insert,
    });
    return res.json(funcionarios);
  },

  async delete(req, res) {
    const { id } = req.params;
    const funcionarios = await Funcionarios.destroy({
      where: {
        id: id,
      },
    });
    return res.json(funcionarios);
  },

  async update(req, res) {
    const {
      id,
      nome,
      email,
      data_nascimento,
      data_admissao,
      setor,
      cargo,
      nivel,
      audit_data_update,
    } = req.body;
    const funcionarios = await Funcionarios.update(
      {
        nome,
        email,
        data_nascimento,
        data_admissao,
        setor,
        cargo,
        nivel,
        audit_data_update,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json(funcionarios);
  },
};
