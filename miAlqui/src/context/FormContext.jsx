import React, { createContext, useReducer, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState({});
  const [step2Data, setStep2Data] = useState({});
  const [step3Data, setStep3Data] = useState({});
  const [stepCounter, setStepCounterData] = useState({});

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const restar = () => {
    setStep(1);
  };
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const stepsCounter = () => {
    const styletitlemobile1 = ["stepmobiletittle"];
    const styletitlemobile2 = ["stepmobiletittle"];
    const styletitlemobile3 = ["stepmobiletittle"];
    const styletitlemobile4 = ["stepmobiletittle"];
    const styletitlemobile5 = ["stepmobiletittle"];
    const stylenumber1 = ["stepnumber"];
    const styletitle1 = ["steptittle"];
    const stylenumber2 = ["stepnumber"];
    const styletitle2 = ["steptittle"];
    const stylenumber3 = ["stepnumber"];
    const styletitle3 = ["steptittle"];
    const stylenumber4 = ["stepnumber"];
    const styletitle4 = ["steptittle"];
    const stylenumber5 = ["stepnumber"];
    const styletitle5 = ["steptittle"];
    //comprueba si el use esta en el primer paso del form.
    if (step === 1) {
      stylenumber1.push("stepnumberactive"); //se agrega la clase css "stepnumberactive"al arreglo stylenumber1
      styletitle1.push("steptittleactive");
      styletitlemobile1.push("showstepmobiletittle");
    }
    if (step === 2) {
      stylenumber1.push("stepnumbercomplete");
      stylenumber2.push("stepnumberactive");
      styletitle2.push("steptittleactive");
      styletitlemobile2.push("showstepmobiletittle");
    }
    if (step === 3) {
      stylenumber1.push("stepnumbercomplete");
      stylenumber2.push("stepnumbercomplete");
      stylenumber3.push("stepnumberactive");
      styletitle3.push("steptittleactive");
      styletitlemobile3.push("showstepmobiletittle");
    }
    if (step === 4) {
      stylenumber1.push("stepnumbercomplete");
      stylenumber2.push("stepnumbercomplete");
      stylenumber3.push("stepnumbercomplete");
      stylenumber4.push("stepnumberactive");
      styletitle4.push("steptittleactive");
      styletitlemobile4.push("showstepmobiletittle");
    }
    if (step === 5) {
      stylenumber1.push("stepnumbercomplete");
      stylenumber2.push("stepnumbercomplete");
      stylenumber3.push("stepnumbercomplete");
      stylenumber4.push("stepnumbercomplete");
      stylenumber5.push("stepnumberactive");
      styletitle5.push("steptittleactive");
      styletitlemobile5.push("showstepmobiletittle");
    }
    return (
      <div className="Step-Counter">
        <p className="pasos">Paso{step}</p>

        <div className="stepscontainer">
          <div className="stepsmobiletittlecontainer">
            {/* Muestra los títulos de los pasos en dispositivos móviles */}
            <h3 className={styletitlemobile1.join("")}></h3>
            <h3 className={styletitlemobile2.join(" ")}>
              {/*aplica clase css dinámicamente a un elemento en función del estado actual de la aplicación.  */}
              Identification Information
            </h3>
            <h3 className={styletitlemobile3.join(" ")}>Employ Information</h3>
            <h3 className={styletitlemobile4.join(" ")}>Other Information</h3>
            <h3 className={styletitlemobile5.join(" ")}>Loan Parameters</h3>
          </div>
          {/* Muestra los pasos en una barra de progreso en dispositivos de escritorio */}
          <div className="stepsdesktopcontainer">
            <div className="step">
              <span className={stylenumber1.join(" ")}>1</span>
              <h3 className={styletitle1.join(" ")}>Datos Generales</h3>
            </div>
            <div className="step">
              <span className={stylenumber2.join(" ")}>2</span>
              <h3 className={styletitle2.join(" ")}>Mapa y Ubicaciòn</h3>
            </div>
            <div className="step">
              <span className={stylenumber3.join(" ")}>3</span>
              <h3 className={styletitle3.join(" ")}>Fotos y Videos</h3>
            </div>
            <div className="step">
              <span className={stylenumber4.join(" ")}>4</span>
              <h3 className={styletitle4.join(" ")}>Terminos y Condiciones</h3>
            </div>
            <div className="step">
              <span className={stylenumber5.join(" ")}>5</span>
              <h3 className={styletitle5.join(" ")}>Finalizado</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const values = {
    //estados
    step,
    step1Data,
    step2Data,
    step3Data,
    stepCounter,

    //metodos
    prevStep,
    nextStep,
    restar,
    stepsCounter,
    setStep1Data,
    setStep2Data,
    setStep3Data,
    setStepCounterData,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};
