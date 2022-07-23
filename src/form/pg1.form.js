import React, { useContext } from "react";
import FormContext from "../formContext/form.context";

export const Pg1 = () => {
  const {
    username,
    setUsername,
    cUsername,
    setCUsername
  } = useContext(FormContext);

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Confirm username
        </label>
        <input
          type="text"
          value={cUsername}
          onChange={(e) => {
            setCUsername(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};
