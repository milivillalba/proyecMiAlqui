import React from "react";
import { useFormContext } from "../../context/FormContext";

export const StepCounter = () => {
  const {  stepsCounter } = useFormContext();

  return (
    <>
      {stepsCounter()}

    </>
  );
};
