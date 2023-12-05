import { AlojamientoModel } from "../models/AlojamientoModel.js";

import { TipoAlojamientoModel } from "../models/TipoAlojamientoModel.js";
// import express from 'express';
// const router = express.Router();
// import fileUpload from 'express-fileupload';

// router.use(fileUpload());


//COntrol para cargar un nuevo alojamiento

export const CtrlCreateAlojamiento = async (req, res) => {
  const {
    name,
    lastName,
    dni,
    email,
    numberCui,
    telefono,
    tipoAlojamiento,
    cantDormitorios,
    cantBanios,
    precio,
    barrio,
    calle,
    equipamiento,
    servicios,
    proteccion,
    lugaresCerca,
    title,
    descripcionTotal
  } = req.body;

  
  try {
    
    const file = req.files.filename;

    // Validar si el archivo existe
    if (!file) {
      throw {
        message: "Archivo no encontrado en la solicitud"
      };
    }
    let path = `src/Archivos/${file.name}`;//la variable path contien una ruta de archivo que compone "src/Archivo" y el nombre del archivo( osea de la imagen )"file.name"
    
    //Mover el archivo a la ruta especificada
    file.mv(path, (err) => {
      if (err) {
        return res.status(500).json({
          msg: "Error al subir el archivo",
          error: err.message
        });
      }
      console.log("archivo subido");
    })
    //se crea una nueva publicacion del alojamiento
    const NewpublicacionAlojamiento = await AlojamientoModel.create({
      //asignar las llaves foraneas
      id_tipo_alojamiento: tipoAlojamiento,
      nombre: name,
      apellido: lastName,
      dni: dni,
      email:email ,
      cuitcuil: numberCui,
      telefono: telefono,
      cantHabitacion: cantDormitorios,
      cantBaños: cantBanios,
      precio: precio,
      barrio: barrio,
      calle: calle,
      servicios: servicios,
      equipamiento: equipamiento,
      proteccion: proteccion,
      lugaresSercanos: lugaresCerca,
      tituloAlojamiento: title,
      descripcion: descripcionTotal,
      converImage: path
    });
    if (!NewpublicacionAlojamiento) {
      return res.status(500).json({
        msg: "Error al crear el alojamiento",
      });
    };


      

      // Envía la respuesta después de subir el archivo
      res.status(201).json({
        msg: "Se publicó el alojamiento correctamente",
        NewpublicacionAlojamiento,
      });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "error a cargar el alojamiento",
    });
  }
};
//para traer todas las publicaciones

export const CtrlGetAllAlojamiento = async (req, res) => {
  try { 
    const alojamientos = await AlojamientoModel.findAll();
    return res.json(alojamientos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Error al mostrar todos los alquileres",
    });
  }
};


//Control para editar a un alojamiento

export const CtrlUpdateAlojamiento = async (req, res) => {
  const { id } = req.params;
  try {
    const editarAlojamiento = await AlojamientoModel.findByPk(id);
    editarAlojamiento.set(req.body);

    //se gurada en la base dee datos el cambio
    await editarAlojamiento.save();

    res.json({
      msg: "Se edito correctamente su Alquiler",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

//ctrl para eliminar un alojamiento

export const CtrlDeleteAlojamiento = async (req, res) => {
  const { id } = req.params;

  try {
    await AlojamientoModel.destroy({
      where: {
        id,
      },
    });
     
    res.json({
      msg: "alojamiento eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export const CtrlAllIdAlojamiento = async (req, res) => {
  try {
    const TraerAlojamId = await AlojamientoModel.findByPk(req.params.id);
    //por si no se encontro el alojamiento
    if (!TraerAlojamId) {
      throw{
        status: 400,
        message:"No existe este alojamiento"
      }
    }

    //siexiste retorna
    return res.json(TraerAlojamId);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "error al traer el alojamiento",
    });
  }
};
