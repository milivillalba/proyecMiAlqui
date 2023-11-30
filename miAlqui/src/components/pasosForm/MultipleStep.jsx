import React from "react";
import { useFormContext } from "../../context/FormContext";
import { Step1 } from "../../components/pasosForm/step1";
import { Step2 } from "../../components/pasosForm/step2";
import { Step3 } from "../../components/pasosForm/step3";
import { Step4 } from "./step4Fin";
export const MultipleStep = () => {
  const { step } = useFormContext();

  switch (
    step // renderizar diferentes pasos o secciones de un formulario en función del valor de la variable step
  ) {
    case 1: //Este caso se activa cuando step es igual a 1.
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4/>;
    default:
      return null;
  }
};
