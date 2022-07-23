import React, { useContext } from "react";
import FormContext from "../formContext/form.context";

export const Pg3 = () => {
  const {
    password,
    setPassword,
    rPassword,
    setRPassword
  } = useContext(FormContext);

  return (
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Password
        </label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Repeat password
        </label>
        <input
          type="text"
          value={rPassword}
          onChange={(e) => {
            setRPassword(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};
