//interactuamos con base de datos relacionales mediante sql que es el lenguaje que nos permite interactuar con BDD.

const { DataTypes } = require('sequelize');
//con Datatypes podemos especificar cada campo de los modelo.

module.exports = (sequelize) =>{
  sequelize.define('genres', {  
    id: {
    type: DataTypes.INTEGER, 
    autoIcrement: true,
    primaryKey: true,
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false, // el  valor no puede ser nulo.
      
    },
  });
 }
 

