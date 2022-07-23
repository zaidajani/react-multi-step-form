import { useState, useContext, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [cUsername, setCUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [rPhone, setRPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rPassword, setRPassword] = useState('');

  return (
    <FormContext.Provider 
      value={{
        username,
        cUsername,
        phone,
        rPhone,
        password,
        rPassword,
        setUsername,
        setCUsername,
        setPhone,
        setRPhone,
        setPassword,
        setRPassword
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormContext;