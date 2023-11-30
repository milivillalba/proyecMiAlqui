import React from "react";
import { FormProvider } from "../../context/FormContext";
import { MultipleStep } from "../../components/pasosForm/MultipleStep";
import "./form.css";
import { Header } from "../../components/header/header";


export const FormAlqui = () => {
  return (
    <FormProvider>
      <div className="form-container">
        <Header />
        <MultipleStep />
       
      </div>
    </FormProvider>
  );
};
