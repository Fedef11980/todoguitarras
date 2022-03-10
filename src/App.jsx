import "./App.css";
import ItemCounter from "./Components/ItemCounter";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  const title = "Todo Guitarras";

  return (
    <div>
      <ItemListContainer titulo={title} />
      <NavBar />
      <ItemCounter />
    </div>
  );
}

export default App;
