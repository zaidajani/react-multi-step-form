import "./App.css";
import React, { useState } from "react";
import { Pg1 } from "./form/pg1.form";
import { Pg2 } from "./form/pg2.form";
import { Pg3 } from "./form/Pg3.form";

function App() {
  const [pgNo, setPgNo] = useState(1);

  return (
    <div className="container">
      <center className="mt-4">
        <h3>Multi step login</h3>
      </center>
      <div>
        {pgNo == 1 ? <Pg1 /> : pgNo == 2 ? <Pg2 /> : <Pg3 />}
        <center>
          {pgNo > 1 && (
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                let pg = pgNo;
                setPgNo(pg - 1);
              }}
            >
              Back
            </button>
          )}
          {pgNo < 3 && (
            <button
              className="btn btn-primary mx-4"
              type="button"
              onClick={() => {
                let pg = pgNo;
                setPgNo(pg + 1);
              }}
            >
              Next
            </button>
          )}
        </center>
      </div>
    </div>
  );
}

export default App;
