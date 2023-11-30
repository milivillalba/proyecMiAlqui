import React, { useState } from "react";
import { useFormContext } from "../../context/FormContext";


export const Step2 = () => {
  const {  step2Data,setStep2Data, nextStep, prevStep, stepsCounter } =
    useFormContext();
   
  return (
    <>
      <div className="applicationFormContainer applicationForm">
        <h1>Ayudanos a cargar tu alojamiento</h1>
        {stepsCounter()}
        {/*indicando en qué paso del proceso se encuentra el usuario */}
        <h3 className="applicationFormContainer-tittle">
          ¡Describe Tu Alojamiento!
        </h3>
        <form action="" id="form" className="form applicationFormContainer1">
          {/*input para politica y privacidad */}
          <label className="">
            <h5 className="applicationFormContainer-tittle">
              Servicios y Equipamiento
            </h5>
          </label>

          <br />
          <label className="alojamiento">
            <input
              type="text"
              id="equipamiento"
              className="fullwidth campo"
              placeholder="ej: cocina, heladera, calefaciòn"
              required
              //para que se valla guardando en el estado setStep1data
              value={step2Data.equipamiento}
              onChange={(e) =>
                setStep2Data({
                  ...step2Data,
                  equipamiento: e.target.value,
                })
              }
            />
          </label>

          <label className="alojamiento">
            <input
              type="text"
              id="servicios"
              className="fullwidth campo"
              placeholder="ej: internet, luz, agua"
              required
              //para que se valla guardando en el estado setStep1data
              value={step2Data.servicios}
              onChange={(e) =>
                setStep2Data({ ...step2Data, servicios: e.target.value })
              }
            />
          </label>

          <label className="alojamiento">
            <input
              type="text"
              id="proteccion"
              className="fullwidth campo"
              placeholder="Proteccion: rejas, camara"
              required
              //para que se valla guardando en el estado setStep1data
              value={step2Data.proteccion}
              onChange={(e) =>
                setStep2Data({ ...step2Data, proteccion: e.target.value })
              }
            />
          </label>
          <br />
          {/*input para descripcion  */}
          <label className="">
            <h5 className="applicationFormContainer-tittle">
              Lugares Cerca de tu Alqui...
            </h5>
          </label>
          <br />
          <textarea
            id="descripcion"
            name="lugaresCerca"
            className="fullwidth campo"
            rows="4"
            placeholder="Describe los lugares cercanos a tu alojamiento para atraer a las personas."
            value={step2Data.lugaresCerca}
              onChange={(e) =>
                setStep2Data({ ...step2Data, lugaresCerca: e.target.value })
              }
          ></textarea>

          {/*input para titulo del alojamiento */}
          <label className="">
            <h5 className="applicationFormContainer-tittle">
              Titulo del alojamiento.
            </h5>
          </label>
          <input
            type="text"
            id="title"
            className="fullwidth campo"
            placeholder=" Puede incluir el tipo de propiedad y la ubicación aproximada."
            required
            value={step2Data.title}
              onChange={(e) =>
                setStep2Data({ ...step2Data, title: e.target.value })
              }
            //para que se valla guardando en el estado setStep1data
          />

          {/*descripcion del alojamiento general */}
          <label className="">
            <h5 className="applicationFormContainer-tittle">
              Describe tu Alqui...
            </h5>
          </label>
          <br />
          <textarea
            id="descripcion"
            name="descripcionTotal"
            className="fullwidth campo"
            rows="4"
            placeholder="Describa todo lo que considere necesario para que las personas se interesen en su alojamiento"
            value={step2Data.descripcionTotal}
              onChange={(e) =>
                setStep2Data({ ...step2Data, descripcionTotal: e.target.value })
              }
          ></textarea>

          <input
            onClick={nextStep}
            type="submit"
            id="submit"
            className="fullwidth submit campo"
            placeholder="Guardar y Continuar"
            value="Guardar y Continuar"
            required
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
