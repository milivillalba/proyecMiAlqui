import React, { useState } from "react";
import { useFormContext } from "../../context/FormContext";

import { useForm } from "../../hook/useForm";



export const Step3 = () => {
  const {stepForm: step3Data, handleInputChange} = useForm({
     files:[],
  }) 
  const { step1Data, step2Data, nextStep, prevStep, stepsCounter } =
    useFormContext();
    
  console.log(step1Data, step2Data);
  


  //almacena una url de imagen predeterminada (es la quetiene la camarita)
  const [noImage, setNoImage] = useState("img/Cloud.jpg");
  // estado del paso 3 con el campo imagen
  //almacena una matriz de objetos que representan archivos cargados.
  const [files, setFiles] = useState([]);
  const [imageInput, setImageInput] = useState(null); // se utiliza para controlar un campo de entrada de archivos.

  //funcion uploadItem,se llama cuando se selecciona archivos para cargar
  //Esta función carga los archivos seleccionados, los convierte en objetos y los almacena en el estado files.
  const uploadItem = (e) => {
    e.preventDefault(); // Previene la acción por defecto del evento (enviar formulario o abrir archivo)
    const newFiles = Array.from(e.target.files); // Obtiene los archivos seleccionados en el campo de entrada

    for (const file of newFiles) {
      const reader = new FileReader(); // Crea una nueva instancia de FileReader
      reader.onload = () => {
        setFiles((prevFiles) => [
          ...prevFiles,
          {
            id: file.size, // Asigna un ID basado en el tamaño del archivo
            file: file, // Almacena el objeto de archivo
            imagePreviewUrl: reader.result, // Almacena la URL de la vista previa de la imagen
          },
        ]);
      };
      reader.readAsDataURL(file); // Lee el contenido del archivo como una URL de datos
    }
  };
  //eliminacion de elementos files.
  //Define una función removeItem que se llama para eliminar elementos del estado files. También limpia el campo de entrada de archivos (imageInput).
  const removeItem = (id) => {
    //edsta funcion es la "x" para eliminar la imagen
    setFiles((prevFiles) => prevFiles.filter((obj) => obj.id !== id));
    imageInput.value = ""; // Clear the file input
  };


  

  
  return (
    <>
      {stepsCounter()}

      <div className="applicationFormContainer">
        <h3 className="applicationFormContainer-tittle">Imagen </h3>

        <form id="form" className="form">
          <input
            className="imput-img"
            type="file"
            name="filename"
            value={step3Data.filename}
            onChange={
              uploadItem
            }
            ref={(input) => setImageInput(input)}
            multiple
          />
          <div className="imgContainer">
            {!files.length ? (
              <img src={noImage} alt="No Image" />
            ) : (
              files.map((obj, index) => (
                <div className="imgWrapper" key={obj.id}>
                  <img src={obj.imagePreviewUrl} alt={obj.id} />
                  <button type="button" onClick={() => removeItem(obj.id)}>
                    &times;
                  </button>
                </div>
              ))
            )}
          </div>
          <hr />
          <hr />

          <p></p>
          <input
            type="button"
            id="submit"
            className="fullwidth submit campo"
            placeholder="Guardar y Continuar"
            value="Guadar y Continuar"
            required
            onClick={nextStep}
          />

          {/*anterior */}
          <input
            onClick={prevStep}
            type="submit"
            id="submit-atras"
            className="fullwidth submit campo"
            placeholder="Anterior"
            value="Anterior"
            required
          />
        </form>
      </div>
    </>
  );
};
