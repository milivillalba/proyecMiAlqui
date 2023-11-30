import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../conf/db.js";

export const TipoAlojamientoModel = sequelize.define("Tipo_Alojamiento",{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo: DataTypes.STRING,
},{
    tableName: "Tipo_Alojamiento", // Nombre de la tabla en la base de datos
    timestamps: false,
  })
