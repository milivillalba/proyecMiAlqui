import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../conf/db.js";

export const AlojamientoModel = sequelize.define(
  "Alojamiento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    email: DataTypes.STRING,
    cuitcuil: DataTypes.INTEGER,
    telefono: DataTypes.INTEGER,
    cantHabitacion: DataTypes.INTEGER,
    cantBaños: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL,
    barrio: DataTypes.STRING,
    calle: DataTypes.STRING,
    servicios: DataTypes.TEXT,
    equipamiento: DataTypes.TEXT,
    proteccion: DataTypes.TEXT,
    lugaresSercanos: DataTypes.TEXT,
    tituloAlojamiento: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    converImage:DataTypes.STRING,
     
    
    
    
  },
  {
    tableName: "Alojamiento",
    timestamps: false,
  }
);
