import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {
  Bs0CircleFill,
  BsCheckCircleFill,
  BsCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

function Home() {
  const [todos, setValue] = useState([false]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setValue(result.data))
      .catch((err) => console.log(Error));
  }, []);

  const HaddleEdite = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then(location.reload())
      .catch((err) => console.log(Error));
  };

  const HaddleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then(location.reload())
      .catch((err) => console.log(Error));
  };

  return (
    <div className="home">
      <h3>Simple Todo List App</h3>
      <Create />

      {todos.length == 0 ? (
        <div>No</div>
      ) : (
        todos.map((todo) => (
          <div className="task">
            <div className="checkbox" onClick={() => HaddleEdite(todo._id)}>
              {todo.done ? (
                <BsCheckCircleFill className="icon2" />
              ) : (
                <BsCircleFill className="icon" />
              )}

              <p className={todo.done ? "line_though" : ""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill onClick={() => HaddleDelete(todo._id)} />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
