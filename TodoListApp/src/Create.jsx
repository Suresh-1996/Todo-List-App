import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setValue] = useState();

  const haddleHead = () => {
    {
      task.trim().length == 0 || task == null || task == ""
        ? alert("Name must be filled out")
        : axios
            .post("http://localhost:3001/add", { task: task })
            .then(location.reload())
            .catch((err) => console.log(Error));
    }
  };

  return (
    <div className="createC">
      <input
        className="create-input"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button className="create-btn" onClick={haddleHead}>
        ADD
      </button>
    </div>
  );
}

export default Create;
