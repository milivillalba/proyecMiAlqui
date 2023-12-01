import { sequelize } from "./conf/db.js";
import { AlojamientoModel } from "./models/AlojamientoModel.js";
import { TipoAlojamientoModel } from "./models/TipoAlojamientoModel.js";
import "dotenv/config";
import { app } from "./index.js";

const port = process.env.PORT;

AlojamientoModel.belongsTo(TipoAlojamientoModel, {
  foreignKey: "id_tipo_alojamiento",
});
TipoAlojamientoModel.hasMany(AlojamientoModel, {
  foreignKey: "id_tipo_alojamiento",
});



sequelize.models = {
  AlojamientoModel,
  TipoAlojamientoModel,
 
};

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas creadas");
  
  app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
  });
});
export default {
  AlojamientoModel,
  TipoAlojamientoModel,
 
};
