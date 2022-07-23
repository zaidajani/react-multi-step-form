import React, { useContext } from "react";
import FormContext from "../formContext/form.context";

export const Pg2 = () => {
  const {
    phone,
    setPhone,
    rPhone,
    setRPhone
  } = useContext(FormContext);

  return (
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Phone
        </label>
        <input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Repeat phone
        </label>
        <input
          value={rPhone}
          onChange={(e) => {
            setRPhone(e.target.value);
          }}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};
