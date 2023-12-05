import React from "react";
import { useFormContext } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';
import { fetchAlojamiento } from "../../api/alojamientoApi";
export const Step4 = () => {
  const { step1Data, step2Data, step3Data ,prevStep} = useFormContext();
  const navigate = useNavigate();

  const handleButtonClick = async(e) => {
    e.preventDefault();
    // Puedes enviar todos los datos al servidor desde aquí
    try {
      console.log("Datos a enviar al servidor:", {
        name: step1Data.name,
        lastName: step1Data.lastName,
        dni: step1Data.dni,
        email: step1Data.email,
        numberCui: step1Data.numberCui,
        telefono: step1Data.telefono,
        tipoAlojamiento: step1Data.tipoAlojamiento,
        cantDormitorios: step1Data.cantDormitorios,
        cantBanios: step1Data.cantBanios,
        precio: step1Data.precio,
        barrio: step1Data.barrio,
        calle: step1Data.calle,
        equipamiento: step2Data.equipamiento,
        servicios: step2Data.servicios,
        proteccion: step2Data.proteccion,
        lugaresCerca: step2Data.lugaresCerca,
        title: step2Data.title,
        descripcionTotal: step2Data.descripcionTotal
      });
      const responseAloj = await fetchAlojamiento("api/alojamiento", "POST",  { ...step1Data, ...step2Data }, step3Data );
      
      //mostra la respuesta
    console.log('Respuesta del servidor',responseAloj);
    Swal.fire({
      icon: "success",
      title: "Excellent",
      text: responseAloj.message,
    });

    // Navegar a la página de admin después de registrar los datos
    navigate("/adminAloj");
} catch (error) {
  alert('No se pudo crear el Alojamiento');
  console.error(error);
  Swal.fire({
    icon: "warning",
    title: "Oops...",
    text: "No se pudo crear el alojamiento",
  });
}
};

  return (
    <form onSubmit={handleButtonClick} encType="multipart/form-data">
     
      <h3 className="applicationFormContainer-tittle">Confirmar y Enviar</h3>
      {/* Muestra los datos anteriores para confirmación */}
      <div className="datosCargados">
      <div className="pasoContainer">
        
        <ul className="uldatosCargados"><h4 className="h4DatosCargado">Datos del Paso 1:</h4>
            <li><b>Nombre:</b> {step1Data.name}</li>
            <li><b>Apellido:</b> {step1Data.lastName}</li>
            <li><b>DNI:</b> {step1Data.dni}</li>
            <li><b>Email:</b> {step1Data.email}</li>
            <li><b>Cuil/Cuit:</b> {step1Data.numberCui}</li>
            <li><b>Telefono:</b> {step1Data.telefono}</li>
            <li><b>Tipo de Alojamiento:</b> {step1Data.tipoAlojamiento}</li>
            <li><b>Cantidad Dormitorios:</b> {step1Data.cantDormitorios}</li>
            <li><b>Cantidad Baños:</b> {step1Data.cantBanios}</li>
            <li><b>Precio: $</b> {step1Data.precio}</li>
            <li><b>Brrio:</b> {step1Data.barrio}</li>
            <li><b>Calle:</b> {step1Data.calle}</li>
        {/* ... Agrega más campos según tus datos del paso 1 */}
        </ul>
      </div>

      <div className="pasoContainer">
        <ul className="uldatosCargados"><h4 className="h4DatosCargado">Datos del Paso 2:</h4>
        <li><b>Equipamiento:</b> {step2Data.equipamiento}</li>
        <li><b>Servicios:</b> {step2Data.servicios}</li>
        <li><b>Protecciòn:</b> {step2Data.proteccion}</li>
        <li><b>Lugares Cerca:</b> {step2Data.lugaresCerca}</li>
        <li><b>Titulo:</b> {step2Data.title}</li>
        <li><b>Descripciòn del Alqui:</b> {step2Data.descripcionTotal}</li>
        {/* ... Agrega más campos según tus datos del paso 2 */}
        </ul>
      </div>

      <div className="pasoContainer">
        <ul className="uldatosCargados"><h4 className="h4DatosCargado">Datos del Paso 3:</h4>
      
      <li><b>Imagen</b>{step3Data.filename} </li>
   
        {/* ... Puedes mostrar información relacionada con los archivos adjuntos */}
        </ul>
      </div>
      </div>

      <hr />
      <hr />
      <button
        type="submit"
        className="fullwidth submit campo"
      >Enviar</button>

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
  );
};
