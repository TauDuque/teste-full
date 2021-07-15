const { Model, DataTypes } = require("sequelize");

class Funcionarios extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING(200),
        email: DataTypes.STRING(100),
        data_nascimento: DataTypes.DATEONLY,
        data_admissao: DataTypes.DATEONLY,
        setor: DataTypes.STRING(100),
        cargo: DataTypes.STRING(100),
        nivel: DataTypes.STRING(100),
        audit_data_insert: DataTypes.DATE,
        audit_data_update: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Funcionarios;
