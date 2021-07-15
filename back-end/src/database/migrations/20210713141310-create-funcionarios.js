"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("funcionarios", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: {
          isAlphanumeric: true,
          msg: "Favor inserir apenas caracteres válidos.",
        },
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          isEmail: true,
          msg: "Favor inserir um endereço de e-mail válido.",
        },
      },
      data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          msg: "Favor inserir uma data de nascimento válida.",
        },
      },
      data_admissao: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          msg: "Favor inserir uma data de admissão válida.",
        },
      },
      setor: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          isIn: {
            args: [["engenharia", "compras", "vendas", "financeiro"]],
            msg: "Favor escolher entre as opções: engenharia, compras, vendas ou financeiro",
          },
        },
      },
      cargo: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          isIn: {
            args: [["auxiliar", "técnico", "engenheiro", "diretor"]],
            msg: "Favor escolher entre as opções: auxiliar, técnico, engenheiro ou diretor",
          },
        },
      },
      nivel: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          isIn: {
            args: [["junior", "pleno", "senior", "estagiario"]],
            msg: "Favor escolher entre as opções: junior, pleno, senior ou estagiário",
          },
        },
      },
      audit_data_insert: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      audit_data_update: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("funcionarios");
  },
};
