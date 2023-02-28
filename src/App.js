import "./App.css";
import { useState } from "react";

function App() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
            setTodo("");
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj, i) => {
          return (
            <div className="todo" key={i}>
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.value);
                    console.log(obj);
                    setTodos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() =>
                    setTodos(
                      toDos.filter((obj2) => {
                        if (obj2.id !== obj.id) {
                          return obj2;
                        }
                      })
                    )
                  }
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}

        {toDos.map((obj, i) => {
          if (obj.status) {
            return <h1 key={i}>{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
