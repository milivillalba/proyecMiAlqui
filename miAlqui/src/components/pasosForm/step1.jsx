import React, { useState } from "react";
import { useFormContext } from "../../context/FormContext";


export const Step1 = () => {
  const {step1Data ,setStep1Data, nextStep, stepsCounter } = useFormContext();
   


  return (
    <>
      <div className="applicationFormContainer applicationForm">
        <h1>Ayudanos a cargar tu alojamiento</h1>
        {stepsCounter()}
        {/*indicando en qué paso del proceso se encuentra el usuario */}
        <h3 className="applicationFormContainer-tittle">Datos Generales</h3>
        <form action="" id="form" className="form applicationFormContainer" encType="multipart/form-data">
          <label className="Personal">
            <h5>Datos Personales</h5>
          </label>
          <input
            type="text"
            id="name"
            className="fullwidth campo"
            placeholder="Ingrese su Nombre"
            required
            //para que se valla guardando en el estado setStep1data
            value={step1Data.name}
            onChange={(e) =>
              setStep1Data({ ...step1Data, name: e.target.value })
            }
          />
          <input
            type="text"
            id="lastName"
            className="fullwidth campo"
            placeholder="Ingrese su Apellido"
            required
            //para que se valla guardando en el estado setStep1data
            value={step1Data.lastName}
            onChange={(e) =>
              setStep1Data({ ...step1Data, lastName: e.target.value })
            }
          />
          <input
            type="number"
            id="dni"
            className="fullwidth campo"
            placeholder="Ingrese su DNI"
            required
            //para que se valla guardando en el estado setStep1data
            value={step1Data.dni}
            onChange={(e) =>
              setStep1Data({ ...step1Data, dni: e.target.value })
            }
          />
          <input
            type="email"
            id="email"
            className="fullwidth campo"
            placeholder="email"
            required
            //para que se valla guardando en el estado setStep1data
            value={step1Data.email}
            onChange={(e) =>
              setStep1Data({ ...step1Data, email: e.target.value })
            }
          />
          {/*cuit/cul */}
          <input
            type="number"
            id="numberCui"
            className="fullwidth campo"
            placeholder="Ingrese CUIL/T"
            required
            //para que se valla guardando en el estado setStep1data
            value={step1Data.numberCui}
            onChange={(e) =>
              setStep1Data({ ...step1Data, numberCui: e.target.value })
            }
          />

          <input
            type="tel"
            id="telefono"
            className="fullwidth campo"
            placeholder="telefono"
            required //es obligatorio
            //para que se valla guardando en el estado setStep1data
            value={step1Data.telefono}
            onChange={(e) =>
              setStep1Data({ ...step1Data, telefono: e.target.value })
            }
          />
          <label className="alojamiento">
            <h5>Datos del Alojamiento</h5>
          </label>
          <select
            id="tipoAlojamiento"
            className="fullwidth campo"
            placeholder="Tipo Alojamiento"
            required
            //para que se valla guardando en el estado setStep1data
            value={step1Data.tipoAlojamiento}
            onChange={(e) =>
              setStep1Data({
                ...step1Data,
                tipoAlojamiento: e.target.value,
              })
            }
          >
            <option value="" disabled>
              {/*opcion por defecto */}
              Tipo de Alojamiento
            </option>
            <option value="1">Casa</option>
            <option value="2">Departamento</option>
          </select>
          {/**Input para cargar cantidad de dormitorios */}
          <input
            type="number"
            id="cantDormitorios"
            className="fullwidth campo"
            placeholder="cantidad dormitorios"
            required
            //para que se valla guardando en el estado setStep1data
            value={step1Data.cantDormitorios}
            onChange={(e) =>
              setStep1Data({
                ...step1Data,
                cantDormitorios: e.target.value,
              })
            }
          />
          {/*input cant de baños en el alojamiento */}
          <input
            type="number"
            id="cantBanios"
            className="fullwidth campo"
            placeholder="cantidad Baños"
            required
            //para que se valla guardando en el estado setStep1data
            value={step1Data.cantBanios}
            onChange={(e) =>
              setStep1Data({ ...step1Data, cantBanios: e.target.value })
            }
          />
          {/*costo del alojamiento */}
          <input
            type="number"
            id="precio"
            className="fullwidth campo "
            name="precio"
            step="0.01"
            placeholder="Ingrese el costo $"
            required
            value={step1Data.precio}
            onChange={(e) =>
              setStep1Data({ ...step1Data, precio: e.target.value })
            }
          ></input>

          <br />
          <label className="Personal">{/* <h5>Ubicacion</h5> */}</label>
          <label className="Personal">
            <h5>Ubicacion......</h5>
          </label>
          <input
            type="text"
            id="barrio"
            className="fullwidth campo"
            placeholder="Ingrese el barrio"
            required
            //para que se valla guardando en el estado setStep1data
            value={step1Data.barrio}
            onChange={(e) =>
              setStep1Data({ ...step1Data, barrio: e.target.value })
            }
          />
          <input
            type="text"
            id="calle"
            className="fullwidth campo"
            placeholder="Ingrese la calle"
            required
            //para que se valla guardando en el estado setStep1data
            value={step1Data.calle}
            onChange={(e) =>
              setStep1Data({ ...step1Data, calle: e.target.value })
            }
          />
          <input
            onClick={nextStep}
            type="submit"
            id="submit"
            className="fullwidth submit campo"
            placeholder="Guardar y Continuar"
            value="Guardar y Continuar"
            required
          />
        </form>
      </div>
    </>
  );
};
