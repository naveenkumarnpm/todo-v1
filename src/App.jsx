import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <div className="item-container">
        <AddTodo></AddTodo>
        <Item1></Item1>
        <Item2></Item2>
      </div>
    </center>
  );
}

export default App;
