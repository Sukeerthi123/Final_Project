import React, { useContext, useState } from "react";

const FormContext = React.createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone:"",
    date: "",
    time: "",
    guests: 1,
    occasion: false,
  });

  const setFormHandler = (data) => {
    setForm(data);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        setForm: setFormHandler,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;

export const useFormContext = () => useContext(FormContext);
