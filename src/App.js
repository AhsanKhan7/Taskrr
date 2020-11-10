import { useState } from "react";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/Add/Add";
import Card from "./components/Card/Card";
import ModalUp from "./components/Modal/ModalUp";

function App() {
  const [cards, setCards] = useState([
    {
      taskName: "Board 1",
      name: "monday",
      description: "run",
      id: 1,
    },
    {
      taskName: "Board 2",
      name: "friday",
      description: "sleep",
      id: 2,
    },
  ]);

  const [value, setvalue] = useState();
  const [showInput, setInput] = useState(false);

  const toggle = () => setInput(false);

  const handleClick = () => {
    setCards([...cards, { taskName: value, id: Math.random() }]);
    setInput(false);
    setvalue();
  };

  const addColumn = () => {
    setInput(true);
  };

  const deleteCard = (id) => setCards(cards.filter((item) => item.id !== id));

  return (
    <div className="App">
      <h3>taskr.</h3>
      <h1>Welcome to Taskrrrr.</h1>

      {showInput ? (
        <ModalUp
          setInput={setInput}
          setvalue={setvalue}
          toggle={toggle}
          value={value}
          handleClick={handleClick}
        />
      ) : null}

      <div style={{ display: "flex" }}>
        <div>
          {cards.map((card) => (
            <Card
              item={card.taskName}
              task={card.task}
              description={card.description}
              deleteCard={deleteCard}
              id={card.id}
              value={value}
            />
          ))}
        </div>
        <div>
          <Add addColumn={addColumn} />
        </div>
      </div>
    </div>
  );
}

export default App;
