const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Cadastro = sequelize.define('Cadastro',
        {
          Id: {type: DataTypes.INTEGER, primaryKey: true},
          nome: DataTypes.STRING,
          cpf: DataTypes.STRING,
          telefone: DataTypes.STRING,
          aniversario: DataTypes.STRING,
          
        },
        { tableName: 'cadastros'}
        
    )
    return Cadastro
}
