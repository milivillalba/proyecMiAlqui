import { useState } from "react";

export const useForm = (initialState) => {
  const [stepForm, setStepForm] = useState(initialState);

  const reset = () => {
    setStepForm(initialState);
  };

  const handleInputChange = ({ target }) => {
    setStepForm({
      ...stepForm,
      [target.name]: target.value,
    });
  };

  return { stepForm, handleInputChange, reset };
};
